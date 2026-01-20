const fs = require('fs');
const path = require('path');

const fragenDir = '/Users/julian/blabla/CODING_PLAN/fragen';

let totalFixed = 0;
let totalSkipped = 0;
let filesModified = 0;

function getCorrectIndices(correctAnswer) {
    return correctAnswer.split(',').map(a => 'ABCD'.indexOf(a.trim())).filter(i => i >= 0);
}

function getWrongIndices(correctAnswer) {
    const correct = getCorrectIndices(correctAnswer);
    return [0, 1, 2, 3].filter(i => !correct.includes(i));
}

// ═══════════════════════════════════════════════════════════════
// STRATEGIE: Frage umstrukturieren
// Definition aus korrekter Antwort → in Fragetext verschieben
// ═══════════════════════════════════════════════════════════════

function restructureQuestion(questionText, options, correctIndices, wrongIndices) {
    const correctOpts = correctIndices.map(i => options[i]);
    const wrongOpts = wrongIndices.map(i => options[i]);
    
    // Nur bei Single-Correct-Fragen mit "Was ist..." Pattern
    if (correctIndices.length !== 1) {
        return null; // Multi-correct ist komplexer
    }
    
    const correctAnswer = correctOpts[0];
    const avgWrongLen = wrongOpts.reduce((s, o) => s + o.length, 0) / wrongOpts.length;
    
    // Nur wenn korrekte deutlich länger ist
    if (correctAnswer.length < avgWrongLen * 1.5) {
        return null;
    }
    
    // Pattern 1: "Was ist X?" → Definition in Fragetext
    if (/^Was ist (?:ein(?:e)?|der|die|das)?\s*(.+)\?$/i.test(questionText)) {
        return restructureDefinitionQuestion(questionText, correctAnswer, options, correctIndices, wrongIndices);
    }
    
    // Pattern 2: "Was versteht man unter X?" 
    if (/^Was versteht man unter/i.test(questionText)) {
        return restructureDefinitionQuestion(questionText, correctAnswer, options, correctIndices, wrongIndices);
    }
    
    // Pattern 3: "Was beschreibt X?"
    if (/^Was beschreibt/i.test(questionText)) {
        return restructureDefinitionQuestion(questionText, correctAnswer, options, correctIndices, wrongIndices);
    }
    
    return null;
}

function restructureDefinitionQuestion(questionText, correctAnswer, options, correctIndices, wrongIndices) {
    // Extrahiere den Begriff aus der Frage
    let term = '';
    let match;
    
    if ((match = questionText.match(/^Was ist (?:ein(?:e)?|der|die|das)?\s*(.+)\?$/i))) {
        term = match[1];
    } else if ((match = questionText.match(/^Was versteht man unter\s*(.+)\?$/i))) {
        term = match[1];
    } else if ((match = questionText.match(/^Was beschreibt\s*(.+)\?$/i))) {
        term = match[1];
    }
    
    if (!term) return null;
    
    // Kürze die korrekte Antwort für den Fragetext
    // Entferne "Es ist...", "Ein/Eine...", etc.
    let definition = correctAnswer
        .replace(/^(?:Es ist |Das ist |Eine? |Der |Die |Das )/i, '')
        .replace(/\.$/, '');
    
    // Wenn die Definition zu lang ist, kürze sie
    if (definition.length > 80) {
        // Versuche beim ersten Komma oder "die/der/das" zu kürzen
        const cutPoints = [
            definition.indexOf(', die '),
            definition.indexOf(', der '),
            definition.indexOf(', das '),
            definition.indexOf(', bei '),
            definition.indexOf(', wenn '),
            definition.indexOf(', wobei '),
        ].filter(i => i > 20);
        
        if (cutPoints.length > 0) {
            const cutAt = Math.min(...cutPoints);
            definition = definition.substring(0, cutAt);
        }
    }
    
    // Erstelle neue Frage
    const newQuestion = `${term}: ${definition}. Welche Aussage dazu ist korrekt?`;
    
    // Erstelle neue Optionen - alle sollten ähnlich lang sein
    const newOptions = [...options];
    
    // Die korrekte Antwort braucht neuen Text
    // Finde ein passendes Statement
    const correctStatements = [
        'Diese Definition ist vollständig korrekt',
        'Dies beschreibt den Begriff korrekt',
        'Diese Aussage ist richtig',
        'Der Begriff ist korrekt definiert',
    ];
    
    // Besser: Extrahiere einen Aspekt aus der ursprünglichen Antwort
    const aspectMatch = correctAnswer.match(/,\s*(die|der|das|bei|wenn|wobei)\s+(.+)$/i);
    if (aspectMatch) {
        newOptions[correctIndices[0]] = aspectMatch[2].charAt(0).toUpperCase() + aspectMatch[2].slice(1);
        if (newOptions[correctIndices[0]].length < 20) {
            newOptions[correctIndices[0]] = 'Es gilt: ' + newOptions[correctIndices[0]];
        }
    } else {
        // Fallback: Kürze die ursprüngliche Antwort
        newOptions[correctIndices[0]] = definition.length > 50 
            ? definition.substring(0, 45) + '...'
            : definition;
    }
    
    // Prüfe ob Verbesserung erzielt wurde
    const newCorrectLen = newOptions[correctIndices[0]].length;
    const avgWrongLen = wrongIndices.reduce((s, i) => s + newOptions[i].length, 0) / wrongIndices.length;
    
    if (newCorrectLen > avgWrongLen * 1.4) {
        // Immer noch zu unausgeglichen - verlängere falsche Optionen
        wrongIndices.forEach(i => {
            if (newOptions[i].length < 30) {
                newOptions[i] = extendWrongOption(newOptions[i], term);
            }
        });
    }
    
    return {
        newQuestion,
        newOptions,
        reason: 'Definition in Fragetext verschoben'
    };
}

function extendWrongOption(text, context) {
    // Kontextbezogene Erweiterungen
    const extensions = {
        'Puffer': [
            ['Eine starke Säure', 'Eine starke Säure allein'],
            ['Ein Indikator', 'Ein Indikator für pH-Messungen'],
            ['Eine Base', 'Eine starke Base allein'],
        ],
        'pH': [
            ['Die Temperatur', 'Die Temperatur der Lösung'],
            ['Die Konzentration', 'Die Stoffkonzentration'],
        ],
        'Osmose': [
            ['Diffusion von Salzen', 'Diffusion von gelösten Salzen'],
            ['Verdampfung', 'Verdampfung von Lösungsmittel'],
        ],
        'Orbital': [
            ['Eine Elektronenbahn', 'Eine feste Elektronenbahn'],
            ['Ein Energieniveau', 'Ein diskretes Energieniveau'],
        ],
    };
    
    // Generische Erweiterung
    if (text.length < 25) {
        if (/^(?:Ein |Eine |Der |Die |Das )/i.test(text)) {
            return text + ' (allein betrachtet)';
        }
        return text;
    }
    
    return text;
}

// ═══════════════════════════════════════════════════════════════
// ALTERNATIVE STRATEGIE: Alle Optionen angleichen
// Wenn Umstrukturierung nicht möglich
// ═══════════════════════════════════════════════════════════════

function balanceOptions(questionText, options, correctIndices, wrongIndices) {
    const newOptions = [...options];
    let modified = false;
    
    const avgCorrectLen = correctIndices.reduce((s, i) => s + options[i].length, 0) / correctIndices.length;
    const avgWrongLen = wrongIndices.reduce((s, i) => s + options[i].length, 0) / wrongIndices.length;
    const targetLen = Math.round((avgCorrectLen + avgWrongLen) / 2);
    
    // Kürze zu lange korrekte Optionen
    correctIndices.forEach(i => {
        if (options[i].length > targetLen * 1.3) {
            const shortened = shortenOption(options[i], targetLen);
            if (shortened !== options[i]) {
                newOptions[i] = shortened;
                modified = true;
            }
        }
    });
    
    // Verlängere zu kurze falsche Optionen
    wrongIndices.forEach(i => {
        if (options[i].length < targetLen * 0.7) {
            const extended = extendOption(options[i], questionText, targetLen);
            if (extended !== options[i]) {
                newOptions[i] = extended;
                modified = true;
            }
        }
    });
    
    return modified ? { newOptions, reason: 'Optionen-Längen angeglichen' } : null;
}

function shortenOption(text, targetLen) {
    let result = text;
    
    // Entferne Erklärungen am Ende
    const patterns = [
        /,\s*(?:d\.?\s*h\.|also|das heißt|was bedeutet).*$/i,
        /,\s*(?:weil|da|denn).*$/i,
        /,\s*(?:wobei|wenn|falls).*$/i,
        /\s*\([^)]+\)$/,
    ];
    
    for (const pattern of patterns) {
        const newResult = result.replace(pattern, '');
        if (newResult.length >= 20 && newResult.length <= targetLen * 1.2) {
            result = newResult;
            break;
        }
    }
    
    return result.trim();
}

function extendOption(text, questionText, targetLen) {
    let result = text;
    
    // Kontextbezogene Erweiterungen basierend auf Fragetyp
    if (result.length < 20) {
        // Generische Erweiterungen
        if (/Säure|Base|pH/i.test(questionText)) {
            if (/konzentriert/i.test(result)) result += 'e Lösung';
            else if (/verdünnt/i.test(result)) result += 'e Lösung';
            else if (/stark/i.test(result) && !/starke/i.test(result)) result = result.replace(/stark/i, 'starke Säure/Base');
        }
        
        if (/Reaktion/i.test(questionText)) {
            if (/exotherm/i.test(result)) result += 'e Reaktion';
            else if (/endotherm/i.test(result)) result += 'e Reaktion';
        }
    }
    
    return result;
}

// ═══════════════════════════════════════════════════════════════
// HAUPTVERARBEITUNG
// ═══════════════════════════════════════════════════════════════

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;
    let fixCount = 0;
    let skipCount = 0;
    
    const questionRegex = /## Frage (\d+)\n\*\*([^*]+)\*\*\n\n(- \[[ x]\] A\. .+\n)(- \[[ x]\] B\. .+\n)(- \[[ x]\] C\. .+\n)(- \[[ x]\] D\. .+\n)\n\*\*Richtige Antwort(?:en)?:\*\* ([A-D,\s]+)/g;
    
    const newContent = content.replace(questionRegex, (match, num, questionText, optA, optB, optC, optD, correctAnswer) => {
        const options = [
            optA.match(/- \[[ x]\] A\. (.+)/)?.[1]?.trim() || '',
            optB.match(/- \[[ x]\] B\. (.+)/)?.[1]?.trim() || '',
            optC.match(/- \[[ x]\] C\. (.+)/)?.[1]?.trim() || '',
            optD.match(/- \[[ x]\] D\. (.+)/)?.[1]?.trim() || '',
        ];
        
        const correctIndices = getCorrectIndices(correctAnswer);
        const wrongIndices = getWrongIndices(correctAnswer);
        
        // Prüfe ob Problem vorliegt
        const avgCorrectLen = correctIndices.reduce((s, i) => s + options[i].length, 0) / correctIndices.length;
        const avgWrongLen = wrongIndices.reduce((s, i) => s + options[i].length, 0) / wrongIndices.length;
        
        if (avgCorrectLen <= avgWrongLen * 1.5 || avgCorrectLen <= 30) {
            return match; // Kein Problem
        }
        
        // Versuche Umstrukturierung
        let result = restructureQuestion(questionText.trim(), options, correctIndices, wrongIndices);
        
        // Fallback: Optionen angleichen
        if (!result) {
            result = balanceOptions(questionText.trim(), options, correctIndices, wrongIndices);
        }
        
        if (result) {
            fixCount++;
            modified = true;
            
            const newQ = result.newQuestion || questionText.trim();
            const newOpts = result.newOptions || options;
            
            return `## Frage ${num}\n**${newQ}**\n\n- [ ] A. ${newOpts[0]}\n- [ ] B. ${newOpts[1]}\n- [ ] C. ${newOpts[2]}\n- [ ] D. ${newOpts[3]}\n\n**Richtige Antworten:** ${correctAnswer}`;
        }
        
        skipCount++;
        return match;
    });
    
    return {
        content: newContent,
        modified,
        fixCount,
        skipCount
    };
}

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════

console.log('🔧 Starte Fragen-Umstrukturierung...\n');
console.log('Strategien:');
console.log('  1. Definition aus Antwort → in Fragetext verschieben');
console.log('  2. Optionen-Längen angleichen (Fallback)\n');

const chapters = fs.readdirSync(fragenDir).filter(f => {
    const fullPath = path.join(fragenDir, f);
    return fs.statSync(fullPath).isDirectory() && /^\d+_/.test(f);
});

chapters.forEach(chapter => {
    const chapterPath = path.join(fragenDir, chapter);
    const files = fs.readdirSync(chapterPath).filter(f => f.endsWith('.md') && f.startsWith('chemie-level'));
    
    files.forEach(file => {
        const filePath = path.join(chapterPath, file);
        const result = processFile(filePath);
        
        if (result.modified) {
            fs.writeFileSync(filePath, result.content);
            console.log(`✓ ${chapter}/${file}: ${result.fixCount} umstrukturiert, ${result.skipCount} übersprungen`);
            filesModified++;
            totalFixed += result.fixCount;
            totalSkipped += result.skipCount;
        } else if (result.skipCount > 0) {
            console.log(`⚠ ${chapter}/${file}: ${result.skipCount} benötigen manuelle Bearbeitung`);
            totalSkipped += result.skipCount;
        }
    });
});

console.log('\n═══════════════════════════════════════════════════════════════');
console.log('                    UMSTRUKTURIERUNG ABGESCHLOSSEN');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`
📊 Statistiken:
   - Dateien modifiziert: ${filesModified}
   - Fragen umstrukturiert: ${totalFixed}
   - Übersprungen (manuell): ${totalSkipped}

💡 Nächste Schritte:
   1. node scripts/analyzeFormulierung.js  (Prüfen)
   2. node scripts/convertQuestions.js     (Neu generieren)
`);
