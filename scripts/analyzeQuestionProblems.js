const fs = require('fs');
const path = require('path');

// Korrekter Pfad zum Workspace
const workspaceRoot = '/Users/julian/blabla';
const fragenDir = path.join(workspaceRoot, 'CODING_PLAN', 'fragen');

// Problemkategorien
const problems = {
    duplicateOptions: [],           // Doppelte Antwortoptionen
    emptyOptions: [],               // Leere Optionen
    invalidCorrectAnswer: [],       // Ungültige korrekte Antwort
    allCorrectOrNone: [],           // "Alle genannten" oder "Keine der genannten"
    veryLongQuestion: [],           // Sehr lange Fragen (>500 Zeichen)
    veryLongOption: [],             // Sehr lange Optionen (>200 Zeichen)
    missingOptions: [],             // Weniger als 4 Optionen
    singleCorrectInMultiple: [],    // Nur eine korrekte Antwort aber mehrere möglich
    allCorrectAnswers: [],          // Alle 4 Optionen sind korrekt
    specialCharIssues: [],          // Problematische Sonderzeichen
    formulaIssues: [],              // Potentielle Formel-Darstellungsprobleme
    duplicateQuestions: [],         // Ähnliche/gleiche Fragen
    ambiguousWording: [],           // Mehrdeutige Formulierungen
    missingQuestionMark: [],        // Fragen ohne Fragezeichen
    numberFormatIssues: [],         // Inkonsistente Zahlenformate
};

// Alle Fragen sammeln für Duplikat-Erkennung
const allQuestions = [];

function parseMarkdownFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const questions = [];
    
    let currentQuestion = null;
    let inQuestion = false;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.startsWith('### Frage')) {
            if (currentQuestion) {
                questions.push(currentQuestion);
            }
            currentQuestion = {
                number: line.match(/Frage (\d+)/)?.[1],
                text: '',
                options: [],
                correctAnswer: '',
                lineNumber: i + 1
            };
            inQuestion = true;
        } else if (line.startsWith('**Frage:**') && currentQuestion) {
            currentQuestion.text = line.replace('**Frage:**', '').trim();
        } else if (line.startsWith('- A)') && currentQuestion) {
            currentQuestion.options[0] = line.replace('- A)', '').trim();
        } else if (line.startsWith('- B)') && currentQuestion) {
            currentQuestion.options[1] = line.replace('- B)', '').trim();
        } else if (line.startsWith('- C)') && currentQuestion) {
            currentQuestion.options[2] = line.replace('- C)', '').trim();
        } else if (line.startsWith('- D)') && currentQuestion) {
            currentQuestion.options[3] = line.replace('- D)', '').trim();
        } else if (line.startsWith('**Korrekte Antwort:**') && currentQuestion) {
            currentQuestion.correctAnswer = line.replace('**Korrekte Antwort:**', '').trim();
        }
    }
    
    if (currentQuestion) {
        questions.push(currentQuestion);
    }
    
    return questions;
}

function checkQuestion(question, filePath, chapterName, level) {
    const relPath = path.relative(fragenDir, filePath);
    const location = `${relPath} - Frage ${question.number}`;
    
    // 1. Doppelte Optionen
    const optionSet = new Set(question.options.map(o => o.toLowerCase().trim()));
    if (optionSet.size < question.options.length) {
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
    
    // 4. "Alle genannten" oder "Keine der genannten" Varianten
    const problematicPhrases = [
        'alle genannten', 'alle oben genannten', 'alle aufgeführten',
        'keine der genannten', 'keine der oben', 'keine davon',
        'sowohl a als auch', 'a und b', 'b und c', 'c und d',
        'alle antworten', 'keine antwort'
    ];
    question.options.forEach((opt, idx) => {
        const lowerOpt = opt.toLowerCase();
        problematicPhrases.forEach(phrase => {
            if (lowerOpt.includes(phrase)) {
                problems.allCorrectOrNone.push({
                    location,
                    detail: `Option ${['A', 'B', 'C', 'D'][idx]}: "${opt}"`
                });
            }
        });
    });
    
    // 5. Sehr lange Fragen
    if (question.text.length > 500) {
        problems.veryLongQuestion.push({
            location,
            detail: `${question.text.length} Zeichen: "${question.text.substring(0, 100)}..."`
        });
    }
    
    // 6. Sehr lange Optionen
    question.options.forEach((opt, idx) => {
        if (opt.length > 200) {
            problems.veryLongOption.push({
                location,
                detail: `Option ${['A', 'B', 'C', 'D'][idx]} (${opt.length} Zeichen): "${opt.substring(0, 80)}..."`
            });
        }
    });
    
    // 7. Weniger als 4 Optionen
    if (question.options.filter(o => o && o.trim()).length < 4) {
        problems.missingOptions.push({
            location,
            detail: `Nur ${question.options.filter(o => o && o.trim()).length} Optionen vorhanden`
        });
    }
    
    // 8. Alle 4 Optionen korrekt
    if (question.correctAnswer === 'A, B, C, D') {
        problems.allCorrectAnswers.push({
            location,
            detail: `Alle Optionen sind korrekt - sinnvoll?`
        });
    }
    
    // 9. Problematische Sonderzeichen
    const problematicChars = /[<>{}\\`]/;
    if (problematicChars.test(question.text) || question.options.some(o => problematicChars.test(o))) {
        problems.specialCharIssues.push({
            location,
            detail: `Enthält potentiell problematische Zeichen`
        });
    }
    
    // 10. Formel-Darstellungsprobleme (ungepaarte Klammern, komplexe Subscripts)
    const formulaProblems = [];
    const fullText = question.text + ' ' + question.options.join(' ');
    
    // Ungepaarte Klammern
    const openParen = (fullText.match(/\(/g) || []).length;
    const closeParen = (fullText.match(/\)/g) || []).length;
    if (openParen !== closeParen) {
        formulaProblems.push('ungepaarte Klammern');
    }
    
    // Hochgestellte/tiefgestellte Zeichen die evtl. nicht richtig dargestellt werden
    if (/[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/.test(fullText)) {
        formulaProblems.push('Unicode Sub/Superscripts');
    }
    
    if (formulaProblems.length > 0) {
        problems.formulaIssues.push({
            location,
            detail: formulaProblems.join(', ')
        });
    }
    
    // 11. Mehrdeutige Formulierungen
    const ambiguousPhrases = [
        'könnte sein', 'möglicherweise', 'eventuell', 'vielleicht',
        'manchmal', 'unter umständen', 'in gewissen fällen'
    ];
    const lowerText = question.text.toLowerCase();
    ambiguousPhrases.forEach(phrase => {
        if (lowerText.includes(phrase)) {
            problems.ambiguousWording.push({
                location,
                detail: `Enthält "${phrase}"`
            });
        }
    });
    
    // 12. Fragen ohne Fragezeichen (wenn es eine echte Frage sein sollte)
    const questionIndicators = ['was ', 'wie ', 'welch', 'wer ', 'warum', 'wann ', 'wo ', 'wozu'];
    const hasQuestionWord = questionIndicators.some(w => question.text.toLowerCase().startsWith(w));
    if (hasQuestionWord && !question.text.includes('?')) {
        problems.missingQuestionMark.push({
            location,
            detail: `Fragetext: "${question.text.substring(0, 80)}..."`
        });
    }
    
    // 13. Inkonsistente Zahlenformate (Komma vs Punkt)
    if (/\d+,\d+/.test(fullText) && /\d+\.\d+/.test(fullText)) {
        problems.numberFormatIssues.push({
            location,
            detail: `Mischt Komma und Punkt als Dezimaltrenner`
        });
    }
    
    // Frage für Duplikat-Check speichern
    allQuestions.push({
        text: question.text.toLowerCase().trim(),
        location
    });
}

function findDuplicateQuestions() {
    // Ähnliche Fragen finden (gleicher Start oder sehr ähnlich)
    for (let i = 0; i < allQuestions.length; i++) {
        for (let j = i + 1; j < allQuestions.length; j++) {
            const q1 = allQuestions[i].text;
            const q2 = allQuestions[j].text;
            
            // Exakt gleich
            if (q1 === q2) {
                problems.duplicateQuestions.push({
                    location: allQuestions[i].location,
                    detail: `Identisch mit ${allQuestions[j].location}`
                });
            }
            // Sehr ähnlicher Start (erste 50 Zeichen gleich und länger als 50)
            else if (q1.length > 50 && q2.length > 50 && q1.substring(0, 50) === q2.substring(0, 50)) {
                problems.duplicateQuestions.push({
                    location: allQuestions[i].location,
                    detail: `Ähnlich zu ${allQuestions[j].location}`
                });
            }
        }
    }
}

// Hauptlogik
function analyzeAllQuestions() {
    const chapters = fs.readdirSync(fragenDir).filter(f => 
        fs.statSync(path.join(fragenDir, f)).isDirectory() && 
        f.match(/^\d+_/)
    );
    
    let totalQuestions = 0;
    
    chapters.forEach(chapter => {
        const chapterPath = path.join(fragenDir, chapter);
        const files = fs.readdirSync(chapterPath).filter(f => f.endsWith('.md') && f.startsWith('chemie-level'));
        
        files.forEach(file => {
            const filePath = path.join(chapterPath, file);
            const level = file.match(/level-(\d)/)?.[1];
            const questions = parseMarkdownFile(filePath);
            
            questions.forEach(q => {
                checkQuestion(q, filePath, chapter, level);
                totalQuestions++;
            });
        });
    });
    
    // Duplikate suchen
    findDuplicateQuestions();
    
    // Ergebnisse ausgeben
    console.log('═══════════════════════════════════════════════════════════════');
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
            items.slice(0, 10).forEach(item => {
                console.log(`  • ${item.location}`);
                console.log(`    ${item.detail}`);
            });
            if (items.length > 10) {
                console.log(`  ... und ${items.length - 10} weitere`);
            }
            totalProblems += items.length;
        }
    });
    
    console.log('\n═══════════════════════════════════════════════════════════════');
    console.log(`ZUSAMMENFASSUNG: ${totalProblems} potentielle Probleme gefunden`);
    console.log('═══════════════════════════════════════════════════════════════');
    
    // Kritische Probleme hervorheben
    const criticalCount = problems.duplicateOptions.length + 
                          problems.emptyOptions.length + 
                          problems.invalidCorrectAnswer.length +
                          problems.missingOptions.length;
    
    if (criticalCount > 0) {
        console.log(`\n⚠️  KRITISCHE PROBLEME: ${criticalCount} (müssen behoben werden!)`);
    } else {
        console.log('\n✅ Keine kritischen Probleme gefunden!');
    }
}

analyzeAllQuestions();
