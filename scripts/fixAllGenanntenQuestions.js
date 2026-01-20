/**
 * Script zum automatischen Korrigieren von "Alle genannten sind korrekt" Fragen
 * 
 * Strategie:
 * 1. Finde Fragen mit "Alle genannten" Option und Antwort D
 * 2. Ändere Option D zu einer falschen Alternative
 * 3. Ändere Antwort von D zu A, B, C
 * 
 * Ausführen mit: node scripts/fixAllGenanntenQuestions.js
 */

const fs = require('fs');
const path = require('path');

const FRAGEN_DIR = path.join(__dirname, '../CODING_PLAN/fragen');

// Problematische Patterns
const PROBLEMATIC_PATTERNS = [
  /Alle genannten sind korrekt/i,
  /Alle genannten Gründe/i,
  /Alle genannten Faktoren/i,
  /Alle genannten Bedingungen/i,
  /Alle genannten Methoden/i,
  /Alle genannten tragen bei/i,
  /Alle genannten Anwendungen/i,
  /Alle genannten$/i,
  /Alle Aussagen sind korrekt/i,
  /Sowohl A als auch B/i,
  /Keine der genannten/i
];

// Falsche Alternativen für verschiedene Themen
const FALSE_ALTERNATIVES = {
  // Kapitel 8: Ionenbindung & Lewis
  '08_Ionenbindung_Lewis': {
    'level-1': [
      'Die Gitterenergie ist unabhängig von den Ionenladungen',
      'Ionengitter sind immer instabil',
      'Die Gitterenergie kann nicht berechnet werden'
    ],
    'level-3': [
      'Die Ionenradien haben keinen Einfluss auf die Gitterenergie',
      'MgO und NaCl haben identische Gitterenergien',
      'Die Ladung der Ionen ist irrelevant für die Bindungsstärke'
    ],
    'level-5': [
      'Beide Methoden liefern immer identische Werte',
      'Der Born-Haber-Zyklus ist rein theoretisch ohne experimentelle Daten',
      'Kovalente Anteile können nicht nachgewiesen werden'
    ]
  },
  
  // Kapitel 9: Polarität & VSEPR
  '09_Polaritaet_VSEPR': {
    'level-5': [
      'Die Abstoßung ist in axialer Position geringer',
      'Axiale Positionen haben nur einen 90°-Nachbarn',
      'Freie Elektronenpaare bevorzugen immer axiale Positionen',
      'Die Positionen sind energetisch gleichwertig'
    ]
  },
  
  // Kapitel 10: Valenzbindung, Hybridisierung & MO
  '10_Valenzbindung_Hybridisierung_MO': {
    'level-5': [
      'Die HOMO-LUMO-Lücke ist irrelevant für die Reaktivität',
      'LUMO bezeichnet das niedrigste besetzte Orbital',
      'O₂⁺ hat eine niedrigere Bindungsordnung als O₂',
      'Konjugation führt zu lokalisierten π-Elektronen',
      'Normale VB-Theorie erklärt 3-Zentren-Bindungen problemlos'
    ]
  },
  
  // Kapitel 11: Thermodynamik & Enthalpie
  '11_Thermodynamik_Enthalpie': {
    'level-3': [
      'ΔH kann nur kalorimetrisch gemessen werden',
      'Die Enthalpie der Sublimation ist immer negativ (exotherm)'
    ],
    'level-4': [
      'Die Bindungsenergie ist unabhängig von der molekularen Umgebung',
      'Der Ionenabstand hat keinen Einfluss auf die Gitterenergie'
    ],
    'level-5': [
      'Bindungsenergien sind in allen Molekülen identisch',
      'Diamant ist thermodynamisch stabiler als Graphit',
      'Hohe Temperatur begünstigt immer höhere Ausbeute',
      'Die Kirchhoff-Gleichung gilt nur bei konstantem ΔCp',
      'O-H-Bindungen sind relativ schwach (~200 kJ/mol)',
      'Die Madelung-Konstante ist für alle Kristalle identisch'
    ]
  },
  
  // Kapitel 12: Aggregatzustände & Phasendiagramme
  '12_Aggregatzustaende_Phasendiagramme': {
    'level-2': [
      'Der Siedepunkt ist unabhängig von intermolekularen Kräften',
      'Nur Van-der-Waals-Kräfte beeinflussen den Siedepunkt'
    ],
    'level-3': [
      'Eis ist dichter als flüssiges Wasser',
      'Der Tripelpunkt liegt oberhalb von 1 atm für CO₂',
      'Der Dampfdruck steigt linear mit der Temperatur',
      'Die Verdampfungsenthalpie ist immer negativ',
      'Beim Schmelzen werden alle intermolekularen Kräfte gebrochen',
      'Ein überkritisches Fluid existiert nur theoretisch',
      'Überkritisches CO₂ ist nur für Koffein geeignet',
      'Die Dampfdruckkurve zeigt nach unten links',
      'Sublimation erfordert Temperaturen über dem Tripelpunkt'
    ],
    'level-4': [
      'Die Clausius-Clapeyron-Gleichung gilt nur für ideale Gase',
      'Am kritischen Punkt ist die Oberflächenspannung maximal',
      'Erhöhter Druck verhindert das Schmelzen von Eis',
      'Die Oberflächenspannung steigt mit der Temperatur'
    ],
    'level-5': [
      'Wasser existiert nur in einer Eismodifikation',
      'Die Antoine-Gleichung ist weniger genau als Clausius-Clapeyron',
      'Regelation ist bei allen Festkörpern beobachtbar',
      'Überkritisches Wasser kann keine unpolaren Stoffe lösen',
      'Helium-4 hat einen normalen Tripelpunkt',
      'Bei Erhitzung nimmt das Dampfvolumen ab',
      'Wasser befolgt die Trouton-Regel exakt',
      'Bei kleinen Tröpfchen sinkt der Dampfdruck',
      'Sublimation erfordert Temperaturen über 100°C'
    ]
  },
  
  // Kapitel 13: Kolligative Eigenschaften
  '13_Kolligative_Eigenschaften': {
    'level-2': [
      'Der gelöste Stoff erhöht den Dampfdruck',
      'Die Dampfdruckerniedrigung ist unabhängig vom Molenbruch'
    ],
    'level-3': [
      'Ionenpaare erhöhen den van\'t Hoff-Faktor',
      'Die Dampfdruckerniedrigung bewirkt eine Gefrierpunkterhöhung',
      'Bei hypertoner Lösung nimmt die Zelle Wasser auf',
      'Bei Umkehrosmose fließt Wasser zur konzentrierten Seite',
      'Alle Lösungen haben den gleichen kolligativen Effekt',
      'Ethylenglykol erhöht den Gefrierpunkt',
      'Isotonische Lösung unterscheidet sich stark vom Blutdruck',
      'Das Raoult\'sche Gesetz gilt für alle Konzentrationen'
    ],
    'level-4': [
      'Der Dampfdruck ist unabhängig von der Wechselwirkung zwischen Komponenten',
      'Die Ebullioskopie ist genauer als die Kryoskopie'
    ],
    'level-5': [
      'Gelöste Gase haben keinen Einfluss auf kolligative Eigenschaften',
      'Die Aktivität entspricht immer dem Molenbruch',
      'Azeotrope können durch einfache Destillation getrennt werden',
      'Die Debye-Hückel-Theorie gilt für alle Konzentrationen',
      'Der onkotische Druck wird durch kleine Moleküle erzeugt',
      'Süß- und Salzwasserfische haben identische Osmoregulation',
      'Osmose hat keinen Zusammenhang mit dem Membranpotential',
      'Die Dialyselösung muss hyperton zum Blut sein'
    ]
  },
  
  // Kapitel 14: Säuren & Basen, pH, Puffer
  '14_Saeuren_Basen_pH_Puffer': {
    'level-3': [
      'Jedes Proton hat die gleiche Dissoziationskonstante'
    ],
    'level-4': [
      'Die Pufferkapazität ist unabhängig von der Konzentration',
      'Der Blutpuffer besteht nur aus H₂CO₃/HCO₃⁻'
    ],
    'level-5': [
      'Hyperventilation führt zu respiratorischer Acidose',
      'Die Näherungsformel gilt auch bei starker Dissoziation',
      'Die Titration schwacher Säure mit schwacher Base zeigt scharfen Äquivalenzpunkt',
      'Die Pufferkapazität ist bei pH ≠ pKs am höchsten',
      'Der pH von TRIS ist temperaturunabhängig',
      'Der Gran-Plot basiert auf visueller Farbbestimmung',
      'Der dritte Äquivalenzpunkt von H₃PO₄ ist leicht erkennbar',
      'Superacids sind nur wenig stärker als Schwefelsäure'
    ]
  },
  
  // Kapitel 15: Elektrochemie & Redox
  '15_Elektrochemie_Redox': {
    'level-3': [
      'Kalium gibt weniger leicht Elektronen ab als Zink',
      'Das zu beschichtende Objekt ist die Anode'
    ],
    'level-4': [
      'Bei hoher Cl⁻-Konzentration entsteht bevorzugt O₂',
      'Der Wirkungsgrad von Brennstoffzellen ist durch Carnot limitiert',
      'Die Lithium-Ionen-Batterie hat niedrigere Spannung als der Bleiakku'
    ],
    'level-5': [
      'Das Pourbaix-Diagramm zeigt nur die Stabilität von reinem Metall',
      'Bei der Butler-Volmer-Gleichung ist nur die Überspannung relevant',
      'EIS wird nur für Korrosionsuntersuchungen verwendet',
      'Das Membranverfahren vermischt Cl₂ und NaOH',
      'Redox-Flow-Batterien haben kürzere Lebensdauer als Li-Ion',
      'Bei der Wasserspaltung ist die HER die größere Herausforderung',
      'Cu-Katalysatoren produzieren selektiv CO',
      'SOFCs erfordern teure Edelmetallkatalysatoren',
      'Die SEI-Schicht ist elektronenleitend',
      'Festkörperbatterien haben geringere Energiedichte'
    ]
  }
};

let totalFixed = 0;
let totalFiles = 0;

function processFile(filePath, kapitel, level) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let fixCount = 0;
  
  // Alternativen für dieses Kapitel und Level
  const altKey = `level-${level}`;
  const alternatives = FALSE_ALTERNATIVES[kapitel]?.[altKey] || [];
  let altIndex = 0;
  
  // Finde alle Fragen-Blöcke
  const questionBlocks = content.split(/(## Frage \d+)/);
  
  for (let i = 1; i < questionBlocks.length; i += 2) {
    const header = questionBlocks[i];
    let block = questionBlocks[i + 1] || '';
    
    // Prüfe auf problematische Pattern in Option D
    for (const pattern of PROBLEMATIC_PATTERNS) {
      const optionDMatch = block.match(new RegExp(`(- \\[ \\] D\\. .*${pattern.source}.*)`, 'i'));
      
      if (optionDMatch) {
        // Prüfe ob Antwort D ist
        const answerMatch = block.match(/\*\*Richtige Antworten?:\*\* D/);
        
        if (answerMatch) {
          // Hole eine falsche Alternative
          let falseAlt = alternatives[altIndex % Math.max(1, alternatives.length)] || 
                          'Diese Aussage ist wissenschaftlich nicht korrekt';
          altIndex++;
          
          // Ersetze Option D
          const newOptionD = `- [ ] D. ${falseAlt}`;
          block = block.replace(optionDMatch[1], newOptionD);
          
          // Ändere Antwort zu A, B, C
          block = block.replace(/\*\*Richtige Antworten?:\*\* D/, '**Richtige Antworten:** A, B, C');
          
          questionBlocks[i + 1] = block;
          modified = true;
          fixCount++;
          
          console.log(`  ✓ Frage ${header.match(/\d+/)[0]}: "${optionDMatch[1].substring(0, 50)}..." → "${falseAlt.substring(0, 40)}..."`);
          break;
        }
      }
    }
    
    // Spezialfall: "Sowohl A als auch B" mit Antwort D
    const sowholMatch = block.match(/(- \[ \] D\. Sowohl A als auch B.*)/i);
    if (sowholMatch) {
      const answerMatch = block.match(/\*\*Richtige Antworten?:\*\* D/);
      if (answerMatch) {
        let falseAlt = alternatives[altIndex % Math.max(1, alternatives.length)] || 
                        'Diese Kombination trifft nicht zu';
        altIndex++;
        
        const newOptionD = `- [ ] D. ${falseAlt}`;
        block = block.replace(sowholMatch[1], newOptionD);
        block = block.replace(/\*\*Richtige Antworten?:\*\* D/, '**Richtige Antworten:** A, B');
        
        questionBlocks[i + 1] = block;
        modified = true;
        fixCount++;
        
        console.log(`  ✓ Frage ${header.match(/\d+/)[0]}: "Sowohl A als auch B" → A, B`);
      }
    }
  }
  
  if (modified) {
    const newContent = questionBlocks.join('');
    fs.writeFileSync(filePath, newContent, 'utf8');
    totalFixed += fixCount;
    totalFiles++;
  }
  
  return fixCount;
}

function main() {
  console.log('🔧 Starte Korrektur der "Alle genannten" Fragen...\n');
  console.log('='.repeat(70));
  
  // Durchlaufe alle Kapitel
  const kapitelDirs = fs.readdirSync(FRAGEN_DIR).filter(f => 
    f.match(/^\d{2}_/) && fs.statSync(path.join(FRAGEN_DIR, f)).isDirectory()
  );
  
  kapitelDirs.forEach(kapitel => {
    const kapitelPath = path.join(FRAGEN_DIR, kapitel);
    const files = fs.readdirSync(kapitelPath).filter(f => f.endsWith('.md') && f.includes('level'));
    
    let kapitelFixes = 0;
    
    files.forEach(file => {
      const level = file.match(/level-(\d)/)?.[1];
      const filePath = path.join(kapitelPath, file);
      
      console.log(`\n📁 ${kapitel}/${file}`);
      const fixes = processFile(filePath, kapitel, level);
      kapitelFixes += fixes;
      
      if (fixes === 0) {
        console.log('   (keine Änderungen nötig)');
      }
    });
  });
  
  console.log('\n' + '='.repeat(70));
  console.log(`\n✅ Fertig! ${totalFixed} Fragen in ${totalFiles} Dateien korrigiert.`);
}

main();
