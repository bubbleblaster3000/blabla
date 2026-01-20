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
};

const allQuestions = [];

function parseMarkdownFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const questions = [];
    
    let currentQuestion = null;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.startsWith('### Frage')) {
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
        } else if (line.startsWith('**Frage:**') && currentQuestion) {
            currentQuestion.text = line.replace('**Frage:**', '').trim();
        } else if (currentQuestion) {
            if (line.startsWith('- A)')) {
                currentQuestion.options[0] = line.replace('- A)', '').trim();
            } else if (line.startsWith('- B)')) {
                currentQuestion.options[1] = line.replace('- B)', '').trim();
            } else if (line.startsWith('- C)')) {
                currentQuestion.options[2] = line.replace('- C)', '').trim();
            } else if (line.startsWith('- D)')) {
                currentQuestion.options[3] = line.replace('- D)', '').trim();
            } else if (line.startsWith('**Korrekte Antwort:**')) {
                currentQuestion.correctAnswer = line.replace('**Korrekte Antwort:**', '').trim();
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
    
    // 1. Doppelte Optionen
    const validOptions = question.options.filter(o => o && o.trim());
    const optionSet = new Set(validOptions.map(o => o.toLowerCase().trim()));
    if (optionSet.size < validOptions.length && validOptions.length > 0) {
        problems.duplicateOptions.push({
            location,
            detail: `Optionen: ${question.options.join(' | ')}`
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
    const validAnswers = ['A', 'B', 'C', 'D', 'A, B', 'A, C', 'A, D', 'B, C', 'B, D', 'C, D', 
                          'A, B, C', 'A, B, D', 'A, C, D', 'B, C, D', 'A, B, C, D'];
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
        'sowohl a als auch', 'a und b', 'b und c', 'c und d',
        'alle antworten', 'keine antwort', 'alle optionen'
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
    if (question.text.length > 500) {
        problems.veryLongQuestion.push({
            location,
            detail: `${question.text.length} Zeichen`
        });
    }
    
    // 6. Sehr lange Optionen
    question.options.forEach((opt, idx) => {
        if (opt && opt.length > 200) {
            problems.veryLongOption.push({
                location,
                detail: `Option ${['A', 'B', 'C', 'D'][idx]} (${opt.length} Zeichen)`
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
            detail: `Alle Optionen sind korrekt`
        });
    }
    
    // 9. Problematische Sonderzeichen
    const fullText = question.text + ' ' + question.options.join(' ');
    if (/[<>{}\\`]/.test(fullText)) {
        problems.specialCharIssues.push({
            location,
            detail: `Enthält: ${fullText.match(/[<>{}\\`]/g).join(', ')}`
        });
    }
    
    // 10. Formel-Probleme (ungepaarte Klammern)
    const openParen = (fullText.match(/\(/g) || []).length;
    const closeParen = (fullText.match(/\)/g) || []).length;
    if (openParen !== closeParen) {
        problems.formulaIssues.push({
            location,
            detail: `Ungepaarte Klammern: ${openParen} ( vs ${closeParen} )`
        });
    }
    
    // 11. Mehrdeutige Formulierungen
    const ambiguousPhrases = ['könnte sein', 'möglicherweise', 'eventuell', 'vielleicht', 'manchmal'];
    const lowerText = question.text.toLowerCase();
    for (const phrase of ambiguousPhrases) {
        if (lowerText.includes(phrase)) {
            problems.ambiguousWording.push({
                location,
                detail: `Enthält "${phrase}"`
            });
            break;
        }
    }
    
    // 12. Fragen ohne Fragezeichen
    const questionWords = ['was ', 'wie ', 'welch', 'wer ', 'warum', 'wann ', 'wo ', 'wozu', 'weshalb', 'wieso'];
    const startsWithQuestion = questionWords.some(w => question.text.toLowerCase().startsWith(w));
    if (startsWithQuestion && !question.text.includes('?')) {
        problems.missingQuestionMark.push({
            location,
            detail: `"${question.text.substring(0, 60)}..."`
        });
    }
    
    // 13. Inkonsistente Zahlenformate
    if (/\d+,\d+/.test(fullText) && /\d+\.\d+/.test(fullText)) {
        problems.numberFormatIssues.push({
            location,
            detail: `Mischt Komma und Punkt`
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
            } else if (q1.length > 50 && q2.length > 50 && q1.substring(0, 50) === q2.substring(0, 50)) {
                problems.duplicateQuestions.push({
                    location: allQuestions[i].location,
                    detail: `Sehr ähnlich zu ${allQuestions[j].location}`
                });
            }
        }
    }
}

// MAIN
console.log('Starte Analyse...');

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

findDuplicateQuestions();

console.log('\n═══════════════════════════════════════════════════════════════');
console.log('           ANALYSE ALLER FRAGEN - POTENTIELLE PROBLEME');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`\nAnalysierte Fragen: ${totalQuestions}\n`);

const categories = [
    { key: 'duplicateOptions', name: '🔴 Doppelte Antwortoptionen', severity: 'KRITISCH' },
    { key: 'emptyOptions', name: '🔴 Leere Optionen', severity: 'KRITISCH' },
    { key: 'invalidCorrectAnswer', name: '🔴 Ungültige korrekte Antwort', severity: 'KRITISCH' },
    { key: 'missingOptions', name: '🔴 Fehlende Optionen (<4)', severity: 'KRITISCH' },
    { key: 'allCorrectOrNone', name: '🟠 "Alle/Keine genannten" Phrasen', severity: 'HOCH' },
    { key: 'allCorrectAnswers', name: '🟠 Alle 4 Optionen korrekt', severity: 'HOCH' },
    { key: 'duplicateQuestions', name: '🟠 Doppelte/ähnliche Fragen', severity: 'MITTEL' },
    { key: 'formulaIssues', name: '🟡 Potentielle Formel-Probleme', severity: 'NIEDRIG' },
    { key: 'specialCharIssues', name: '🟡 Problematische Sonderzeichen', severity: 'NIEDRIG' },
    { key: 'veryLongQuestion', name: '🟡 Sehr lange Fragen (>500 Zeichen)', severity: 'INFO' },
    { key: 'veryLongOption', name: '🟡 Sehr lange Optionen (>200 Zeichen)', severity: 'INFO' },
    { key: 'ambiguousWording', name: '🟡 Mehrdeutige Formulierungen', severity: 'INFO' },
    { key: 'missingQuestionMark', name: '⚪ Fehlendes Fragezeichen', severity: 'INFO' },
    { key: 'numberFormatIssues', name: '⚪ Inkonsistente Zahlenformate', severity: 'INFO' },
];

let totalProblems = 0;

categories.forEach(cat => {
    const items = problems[cat.key];
    if (items.length > 0) {
        console.log(`\n${cat.name} (${cat.severity}): ${items.length}`);
        console.log('─'.repeat(60));
        items.slice(0, 15).forEach(item => {
            console.log(`  • ${item.location}`);
            console.log(`    → ${item.detail}`);
        });
        if (items.length > 15) {
            console.log(`  ... und ${items.length - 15} weitere`);
        }
        totalProblems += items.length;
    }
});

console.log('\n═══════════════════════════════════════════════════════════════');
console.log(`ZUSAMMENFASSUNG: ${totalProblems} potentielle Probleme gefunden`);
console.log('═══════════════════════════════════════════════════════════════');

const criticalCount = problems.duplicateOptions.length + 
                      problems.emptyOptions.length + 
                      problems.invalidCorrectAnswer.length +
                      problems.missingOptions.length;

if (criticalCount > 0) {
    console.log(`\n⚠️  KRITISCHE PROBLEME: ${criticalCount} (müssen behoben werden!)`);
} else {
    console.log('\n✅ Keine kritischen Probleme gefunden!');
}
