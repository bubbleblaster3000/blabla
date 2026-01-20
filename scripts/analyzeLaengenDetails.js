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
            const maxWrong = Math.max(...wrongIndices.map(i => options[i].length));
            
            if (avgCorrect > avgWrong * 1.5 && avgCorrect > 30) {
                problems.push({
                    file: chapter + '/' + file,
                    frage: num,
                    question: question.trim(),
                    ratio: Math.round((avgCorrect/avgWrong - 1) * 100),
                    avgC: Math.round(avgCorrect),
                    avgW: Math.round(avgWrong),
                    maxW: maxWrong,
                    correct: correct.trim(),
                    options,
                    correctIndices,
                    wrongIndices
                });
            }
        }
    });
});

// Gruppiere nach Muster
const byRatio = {
    extreme: problems.filter(p => p.ratio > 100),
    high: problems.filter(p => p.ratio > 70 && p.ratio <= 100),
    medium: problems.filter(p => p.ratio >= 50 && p.ratio <= 70)
};

console.log('═══════════════════════════════════════════════════════════════');
console.log('      DETAILANALYSE: 91 LÄNGEN-PROBLEME');
console.log('═══════════════════════════════════════════════════════════════\n');

console.log('📊 Gruppiert nach Schwere:\n');
console.log(`🔴 EXTREM (>100% länger):    ${byRatio.extreme.length} Fragen`);
console.log(`🟠 HOCH (70-100% länger):    ${byRatio.high.length} Fragen`);
console.log(`🟡 MITTEL (50-70% länger):   ${byRatio.medium.length} Fragen`);
console.log(`\n   Gesamt: ${problems.length} Fragen\n`);

// Analysiere Muster
console.log('═══════════════════════════════════════════════════════════════');
console.log('      MUSTER-ANALYSE');
console.log('═══════════════════════════════════════════════════════════════\n');

// Muster 1: Sehr kurze falsche Optionen
const shortWrong = problems.filter(p => p.maxW < 30);
console.log(`📌 Kurze falsche Optionen (<30 Z.): ${shortWrong.length}`);
console.log('   → Lösung: Falsche Optionen verlängern\n');

// Muster 2: Korrekte mit Erklärungen/Beispielen
const withExplanation = problems.filter(p => {
    return p.correctIndices.some(i => 
        /[;:]|z\.B\.|d\.h\.|also|weil|da /i.test(p.options[i])
    );
});
console.log(`📌 Korrekte mit Erklärungen (;, z.B., d.h.): ${withExplanation.length}`);
console.log('   → Lösung: Erklärungen in Fragetext verschieben\n');

// Muster 3: Korrekte mit chemischen Gleichungen
const withEquations = problems.filter(p => {
    return p.correctIndices.some(i => 
        /→|⟶|-->|\+.*=|[A-Z][a-z]?\d*\s*\+/.test(p.options[i])
    );
});
console.log(`📌 Korrekte mit Gleichungen (→, +): ${withEquations.length}`);
console.log('   → Lösung: Gleichungen auch bei falschen hinzufügen\n');

// Muster 4: Multi-Correct mit langen Erklärungen
const multiCorrect = problems.filter(p => p.correctIndices.length > 1);
console.log(`📌 Multi-Correct (mehrere richtige): ${multiCorrect.length}`);
console.log('   → Lösung: Oft schwieriger - einzeln prüfen\n');

console.log('═══════════════════════════════════════════════════════════════');
console.log('      LÖSUNGSVORSCHLÄGE PRO KATEGORIE');
console.log('═══════════════════════════════════════════════════════════════\n');

// EXTREM - Zeige alle mit Lösungsvorschlag
console.log('🔴 EXTREME FÄLLE (>100% länger) - Priorität HOCH:\n');
byRatio.extreme.forEach((p, idx) => {
    console.log(`${idx+1}. ${p.file} - Frage ${p.frage} (+${p.ratio}%)`);
    console.log(`   Frage: ${p.question.substring(0, 60)}...`);
    console.log(`   Korrekt Ø${p.avgC}Z vs Falsch Ø${p.avgW}Z (max ${p.maxW}Z)`);
    
    // Analysiere warum
    const correctOpts = p.correctIndices.map(i => p.options[i]);
    const wrongOpts = p.wrongIndices.map(i => p.options[i]);
    
    if (p.maxW < 25) {
        console.log('   💡 LÖSUNG: Falsche Optionen verlängern (sehr kurz)');
    } else if (correctOpts.some(o => /;|:|→|⟶/.test(o))) {
        console.log('   💡 LÖSUNG: Erklärungen/Gleichungen auch bei falschen');
    } else {
        console.log('   💡 LÖSUNG: Korrekte kürzen oder Frage umstrukturieren');
    }
    console.log('');
});

// Zusammenfassung der Lösungsstrategien
console.log('\n═══════════════════════════════════════════════════════════════');
console.log('      EMPFOHLENE LÖSUNGSSTRATEGIEN');
console.log('═══════════════════════════════════════════════════════════════\n');

console.log('1️⃣  FALSCHE OPTIONEN ERWEITERN (~40% der Fälle)');
console.log('    Wenn Ø Falsch < 30 Zeichen');
console.log('    Füge kontextbezogene Details hinzu\n');

console.log('2️⃣  ERKLÄRUNGEN VERSCHIEBEN (~30% der Fälle)');
console.log('    Wenn Korrekte "weil", "da", "d.h." enthält');
console.log('    Verschiebe Erklärung in den Fragetext\n');

console.log('3️⃣  GLEICHMÄSSIG FORMATIEREN (~20% der Fälle)');
console.log('    Wenn Korrekte Gleichungen/Formeln hat');
console.log('    Füge auch bei falschen Gleichungen hinzu\n');

console.log('4️⃣  UMSTRUKTURIEREN (~10% der Fälle)');
console.log('    Komplexe Multi-Correct-Fragen');
console.log('    Manuell überarbeiten\n');
