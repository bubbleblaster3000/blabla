const fs = require('fs');
const path = require('path');

const fragenDir = '/Users/julian/blabla/CODING_PLAN/fragen';

function getCorrectIndices(correctAnswer) {
    return correctAnswer.split(',').map(a => 'ABCD'.indexOf(a.trim())).filter(i => i >= 0);
}

function getWrongIndices(correctAnswer) {
    const correct = getCorrectIndices(correctAnswer);
    return [0, 1, 2, 3].filter(i => !correct.includes(i));
}

const problems = [];

const chapters = fs.readdirSync(fragenDir).filter(f => {
    const fullPath = path.join(fragenDir, f);
    return fs.statSync(fullPath).isDirectory() && /^\d+_/.test(f);
});

chapters.forEach(chapter => {
    const chapterPath = path.join(fragenDir, chapter);
    const files = fs.readdirSync(chapterPath).filter(f => f.endsWith('.md') && f.startsWith('chemie-level'));
    
    files.forEach(file => {
        const content = fs.readFileSync(path.join(chapterPath, file), 'utf-8');
        const questionRegex = /## Frage (\d+)\n\*\*([^*]+)\*\*\n\n- \[[ x]\] A\. (.+)\n- \[[ x]\] B\. (.+)\n- \[[ x]\] C\. (.+)\n- \[[ x]\] D\. (.+)\n\n\*\*Richtige Antwort(?:en)?:\*\* ([A-D,\s]+)/g;
        
        let match;
        while ((match = questionRegex.exec(content)) !== null) {
            const [_, num, question, optA, optB, optC, optD, correct] = match;
            const options = [optA.trim(), optB.trim(), optC.trim(), optD.trim()];
            const correctIndices = getCorrectIndices(correct);
            const wrongIndices = getWrongIndices(correct);
            
            const avgCorrect = correctIndices.reduce((s,i) => s + options[i].length, 0) / correctIndices.length;
            const avgWrong = wrongIndices.reduce((s,i) => s + options[i].length, 0) / wrongIndices.length;
            
            if (avgCorrect > avgWrong * 1.5 && avgCorrect > 30) {
                problems.push({
                    file: path.join(chapter, file),
                    frage: num,
                    question: question.trim(),
                    ratio: Math.round((avgCorrect/avgWrong - 1) * 100),
                    options,
                    correct: correct.trim(),
                    correctIndices,
                    wrongIndices
                });
            }
        }
    });
});

console.log('═══════════════════════════════════════════════════════════════');
console.log('      MANUELLE KORREKTUREN ERFORDERLICH: ' + problems.length + ' Fragen');
console.log('═══════════════════════════════════════════════════════════════\n');

console.log('Diese Fragen haben Längen-Ungleichgewichte, die automatisch nicht');
console.log('sicher korrigiert werden können. Bitte manuell überprüfen.\n');

// Gruppiere nach Kapitel
const byChapter = {};
problems.forEach(p => {
    const ch = p.file.split('/')[0];
    if (!byChapter[ch]) byChapter[ch] = [];
    byChapter[ch].push(p);
});

// Zeige strukturierte Ausgabe
Object.keys(byChapter).sort().forEach(chapter => {
    const chapterProblems = byChapter[chapter];
    console.log(`\n📁 ${chapter} (${chapterProblems.length} Fragen)`);
    console.log('─'.repeat(60));
    
    chapterProblems.forEach(p => {
        console.log(`\n  Frage ${p.frage} in ${p.file.split('/')[1]} (+${p.ratio}%)`);
        console.log(`  "${p.question.substring(0, 50)}${p.question.length > 50 ? '...' : ''}"`);
        
        // Zeige alle Optionen
        p.options.forEach((opt, i) => {
            const letter = 'ABCD'[i];
            const isCorrect = p.correctIndices.includes(i);
            const marker = isCorrect ? '✓' : '✗';
            console.log(`    ${marker} ${letter}. (${opt.length}Z) ${opt.substring(0, 55)}${opt.length > 55 ? '...' : ''}`);
        });
        
        // Gib Empfehlung
        const shortestWrong = Math.min(...p.wrongIndices.map(i => p.options[i].length));
        const longestCorrect = Math.max(...p.correctIndices.map(i => p.options[i].length));
        
        if (shortestWrong < 25) {
            console.log(`    💡 Empfehlung: Falsche Optionen erweitern (kürzeste: ${shortestWrong}Z)`);
        } else if (longestCorrect > 60) {
            console.log(`    💡 Empfehlung: Korrekte Option kürzen (längste: ${longestCorrect}Z)`);
        } else {
            console.log(`    💡 Empfehlung: Optionen angleichen oder Frage umformulieren`);
        }
    });
});

console.log('\n\n═══════════════════════════════════════════════════════════════');
console.log('      ZUSAMMENFASSUNG');
console.log('═══════════════════════════════════════════════════════════════\n');

console.log(`Gesamt: ${problems.length} Fragen mit Längen-Problemen\n`);

// Statistiken
const shortWrongCount = problems.filter(p => Math.min(...p.wrongIndices.map(i => p.options[i].length)) < 25).length;
const longCorrectCount = problems.filter(p => Math.max(...p.correctIndices.map(i => p.options[i].length)) > 60).length;
const multiCorrectCount = problems.filter(p => p.correctIndices.length > 1).length;

console.log(`📊 Problemtypen:`);
console.log(`   - Falsche Optionen zu kurz (<25Z): ${shortWrongCount}`);
console.log(`   - Korrekte Optionen zu lang (>60Z): ${longCorrectCount}`);
console.log(`   - Multi-Correct Fragen: ${multiCorrectCount}`);
console.log(`\n`);

// Export als JSON für weitere Verarbeitung
const exportData = {
    total: problems.length,
    problems: problems.map(p => ({
        file: p.file,
        frage: p.frage,
        ratio: p.ratio,
        correct: p.correct
    }))
};

fs.writeFileSync('/Users/julian/blabla/scripts/remaining_problems.json', JSON.stringify(exportData, null, 2));
console.log('📄 Liste exportiert nach: scripts/remaining_problems.json');
