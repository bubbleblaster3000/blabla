const fs = require('fs');
const path = require('path');

const fragenDir = '/Users/julian/blabla/CODING_PLAN/fragen';

// Problemkategorien
const problems = {
    duplicateOptions: [],
    emptyOptions: [],
    invalidCorrectAnswer: [],
    allCorrectOrNone: [],
    veryLongQuestion: [],
    veryLongOption: [],
    missingOptions: [],
    allCorrectAnswers: [],
    specialCharIssues: [],
    formulaIssues: [],
    duplicateQuestions: [],
    ambiguousWording: [],
    missingQuestionMark: [],
    numberFormatIssues: [],
    singleAnswerForMultipleChoice: [],
};

const allQuestions = [];

function parseMarkdownFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const questions = [];
    
    let currentQuestion = null;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Format: ## Frage X
        if (line.startsWith('## Frage')) {
            if (currentQuestion && currentQuestion.text) {
                questions.push(currentQuestion);
            }
            const match = line.match(/Frage (\d+)/);
            currentQuestion = {
                number: match ? match[1] : '?',
                text: '',
                options: ['', '', '', ''],
                correctAnswer: '',
                lineNumber: i + 1
            };
        } 
        // Format: **Fragetext?** (nächste Zeile nach ## Frage)
        else if (currentQuestion && line.startsWith('**') && !line.startsWith('**Richtige')) {
            currentQuestion.text = line.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
        }
        // Format: - [ ] A. Text oder - [x] A. Text
        else if (currentQuestion && line.match(/^- \[[ x]\] [A-D]\./)) {
            const optionMatch = line.match(/^- \[[ x]\] ([A-D])\. (.*)$/);
            if (optionMatch) {
                const letter = optionMatch[1];
                const text = optionMatch[2].trim();
                const idx = 'ABCD'.indexOf(letter);
                if (idx >= 0) {
                    currentQuestion.options[idx] = text;
                }
            }
        }
        // Format: **Richtige Antworten:** A oder **Richtige Antworten:** A, B, C
        else if (currentQuestion && line.startsWith('**Richtige Antwort')) {
            const answerMatch = line.match(/\*\*Richtige Antwort(?:en)?:\*\* (.+)$/);
            if (answerMatch) {
                currentQuestion.correctAnswer = answerMatch[1].trim();
            }
        }
    }
    
    if (currentQuestion && currentQuestion.text) {
        questions.push(currentQuestion);
    }
    
    return questions;
}

function checkQuestion(question, filePath) {
    const relPath = path.relative(fragenDir, filePath);
    const location = `${relPath} - Frage ${question.number}`;
    
    // 1. Doppelte Optionen (case-sensitive für chemische Formeln!)
    const validOptions = question.options.filter(o => o && o.trim());
    // Nicht toLowerCase() verwenden, da M ≠ m in Chemie (Molar vs Masse)
    const normalizedOptions = validOptions.map(o => o.trim().replace(/[.,;:!?]$/, ''));
    const optionSet = new Set(normalizedOptions);
    if (optionSet.size < validOptions.length && validOptions.length > 0) {
        const duplicates = normalizedOptions.filter((o, i) => normalizedOptions.indexOf(o) !== i);
        problems.duplicateOptions.push({
            location,
            detail: `Doppelt: "${duplicates[0]}"`
        });
    }
    
    // 2. Leere Optionen
    question.options.forEach((opt, idx) => {
        if (!opt || opt.trim() === '') {
            problems.emptyOptions.push({
                location,
                detail: `Option ${['A', 'B', 'C', 'D'][idx]} ist leer`
            });
        }
    });
    
    // 3. Ungültige korrekte Antwort
    const validAnswers = [
        'A', 'B', 'C', 'D', 
        'A, B', 'A, C', 'A, D', 'B, C', 'B, D', 'C, D', 
        'A, B, C', 'A, B, D', 'A, C, D', 'B, C, D', 
        'A, B, C, D'
    ];
    if (!validAnswers.includes(question.correctAnswer)) {
        problems.invalidCorrectAnswer.push({
            location,
            detail: `Antwort: "${question.correctAnswer}"`
        });
    }
    
    // 4. "Alle genannten" oder "Keine der genannten"
    const problematicPhrases = [
        'alle genannten', 'alle oben genannten', 'alle aufgeführten',
        'keine der genannten', 'keine der oben', 'keine davon',
        'sowohl a als auch', 'a und b sind', 'b und c sind', 'c und d sind',
        'alle antworten', 'keine antwort', 'alle optionen',
        'a und b korrekt', 'b und c korrekt', 'a, b und c'
    ];
    question.options.forEach((opt, idx) => {
        if (!opt) return;
        const lowerOpt = opt.toLowerCase();
        for (const phrase of problematicPhrases) {
            if (lowerOpt.includes(phrase)) {
                problems.allCorrectOrNone.push({
                    location,
                    detail: `Option ${['A', 'B', 'C', 'D'][idx]}: "${opt}"`
                });
                break;
            }
        }
    });
    
    // 5. Sehr lange Fragen
    if (question.text.length > 400) {
        problems.veryLongQuestion.push({
            location,
            detail: `${question.text.length} Zeichen: "${question.text.substring(0, 80)}..."`
        });
    }
    
    // 6. Sehr lange Optionen
    question.options.forEach((opt, idx) => {
        if (opt && opt.length > 150) {
            problems.veryLongOption.push({
                location,
                detail: `Option ${['A', 'B', 'C', 'D'][idx]} (${opt.length} Zeichen): "${opt.substring(0, 60)}..."`
            });
        }
    });
    
    // 7. Weniger als 4 Optionen
    const filledOptions = question.options.filter(o => o && o.trim()).length;
    if (filledOptions < 4) {
        problems.missingOptions.push({
            location,
            detail: `Nur ${filledOptions} Optionen vorhanden`
        });
    }
    
    // 8. Alle 4 Optionen korrekt
    if (question.correctAnswer === 'A, B, C, D') {
        problems.allCorrectAnswers.push({
            location,
            detail: `Alle Optionen sind korrekt - macht das Sinn?`
        });
    }
    
    // 9. Problematische Sonderzeichen (die HTML-Rendering stören könnten)
    const fullText = question.text + ' ' + question.options.join(' ');
    const badChars = fullText.match(/[<>{}]/g);
    if (badChars) {
        problems.specialCharIssues.push({
            location,
            detail: `Enthält: ${[...new Set(badChars)].join(', ')}`
        });
    }
    
    // 10. Formel-Probleme (ungepaarte Klammern)
    const openParen = (fullText.match(/\(/g) || []).length;
    const closeParen = (fullText.match(/\)/g) || []).length;
    const openBracket = (fullText.match(/\[/g) || []).length;
    const closeBracket = (fullText.match(/\]/g) || []).length;
    if (openParen !== closeParen || openBracket !== closeBracket) {
        problems.formulaIssues.push({
            location,
            detail: `Ungepaart: () ${openParen}/${closeParen}, [] ${openBracket}/${closeBracket}`
        });
    }
    
    // 11. Mehrdeutige Formulierungen in der Frage
    const ambiguousPhrases = ['könnte sein', 'möglicherweise', 'eventuell', 'vielleicht', 'manchmal', 'in der regel'];
    const lowerText = question.text.toLowerCase();
    for (const phrase of ambiguousPhrases) {
        if (lowerText.includes(phrase)) {
            problems.ambiguousWording.push({
                location,
                detail: `Frage enthält "${phrase}"`
            });
            break;
        }
    }
    
    // 12. Fragen die wie Fragen aussehen, aber kein Fragezeichen haben
    const questionWords = ['was ', 'wie ', 'welch', 'wer ', 'warum', 'wann ', 'wo ', 'wozu', 'weshalb', 'wieso', 'worin', 'wodurch'];
    const startsWithQuestion = questionWords.some(w => question.text.toLowerCase().startsWith(w));
    if (startsWithQuestion && !question.text.includes('?')) {
        problems.missingQuestionMark.push({
            location,
            detail: `"${question.text.substring(0, 80)}..."`
        });
    }
    
    // 13. Inkonsistente Zahlenformate (Komma vs Punkt als Dezimaltrenner)
    const hasCommaDecimal = /\d+,\d+/.test(fullText);
    const hasDotDecimal = /\d+\.\d+/.test(fullText);
    if (hasCommaDecimal && hasDotDecimal) {
        problems.numberFormatIssues.push({
            location,
            detail: `Mischt Komma und Punkt als Dezimaltrenner`
        });
    }
    
    // 14. Nur eine richtige Antwort, aber es sieht nach Multi-Choice aus
    // (wenn im Fragentext "welche" im Plural steht)
    const pluralIndicators = ['welche aussagen', 'welche eigenschaften', 'welche der folgenden'];
    const hasPluralIndicator = pluralIndicators.some(p => question.text.toLowerCase().includes(p));
    const singleAnswer = !question.correctAnswer.includes(',');
    if (hasPluralIndicator && singleAnswer) {
        problems.singleAnswerForMultipleChoice.push({
            location,
            detail: `Frage fragt nach mehreren, aber nur Antwort "${question.correctAnswer}"`
        });
    }
    
    // Für Duplikat-Check
    allQuestions.push({
        text: question.text.toLowerCase().trim(),
        location
    });
}

function findDuplicateQuestions() {
    for (let i = 0; i < allQuestions.length; i++) {
        for (let j = i + 1; j < allQuestions.length; j++) {
            const q1 = allQuestions[i].text;
            const q2 = allQuestions[j].text;
            
            if (q1 === q2) {
                problems.duplicateQuestions.push({
                    location: allQuestions[i].location,
                    detail: `Identisch mit ${allQuestions[j].location}`
                });
            } else if (q1.length > 60 && q2.length > 60 && q1.substring(0, 60) === q2.substring(0, 60)) {
                problems.duplicateQuestions.push({
                    location: allQuestions[i].location,
                    detail: `Sehr ähnlich zu ${allQuestions[j].location}`
                });
            }
        }
    }
}

// MAIN
console.log('Starte Analyse...\n');

const chapters = fs.readdirSync(fragenDir).filter(f => {
    const fullPath = path.join(fragenDir, f);
    return fs.statSync(fullPath).isDirectory() && /^\d+_/.test(f);
});

console.log(`Gefundene Kapitel: ${chapters.length}`);

let totalQuestions = 0;

chapters.forEach(chapter => {
    const chapterPath = path.join(fragenDir, chapter);
    const files = fs.readdirSync(chapterPath).filter(f => f.endsWith('.md') && f.startsWith('chemie-level'));
    
    files.forEach(file => {
        const filePath = path.join(chapterPath, file);
        const questions = parseMarkdownFile(filePath);
        
        questions.forEach(q => {
            checkQuestion(q, filePath);
            totalQuestions++;
        });
    });
});

console.log(`Analysierte Fragen: ${totalQuestions}\n`);

findDuplicateQuestions();

console.log('═══════════════════════════════════════════════════════════════');
console.log('           ANALYSE ALLER FRAGEN - POTENTIELLE PROBLEME');
console.log('═══════════════════════════════════════════════════════════════');

const categories = [
    { key: 'duplicateOptions', name: '🔴 Doppelte Antwortoptionen', severity: 'KRITISCH' },
    { key: 'emptyOptions', name: '🔴 Leere Optionen', severity: 'KRITISCH' },
    { key: 'invalidCorrectAnswer', name: '🔴 Ungültige korrekte Antwort', severity: 'KRITISCH' },
    { key: 'missingOptions', name: '🔴 Fehlende Optionen (<4)', severity: 'KRITISCH' },
    { key: 'allCorrectOrNone', name: '🟠 "Alle/Keine genannten" Phrasen', severity: 'HOCH' },
    { key: 'allCorrectAnswers', name: '🟠 Alle 4 Optionen korrekt', severity: 'MITTEL' },
    { key: 'singleAnswerForMultipleChoice', name: '🟠 Singular-Antwort bei Plural-Frage', severity: 'MITTEL' },
    { key: 'duplicateQuestions', name: '🟡 Doppelte/ähnliche Fragen', severity: 'MITTEL' },
    { key: 'formulaIssues', name: '🟡 Ungepaarte Klammern', severity: 'NIEDRIG' },
    { key: 'specialCharIssues', name: '🟡 Problematische Sonderzeichen', severity: 'NIEDRIG' },
    { key: 'veryLongQuestion', name: '⚪ Sehr lange Fragen (>400 Zeichen)', severity: 'INFO' },
    { key: 'veryLongOption', name: '⚪ Sehr lange Optionen (>150 Zeichen)', severity: 'INFO' },
    { key: 'ambiguousWording', name: '⚪ Mehrdeutige Formulierungen', severity: 'INFO' },
    { key: 'missingQuestionMark', name: '⚪ Fehlendes Fragezeichen', severity: 'INFO' },
    { key: 'numberFormatIssues', name: '⚪ Inkonsistente Zahlenformate', severity: 'INFO' },
];

let totalProblems = 0;
let criticalCount = 0;

categories.forEach(cat => {
    const items = problems[cat.key];
    if (items.length > 0) {
        console.log(`\n${cat.name} (${cat.severity}): ${items.length}`);
        console.log('─'.repeat(60));
        items.slice(0, 20).forEach(item => {
            console.log(`  • ${item.location}`);
            console.log(`    → ${item.detail}`);
        });
        if (items.length > 20) {
            console.log(`  ... und ${items.length - 20} weitere`);
        }
        totalProblems += items.length;
        
        if (cat.severity === 'KRITISCH') {
            criticalCount += items.length;
        }
    }
});

console.log('\n═══════════════════════════════════════════════════════════════');
console.log(`ZUSAMMENFASSUNG: ${totalProblems} potentielle Probleme gefunden`);
console.log('═══════════════════════════════════════════════════════════════');

if (criticalCount > 0) {
    console.log(`\n⚠️  KRITISCHE PROBLEME: ${criticalCount} (müssen behoben werden!)`);
} else {
    console.log('\n✅ Keine kritischen Probleme gefunden!');
}

// Details zu mittleren/hohen Problemen
const highCount = problems.allCorrectOrNone.length + problems.allCorrectAnswers.length + 
                  problems.singleAnswerForMultipleChoice.length + problems.duplicateQuestions.length;
if (highCount > 0) {
    console.log(`\n⚠️  HOHE/MITTLERE PROBLEME: ${highCount} (sollten geprüft werden)`);
}
