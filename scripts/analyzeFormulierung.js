const fs = require('fs');
const path = require('path');

const fragenDir = '/Users/julian/blabla/CODING_PLAN/fragen';

// Problemkategorien
const problems = {
    correctLonger: [],           // Korrekte Antwort deutlich länger
    correctHasParentheses: [],   // Nur korrekte hat Klammern/Erklärungen
    correctMoreDetailed: [],     // Korrekte ist detaillierter
    obviousPatterns: [],         // Offensichtliche Muster
};

function parseMarkdownFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const questions = [];
    
    let currentQuestion = null;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
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
        else if (currentQuestion && line.startsWith('**') && !line.startsWith('**Richtige')) {
            currentQuestion.text = line.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
        }
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

function getCorrectIndices(correctAnswer) {
    return correctAnswer.split(',').map(a => 'ABCD'.indexOf(a.trim())).filter(i => i >= 0);
}

function getWrongIndices(correctAnswer) {
    const correct = getCorrectIndices(correctAnswer);
    return [0, 1, 2, 3].filter(i => !correct.includes(i));
}

function analyzeQuestion(question, filePath) {
    const relPath = path.relative(fragenDir, filePath);
    const location = `${relPath} - Frage ${question.number}`;
    
    const correctIndices = getCorrectIndices(question.correctAnswer);
    const wrongIndices = getWrongIndices(question.correctAnswer);
    
    if (correctIndices.length === 0 || wrongIndices.length === 0) return;
    
    const correctOptions = correctIndices.map(i => question.options[i]).filter(Boolean);
    const wrongOptions = wrongIndices.map(i => question.options[i]).filter(Boolean);
    
    if (correctOptions.length === 0 || wrongOptions.length === 0) return;
    
    // 1. LÄNGEN-ANALYSE
    const avgCorrectLen = correctOptions.reduce((sum, o) => sum + o.length, 0) / correctOptions.length;
    const avgWrongLen = wrongOptions.reduce((sum, o) => sum + o.length, 0) / wrongOptions.length;
    const lenRatio = avgCorrectLen / avgWrongLen;
    
    // Korrekte ist >50% länger als falsche
    if (lenRatio > 1.5 && avgCorrectLen > 30) {
        problems.correctLonger.push({
            location,
            detail: `Korrekt: Ø${Math.round(avgCorrectLen)} Zeichen | Falsch: Ø${Math.round(avgWrongLen)} Zeichen (${Math.round(lenRatio * 100 - 100)}% länger)`,
            options: question.options,
            correct: question.correctAnswer
        });
    }
    
    // 2. KLAMMER-ANALYSE (Erklärungen in Klammern)
    // Ignoriere kurze Klammern (chemische Symbole wie (S), (aq), Formeln wie (OH)₂)
    // Ignoriere chemische Notationen wie (n-1)d¹⁰, mathematische Formeln
    // Nur echte erklärende Klammern >= 15 Zeichen sind problematisch
    const explanatoryParenRegex = /\([^)]{15,}\)/;
    // Ausnahmen: Mathematik/Chemie-Notationen
    const isChemNotation = (text) => /\([^)]*[nd₂₃⁺⁻=×\-\/]+[^)]*\)/.test(text);
    
    const correctHasParens = correctOptions.some(o => 
        explanatoryParenRegex.test(o) && !isChemNotation(o)
    );
    const wrongHasParens = wrongOptions.some(o => 
        explanatoryParenRegex.test(o) && !isChemNotation(o)
    );
    
    if (correctHasParens && !wrongHasParens) {
        problems.correctHasParentheses.push({
            location,
            detail: `Nur korrekte Option(en) haben erklärende Klammern`,
            options: question.options,
            correct: question.correctAnswer
        });
    }
    
    // 3. DETAIL-ANALYSE (spezifische Wörter, die auf Details hinweisen)
    const detailIndicators = [
        'beispielsweise', 'z.B.', 'z. B.', 'zum Beispiel', 
        'das heißt', 'd.h.', 'd. h.',
        'also', 'somit', 'daher', 'deshalb',
        'genauer', 'spezifisch', 'konkret',
        'wie etwa', 'insbesondere'
    ];
    
    const correctHasDetails = correctOptions.some(o => 
        detailIndicators.some(ind => o.toLowerCase().includes(ind))
    );
    const wrongHasDetails = wrongOptions.some(o => 
        detailIndicators.some(ind => o.toLowerCase().includes(ind))
    );
    
    if (correctHasDetails && !wrongHasDetails) {
        problems.correctMoreDetailed.push({
            location,
            detail: `Korrekte Option enthält Detail-Indikatoren (z.B., also, etc.)`,
            options: question.options,
            correct: question.correctAnswer
        });
    }
    
    // 4. OFFENSICHTLICHE MUSTER
    // - "immer", "nie", "alle", "keine" in falschen Antworten (Extremwörter)
    const extremeWords = ['immer', 'nie', 'niemals', 'alle', 'keine', 'jeder', 'keiner', 'ausschließlich', 'nur'];
    const wrongHasExtreme = wrongOptions.some(o => 
        extremeWords.some(w => {
            const regex = new RegExp(`\\b${w}\\b`, 'i');
            return regex.test(o);
        })
    );
    const correctHasExtreme = correctOptions.some(o => 
        extremeWords.some(w => {
            const regex = new RegExp(`\\b${w}\\b`, 'i');
            return regex.test(o);
        })
    );
    
    if (wrongHasExtreme && !correctHasExtreme) {
        problems.obviousPatterns.push({
            location,
            detail: `Falsche Optionen enthalten Extremwörter (immer, nie, alle, keine)`,
            options: question.options,
            correct: question.correctAnswer
        });
    }
    
    // - Korrekte Option ist grammatikalisch kompletter/besser formuliert
    const correctHasVerb = correctOptions.some(o => o.split(' ').length > 3);
    const wrongAvgWords = wrongOptions.reduce((sum, o) => sum + o.split(' ').length, 0) / wrongOptions.length;
    const correctAvgWords = correctOptions.reduce((sum, o) => sum + o.split(' ').length, 0) / correctOptions.length;
    
    if (correctAvgWords > wrongAvgWords * 2 && correctAvgWords > 5) {
        // Bereits in correctLonger erfasst, aber anderer Aspekt
    }
}

// MAIN
console.log('🔍 Analyse: Formulierungs-Probleme bei Fragen\n');
console.log('Suche nach Mustern, die das Erraten der richtigen Antwort erleichtern...\n');

const chapters = fs.readdirSync(fragenDir).filter(f => {
    const fullPath = path.join(fragenDir, f);
    return fs.statSync(fullPath).isDirectory() && /^\d+_/.test(f);
});

let totalQuestions = 0;

chapters.forEach(chapter => {
    const chapterPath = path.join(fragenDir, chapter);
    const files = fs.readdirSync(chapterPath).filter(f => f.endsWith('.md') && f.startsWith('chemie-level'));
    
    files.forEach(file => {
        const filePath = path.join(chapterPath, file);
        const questions = parseMarkdownFile(filePath);
        
        questions.forEach(q => {
            analyzeQuestion(q, filePath);
            totalQuestions++;
        });
    });
});

console.log('═══════════════════════════════════════════════════════════════');
console.log('        FORMULIERUNGS-PROBLEME - ERLEICHTERN DAS ERRATEN');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`\nAnalysierte Fragen: ${totalQuestions}\n`);

// Ausgabe
const categories = [
    { 
        key: 'correctLonger', 
        name: '📏 Korrekte Antwort deutlich länger', 
        desc: 'Die richtige Antwort ist >50% länger als die falschen'
    },
    { 
        key: 'correctHasParentheses', 
        name: '📝 Nur korrekte hat Klammer-Erklärungen', 
        desc: 'Nur die richtige Option hat Erklärungen in Klammern'
    },
    { 
        key: 'correctMoreDetailed', 
        name: '🔍 Korrekte enthält Detail-Wörter', 
        desc: 'Enthält "z.B.", "also", "d.h." etc.'
    },
    { 
        key: 'obviousPatterns', 
        name: '⚠️ Extremwörter in falschen Antworten', 
        desc: 'Falsche Optionen enthalten "immer", "nie", "alle", "keine"'
    },
];

let totalProblems = 0;

categories.forEach(cat => {
    const items = problems[cat.key];
    if (items.length > 0) {
        console.log(`\n${cat.name}: ${items.length}`);
        console.log(`  (${cat.desc})`);
        console.log('─'.repeat(60));
        
        items.slice(0, 10).forEach(item => {
            console.log(`\n  📍 ${item.location}`);
            console.log(`     ${item.detail}`);
            console.log(`     Korrekt: ${item.correct}`);
            item.options.forEach((opt, idx) => {
                const letter = 'ABCD'[idx];
                const isCorrect = item.correct.includes(letter);
                const marker = isCorrect ? '✓' : '✗';
                const len = opt.length;
                console.log(`     ${marker} ${letter}. (${len} Z.) ${opt.substring(0, 60)}${opt.length > 60 ? '...' : ''}`);
            });
        });
        
        if (items.length > 10) {
            console.log(`\n  ... und ${items.length - 10} weitere`);
        }
        totalProblems += items.length;
    }
});

console.log('\n═══════════════════════════════════════════════════════════════');
console.log(`ZUSAMMENFASSUNG: ${totalProblems} Fragen mit Formulierungs-Problemen`);
console.log('═══════════════════════════════════════════════════════════════');

if (totalProblems > 0) {
    console.log(`
📊 Verteilung:
   - Längen-Problem: ${problems.correctLonger.length} Fragen
   - Klammer-Problem: ${problems.correctHasParentheses.length} Fragen  
   - Detail-Wörter: ${problems.correctMoreDetailed.length} Fragen
   - Extremwörter: ${problems.obviousPatterns.length} Fragen

💡 Empfehlungen:
   1. Falsche Optionen auf ähnliche Länge wie korrekte bringen
   2. Klammer-Erklärungen auch bei falschen Optionen hinzufügen
   3. Detail-Wörter gleichmäßig verteilen oder entfernen
   4. Extremwörter ("immer", "nie") vermeiden oder auch bei korrekten nutzen
`);
}
