const fs = require('fs');
const path = require('path');

const fragenDir = '/Users/julian/blabla/CODING_PLAN/fragen';

let totalFixed = 0;
let filesModified = 0;

// Statistiken
const stats = {
    shortened: 0,
    extended: 0,
    unchanged: 0,
};

function getCorrectIndices(correctAnswer) {
    return correctAnswer.split(',').map(a => 'ABCD'.indexOf(a.trim())).filter(i => i >= 0);
}

function getWrongIndices(correctAnswer) {
    const correct = getCorrectIndices(correctAnswer);
    return [0, 1, 2, 3].filter(i => !correct.includes(i));
}

// ═══════════════════════════════════════════════════════════════
// STRATEGIE 1: Korrekte Antworten kürzen
// ═══════════════════════════════════════════════════════════════

function shortenCorrectOption(text) {
    let result = text;
    const original = text;
    
    // 1. Fachbegriffe einsetzen
    const fachbegriffe = [
        [/Die Stoffe, die bei (?:einer |der )?Reaktion entstehen/gi, 'Die Reaktionsprodukte'],
        [/Die Stoffe, die vor (?:einer |der )?Reaktion vorliegen/gi, 'Die Edukte (Ausgangsstoffe)'],
        [/Die Stoffe, die am Anfang vorliegen/gi, 'Die Edukte'],
        [/Die Anzahl der Moleküle oder Formeleinheiten/gi, 'Die Teilchenzahl (Moleküle/Formeleinheiten)'],
        [/Die Anzahl der Atome des Elements im Molekül/gi, 'Die Atomanzahl des Elements im Molekül'],
        [/Atome desselben Elements mit verschiedener Neutronenzahl/gi, 'Isotope des gleichen Elements'],
        [/Atome desselben Elements mit unterschiedlicher Neutronenzahl/gi, 'Isotope des gleichen Elements'],
        [/die mengenmäßigen Verhältnisse bei chemischen Reaktionen/gi, 'Stoffmengenverhältnisse bei Reaktionen'],
        [/Das Verhältnis der Koeffizienten gibt das Mol-Verhältnis an/gi, 'Koeffizienten zeigen das Mol-Verhältnis'],
        [/Eine Reaktion, bei der mehrere Stoffe zu einem Produkt reagieren/gi, 'Synthese: mehrere Stoffe → ein Produkt'],
        [/Eine Reaktion, bei der ein Stoff in mehrere zerfällt/gi, 'Zersetzung: ein Stoff → mehrere Produkte'],
        [/die stabile Edelgaskonfiguration bereits/gi, 'bereits die Edelgaskonfiguration'],
        [/eine vollständig gefüllte Valenzschale/gi, 'volle Valenzschale'],
        [/vollständig gefüllte/gi, 'volle'],
        [/Energie wird freigesetzt, wenn/gi, 'Energiefreisetzung bei'],
        [/Aufnahme eines Elektrons ist energetisch günstig/gi, 'Elektronenaufnahme ist energetisch günstig'],
        [/Das entstehende .+-Ion ist stabiler als das neutrale .+-Atom/gi, 'Das Ion ist stabiler als das Atom'],
        
        // Neue spezifische Kürzungen
        [/Eine Reaktion mit Sauerstoff unter Freisetzung von Energie/gi, 'Verbrennung (exotherme Oxidation)'],
        [/Zwei Verbindungen tauschen gegenseitig Bestandteile aus/gi, 'Doppelte Umsetzung (Ionentausch)'],
        [/Eine Reaktion, bei der ein schwerlöslicher Feststoff ausfällt/gi, 'Fällungsreaktion (Niederschlag)'],
        [/Molekülformel zeigt die tatsächliche Atomanzahl, die empirische das kleinste Verhältnis/gi, 'Molekülformel = echte Anzahl; Empirisch = kleinstes Verhältnis'],
        [/Der Stoff, der in größerer Menge vorliegt und andere Stoffe löst/gi, 'Stoff in größerer Menge, der löst'],
        [/Der Stoff, der in geringerer Menge im Lösungsmittel gelöst ist/gi, 'In geringerer Menge gelöster Stoff'],
        [/Eine Lösung, die die maximale Menge an gelöstem Stoff enthält/gi, 'Lösung mit max. gelöster Stoffmenge'],
        [/Die maximale Menge eines Stoffes, die sich in einem Lösungsmittel löst/gi, 'Max. lösbare Stoffmenge'],
        [/Bei Alkalimetallen ist die zweite Ionisierungsenergie deutlich höher/gi, 'Bei Alkalimetallen: 2. IE >> 1. IE'],
        [/Bei Sauerstoff führt die Elektron-Elektron-Abstoßung in einem besetzten p-Orbital zu niedrigerer IE als erwartet/gi, 'Bei O senkt e⁻-Abstoßung im p-Orbital die IE'],
        [/Die erste Ionisierungsenergie ist Energie zur Entfernung des 1\. Elektrons/gi, '1. IE = Energie zur Entfernung des 1. e⁻'],
        [/Die zweite Ionisierungsenergie ist größer als die erste/gi, '2. IE > 1. IE'],
    ];
    
    fachbegriffe.forEach(([pattern, replacement]) => {
        result = result.replace(pattern, replacement);
    });
    
    // 2. Redundante Phrasen entfernen
    const redundant = [
        [/, was bedeutet,? dass .+$/i, ''],
        [/, d\.?\s*h\.? .+$/i, ''],
        [/, also .+$/i, ''],
        [/, das heißt .+$/i, ''],
        [/, wobei .+$/i, ''],
        [/, weil .+$/i, ''],
        [/, da .+$/i, ''],
        [/\s*\(siehe .+?\)/gi, ''],
        [/\s*\(vgl\. .+?\)/gi, ''],
        [/, die besonders stabil ist$/i, ' (stabil)'],
        [/, die besondere Stabilität verleiht$/i, ' (stabil)'],
    ];
    
    redundant.forEach(([pattern, replacement]) => {
        const newResult = result.replace(pattern, replacement);
        if (newResult.length >= 15) { // Mindestlänge behalten
            result = newResult;
        }
    });
    
    // 3. Wortökonomie
    const wordEconomy = [
        [/mit unterschiedlicher /gi, 'mit verschiedener '],
        [/mit unterschiedlichen /gi, 'mit verschiedenen '],
        [/aufgrund der Tatsache, dass/gi, 'weil'],
        [/aus dem Grund, dass/gi, 'weil'],
        [/in der Lage sein zu/gi, 'können'],
        [/eine große Anzahl von/gi, 'viele'],
        [/eine kleine Anzahl von/gi, 'wenige'],
        [/zum Zeitpunkt der/gi, 'bei der'],
        [/im Rahmen von/gi, 'bei'],
        [/unter Verwendung von/gi, 'mit'],
        [/mit Hilfe von/gi, 'mit'],
        [/in Bezug auf/gi, 'bezüglich'],
        [/im Hinblick auf/gi, 'für'],
        [/Elektronen werden /gi, 'Elektronen '],
        [/Es handelt sich um /gi, ''],
        [/Es ist ein(?:e)? /gi, ''],
        [/Es sind /gi, ''],
        [/Sie besitzen /gi, 'Haben '],
        [/Sie haben /gi, 'Haben '],
        [/Sie erreichen /gi, 'Erreichen '],
        [/Es hat /gi, 'Hat '],
        [/Sie beschreibt /gi, 'Beschreibt '],
        [/die Energie, um das erste Elektron zu entfernen/gi, 'Energie zur Entfernung des 1. Elektrons'],
        [/ist immer größer als die erste/gi, 'ist größer als die erste'],
        [/ist deutlich höher, weil .+$/gi, 'ist deutlich höher'],
        [/Bei Sauerstoff führt die Elektron-Elektron-Abstoßung in einem besetzten p-Orbital zu niedrigerer IE als erwartet/gi, 'Bei O₂ senkt e⁻-Abstoßung im p-Orbital die IE'],
        [/Stickstoff hat eine halb gefüllte p-Unterschale/gi, 'N hat halbgefüllte p-Unterschale'],
    ];
    
    wordEconomy.forEach(([pattern, replacement]) => {
        result = result.replace(pattern, replacement);
    });
    
    // 4. Überflüssige Artikel am Anfang entfernen (wenn Sinn erhalten bleibt)
    if (result.startsWith('Die ') && result.length > 30) {
        const withoutArticle = result.substring(4);
        if (/^[A-ZÄÖÜ]/.test(withoutArticle)) {
            result = withoutArticle;
        }
    }
    
    return result.trim();
}

// ═══════════════════════════════════════════════════════════════
// STRATEGIE 2: Falsche Antworten verlängern
// ═══════════════════════════════════════════════════════════════

function extendWrongOption(text, questionText, allOptions) {
    let result = text;
    const original = text;
    
    // Verlängere wenn kürzer als 30 Zeichen
    if (text.length >= 30) return text;
    
    // Spezifische Erweiterungen für kurze Optionen
    const specificExtensions = [
        // Chemie-Grundbegriffe
        [/^Die Ladung$/i, 'Die elektrische Ladung des Teilchens'],
        [/^Die Massenzahl$/i, 'Die Massenzahl (Nukleonen)'],
        [/^Die Masse$/i, 'Die Gesamtmasse des Stoffes'],
        [/^Die Masse des Stoffes$/i, 'Die Gesamtmasse des reinen Stoffes'],
        [/^Die Ladung des Ions$/i, 'Die Ionenladung (Oxidationszustand)'],
        [/^Die Anzahl der Moleküle$/i, 'Die Gesamtzahl aller Moleküle'],
        [/^Mit Dezimalzahlen$/i, 'Mit Dezimalzahlen (1, 2, 3, ...)'],
        [/^Der Niederschlag$/i, 'Der ausgefallene Niederschlag'],
        [/^Ein Stoff verbrennt$/i, 'Ein Stoff verbrennt (Oxidation)'],
        [/^Ein Molekül zerfällt$/i, 'Ein Molekül zerfällt in Atome'],
        
        // Reaktionstypen
        [/^Die Katalysatoren$/i, 'Die Katalysatoren der Reaktion'],
        [/^Die Nebenprodukte$/i, 'Die Nebenprodukte der Reaktion'],
        [/^Die Ausgangsstoffe$/i, 'Die Ausgangsstoffe (Edukte)'],
        [/^Die Lösungsmittel$/i, 'Die verwendeten Lösungsmittel'],
        [/^Eine Reaktion mit Wasser$/i, 'Eine Reaktion mit Wasser (Hydrolyse)'],
        [/^Eine Reaktion mit Säuren$/i, 'Eine Reaktion mit Säuren (Neutralisation)'],
        [/^Eine Reaktion mit Stickstoff$/i, 'Eine Reaktion mit elementarem Stickstoff'],
        [/^Eine Reaktion mit Sauerstoff$/i, 'Eine Reaktion mit Sauerstoff (Oxidation)'],
        
        // Elemente/Stoffe
        [/^Sauerstoff ist ein Nichtmetall$/i, 'Sauerstoff gehört zu den Nichtmetallen'],
        [/^Es ist ein Metall$/i, 'Es gehört zu den Übergangsmetallen'],
        [/^Es ist ein Nichtmetall$/i, 'Es gehört zu den typischen Nichtmetallen'],
        [/^Es gibt keinen Unterschied$/i, 'Es besteht kein wesentlicher Unterschied'],
        
        // Allgemeine Erweiterungen
        [/^Der Stoff, der ausfällt$/i, 'Der Stoff, der als Feststoff ausfällt'],
        [/^Der Stoff, der nicht reagiert$/i, 'Der Stoff, der chemisch nicht reagiert'],
        [/^Das Lösungsmittel selbst$/i, 'Das verwendete Lösungsmittel selbst'],
        
        // Energiebezogen
        [/^Energie$/i, 'Die freigesetzte Reaktionsenergie'],
        [/^Wärme$/i, 'Die freigesetzte Wärmeenergie'],
        
        // Kurze chemische Aussagen erweitern
        [/^Ein Element ersetzt ein anderes$/i, 'Ein Element ersetzt ein anderes Element'],
        
        // NEUE: Säure-Base spezifisch
        [/^Sie ist konzentriert$/i, 'Sie hat eine hohe Konzentration'],
        [/^Sie ist gefährlich$/i, 'Sie ist chemisch gefährlich (ätzend)'],
        [/^viele sind stark$/i, 'Die meisten sind starke Elektrolyte'],
        [/^viele sind schwach$/i, 'Die meisten sind schwache Elektrolyte'],
        [/^meist .+ ist stark$/i, 'Nur diese Säure ist wirklich stark'],
        
        // Lösungen
        [/^Erhitzen der Lösung$/i, 'Erhitzen der Lösung (thermisch)'],
        [/^Filtrieren der Lösung$/i, 'Filtrieren der Lösung (mechanisch)'],
        [/^Eine Lösung bei 0°C$/i, 'Eine Lösung bei Gefrierpunkt (0°C)'],
        [/^Eine stark verdünnte Lösung$/i, 'Eine stark verdünnte, wässrige Lösung'],
        
        // Thermodynamik
        [/^Die Reaktion ist endotherm$/i, 'Die Reaktion verläuft endotherm'],
        [/^Die Reaktion ist exotherm$/i, 'Die Reaktion verläuft exotherm'],
        
        // Elektrochemie
        [/^Die Reaktion ist endotherm$/i, 'Die Reaktion verläuft endotherm (ΔH>0)'],
        [/^Das Element wird leicht oxidiert$/i, 'Das Element wird spontan oxidiert'],
    ];
    
    // Versuche spezifische Erweiterung
    for (const [pattern, replacement] of specificExtensions) {
        if (pattern.test(result)) {
            result = result.replace(pattern, replacement);
            return result;
        }
    }
    
    // Generische Erweiterungen für noch kürzere Optionen (<20Z)
    if (result.length < 20 && result === original) {
        // Füge kontextbezogene Suffixe hinzu
        if (/konzentriert/i.test(result)) return result + 'e Lösung';
        if (/verdünnt/i.test(result)) return result + 'e Lösung';
        if (/endotherm/i.test(result)) return result + 'e Reaktion';
        if (/exotherm/i.test(result)) return result + 'e Reaktion';
        if (/neutral/i.test(result) && !/Neutral/.test(result)) return result + 'e Reaktion';
    }
    
    return result;
}

// ═══════════════════════════════════════════════════════════════
// HAUPT-VERARBEITUNG
// ═══════════════════════════════════════════════════════════════

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
        
        // Berechne aktuelle Längen
        const avgCorrectLen = correctIndices.reduce((s, i) => s + options[i].text.length, 0) / correctIndices.length;
        const avgWrongLen = wrongIndices.reduce((s, i) => s + options[i].text.length, 0) / wrongIndices.length;
        const maxWrongLen = Math.max(...wrongIndices.map(i => options[i].text.length));
        
        // Nur bearbeiten wenn korrekte >50% länger als falsche UND korrekter Durchschnitt > 30
        if (avgCorrectLen <= avgWrongLen * 1.5 || avgCorrectLen <= 30) {
            return match; // Kein Problem
        }
        
        let modified = false;
        
        // STRATEGIE 1: Kürze korrekte Optionen
        correctIndices.forEach(idx => {
            const originalText = options[idx].text;
            const shortened = shortenCorrectOption(originalText);
            
            if (shortened !== originalText && shortened.length < originalText.length) {
                options[idx].text = shortened;
                stats.shortened++;
                modified = true;
            }
        });
        
        // STRATEGIE 2: Verlängere falsche Optionen (nur wenn sehr kurz)
        wrongIndices.forEach(idx => {
            const originalText = options[idx].text;
            const extended = extendWrongOption(originalText, questionText, options.map(o => o.text));
            
            if (extended !== originalText && extended.length > originalText.length) {
                options[idx].text = extended;
                stats.extended++;
                modified = true;
            }
        });
        
        // Prüfe ob das Problem gelöst wurde
        const newAvgCorrect = correctIndices.reduce((s, i) => s + options[i].text.length, 0) / correctIndices.length;
        const newAvgWrong = wrongIndices.reduce((s, i) => s + options[i].text.length, 0) / wrongIndices.length;
        
        if (modified && newAvgCorrect <= newAvgWrong * 1.5) {
            fixCount++;
            
            // Rebuild the question block
            const newOptA = `- [ ] A. ${options[0].text}\n`;
            const newOptB = `- [ ] B. ${options[1].text}\n`;
            const newOptC = `- [ ] C. ${options[2].text}\n`;
            const newOptD = `- [ ] D. ${options[3].text}\n`;
            
            return `## Frage ${num}\n**${questionText}**\n\n${newOptA}${newOptB}${newOptC}${newOptD}\n**Richtige Antworten:** ${correctAnswer}`;
        } else if (modified) {
            // Teilweise verbessert aber noch nicht unter 50%
            fixCount++;
            
            const newOptA = `- [ ] A. ${options[0].text}\n`;
            const newOptB = `- [ ] B. ${options[1].text}\n`;
            const newOptC = `- [ ] C. ${options[2].text}\n`;
            const newOptD = `- [ ] D. ${options[3].text}\n`;
            
            return `## Frage ${num}\n**${questionText}**\n\n${newOptA}${newOptB}${newOptC}${newOptD}\n**Richtige Antworten:** ${correctAnswer}`;
        }
        
        stats.unchanged++;
        return match;
    });
    
    return {
        content: newContent,
        modified: newContent !== content,
        fixCount
    };
}

// ═══════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════

console.log('🔧 Starte Längen-Balancierung der Fragen...\n');
console.log('Strategien:');
console.log('  1. Korrekte Optionen kürzen (Fachbegriffe, Redundanzen entfernen)');
console.log('  2. Falsche Optionen verlängern (kontextbezogen)\n');

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
            console.log(`✓ ${chapter}/${file}: ${result.fixCount} Fragen angepasst`);
            filesModified++;
            totalFixed += result.fixCount;
        }
    });
});

console.log('\n═══════════════════════════════════════════════════════════════');
console.log('                    BALANCIERUNG ABGESCHLOSSEN');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`
📊 Statistiken:
   - Dateien modifiziert: ${filesModified}
   - Fragen angepasst: ${totalFixed}
   
🔧 Durchgeführte Änderungen:
   - Korrekte gekürzt: ${stats.shortened}
   - Falsche verlängert: ${stats.extended}
   - Unverändert (komplex): ${stats.unchanged}

💡 Hinweis: Führe jetzt aus:
   node scripts/analyzeFormulierung.js
   
   um die verbleibenden Probleme zu sehen.
   
   Dann: node scripts/convertQuestions.js
   
   um die questionsData.js zu aktualisieren.
`);
