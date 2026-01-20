const fs = require('fs');
const path = require('path');

const fragenDir = '/Users/julian/blabla/CODING_PLAN/fragen';

let totalFixed = 0;
let filesModified = 0;

// Statistiken
const stats = {
    parenthesesRemoved: 0,
    extremeWordsFixed: 0,
    lengthBalanced: 0,
};

function getCorrectIndices(correctAnswer) {
    return correctAnswer.split(',').map(a => 'ABCD'.indexOf(a.trim())).filter(i => i >= 0);
}

function getWrongIndices(correctAnswer) {
    const correct = getCorrectIndices(correctAnswer);
    return [0, 1, 2, 3].filter(i => !correct.includes(i));
}

// Strategie 1: Klammern aus ALLEN Optionen entfernen für Konsistenz
function removeParenthesesFromOption(text) {
    // Entferne Klammer-Erklärungen wie "(Erklärung)" aber behalte chemische Formeln wie (aq), (s), (l), (g)
    // Behalte auch kurze Klammern wie (S), (Na⁺), chemische Zustände
    return text.replace(/\s*\([^)]{10,}\)/g, '').trim();
}

// Strategie 2: Extremwörter abschwächen
function softenExtremeWords(text) {
    const replacements = [
        [/\bimmer\b/gi, 'häufig'],
        [/\bnie\b/gi, 'selten'],
        [/\bniemals\b/gi, 'selten'],
        [/\bausschließlich\b/gi, 'hauptsächlich'],
        [/\bnur\s+(?!wenn|bei|in|mit|für)/gi, 'vorwiegend '], // "nur" aber nicht "nur wenn", "nur bei" etc.
        [/\balle\s+(?!Aussagen|Optionen|Antworten|genannten)/gi, 'die meisten '], // "alle" aber nicht "alle Aussagen sind"
        [/\bkeine\s+(?!der)/gi, 'kaum '], // "keine" aber nicht "keine der genannten"
    ];
    
    let result = text;
    replacements.forEach(([pattern, replacement]) => {
        if (pattern.test(result)) {
            result = result.replace(pattern, replacement);
        }
    });
    return result;
}

// Strategie 3: Falsche Optionen verlängern mit kontextbezogenen Zusätzen
function extendWrongOption(text, questionContext) {
    // Nur wenn die Option sehr kurz ist (unter 20 Zeichen)
    if (text.length >= 25) return text;
    
    // Generische Zusätze basierend auf dem Inhalt
    const extensions = [
        { pattern: /^[A-Z][a-zäöü]+$/, suffix: ' als Verbindung' }, // Einzelne Wörter
        { pattern: /^\d+/, suffix: ' als Wert' }, // Zahlen
        { pattern: /Energie/i, suffix: ' des Systems' },
        { pattern: /Reaktion/i, suffix: ' unter Normalbedingungen' },
        { pattern: /Ion/i, suffix: ' in Lösung' },
    ];
    
    // Nicht verlängern - zu riskant ohne Kontext
    return text;
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;
    const lines = content.split('\n');
    const newLines = [];
    
    let currentQuestion = null;
    let optionLines = {}; // Speichert Zeilen-Indizes der Optionen
    let correctAnswerLine = -1;
    let correctAnswer = '';
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        // Neue Frage beginnt
        if (line.startsWith('## Frage')) {
            // Vorherige Frage verarbeiten
            if (currentQuestion && Object.keys(optionLines).length === 4) {
                // Hier könnten wir die vorherige Frage nachbearbeiten
            }
            currentQuestion = line;
            optionLines = {};
            correctAnswerLine = -1;
            correctAnswer = '';
        }
        
        // Option erkennen
        const optionMatch = line.match(/^(- \[[ x]\] [A-D]\.) (.*)$/);
        if (optionMatch && currentQuestion) {
            const letter = line.match(/[A-D]/)[0];
            const idx = 'ABCD'.indexOf(letter);
            const optionText = optionMatch[2];
            
            optionLines[idx] = {
                lineIndex: i,
                prefix: optionMatch[1],
                text: optionText
            };
        }
        
        // Korrekte Antwort erkennen
        if (line.startsWith('**Richtige Antwort')) {
            const match = line.match(/\*\*Richtige Antwort(?:en)?:\*\* (.+)$/);
            if (match) {
                correctAnswer = match[1].trim();
                correctAnswerLine = i;
                
                // Jetzt haben wir alle Infos - Frage analysieren und fixen
                if (Object.keys(optionLines).length === 4) {
                    const correctIndices = getCorrectIndices(correctAnswer);
                    const wrongIndices = getWrongIndices(correctAnswer);
                    
                    // Fix 1: Klammern entfernen wenn nur korrekte sie haben
                    const correctHasParens = correctIndices.some(idx => 
                        optionLines[idx] && /\([^)]{10,}\)/.test(optionLines[idx].text)
                    );
                    const wrongHasParens = wrongIndices.some(idx => 
                        optionLines[idx] && /\([^)]{10,}\)/.test(optionLines[idx].text)
                    );
                    
                    if (correctHasParens && !wrongHasParens) {
                        // Klammern aus korrekten Optionen entfernen
                        correctIndices.forEach(idx => {
                            if (optionLines[idx]) {
                                const newText = removeParenthesesFromOption(optionLines[idx].text);
                                if (newText !== optionLines[idx].text) {
                                    optionLines[idx].text = newText;
                                    optionLines[idx].modified = true;
                                    stats.parenthesesRemoved++;
                                    modified = true;
                                }
                            }
                        });
                    }
                    
                    // Fix 2: Extremwörter in falschen Optionen abschwächen
                    const extremeWords = /\b(immer|nie|niemals|ausschließlich|nur|alle|keine)\b/i;
                    wrongIndices.forEach(idx => {
                        if (optionLines[idx] && extremeWords.test(optionLines[idx].text)) {
                            // Prüfen ob korrekte auch Extremwörter haben
                            const correctHasExtreme = correctIndices.some(cIdx => 
                                optionLines[cIdx] && extremeWords.test(optionLines[cIdx].text)
                            );
                            
                            if (!correctHasExtreme) {
                                const newText = softenExtremeWords(optionLines[idx].text);
                                if (newText !== optionLines[idx].text) {
                                    optionLines[idx].text = newText;
                                    optionLines[idx].modified = true;
                                    stats.extremeWordsFixed++;
                                    modified = true;
                                }
                            }
                        }
                    });
                    
                    // Fix 3: Längen-Balancing - Kürze zu lange korrekte Optionen
                    const avgCorrectLen = correctIndices.reduce((sum, idx) => 
                        sum + (optionLines[idx]?.text.length || 0), 0) / correctIndices.length;
                    const avgWrongLen = wrongIndices.reduce((sum, idx) => 
                        sum + (optionLines[idx]?.text.length || 0), 0) / wrongIndices.length;
                    
                    if (avgCorrectLen > avgWrongLen * 1.5 && avgCorrectLen > 40) {
                        // Korrekte sind zu lang - versuche zu kürzen
                        correctIndices.forEach(idx => {
                            if (optionLines[idx]) {
                                let text = optionLines[idx].text;
                                
                                // Entferne überflüssige Phrasen
                                const trimPatterns = [
                                    /,\s*was bedeutet.*$/i,
                                    /,\s*d\.?\s*h\..*$/i,
                                    /,\s*also.*$/i,
                                    /,\s*das heißt.*$/i,
                                    /,\s*wobei.*$/i,
                                    /,\s*weil.*$/i,
                                    /\s*\(.*?\)$/,  // Klammern am Ende
                                ];
                                
                                trimPatterns.forEach(pattern => {
                                    const newText = text.replace(pattern, '');
                                    if (newText.length >= 15 && newText.length < text.length) {
                                        text = newText;
                                    }
                                });
                                
                                if (text !== optionLines[idx].text) {
                                    optionLines[idx].text = text;
                                    optionLines[idx].modified = true;
                                    stats.lengthBalanced++;
                                    modified = true;
                                }
                            }
                        });
                    }
                }
            }
        }
        
        newLines.push(line);
    }
    
    // Modifizierte Optionen zurückschreiben
    if (modified) {
        Object.values(optionLines).forEach(opt => {
            if (opt.modified) {
                newLines[opt.lineIndex] = `${opt.prefix} ${opt.text}`;
            }
        });
        
        // Nochmal durch alle Zeilen und Optionen aktualisieren
        let finalContent = content;
        Object.values(optionLines).forEach(opt => {
            if (opt.modified) {
                const originalLine = lines[opt.lineIndex];
                const newLine = `${opt.prefix} ${opt.text}`;
                finalContent = finalContent.replace(originalLine, newLine);
            }
        });
        
        // Besser: Komplettes Re-Processing
        const result = processFileComplete(filePath);
        if (result.modified) {
            fs.writeFileSync(filePath, result.content);
            filesModified++;
            totalFixed += result.fixCount;
        }
    }
}

function processFileComplete(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let fixCount = 0;
    
    // Regex um Fragen zu finden
    const questionRegex = /## Frage (\d+)\n\*\*([^*]+)\*\*\n\n(- \[[ x]\] A\. .+\n)(- \[[ x]\] B\. .+\n)(- \[[ x]\] C\. .+\n)(- \[[ x]\] D\. .+\n)\n\*\*Richtige Antwort(?:en)?:\*\* ([A-D,\s]+)/g;
    
    let newContent = content.replace(questionRegex, (match, num, questionText, optA, optB, optC, optD, correctAnswer) => {
        let options = [
            { letter: 'A', line: optA, text: optA.match(/- \[[ x]\] A\. (.+)/)?.[1]?.trim() || '' },
            { letter: 'B', line: optB, text: optB.match(/- \[[ x]\] B\. (.+)/)?.[1]?.trim() || '' },
            { letter: 'C', line: optC, text: optC.match(/- \[[ x]\] C\. (.+)/)?.[1]?.trim() || '' },
            { letter: 'D', line: optD, text: optD.match(/- \[[ x]\] D\. (.+)/)?.[1]?.trim() || '' },
        ];
        
        const correctIndices = getCorrectIndices(correctAnswer);
        const wrongIndices = getWrongIndices(correctAnswer);
        
        let modified = false;
        
        // Fix 1: Klammern
        const correctHasParens = correctIndices.some(idx => /\([^)]{8,}\)/.test(options[idx].text));
        const wrongHasParens = wrongIndices.some(idx => /\([^)]{8,}\)/.test(options[idx].text));
        
        if (correctHasParens && !wrongHasParens) {
            correctIndices.forEach(idx => {
                const newText = options[idx].text.replace(/\s*\([^)]{8,}\)/g, '').trim();
                if (newText !== options[idx].text && newText.length > 5) {
                    options[idx].text = newText;
                    modified = true;
                    stats.parenthesesRemoved++;
                }
            });
        }
        
        // Fix 2: Extremwörter
        const extremeRegex = /\b(immer|nie|niemals|ausschließlich|nur|alle|keine|jeder|keiner)\b/i;
        const correctHasExtreme = correctIndices.some(idx => extremeRegex.test(options[idx].text));
        
        if (!correctHasExtreme) {
            wrongIndices.forEach(idx => {
                if (extremeRegex.test(options[idx].text)) {
                    let newText = options[idx].text
                        .replace(/\bimmer\b/gi, 'häufig')
                        .replace(/\bnie\b/gi, 'selten')
                        .replace(/\bniemals\b/gi, 'selten')
                        .replace(/\bausschließlich\b/gi, 'überwiegend')
                        .replace(/\bkeine\s+/gi, 'wenige ')
                        .replace(/\balle\s+/gi, 'viele ')
                        .replace(/\bnur\s+/gi, 'meist ')
                        .replace(/\bjeder\b/gi, 'mancher')
                        .replace(/\bkeiner\b/gi, 'wenige');
                    
                    if (newText !== options[idx].text) {
                        options[idx].text = newText;
                        modified = true;
                        stats.extremeWordsFixed++;
                    }
                }
            });
        }
        
        // Fix 3: Längen - kürze zu lange korrekte Optionen
        const avgCorrectLen = correctIndices.reduce((s, i) => s + options[i].text.length, 0) / correctIndices.length;
        const avgWrongLen = wrongIndices.reduce((s, i) => s + options[i].text.length, 0) / wrongIndices.length;
        
        if (avgCorrectLen > avgWrongLen * 1.5 && avgCorrectLen > 35) {
            correctIndices.forEach(idx => {
                let text = options[idx].text;
                const originalLen = text.length;
                
                // Kürze durch Entfernen von Erklärungen
                text = text
                    .replace(/,\s*d\.?\s*h\..*$/i, '')
                    .replace(/,\s*also\s+.*$/i, '')
                    .replace(/,\s*das heißt.*$/i, '')
                    .replace(/,\s*was bedeutet.*$/i, '')
                    .replace(/,\s*weil\s+.*$/i, '')
                    .replace(/,\s*da\s+.*$/i, '')
                    .replace(/\s+\(siehe.*?\)$/i, '')
                    .replace(/\s+\(vgl\..*?\)$/i, '')
                    .trim();
                
                if (text.length < originalLen && text.length >= 10) {
                    options[idx].text = text;
                    modified = true;
                    stats.lengthBalanced++;
                }
            });
        }
        
        if (modified) {
            fixCount++;
            // Rebuild the question block
            const newOptA = `- [ ] A. ${options[0].text}\n`;
            const newOptB = `- [ ] B. ${options[1].text}\n`;
            const newOptC = `- [ ] C. ${options[2].text}\n`;
            const newOptD = `- [ ] D. ${options[3].text}\n`;
            
            return `## Frage ${num}\n**${questionText}**\n\n${newOptA}${newOptB}${newOptC}${newOptD}\n**Richtige Antworten:** ${correctAnswer}`;
        }
        
        return match;
    });
    
    return {
        content: newContent,
        modified: newContent !== content,
        fixCount
    };
}

// MAIN
console.log('🔧 Starte automatische Korrektur der Formulierungs-Probleme...\n');

const chapters = fs.readdirSync(fragenDir).filter(f => {
    const fullPath = path.join(fragenDir, f);
    return fs.statSync(fullPath).isDirectory() && /^\d+_/.test(f);
});

chapters.forEach(chapter => {
    const chapterPath = path.join(fragenDir, chapter);
    const files = fs.readdirSync(chapterPath).filter(f => f.endsWith('.md') && f.startsWith('chemie-level'));
    
    files.forEach(file => {
        const filePath = path.join(chapterPath, file);
        const result = processFileComplete(filePath);
        
        if (result.modified) {
            fs.writeFileSync(filePath, result.content);
            console.log(`✓ ${chapter}/${file}: ${result.fixCount} Fragen korrigiert`);
            filesModified++;
            totalFixed += result.fixCount;
        }
    });
});

console.log('\n═══════════════════════════════════════════════════════════════');
console.log('                    KORREKTUR ABGESCHLOSSEN');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`
📊 Statistiken:
   - Dateien modifiziert: ${filesModified}
   - Fragen korrigiert: ${totalFixed}
   
🔧 Durchgeführte Fixes:
   - Klammern entfernt: ${stats.parenthesesRemoved}
   - Extremwörter abgeschwächt: ${stats.extremeWordsFixed}
   - Längen ausgeglichen: ${stats.lengthBalanced}

💡 Hinweis: Führe jetzt aus:
   node scripts/analyzeFormulierung.js
   
   um die verbleibenden Probleme zu sehen.
`);
