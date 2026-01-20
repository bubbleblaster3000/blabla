/**
 * Script zum Finden und Analysieren problematischer "Alle genannten" Fragen
 * 
 * Ausführen mit: node scripts/findProblematicQuestions.js
 */

const fs = require('fs');
const path = require('path');

const FRAGEN_DIR = path.join(__dirname, '../CODING_PLAN/fragen');

// Problematische Patterns
const PROBLEMATIC_PATTERNS = [
  /Alle genannten/i,
  /Alle oben genannten/i,
  /Alle Aussagen sind/i,
  /Alle obigen/i,
  /Keine der genannten/i,
  /Alle Antworten/i,
  /A, B und C/i,
  /Sowohl A als auch B/i
];

function findProblematicQuestions() {
  const results = [];
  
  // Durchlaufe alle Kapitel
  const kapitelDirs = fs.readdirSync(FRAGEN_DIR).filter(f => 
    f.match(/^\d{2}_/) && fs.statSync(path.join(FRAGEN_DIR, f)).isDirectory()
  );
  
  kapitelDirs.forEach(kapitel => {
    const kapitelPath = path.join(FRAGEN_DIR, kapitel);
    const files = fs.readdirSync(kapitelPath).filter(f => f.endsWith('.md'));
    
    files.forEach(file => {
      const filePath = path.join(kapitelPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Finde alle Fragen
      const questionBlocks = content.split(/## Frage (\d+)/);
      
      for (let i = 1; i < questionBlocks.length; i += 2) {
        const questionNum = questionBlocks[i];
        const questionContent = questionBlocks[i + 1] || '';
        
        // Prüfe auf problematische Patterns
        for (const pattern of PROBLEMATIC_PATTERNS) {
          if (pattern.test(questionContent)) {
            // Extrahiere Fragetext
            const textMatch = questionContent.match(/\*\*(.+?)\*\*/);
            const questionText = textMatch ? textMatch[1] : 'Unbekannt';
            
            // Extrahiere die problematische Option
            const optionMatch = questionContent.match(new RegExp(`- \\[ \\] [A-Z]\\. .*${pattern.source}.*`, 'i'));
            const problematicOption = optionMatch ? optionMatch[0] : 'Unbekannt';
            
            // Extrahiere richtige Antwort
            const answerMatch = questionContent.match(/\*\*Richtige Antworten?:\*\* ([A-Z, ]+)/);
            const correctAnswer = answerMatch ? answerMatch[1] : 'Unbekannt';
            
            results.push({
              file: `${kapitel}/${file}`,
              questionNum,
              questionText: questionText.substring(0, 80) + (questionText.length > 80 ? '...' : ''),
              problematicOption: problematicOption.substring(0, 60),
              correctAnswer,
              pattern: pattern.source
            });
            break; // Nur einmal pro Frage zählen
          }
        }
      }
    });
  });
  
  return results;
}

// Hauptausführung
const results = findProblematicQuestions();

console.log('=' .repeat(80));
console.log('PROBLEMATISCHE FRAGEN MIT "ALLE GENANNTEN" OPTIONEN');
console.log('=' .repeat(80));
console.log(`\nGefunden: ${results.length} problematische Fragen\n`);

// Gruppiere nach Datei
const byFile = {};
results.forEach(r => {
  if (!byFile[r.file]) byFile[r.file] = [];
  byFile[r.file].push(r);
});

Object.keys(byFile).sort().forEach(file => {
  console.log(`\n📁 ${file}`);
  byFile[file].forEach(q => {
    console.log(`   Frage ${q.questionNum}: ${q.questionText}`);
    console.log(`   ❌ Option: ${q.problematicOption}`);
    console.log(`   ✓ Richtige Antwort: ${q.correctAnswer}`);
    console.log('');
  });
});

// Zusammenfassung nach Kapitel
console.log('\n' + '=' .repeat(80));
console.log('ZUSAMMENFASSUNG NACH KAPITEL');
console.log('=' .repeat(80));

const byKapitel = {};
results.forEach(r => {
  const kapitel = r.file.split('/')[0];
  if (!byKapitel[kapitel]) byKapitel[kapitel] = 0;
  byKapitel[kapitel]++;
});

Object.keys(byKapitel).sort().forEach(k => {
  console.log(`${k}: ${byKapitel[k]} problematische Fragen`);
});

console.log(`\n🔴 TOTAL: ${results.length} Fragen müssen überarbeitet werden!`);
