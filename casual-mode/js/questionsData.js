/**
 * Questions Data - Direkt eingebettet für Offline-Nutzung
 * Keine Server erforderlich!
 */

const QUESTIONS_DATA = {
  chemie: {
    subject: "Chemie",
    totalQuestions: 20,
    questions: [
      {
        id: 1,
        text: "Welche Aussagen zum Atomaufbau sind korrekt?",
        options: [
          "Protonen befinden sich im Atomkern",
          "Elektronen haben eine positive Ladung",
          "Neutronen sind elektrisch neutral",
          "Die Elektronenhülle ist viel größer als der Atomkern"
        ],
        correctAnswers: [0, 2, 3],
        difficulty: 1
      },
      {
        id: 2,
        text: "Welche der folgenden Elemente sind Halogene?",
        options: [
          "Fluor (F)",
          "Natrium (Na)",
          "Chlor (Cl)",
          "Brom (Br)",
          "Kalium (K)"
        ],
        correctAnswers: [0, 2, 3],
        difficulty: 1
      },
      {
        id: 3,
        text: "Welche Aussagen über kovalente Bindungen sind richtig?",
        options: [
          "Elektronen werden zwischen Atomen geteilt",
          "Sie entstehen durch vollständige Elektronenübertragung",
          "Sie kommen häufig zwischen Nichtmetallen vor",
          "Die Bindung ist gerichtet"
        ],
        correctAnswers: [0, 2, 3],
        difficulty: 1
      },
      {
        id: 4,
        text: "Welche Eigenschaften treffen auf Säuren zu?",
        options: [
          "pH-Wert kleiner als 7",
          "Können Protonen abgeben (nach Brønsted)",
          "Reagieren mit Basen zu Salz und Wasser",
          "Haben immer einen pH-Wert von 0"
        ],
        correctAnswers: [0, 1, 2],
        difficulty: 1
      },
      {
        id: 5,
        text: "Welche Aussagen zur Elektronegativität sind korrekt?",
        options: [
          "Fluor hat die höchste Elektronegativität",
          "Die Elektronegativität nimmt im Periodensystem von links nach rechts zu",
          "Metalle haben generell eine hohe Elektronegativität",
          "Die Elektronegativität nimmt von oben nach unten ab"
        ],
        correctAnswers: [0, 1, 3],
        difficulty: 2
      },
      {
        id: 6,
        text: "Welche Faktoren beeinflussen die Reaktionsgeschwindigkeit?",
        options: [
          "Temperatur",
          "Konzentration der Reaktanten",
          "Anwesenheit eines Katalysators",
          "Farbe der Lösung",
          "Oberfläche der Reaktanten"
        ],
        correctAnswers: [0, 1, 2, 4],
        difficulty: 2
      },
      {
        id: 7,
        text: "Welche Aussagen zum chemischen Gleichgewicht sind richtig?",
        options: [
          "Hin- und Rückreaktion laufen gleich schnell ab",
          "Die Konzentrationen der Stoffe ändern sich nicht mehr",
          "Es handelt sich um einen dynamischen Zustand",
          "Das Gleichgewicht kann durch Temperaturänderung verschoben werden"
        ],
        correctAnswers: [0, 1, 2, 3],
        difficulty: 2
      },
      {
        id: 8,
        text: "Welche Hybridisierungen gibt es beim Kohlenstoff?",
        options: [
          "sp³ (Tetraeder)",
          "sp² (trigonal-planar)",
          "sp (linear)",
          "sp⁴ (pentagonal)"
        ],
        correctAnswers: [0, 1, 2],
        difficulty: 2
      },
      {
        id: 9,
        text: "Welche Aussagen über Redoxreaktionen sind korrekt?",
        options: [
          "Oxidation bedeutet Elektronenabgabe",
          "Reduktion bedeutet Elektronenaufnahme",
          "Das Oxidationsmittel wird selbst reduziert",
          "Bei einer Redoxreaktion ändern sich Oxidationszahlen"
        ],
        correctAnswers: [0, 1, 2, 3],
        difficulty: 2
      },
      {
        id: 10,
        text: "Welche Aussagen zur Thermodynamik chemischer Reaktionen sind richtig?",
        options: [
          "Exotherme Reaktionen geben Wärme ab (ΔH < 0)",
          "Eine negative freie Enthalpie (ΔG < 0) bedeutet, die Reaktion ist spontan",
          "Die Entropie ist ein Maß für die Unordnung",
          "Alle exothermen Reaktionen laufen spontan ab"
        ],
        correctAnswers: [0, 1, 2],
        difficulty: 3
      },
      {
        id: 11,
        text: "Welche Aussagen zur VSEPR-Theorie sind korrekt?",
        options: [
          "Elektronenpaare stoßen sich gegenseitig ab",
          "Freie Elektronenpaare benötigen mehr Raum als bindende",
          "Die Molekülgeometrie hängt von der Anzahl der Elektronenpaare ab",
          "Die Theorie erklärt die Farbe von Molekülen"
        ],
        correctAnswers: [0, 1, 2],
        difficulty: 3
      },
      {
        id: 12,
        text: "Welche Aussagen zur Molekülorbitaltheorie sind richtig?",
        options: [
          "Bindende Molekülorbitale haben niedrigere Energie als die Atomorbitale",
          "Antibindende Orbitale werden mit * gekennzeichnet",
          "Die Bindungsordnung berechnet sich aus (bindend - antibindend) / 2",
          "O₂ ist nach der MO-Theorie paramagnetisch"
        ],
        correctAnswers: [0, 1, 2, 3],
        difficulty: 3
      },
      {
        id: 13,
        text: "Welche Aussagen zu Pufferlösungen sind korrekt?",
        options: [
          "Sie bestehen aus einer schwachen Säure und ihrer konjugierten Base",
          "Sie halten den pH-Wert bei Zugabe kleiner Mengen Säure/Base konstant",
          "Die Henderson-Hasselbalch-Gleichung beschreibt den pH-Wert",
          "Puffer funktionieren bei beliebig großen Säure/Base-Zugaben"
        ],
        correctAnswers: [0, 1, 2],
        difficulty: 3
      },
      {
        id: 14,
        text: "Welche Aussagen zur Kinetik sind korrekt?",
        options: [
          "Die Reaktionsordnung kann nur experimentell bestimmt werden",
          "Ein Katalysator senkt die Aktivierungsenergie",
          "Die Arrhenius-Gleichung beschreibt die Temperaturabhängigkeit",
          "Die Reaktionsordnung entspricht immer den stöchiometrischen Koeffizienten"
        ],
        correctAnswers: [0, 1, 2],
        difficulty: 3
      },
      {
        id: 15,
        text: "Welche Aussagen zur Kristallfeldtheorie bei oktaedrischen Komplexen sind richtig?",
        options: [
          "Die d-Orbitale spalten in t₂g und eg auf",
          "Die eg-Orbitale liegen energetisch höher",
          "Die Größe der Aufspaltung Δ hängt vom Liganden ab",
          "Starke Liganden führen zu High-Spin-Komplexen"
        ],
        correctAnswers: [0, 1, 2],
        difficulty: 4
      },
      {
        id: 16,
        text: "Welche Aussagen zur spektrochemischen Reihe sind korrekt?",
        options: [
          "I⁻ ist ein schwacher Feldligand",
          "CN⁻ ist ein starker Feldligand",
          "CO verursacht eine große Kristallfeldaufspaltung",
          "H₂O ist ein stärkerer Ligand als NH₃"
        ],
        correctAnswers: [0, 1, 2],
        difficulty: 4
      },
      {
        id: 17,
        text: "Welche Aussagen zur Stereochemie sind korrekt?",
        options: [
          "Enantiomere verhalten sich wie Bild und Spiegelbild",
          "Diastereomere haben unterschiedliche physikalische Eigenschaften",
          "Ein Molekül mit n Stereozentren hat maximal 2ⁿ Stereoisomere",
          "Meso-Verbindungen sind trotz Stereozentren achiral"
        ],
        correctAnswers: [0, 1, 2, 3],
        difficulty: 4
      },
      {
        id: 18,
        text: "Welche quantenmechanischen Prinzipien sind für die Elektronenkonfiguration relevant?",
        options: [
          "Das Pauli-Prinzip (keine zwei Elektronen mit gleichen Quantenzahlen)",
          "Die Hundsche Regel (maximale Spinmultiplizität)",
          "Das Aufbauprinzip (Besetzung nach Energie)",
          "Die Heisenbergsche Unschärferelation bestimmt die Orbitalform"
        ],
        correctAnswers: [0, 1, 2],
        difficulty: 4
      },
      {
        id: 19,
        text: "Betrachten Sie einen oktaedrischen Komplex eines 3d-Übergangsmetalls mit d⁷-High-Spin-Konfiguration. Das gemessene magnetische Moment liegt über dem Spin-Only-Wert. Welche Erklärung ist korrekt?",
        options: [
          "Der Jahn-Teller-Effekt führt zu tetragonaler Verzerrung und löscht den Bahndrehimpuls",
          "Der Grundterm (⁴T₁g) besitzt Bahndrehimpuls, der durch Spin-Bahn-Kopplung das Moment erhöht",
          "Der Nephelauxetische Effekt reduziert die Racah-Parameter drastisch",
          "Ein thermisches Gleichgewicht zwischen High-Spin und Low-Spin erhöht den Spinbeitrag"
        ],
        correctAnswers: [1],
        difficulty: 5
      },
      {
        id: 20,
        text: "Welche Aussagen zur Marcus-Theorie des Elektronentransfers sind korrekt?",
        options: [
          "Die Reorganisationsenergie λ beeinflusst die Aktivierungsbarriere",
          "Im invertierten Bereich nimmt die Reaktionsgeschwindigkeit mit steigender Triebkraft ab",
          "Die Theorie erklärt den Elektronentransfer über große Distanzen",
          "Die Theorie ist nur auf organische Moleküle anwendbar"
        ],
        correctAnswers: [0, 1, 2],
        difficulty: 5
      }
    ]
  }
  // Hier können später weitere Fächer hinzugefügt werden:
  // biologie: { ... },
  // physik: { ... }
};

// Exportiere für globale Nutzung
window.QUESTIONS_DATA = QUESTIONS_DATA;
