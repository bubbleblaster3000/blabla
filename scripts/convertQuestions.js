/**
 * Konvertiert alle Markdown-Fragen in questionsData.js Format
 * 
 * Sortierung: Alle Level 1 Fragen (150), dann Level 2, usw.
 * 
 * Ausführen mit: node scripts/convertQuestions.js
 */

const fs = require('fs');
const path = require('path');

// Konfiguration
const FRAGEN_DIR = path.join(__dirname, '../CODING_PLAN/fragen');
const OUTPUT_FILE = path.join(__dirname, '../casual-mode/js/questionsData.js');

// Kapitel-Definitionen (in Reihenfolge)
const KAPITEL = [
  { folder: '01_Aufbau_Atome_Periodensystem', name: 'Aufbau der Atome & Periodensystem' },
  { folder: '02_Elemente_Ionen_Mol', name: 'Elemente, Ionen & Mol' },
  { folder: '03_Gleichungen_Stoechiometrie', name: 'Gleichungen & Stöchiometrie' },
  { folder: '04_Reaktionen_Empirische_Formeln', name: 'Reaktionen & Empirische Formeln' },
  { folder: '05_Loesungen_Konzentrationen', name: 'Lösungen & Konzentrationen' },
  { folder: '06_Saeuren_Basen_Grundlagen', name: 'Säuren & Basen Grundlagen' },
  { folder: '07_Bohr_Elektronenkonfiguration', name: 'Bohr & Elektronenkonfiguration' },
  { folder: '08_Ionenbindung_Lewis', name: 'Ionenbindung & Lewis' },
  { folder: '09_Polaritaet_VSEPR', name: 'Polarität & VSEPR' },
  { folder: '10_Valenzbindung_Hybridisierung_MO', name: 'Valenzbindung, Hybridisierung & MO' },
  { folder: '11_Thermodynamik_Enthalpie', name: 'Thermodynamik & Enthalpie' },
  { folder: '12_Aggregatzustaende_Phasendiagramme', name: 'Aggregatzustände & Phasendiagramme' },
  { folder: '13_Kolligative_Eigenschaften', name: 'Kolligative Eigenschaften' },
  { folder: '14_Saeuren_Basen_pH_Puffer', name: 'Säuren, Basen, pH & Puffer' },
  { folder: '15_Elektrochemie_Redox', name: 'Elektrochemie & Redox' }
];

/**
 * Parst eine Markdown-Datei und extrahiert alle Fragen
 */
function parseMarkdownFile(filePath, level, kapitelIndex) {
  const content = fs.readFileSync(filePath, 'utf8');
  const questions = [];
  
  // Split bei "## Frage" um einzelne Fragen zu bekommen
  const fragenBlocks = content.split(/## Frage \d+/).slice(1);
  
  fragenBlocks.forEach((block, index) => {
    const question = parseQuestionBlock(block, level, kapitelIndex, index + 1);
    if (question) {
      questions.push(question);
    }
  });
  
  return questions;
}

/**
 * Parst einen einzelnen Fragen-Block
 */
function parseQuestionBlock(block, level, kapitelIndex, questionIndex) {
  // Extrahiere Fragetext (erste Zeile nach dem Header, eingeschlossen in **)
  const textMatch = block.match(/\*\*(.+?)\*\*/);
  if (!textMatch) {
    console.warn(`Keine Frage gefunden in Block: ${block.substring(0, 100)}`);
    return null;
  }
  const text = textMatch[1].trim();
  
  // Extrahiere Optionen (Zeilen die mit "- [ ]" beginnen)
  const optionMatches = block.match(/- \[ \] [A-Z]\. .+/g);
  if (!optionMatches || optionMatches.length === 0) {
    console.warn(`Keine Optionen gefunden für Frage: ${text}`);
    return null;
  }
  
  const options = optionMatches.map(opt => {
    // Entferne "- [ ] A. " Präfix
    return opt.replace(/- \[ \] [A-Z]\. /, '').trim();
  });
  
  // Extrahiere korrekte Antworten
  const answersMatch = block.match(/\*\*Richtige Antworten?:\*\* ([A-Z, ]+)/);
  if (!answersMatch) {
    console.warn(`Keine Antworten gefunden für Frage: ${text}`);
    return null;
  }
  
  // Konvertiere Buchstaben zu Indizes (A=0, B=1, etc.)
  const answerLetters = answersMatch[1].split(/,\s*/).map(a => a.trim());
  const correctAnswers = answerLetters.map(letter => letter.charCodeAt(0) - 65);
  
  return {
    text,
    options,
    correctAnswers,
    difficulty: level,
    chapter: kapitelIndex + 1,
    chapterName: KAPITEL[kapitelIndex].name
  };
}

/**
 * Hauptfunktion: Sammelt alle Fragen und sortiert nach Level
 */
function collectAllQuestions() {
  // Struktur: questionsByLevel[level][kapitelIndex] = [questions]
  const questionsByLevel = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  
  // Durchlaufe alle Kapitel
  KAPITEL.forEach((kapitel, kapitelIndex) => {
    const kapitelPath = path.join(FRAGEN_DIR, kapitel.folder);
    
    // Durchlaufe alle 5 Levels
    for (let level = 1; level <= 5; level++) {
      const filePath = path.join(kapitelPath, `chemie-level-${level}.md`);
      
      if (fs.existsSync(filePath)) {
        const questions = parseMarkdownFile(filePath, level, kapitelIndex);
        questionsByLevel[level].push(...questions);
        console.log(`✓ ${kapitel.folder} Level ${level}: ${questions.length} Fragen`);
      } else {
        console.warn(`⚠ Datei nicht gefunden: ${filePath}`);
      }
    }
  });
  
  return questionsByLevel;
}

/**
 * Erstellt die finale Fragenreihenfolge
 * Level 1 (alle Kapitel) → Level 2 (alle Kapitel) → ... → Level 5 (alle Kapitel)
 */
function createFinalQuestionOrder(questionsByLevel) {
  const allQuestions = [];
  let globalId = 1;
  
  // Sortierung: Erst alle Level 1, dann alle Level 2, etc.
  for (let level = 1; level <= 5; level++) {
    const levelQuestions = questionsByLevel[level];
    levelQuestions.forEach(q => {
      allQuestions.push({
        id: globalId++,
        text: q.text,
        options: q.options,
        correctAnswers: q.correctAnswers,
        difficulty: q.difficulty,
        chapter: q.chapter,
        chapterName: q.chapterName
      });
    });
    
    console.log(`\nLevel ${level}: ${levelQuestions.length} Fragen (IDs ${globalId - levelQuestions.length} - ${globalId - 1})`);
  }
  
  return allQuestions;
}

/**
 * Generiert die questionsData.js Datei
 */
function generateQuestionsDataJS(questions) {
  const jsContent = `/**
 * Questions Data - Generiert aus Markdown-Fragen
 * 
 * Sortierung: Level 1 (Fragen 1-150), Level 2 (151-300), Level 3 (301-450), 
 *             Level 4 (451-600), Level 5 (601-750)
 * 
 * Generiert am: ${new Date().toLocaleDateString('de-DE')}
 * Gesamtanzahl: ${questions.length} Fragen
 */

const QUESTIONS_DATA = {
  chemie: {
    subject: "Chemie",
    totalQuestions: ${questions.length},
    questions: ${JSON.stringify(questions, null, 6).replace(/"(\w+)":/g, '$1:')}
  }
};

// Exportiere für globale Nutzung
window.QUESTIONS_DATA = QUESTIONS_DATA;
`;
  
  return jsContent;
}

/**
 * Hauptausführung
 */
function main() {
  console.log('🔄 Starte Konvertierung der Markdown-Fragen...\n');
  console.log('=' .repeat(60));
  
  // Sammle alle Fragen
  const questionsByLevel = collectAllQuestions();
  
  console.log('\n' + '=' .repeat(60));
  
  // Erstelle finale Reihenfolge
  const allQuestions = createFinalQuestionOrder(questionsByLevel);
  
  console.log('\n' + '=' .repeat(60));
  console.log(`\n✅ Gesamtanzahl Fragen: ${allQuestions.length}`);
  
  // Generiere JS-Datei
  const jsContent = generateQuestionsDataJS(allQuestions);
  
  // Schreibe Datei
  fs.writeFileSync(OUTPUT_FILE, jsContent, 'utf8');
  console.log(`\n📁 Datei geschrieben: ${OUTPUT_FILE}`);
  
  // Statistiken
  console.log('\n📊 Statistiken:');
  console.log(`   Level 1: Fragen 1-150 (Definitionen & Grundbegriffe)`);
  console.log(`   Level 2: Fragen 151-300 (Anwendung einfacher Konzepte)`);
  console.log(`   Level 3: Fragen 301-450 (Mittlere Schwierigkeit)`);
  console.log(`   Level 4: Fragen 451-600 (Fortgeschritten)`);
  console.log(`   Level 5: Fragen 601-750 (Experte)`);
}

// Ausführen
main();
