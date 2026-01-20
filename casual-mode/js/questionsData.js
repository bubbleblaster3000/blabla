/**
 * Questions Data - Generiert aus Markdown-Fragen
 * 
 * Sortierung: Level 1 (Fragen 1-150), Level 2 (151-300), Level 3 (301-450), 
 *             Level 4 (451-600), Level 5 (601-750)
 * 
 * Generiert am: 20.1.2026
 * Gesamtanzahl: 750 Fragen
 */

const QUESTIONS_DATA = {
  chemie: {
    subject: "Chemie",
    totalQuestions: 750,
    questions: [
      {
            id: 1,
            text: "Aus welchen Teilchen besteht ein Atom?",
            options: [
                  "Protonen, Neutronen und Elektronen",
                  "Nur aus Protonen und Elektronen",
                  "Nur aus Neutronen und Elektronen",
                  "Aus Molekülen und Ionen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 2,
            text: "Wo befinden sich die Protonen und Neutronen im Atom?",
            options: [
                  "In der Elektronenhülle",
                  "Im Atomkern",
                  "Zwischen Kern und Hülle",
                  "Außerhalb des Atoms"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 3,
            text: "Welche Ladung haben Protonen?",
            options: [
                  "Negativ",
                  "Neutral",
                  "Positiv",
                  "Variabel"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 4,
            text: "Was gibt die Ordnungszahl eines Elements an?",
            options: [
                  "Die Anzahl der Neutronen",
                  "Die Anzahl der Protonen",
                  "Die Gesamtmasse des Atoms",
                  "Die Anzahl der Elektronen in der äußersten Schale"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 5,
            text: "Was sind Isotope?",
            options: [
                  "Atome verschiedener Elemente mit gleicher Masse",
                  "Atome desselben Elements mit unterschiedlicher Neutronenzahl",
                  "Atome mit unterschiedlicher Protonenzahl",
                  "Atome ohne Elektronen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 6,
            text: "Wie nennt man die horizontalen Zeilen im Periodensystem?",
            options: [
                  "Gruppen",
                  "Perioden",
                  "Hauptgruppen",
                  "Nebengruppen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 7,
            text: "Wie nennt man die vertikalen Spalten im Periodensystem?",
            options: [
                  "Perioden",
                  "Reihen",
                  "Gruppen",
                  "Schalen"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 8,
            text: "Welche der folgenden Aussagen über Elektronen ist korrekt?",
            options: [
                  "Elektronen sind positiv geladen",
                  "Elektronen befinden sich im Atomkern",
                  "Elektronen sind negativ geladen",
                  "Elektronen haben die gleiche Masse wie Protonen"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 9,
            text: "Was beschreibt die Massenzahl eines Atoms?",
            options: [
                  "Die Anzahl der Protonen",
                  "Die Anzahl der Elektronen",
                  "Die Summe aus Protonen und Neutronen",
                  "Die Anzahl der Neutronen"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 10,
            text: "Welche Elementkategorie leitet Strom und Wärme gut?",
            options: [
                  "Nichtmetalle",
                  "Halbmetalle",
                  "Metalle",
                  "Edelgase"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 11,
            text: "Was ist ein Kation?",
            options: [
                  "Ein negativ geladenes Ion",
                  "Ein positiv geladenes Ion",
                  "Ein neutrales Atom",
                  "Ein Molekül"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 12,
            text: "Was ist ein Anion?",
            options: [
                  "Ein positiv geladenes Ion",
                  "Ein neutrales Teilchen",
                  "Ein negativ geladenes Ion",
                  "Ein Atomkern"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 13,
            text: "Wie lautet das chemische Symbol für Natrium?",
            options: [
                  "N",
                  "Na",
                  "S",
                  "So"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 14,
            text: "Was beschreibt die Avogadro-Zahl?",
            options: [
                  "Die Anzahl der Protonen in einem Atom",
                  "Die Anzahl der Teilchen in einem Mol",
                  "Die Masse eines Atoms in Gramm",
                  "Die Anzahl der Elektronen in einer Schale"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 15,
            text: "Wie groß ist die Avogadro-Zahl (gerundet)?",
            options: [
                  "6,022 × 10²³",
                  "6,022 × 10²⁰",
                  "3,14 × 10²³",
                  "9,81 × 10²³"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 16,
            text: "Was versteht man unter der molaren Masse?",
            options: [
                  "Die Masse eines einzelnen Atoms",
                  "Die Masse von einem Mol eines Stoffes",
                  "Die Anzahl der Teilchen pro Gramm",
                  "Die Dichte eines Stoffes"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 17,
            text: "Welche Einheit hat die molare Masse?",
            options: [
                  "kg",
                  "mol",
                  "g/mol",
                  "mol/g"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 18,
            text: "Welches Elementsymbol gehört zu Kalium?",
            options: [
                  "Ka",
                  "K",
                  "Ca",
                  "Po"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 19,
            text: "Was ist die Stoffmenge n?",
            options: [
                  "Die Masse eines Stoffes in Gramm",
                  "Die Anzahl der Mole eines Stoffes",
                  "Das Volumen eines Gases",
                  "Die Dichte eines Stoffes"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 20,
            text: "Welche Ladung hat ein Chlorid-Ion (Cl⁻)?",
            options: [
                  "+1",
                  "+2",
                  "-1",
                  "-2"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 21,
            text: "Was sind Edukte in einer chemischen Reaktion?",
            options: [
                  "Die Stoffe, die bei einer Reaktion entstehen",
                  "Die Stoffe, die vor der Reaktion vorliegen",
                  "Die Katalysatoren",
                  "Die Nebenprodukte"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 22,
            text: "Was sind Produkte in einer chemischen Reaktion?",
            options: [
                  "Die Ausgangsstoffe",
                  "Die Katalysatoren",
                  "Die Stoffe, die bei der Reaktion entstehen",
                  "Die Lösungsmittel"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 23,
            text: "Was bedeutet das Gesetz der Massenerhaltung?",
            options: [
                  "Die Masse der Produkte ist größer als die der Edukte",
                  "Die Gesamtmasse bleibt bei einer chemischen Reaktion erhalten",
                  "Masse kann bei Reaktionen erzeugt werden",
                  "Die Masse der Edukte ist immer doppelt so groß wie die der Produkte"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 24,
            text: "Was gibt ein Koeffizient vor einer chemischen Formel an?",
            options: [
                  "Die Anzahl der Atome im Molekül",
                  "Die Anzahl der Moleküle oder Formeleinheiten",
                  "Die Masse des Stoffes",
                  "Die Ladung des Ions"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 25,
            text: "Was bedeutet der Index (tiefgestellte Zahl) in einer chemischen Formel wie H₂O?",
            options: [
                  "Die Anzahl der Moleküle",
                  "Die Anzahl der Atome des Elements im Molekül",
                  "Die Ladung",
                  "Die Massenzahl"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 26,
            text: "Was bedeutet es, eine chemische Gleichung auszugleichen?",
            options: [
                  "Die Formeln der Verbindungen zu ändern",
                  "Die Anzahl der Atome auf beiden Seiten gleich zu machen",
                  "Die Massen auf beiden Seiten anzugeben",
                  "Die Reaktionsgeschwindigkeit zu berechnen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 27,
            text: "Was steht auf der linken Seite einer Reaktionsgleichung?",
            options: [
                  "Die Produkte",
                  "Die Edukte (Reaktanten)",
                  "Die Katalysatoren",
                  "Die Zwischenprodukte"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 28,
            text: "Was bedeutet der Reaktionspfeil (→) in einer Gleichung?",
            options: [
                  "Die Reaktion ist reversibel",
                  "Die Edukte reagieren zu den Produkten",
                  "Die Reaktion ist exotherm",
                  "Die Reaktion ist endotherm"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 29,
            text: "Welche Aussage zur Stöchiometrie ist korrekt?",
            options: [
                  "Sie beschreibt die mengenmäßigen Verhältnisse bei chemischen Reaktionen",
                  "Sie beschreibt nur die Farbe der Stoffe",
                  "Sie gilt nur für Gase",
                  "Sie beschreibt die Geschwindigkeit von Reaktionen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 30,
            text: "Was bedeutet das Stoffmengenverhältnis in einer Reaktionsgleichung?",
            options: [
                  "Das Verhältnis der Massen der Stoffe",
                  "Das Verhältnis der Koeffizienten gibt das Mol-Verhältnis an",
                  "Das Verhältnis der Volumina der Stoffe",
                  "Das Verhältnis der Ladungen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 31,
            text: "Was ist eine Synthesereaktion?",
            options: [
                  "Eine Reaktion, bei der ein Stoff in mehrere zerfällt",
                  "Eine Reaktion, bei der mehrere Stoffe zu einem Produkt reagieren",
                  "Eine Reaktion zwischen Säure und Base",
                  "Eine Reaktion mit Sauerstoff"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 32,
            text: "Was ist eine Analyserereaktion (Zersetzung)?",
            options: [
                  "Mehrere Stoffe reagieren zu einem Produkt",
                  "Ein Stoff zerfällt in zwei oder mehr Stoffe",
                  "Zwei Verbindungen tauschen Bestandteile aus",
                  "Ein Element ersetzt ein anderes in einer Verbindung"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 33,
            text: "Was versteht man unter einer Summenformel?",
            options: [
                  "Die räumliche Anordnung der Atome",
                  "Die Anzahl und Art der Atome in einem Molekül",
                  "Die Bindungen zwischen den Atomen",
                  "Die Masse des Moleküls"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 34,
            text: "Was ist die empirische Formel (Verhältnisformel)?",
            options: [
                  "Die tatsächliche Anzahl der Atome im Molekül",
                  "Das kleinstmögliche ganzzahlige Verhältnis der Atome",
                  "Die strukturelle Anordnung der Atome",
                  "Die molare Masse der Verbindung"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 35,
            text: "Was ist eine Verbrennungsreaktion?",
            options: [
                  "Eine Reaktion mit Wasser",
                  "Eine Reaktion mit Sauerstoff unter Freisetzung von Energie",
                  "Eine Reaktion ohne Energieänderung",
                  "Eine Reaktion mit Stickstoff"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 36,
            text: "Was versteht man unter einer Einfach-Austauschreaktion?",
            options: [
                  "Ein Element ersetzt ein anderes in einer Verbindung",
                  "Zwei Verbindungen tauschen Bestandteile aus",
                  "Ein Stoff zerfällt in seine Elemente",
                  "Mehrere Elemente verbinden sich"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 37,
            text: "Was ist eine Doppel-Austauschreaktion (Metathese)?",
            options: [
                  "Ein Element ersetzt ein anderes",
                  "Zwei Verbindungen tauschen gegenseitig Bestandteile aus",
                  "Ein Stoff verbrennt",
                  "Ein Molekül zerfällt"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 38,
            text: "Was beschreibt die prozentuale Zusammensetzung einer Verbindung?",
            options: [
                  "Die Anzahl der Atome jedes Elements",
                  "Den Massenanteil jedes Elements in Prozent",
                  "Das Volumen der Verbindung",
                  "Die Dichte der Verbindung"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 39,
            text: "Was ist eine Fällungsreaktion?",
            options: [
                  "Eine Reaktion, bei der ein Gas entsteht",
                  "Eine Reaktion, bei der ein schwerlöslicher Feststoff ausfällt",
                  "Eine Reaktion mit Säuren",
                  "Eine Reaktion bei hohen Temperaturen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 40,
            text: "Was unterscheidet die Molekülformel von der empirischen Formel?",
            options: [
                  "Die Molekülformel zeigt das tatsächliche Verhältnis, die empirische das kleinste",
                  "Die Molekülformel zeigt die tatsächliche Atomanzahl, die empirische das kleinste ganzzahlige Verhältnis",
                  "Es gibt keinen Unterschied",
                  "Die empirische Formel zeigt mehr Atome"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 41,
            text: "Was ist ein Lösungsmittel?",
            options: [
                  "Der Stoff, der in geringerer Menge vorliegt",
                  "Der Stoff, der in größerer Menge vorliegt und andere Stoffe löst",
                  "Der Stoff, der ausfällt",
                  "Der Stoff, der nicht reagiert"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 42,
            text: "Was ist der gelöste Stoff?",
            options: [
                  "Der Stoff, der andere Stoffe löst",
                  "Der Stoff, der in geringerer Menge im Lösungsmittel gelöst ist",
                  "Der Niederschlag",
                  "Das Lösungsmittel selbst"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 43,
            text: "Was versteht man unter Molarität (c)?",
            options: [
                  "Masse des gelösten Stoffes pro Liter Lösung",
                  "Stoffmenge des gelösten Stoffes pro Liter Lösung",
                  "Volumen des gelösten Stoffes pro Liter Lösung",
                  "Masse des Lösungsmittels pro Liter"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 44,
            text: "Welche Einheit hat die Molarität?",
            options: [
                  "g/L",
                  "mol/L (oder M)",
                  "g/mol",
                  "L/mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 45,
            text: "Was ist eine gesättigte Lösung?",
            options: [
                  "Eine Lösung ohne gelösten Stoff",
                  "Eine Lösung, die die maximale Menge an gelöstem Stoff enthält",
                  "Eine verdünnte Lösung",
                  "Eine überhitzte Lösung"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 46,
            text: "Was bedeutet Löslichkeit?",
            options: [
                  "Die Geschwindigkeit des Lösevorgangs",
                  "Die maximale Menge eines Stoffes, die sich in einem Lösungsmittel löst",
                  "Die Temperatur, bei der sich ein Stoff löst",
                  "Die Farbe der Lösung"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 47,
            text: "Was versteht man unter Verdünnung?",
            options: [
                  "Zugabe von mehr gelöstem Stoff",
                  "Zugabe von Lösungsmittel zur Verringerung der Konzentration",
                  "Erhitzen der Lösung",
                  "Filtrieren der Lösung"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 48,
            text: "Was ist der Massenanteil (w)?",
            options: [
                  "Masse des gelösten Stoffes geteilt durch Gesamtmasse der Lösung",
                  "Stoffmenge des gelösten Stoffes pro Liter",
                  "Volumen des gelösten Stoffes pro Volumen der Lösung",
                  "Molare Masse des gelösten Stoffes"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 49,
            text: "Was ist eine übersättigte Lösung?",
            options: [
                  "Eine Lösung mit weniger gelöstem Stoff als möglich",
                  "Eine Lösung, die mehr gelösten Stoff enthält, als der Sättigung entspricht",
                  "Eine stark verdünnte Lösung",
                  "Eine Lösung bei 0°C"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 50,
            text: "Welche Aussage über Wasser als Lösungsmittel ist korrekt?",
            options: [
                  "Wasser löst nur unpolare Stoffe",
                  "Wasser ist ein polares Lösungsmittel",
                  "Wasser löst keine Salze",
                  "Wasser ist unpolar"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 51,
            text: "Was ist eine Säure nach Arrhenius?",
            options: [
                  "Ein Stoff, der OH⁻-Ionen abgibt",
                  "Ein Stoff, der H⁺-Ionen (Protonen) in wässriger Lösung abgibt",
                  "Ein Stoff, der Elektronen aufnimmt",
                  "Ein Stoff, der nur mit Metallen reagiert"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 52,
            text: "Was ist eine Base nach Arrhenius?",
            options: [
                  "Ein Stoff, der H⁺-Ionen abgibt",
                  "Ein Stoff, der OH⁻-Ionen in wässriger Lösung abgibt",
                  "Ein Stoff, der Elektronen abgibt",
                  "Ein Stoff, der nur mit Nichtmetallen reagiert"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 53,
            text: "Was entsteht bei einer Neutralisationsreaktion?",
            options: [
                  "Nur Wasser",
                  "Nur Salz",
                  "Salz und Wasser",
                  "Säure und Base"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 54,
            text: "Welche der folgenden ist eine starke Säure?",
            options: [
                  "Essigsäure (CH₃COOH)",
                  "Salzsäure (HCl)",
                  "Kohlensäure (H₂CO₃)",
                  "Blausäure (HCN)"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 55,
            text: "Welche der folgenden ist eine starke Base?",
            options: [
                  "Ammoniak (NH₃)",
                  "Natriumhydroxid (NaOH)",
                  "Aluminiumhydroxid (Al(OH)₃)",
                  "Ammoniumhydroxid (NH₄OH)"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 56,
            text: "Was bedeutet es, wenn eine Säure \"stark\" ist?",
            options: [
                  "Sie ist konzentriert",
                  "Sie dissoziiert vollständig in Wasser",
                  "Sie ist gefährlich",
                  "Sie hat einen hohen pH-Wert"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 57,
            text: "Was ist das Produkt der Reaktion: HCl + NaOH → ?",
            options: [
                  "NaCl + H₂",
                  "NaCl + H₂O",
                  "Na + Cl₂ + H₂O",
                  "NaH + ClOH"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 58,
            text: "Welche Ionen sind für den sauren Charakter einer Lösung verantwortlich?",
            options: [
                  "OH⁻-Ionen",
                  "H⁺-Ionen (H₃O⁺)",
                  "Na⁺-Ionen",
                  "Cl⁻-Ionen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 59,
            text: "Was ist eine schwache Säure?",
            options: [
                  "Eine Säure mit niedriger Konzentration",
                  "Eine Säure, die nur teilweise dissoziiert",
                  "Eine Säure, die nicht reagiert",
                  "Eine verdünnte Säure"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 60,
            text: "Welche Aussage über die Neutralisation ist korrekt?",
            options: [
                  "Sie ist immer endotherm",
                  "Säure und Base reagieren zu Salz und Wasser",
                  "Es entstehen immer Gase",
                  "Der pH-Wert sinkt immer"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 61,
            text: "Was beschreibt das Bohr-Modell des Atoms?",
            options: [
                  "Elektronen bewegen sich auf festen Bahnen (Schalen) um den Kern",
                  "Elektronen bewegen sich zufällig um den Kern",
                  "Protonen kreisen um den Kern",
                  "Der Kern besteht nur aus Elektronen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 62,
            text: "Wie werden die Elektronenschalen im Bohr-Modell bezeichnet?",
            options: [
                  "Mit römischen Zahlen (I, II, III)",
                  "Mit Buchstaben (K, L, M, N, ...)",
                  "Mit griechischen Buchstaben (α, β, γ)",
                  "Mit Dezimalzahlen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 63,
            text: "Wie viele Elektronen passen maximal in die erste Schale (K-Schale)?",
            options: [
                  "1",
                  "2",
                  "8",
                  "18"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 64,
            text: "Was sind Valenzelektronen?",
            options: [
                  "Elektronen im Atomkern",
                  "Elektronen in der äußersten besetzten Schale",
                  "Alle Elektronen eines Atoms",
                  "Elektronen, die negativ geladen sind"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 65,
            text: "Was besagt das Pauli-Prinzip?",
            options: [
                  "Elektronen füllen zuerst die niedrigsten Energieniveaus",
                  "Jedes Orbital kann maximal 2 Elektronen mit entgegengesetztem Spin enthalten",
                  "Elektronen besetzen Orbitale zuerst einzeln",
                  "Alle Elektronen haben den gleichen Spin"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 66,
            text: "Was besagt die Hund'sche Regel?",
            options: [
                  "Elektronen paaren sich sofort in Orbitalen",
                  "Orbitale gleicher Energie werden zuerst einzeln besetzt",
                  "Die K-Schale wird zuerst gefüllt",
                  "Jedes Orbital kann nur ein Elektron aufnehmen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 67,
            text: "Was ist ein Orbital?",
            options: [
                  "Eine feste Kreisbahn des Elektrons",
                  "Ein Raumbereich mit hoher Aufenthaltswahrscheinlichkeit für Elektronen",
                  "Der Atomkern",
                  "Eine Elektronenschale"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 68,
            text: "Welche Orbitaltypen gibt es?",
            options: [
                  "s, p, d, f",
                  "a, b, c, d",
                  "K, L, M, N",
                  "1, 2, 3, 4"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 69,
            text: "Wie viele Elektronen kann ein p-Orbital maximal aufnehmen?",
            options: [
                  "2",
                  "6",
                  "10",
                  "14"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 70,
            text: "Was besagt das Aufbauprinzip?",
            options: [
                  "Elektronen füllen zuerst die Orbitale mit niedrigster Energie",
                  "Elektronen füllen zuerst die äußeren Schalen",
                  "Alle Orbitale werden gleichzeitig gefüllt",
                  "Nur s-Orbitale werden besetzt"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 71,
            text: "Was ist eine ionische Bindung?",
            options: [
                  "Eine Bindung durch Elektronenpaarteilung",
                  "Eine Bindung durch Elektronenübertragung zwischen Metall und Nichtmetall",
                  "Eine Bindung zwischen zwei Nichtmetallen",
                  "Eine schwache Anziehung zwischen Molekülen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 72,
            text: "Was passiert bei der Bildung einer Ionenbindung?",
            options: [
                  "Elektronen werden zwischen Atomen geteilt",
                  "Elektronen werden von einem Atom auf ein anderes übertragen",
                  "Protonen werden ausgetauscht",
                  "Neutronen werden geteilt"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 73,
            text: "Was zeigt eine Lewis-Struktur?",
            options: [
                  "Nur die Protonen eines Atoms",
                  "Die Valenzelektronen und Bindungen eines Moleküls",
                  "Die Masse eines Moleküls",
                  "Die Kernladung eines Atoms"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 74,
            text: "Welches Element gibt bei einer Ionenbindung mit Chlor ein Elektron ab?",
            options: [
                  "Sauerstoff",
                  "Natrium",
                  "Stickstoff",
                  "Kohlenstoff"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 75,
            text: "Was besagt die Oktettregel?",
            options: [
                  "Atome streben 8 Protonen an",
                  "Atome streben 8 Valenzelektronen an (Edelgaskonfiguration)",
                  "Jedes Orbital enthält 8 Elektronen",
                  "Jedes Molekül hat 8 Atome"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 76,
            text: "Was ist ein bindendes Elektronenpaar?",
            options: [
                  "Ein Elektronenpaar, das zwischen zwei Atomen geteilt wird",
                  "Ein Elektronenpaar, das nur an einem Atom sitzt",
                  "Ein einzelnes Elektron",
                  "Ein Protonenpaar"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 77,
            text: "Was ist ein freies Elektronenpaar (nichtbindendes Elektronenpaar)?",
            options: [
                  "Ein Elektronenpaar, das an der Bindung beteiligt ist",
                  "Ein Elektronenpaar, das nur an einem Atom lokalisiert ist",
                  "Ein positiv geladenes Teilchen",
                  "Ein Elektron ohne Partner"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 78,
            text: "Was ist die Gitterenergie?",
            options: [
                  "Die Energie, die beim Bilden eines Ionengitters freigesetzt wird",
                  "Die Energie, die zur Trennung aller Ionen im Gitter benötigt wird",
                  "Die kinetische Energie der Ionen",
                  "Die Gitterenergie ist unabhängig von den Ionenladungen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 1,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 79,
            text: "Wie viele Valenzelektronen hat Kohlenstoff in der Lewis-Struktur?",
            options: [
                  "2",
                  "4",
                  "6",
                  "8"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 80,
            text: "Welche Elemente bilden typischerweise ionische Verbindungen?",
            options: [
                  "Zwei Nichtmetalle",
                  "Zwei Metalle",
                  "Ein Metall und ein Nichtmetall",
                  "Zwei Edelgase"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 81,
            text: "Was ist Elektronegativität?",
            options: [
                  "Die Fähigkeit eines Atoms, Elektronen abzugeben",
                  "Die Fähigkeit eines Atoms, Bindungselektronen anzuziehen",
                  "Die Anzahl der Valenzelektronen",
                  "Die Größe eines Atoms"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 82,
            text: "Welches Element hat die höchste Elektronegativität?",
            options: [
                  "Sauerstoff",
                  "Chlor",
                  "Fluor",
                  "Stickstoff"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 83,
            text: "Was ist eine polare Bindung?",
            options: [
                  "Eine Bindung zwischen gleichen Atomen",
                  "Eine Bindung mit ungleicher Elektronenverteilung",
                  "Eine ionische Bindung",
                  "Eine Bindung ohne Elektronen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 84,
            text: "Was ist ein Dipolmoment?",
            options: [
                  "Die Stärke einer ionischen Bindung",
                  "Ein Maß für die Polarität eines Moleküls",
                  "Die Masse eines Moleküls",
                  "Die Anzahl der Bindungen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 85,
            text: "Wofür steht VSEPR?",
            options: [
                  "Valence Shell Electron Pair Repulsion",
                  "Variable Shell Electronic Polar Reaction",
                  "Valence Structure Electron Proton Radius",
                  "Vertical Shell Energy Position Rule"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 86,
            text: "Was besagt das VSEPR-Modell?",
            options: [
                  "Elektronenpaare stoßen sich ab und ordnen sich so an, dass die Abstoßung minimal ist",
                  "Elektronen ziehen sich an",
                  "Alle Moleküle sind linear",
                  "Bindungen sind immer gleich lang"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 87,
            text: "Welche Molekülgeometrie hat ein Molekül mit 4 Elektronenpaaren und keinen freien Paaren?",
            options: [
                  "Linear",
                  "Trigonal-planar",
                  "Tetraedrisch",
                  "Oktaedrisch"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 88,
            text: "Welche Molekülgeometrie hat ein Molekül mit 2 Bindungen und keinen freien Paaren?",
            options: [
                  "Linear",
                  "Gewinkelt",
                  "Trigonal-planar",
                  "Tetraedrisch"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 89,
            text: "Was ist eine unpolare Bindung?",
            options: [
                  "Eine Bindung zwischen Atomen mit großem EN-Unterschied",
                  "Eine Bindung zwischen gleichen oder ähnlichen Atomen",
                  "Eine ionische Bindung",
                  "Eine koordinative Bindung"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 90,
            text: "Welcher Bindungswinkel liegt in einem tetraedrischen Molekül vor?",
            options: [
                  "90°",
                  "109,5°",
                  "120°",
                  "180°"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 91,
            text: "Was beschreibt die Valenzbindungstheorie (VB-Theorie)?",
            options: [
                  "Die Überlappung von Atomorbitalen zur Bildung von Bindungen",
                  "Die Bewegung von Elektronen in Bändern",
                  "Die Abstoßung von Elektronenpaaren",
                  "Die Ionisierung von Atomen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 92,
            text: "Was ist Hybridisierung?",
            options: [
                  "Die Mischung von Atomorbitalen zu neuen, gleichwertigen Orbitalen",
                  "Die Trennung von Elektronen",
                  "Die Bildung von Ionen",
                  "Die Überlappung von Molekülorbitalen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 93,
            text: "Welche Hybridisierung liegt in Methan (CH₄) vor?",
            options: [
                  "sp",
                  "sp²",
                  "sp³",
                  "sp³d"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 94,
            text: "Was ist eine σ-Bindung (Sigma-Bindung)?",
            options: [
                  "Eine Bindung durch seitliche Orbitalüberlappung",
                  "Eine Bindung durch Überlappung entlang der Bindungsachse",
                  "Eine ionische Bindung",
                  "Eine Wasserstoffbrücke"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 95,
            text: "Was ist eine π-Bindung (Pi-Bindung)?",
            options: [
                  "Eine Bindung durch Überlappung entlang der Bindungsachse",
                  "Eine Bindung durch seitliche Orbitalüberlappung",
                  "Eine Einfachbindung",
                  "Eine ionische Bindung"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 96,
            text: "Was beschreibt die Molekülorbitaltheorie (MO-Theorie)?",
            options: [
                  "Elektronen befinden sich in Orbitalen, die das gesamte Molekül umfassen",
                  "Elektronen bleiben an ihren ursprünglichen Atomen",
                  "Nur ionische Bindungen können beschrieben werden",
                  "Hybridorbitale sind die einzige Möglichkeit"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 97,
            text: "Was ist ein bindendes Molekülorbital?",
            options: [
                  "Ein Orbital mit höherer Energie als die Atomorbitale",
                  "Ein Orbital mit niedrigerer Energie als die Atomorbitale",
                  "Ein Orbital ohne Elektronen",
                  "Ein Orbital nur für Ionen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 98,
            text: "Was ist ein antibindendes Molekülorbital?",
            options: [
                  "Ein Orbital mit niedrigerer Energie als die Atomorbitale",
                  "Ein Orbital mit höherer Energie als die Atomorbitale",
                  "Ein Orbital, das nur Protonen enthält",
                  "Ein Hybridorbital"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 99,
            text: "Welche Geometrie hat ein sp²-hybridisiertes Atom?",
            options: [
                  "Linear",
                  "Tetraedrisch",
                  "Trigonal-planar",
                  "Oktaedrisch"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 100,
            text: "Welche Geometrie hat ein sp-hybridisiertes Atom?",
            options: [
                  "Linear",
                  "Trigonal-planar",
                  "Tetraedrisch",
                  "Gewinkelt"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 101,
            text: "Was ist Thermodynamik?",
            options: [
                  "Die Lehre von Energieänderungen bei chemischen Reaktionen",
                  "Die Lehre von der Geschwindigkeit chemischer Reaktionen",
                  "Die Lehre von der Struktur von Molekülen",
                  "Die Lehre von der Radioaktivität"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 102,
            text: "Was ist Enthalpie (H)?",
            options: [
                  "Die Wärmeenergie eines Systems bei konstantem Druck",
                  "Die Temperatur einer Reaktion",
                  "Die Masse der Reaktanten",
                  "Die Konzentration der Produkte"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 103,
            text: "Was bedeutet ΔH < 0?",
            options: [
                  "Die Reaktion ist exotherm (gibt Wärme ab)",
                  "Die Reaktion ist endotherm (nimmt Wärme auf)",
                  "Die Reaktion ist im Gleichgewicht",
                  "Die Reaktion findet nicht statt"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 104,
            text: "Was bedeutet ΔH > 0?",
            options: [
                  "Die Reaktion ist exotherm",
                  "Die Reaktion ist endotherm (nimmt Wärme auf)",
                  "Die Reaktion ist spontan",
                  "Die Reaktion ist reversibel"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 105,
            text: "Was ist die Standardbildungsenthalpie?",
            options: [
                  "Die Enthalpieänderung bei der Bildung von 1 mol einer Verbindung aus den Elementen unter Standardbedingungen",
                  "Die Enthalpie bei 0 K",
                  "Die Wärme bei der Verbrennung",
                  "Die Energie zur Trennung aller Bindungen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 106,
            text: "Was sind Standardbedingungen in der Thermodynamik?",
            options: [
                  "25°C (298 K) und 1 bar (oder 1 atm)",
                  "0°C und 1 atm",
                  "100°C und 1 bar",
                  "Beliebige Temperatur und Druck"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 107,
            text: "Was ist die Standardbildungsenthalpie eines Elements in seinem stabilsten Zustand?",
            options: [
                  "Ein positiver Wert",
                  "Ein negativer Wert",
                  "Null",
                  "Abhängig vom Element"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 1,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 108,
            text: "Was ist ein Kalorimeter?",
            options: [
                  "Ein Gerät zur Messung von Wärmemengen",
                  "Ein Gerät zur Messung von Druck",
                  "Ein Gerät zur Messung von Masse",
                  "Ein Gerät zur Messung von Volumen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 109,
            text: "Was besagt der 1. Hauptsatz der Thermodynamik?",
            options: [
                  "Energie kann weder erzeugt noch vernichtet werden",
                  "Die Entropie des Universums strebt einem Maximum zu",
                  "Am absoluten Nullpunkt ist die Entropie null",
                  "Jede Reaktion ist reversibel"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 110,
            text: "Was ist die Reaktionsenthalpie (ΔHᵣ)?",
            options: [
                  "Die Summe der Enthalpien der Produkte minus der Summe der Enthalpien der Reaktanten",
                  "Die Temperaturänderung während der Reaktion",
                  "Die Aktivierungsenergie der Reaktion",
                  "Die Masse der Produkte minus der Masse der Reaktanten"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 111,
            text: "Welche drei Aggregatzustände gibt es?",
            options: [
                  "Fest, flüssig, gasförmig",
                  "Fest, flüssig, Plasma",
                  "Nur fest und flüssig",
                  "Nur flüssig und gasförmig"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 112,
            text: "Was ist der Schmelzpunkt?",
            options: [
                  "Die Temperatur, bei der ein Stoff von fest zu flüssig übergeht",
                  "Die Temperatur, bei der ein Stoff verdampft",
                  "Die Temperatur, bei der ein Gas kondensiert",
                  "Die Temperatur, bei der ein Stoff sublimiert"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 113,
            text: "Was ist der Siedepunkt?",
            options: [
                  "Die Temperatur, bei der ein Stoff schmilzt",
                  "Die Temperatur, bei der der Dampfdruck gleich dem äußeren Druck ist",
                  "Die Temperatur, bei der ein Stoff erstarrt",
                  "Die Temperatur, bei der ein Gas fest wird"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 1,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 114,
            text: "Was ist Sublimation?",
            options: [
                  "Übergang von fest zu gasförmig ohne flüssige Phase",
                  "Übergang von flüssig zu gasförmig",
                  "Übergang von gasförmig zu flüssig",
                  "Übergang von fest zu flüssig"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 115,
            text: "Was ist ein Phasendiagramm?",
            options: [
                  "Eine grafische Darstellung der Zustände eines Stoffes in Abhängigkeit von Druck und Temperatur",
                  "Ein Diagramm der Reaktionsgeschwindigkeit",
                  "Eine Darstellung der Molekülstruktur",
                  "Ein Diagramm der Elektronenkonfiguration"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 116,
            text: "Was ist der Tripelpunkt?",
            options: [
                  "Der Punkt, an dem alle drei Aggregatzustände im Gleichgewicht sind",
                  "Der höchste Druck eines Stoffes",
                  "Der Schmelzpunkt bei hohem Druck",
                  "Der Siedepunkt bei niedrigem Druck"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 117,
            text: "Was ist der kritische Punkt?",
            options: [
                  "Der Punkt, oberhalb dessen keine Unterscheidung zwischen flüssig und gasförmig möglich ist",
                  "Der Schmelzpunkt eines Stoffes",
                  "Der Tripelpunkt eines Stoffes",
                  "Der Gefrierpunkt eines Stoffes"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 118,
            text: "Was ist Verdampfung?",
            options: [
                  "Übergang von flüssig zu gasförmig",
                  "Übergang von fest zu flüssig",
                  "Übergang von gasförmig zu fest",
                  "Übergang von fest zu gasförmig"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 119,
            text: "Was ist Kondensation?",
            options: [
                  "Übergang von gasförmig zu flüssig",
                  "Übergang von flüssig zu fest",
                  "Übergang von fest zu gasförmig",
                  "Übergang von flüssig zu gasförmig"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 120,
            text: "Was ist Resublimation (Deposition)?",
            options: [
                  "Übergang von gasförmig zu fest ohne flüssige Phase",
                  "Übergang von flüssig zu gasförmig",
                  "Übergang von fest zu flüssig",
                  "Übergang von flüssig zu fest"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 121,
            text: "Was sind kolligative Eigenschaften?",
            options: [
                  "Eigenschaften, die nur von der Anzahl der gelösten Teilchen abhängen, nicht von ihrer Art",
                  "Eigenschaften, die von der Farbe des gelösten Stoffes abhängen",
                  "Eigenschaften, die nur bei Gasen auftreten",
                  "Eigenschaften, die von der Masse abhängen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 122,
            text: "Welche der folgenden ist eine kolligative Eigenschaft?",
            options: [
                  "Siedepunkterhöhung",
                  "Farbe der Lösung",
                  "Dichte der Lösung",
                  "Leitfähigkeit"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 123,
            text: "Was ist die Gefrierpunktserniedrigung?",
            options: [
                  "Die Senkung des Gefrierpunkts einer Lösung gegenüber dem reinen Lösungsmittel",
                  "Die Erhöhung des Gefrierpunkts",
                  "Die Änderung der Farbe beim Gefrieren",
                  "Die Bildung von Eiskristallen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 124,
            text: "Was ist die Siedepunkterhöhung?",
            options: [
                  "Die Erhöhung des Siedepunkts einer Lösung gegenüber dem reinen Lösungsmittel",
                  "Die Senkung des Siedepunkts",
                  "Die Verdampfung des gelösten Stoffes",
                  "Die Bildung von Dampf"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 125,
            text: "Was ist Osmose?",
            options: [
                  "Der Übergang von Lösungsmittel durch eine semipermeable Membran",
                  "Die Vermischung von zwei Lösungen",
                  "Die Verdampfung von Wasser",
                  "Die Auflösung eines Salzes"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 126,
            text: "Was ist der osmotische Druck?",
            options: [
                  "Der Druck, der nötig ist, um Osmose zu verhindern",
                  "Der Dampfdruck einer Lösung",
                  "Der atmosphärische Druck",
                  "Der Druck beim Sieden"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 127,
            text: "Was ist die Dampfdruckerniedrigung?",
            options: [
                  "Die Senkung des Dampfdrucks eines Lösungsmittels durch einen gelösten Stoff",
                  "Die Erhöhung des Dampfdrucks",
                  "Die Verdampfung des gelösten Stoffes",
                  "Die Kondensation von Dampf"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 128,
            text: "Was ist eine semipermeable Membran?",
            options: [
                  "Eine Membran, die nur bestimmte Teilchen durchlässt",
                  "Eine vollständig undurchlässige Wand",
                  "Eine Membran, die alles durchlässt",
                  "Eine metallische Oberfläche"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 129,
            text: "Was ist Molalität (m)?",
            options: [
                  "Mol gelöster Stoff pro Kilogramm Lösungsmittel",
                  "Mol gelöster Stoff pro Liter Lösung",
                  "Gramm gelöster Stoff pro Liter",
                  "Volumen gelöster Stoff pro Volumen Lösung"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 130,
            text: "Warum streut man im Winter Salz auf Straßen?",
            options: [
                  "Um den Gefrierpunkt des Wassers zu senken",
                  "Um das Eis zu färben",
                  "Um den Siedepunkt zu erhöhen",
                  "Um die Straße zu reinigen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 131,
            text: "Was ist der pH-Wert?",
            options: [
                  "Der negative dekadische Logarithmus der Wasserstoffionenkonzentration",
                  "Die Konzentration von OH⁻-Ionen",
                  "Die Stärke einer Base",
                  "Die Temperatur einer Lösung"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 132,
            text: "Was ist eine starke Säure?",
            options: [
                  "Eine Säure, die vollständig dissoziiert",
                  "Eine Säure mit hoher Konzentration",
                  "Eine Säure, die teilweise dissoziiert",
                  "Eine Säure mit hoher Masse"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 133,
            text: "Was ist ein Puffer?",
            options: [
                  "Eine Lösung, die den pH-Wert bei Zugabe von Säure oder Base stabilisiert",
                  "Eine konzentrierte Säure",
                  "Eine Lösung ohne Ionen",
                  "Reines Wasser"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 134,
            text: "Was ist der pOH-Wert?",
            options: [
                  "Der negative dekadische Logarithmus der Hydroxidionenkonzentration",
                  "Der pH-Wert einer Base",
                  "Die Konzentration von H⁺-Ionen",
                  "Das Produkt von pH und pKs"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 135,
            text: "Welche Beziehung gilt bei 25°C?",
            options: [
                  "pH + pOH = 14",
                  "pH + pOH = 7",
                  "pH × pOH = 14",
                  "pH - pOH = 14"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 136,
            text: "Woraus besteht ein typischer Puffer?",
            options: [
                  "Aus einer schwachen Säure und ihrem konjugierten Salz",
                  "Aus zwei starken Säuren",
                  "Nur aus reinem Wasser",
                  "Aus einer starken Base und einer starken Säure"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 137,
            text: "Was ist der pKs-Wert?",
            options: [
                  "Der negative dekadische Logarithmus der Säurekonstante",
                  "Der pH-Wert einer Säure",
                  "Die Konzentration einer Säure",
                  "Die Masse einer Säure"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 138,
            text: "Was ist eine Titration?",
            options: [
                  "Eine Methode zur Bestimmung der Konzentration durch Zugabe einer Reagenzlösung bekannter Konzentration",
                  "Eine Methode zur Messung der Temperatur",
                  "Eine Methode zur Bestimmung der Farbe",
                  "Eine Methode zur Messung des Volumens"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 139,
            text: "Was ist der Äquivalenzpunkt einer Titration?",
            options: [
                  "Der Punkt, an dem stöchiometrisch äquivalente Mengen von Säure und Base reagiert haben",
                  "Der Startpunkt der Titration",
                  "Der Punkt, an dem die Lösung farblos wird",
                  "Der pH-Wert 7"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 140,
            text: "Was ist ein Indikator?",
            options: [
                  "Ein Stoff, der seine Farbe je nach pH-Wert ändert",
                  "Ein Katalysator",
                  "Ein Puffer",
                  "Eine starke Base"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 141,
            text: "Was ist Oxidation?",
            options: [
                  "Abgabe von Elektronen",
                  "Aufnahme von Elektronen",
                  "Abgabe von Protonen",
                  "Aufnahme von Protonen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 142,
            text: "Was ist Reduktion?",
            options: [
                  "Aufnahme von Elektronen",
                  "Abgabe von Elektronen",
                  "Aufnahme von Protonen",
                  "Abgabe von Sauerstoff"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 143,
            text: "Was ist eine Redoxreaktion?",
            options: [
                  "Eine Reaktion, bei der Oxidation und Reduktion gleichzeitig stattfinden",
                  "Eine Säure-Base-Reaktion",
                  "Eine Fällungsreaktion",
                  "Eine Verbrennungsreaktion"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 144,
            text: "Was ist ein Oxidationsmittel?",
            options: [
                  "Ein Stoff, der andere oxidiert und selbst reduziert wird",
                  "Ein Stoff, der andere reduziert",
                  "Ein Katalysator",
                  "Ein Inertgas"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 145,
            text: "Was ist ein Reduktionsmittel?",
            options: [
                  "Ein Stoff, der andere reduziert und selbst oxidiert wird",
                  "Ein Stoff, der andere oxidiert",
                  "Ein Katalysator",
                  "Ein Edelgas"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 146,
            text: "Was ist die Oxidationszahl eines Elements im elementaren Zustand?",
            options: [
                  "0",
                  "+1",
                  "-1",
                  "+2"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 147,
            text: "Was ist eine galvanische Zelle?",
            options: [
                  "Eine elektrochemische Zelle, die chemische Energie in elektrische Energie umwandelt",
                  "Eine Zelle, die elektrische Energie in chemische umwandelt",
                  "Ein Kondensator",
                  "Ein Transformator"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 148,
            text: "Was ist Elektrolyse?",
            options: [
                  "Die Umwandlung von elektrischer Energie in chemische Energie",
                  "Die Umwandlung von chemischer Energie in elektrische Energie",
                  "Die Verbrennung von Wasserstoff",
                  "Die Auflösung von Salzen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 149,
            text: "An welcher Elektrode findet Oxidation statt?",
            options: [
                  "An der Anode",
                  "An der Kathode",
                  "An beiden",
                  "An keiner"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 150,
            text: "An welcher Elektrode findet Reduktion statt?",
            options: [
                  "An der Kathode",
                  "An der Anode",
                  "An beiden",
                  "An keiner"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 1,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 151,
            text: "Ein Atom hat 17 Protonen. Wie viele Elektronen besitzt das neutrale Atom?",
            options: [
                  "18",
                  "17",
                  "16",
                  "35"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 152,
            text: "Das Element Kohlenstoff hat die Ordnungszahl 6 und die Massenzahl 12. Wie viele Neutronen enthält ein Kohlenstoff-12-Atom?",
            options: [
                  "6",
                  "12",
                  "18",
                  "0"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 153,
            text: "Welche Aussagen über die Elemente einer Gruppe im Periodensystem treffen zu?",
            options: [
                  "Sie haben die gleiche Anzahl an Valenzelektronen",
                  "Sie haben ähnliche chemische Eigenschaften",
                  "Sie haben die gleiche Massenzahl",
                  "Sie befinden sich in der gleichen Periode"
            ],
            correctAnswers: [
                  0,
                  1
            ],
            difficulty: 2,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 154,
            text: "Ein Isotop von Chlor hat 17 Protonen und 20 Neutronen. Wie lautet die Massenzahl dieses Isotops?",
            options: [
                  "17",
                  "20",
                  "37",
                  "3"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 155,
            text: "Welches Element gehört zu den Halbmetallen?",
            options: [
                  "Natrium",
                  "Silicium",
                  "Sauerstoff",
                  "Eisen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 156,
            text: "In welcher Hauptgruppe befinden sich die Edelgase?",
            options: [
                  "1. Hauptgruppe",
                  "7. Hauptgruppe",
                  "8. Hauptgruppe",
                  "4. Hauptgruppe"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 157,
            text: "Ein neutrales Atom hat 20 Elektronen. Welches Element ist es?",
            options: [
                  "Natrium (Na)",
                  "Kalium (K)",
                  "Calcium (Ca)",
                  "Argon (Ar)"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 158,
            text: "Welche Aussagen über Nebengruppen-Elemente sind korrekt?",
            options: [
                  "Sie sind alle Metalle",
                  "Sie werden auch Übergangsmetalle genannt",
                  "Sie stehen in den Gruppen 3-12",
                  "Sie sind alle Nichtmetalle"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 2,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 159,
            text: "Uran-235 und Uran-238 unterscheiden sich in welcher Eigenschaft?",
            options: [
                  "Anzahl der Protonen",
                  "Anzahl der Neutronen",
                  "Anzahl der Elektronen",
                  "Ordnungszahl"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 160,
            text: "In welcher Periode des Periodensystems steht ein Element mit 19 Protonen?",
            options: [
                  "2. Periode",
                  "3. Periode",
                  "4. Periode",
                  "5. Periode"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 161,
            text: "Ein Natrium-Atom (Na) gibt ein Elektron ab. Welche Aussagen sind korrekt?",
            options: [
                  "Es entsteht ein Kation",
                  "Das Ion hat die Ladung +1",
                  "Das Ion hat mehr Elektronen als Protonen",
                  "Das Ion heißt Natrium-Ion (Na⁺)"
            ],
            correctAnswers: [
                  0,
                  1,
                  3
            ],
            difficulty: 2,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 162,
            text: "Die molare Masse von Kohlenstoff beträgt 12,01 g/mol. Wie viel Gramm sind 2 mol Kohlenstoff?",
            options: [
                  "6,005 g",
                  "12,01 g",
                  "24,02 g",
                  "36,03 g"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 163,
            text: "Welches Ion bildet Magnesium typischerweise?",
            options: [
                  "Mg⁺",
                  "Mg²⁺",
                  "Mg⁻",
                  "Mg²⁻"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 164,
            text: "Wie viele Teilchen enthält 1 mol Wasser (H₂O)?",
            options: [
                  "6,022 × 10²³ Atome",
                  "6,022 × 10²³ Moleküle",
                  "12,044 × 10²³ Moleküle",
                  "3,011 × 10²³ Moleküle"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 165,
            text: "Welches Elementsymbol gehört zu Eisen?",
            options: [
                  "Ei",
                  "E",
                  "Fe",
                  "Ir"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 166,
            text: "Ein Schwefel-Atom nimmt 2 Elektronen auf. Welches Ion entsteht?",
            options: [
                  "S⁺",
                  "S²⁺",
                  "S⁻",
                  "S²⁻"
            ],
            correctAnswers: [
                  3
            ],
            difficulty: 2,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 167,
            text: "Was ist die molare Masse von Sauerstoffgas (O₂)? (Atommasse O = 16 g/mol)",
            options: [
                  "16 g/mol",
                  "32 g/mol",
                  "8 g/mol",
                  "64 g/mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 168,
            text: "Welche Aussagen über die Stoffmenge n sind korrekt?",
            options: [
                  "n = m / M (Masse geteilt durch molare Masse)",
                  "Die Einheit ist mol",
                  "n = N / Nₐ (Teilchenzahl geteilt durch Avogadro-Zahl)",
                  "n hat keine Einheit"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 2,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 169,
            text: "Welches Ion hat die gleiche Elektronenkonfiguration wie Neon (10 Elektronen)?",
            options: [
                  "Na⁺",
                  "Cl⁻",
                  "O²⁻",
                  "Mg²⁺"
            ],
            correctAnswers: [
                  0,
                  2,
                  3
            ],
            difficulty: 2,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 170,
            text: "Wie lautet das Elementsymbol für Blei?",
            options: [
                  "Bl",
                  "B",
                  "Pb",
                  "Le"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 171,
            text: "Gleiche die folgende Gleichung aus: H₂ + O₂ → H₂O",
            options: [
                  "H₂ + O₂ → H₂O",
                  "2 H₂ + O₂ → 2 H₂O",
                  "H₂ + 2 O₂ → 2 H₂O",
                  "2 H₂ + 2 O₂ → 2 H₂O"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 172,
            text: "In der Reaktion 2 H₂ + O₂ → 2 H₂O: Wie viele Mol Wasser entstehen aus 4 mol H₂?",
            options: [
                  "2 mol",
                  "4 mol",
                  "8 mol",
                  "1 mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 173,
            text: "Gleiche aus: N₂ + H₂ → NH₃",
            options: [
                  "N₂ + H₂ → 2 NH₃",
                  "N₂ + 3 H₂ → 2 NH₃",
                  "2 N₂ + 3 H₂ → 2 NH₃",
                  "N₂ + 2 H₂ → 2 NH₃"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 174,
            text: "In der Reaktion CH₄ + 2 O₂ → CO₂ + 2 H₂O: Wie viele mol O₂ werden für 3 mol CH₄ benötigt?",
            options: [
                  "3 mol",
                  "6 mol",
                  "2 mol",
                  "9 mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 175,
            text: "Welche der folgenden Gleichungen ist korrekt ausgeglichen?",
            options: [
                  "Fe + O₂ → Fe₂O₃",
                  "4 Fe + 3 O₂ → 2 Fe₂O₃",
                  "2 Fe + 3 O₂ → 2 Fe₂O₃",
                  "2 Fe + O₂ → Fe₂O₃"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 176,
            text: "Bei der Reaktion 2 Na + Cl₂ → 2 NaCl: Wie viele Gramm NaCl entstehen aus 2 mol Na? (M(NaCl) = 58,5 g/mol)",
            options: [
                  "58,5 g",
                  "117 g",
                  "29,25 g",
                  "234 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 177,
            text: "Gleiche aus: C₃H₈ + O₂ → CO₂ + H₂O",
            options: [
                  "C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O",
                  "C₃H₈ + 4 O₂ → 3 CO₂ + 4 H₂O",
                  "C₃H₈ + 6 O₂ → 3 CO₂ + 4 H₂O",
                  "2 C₃H₈ + 5 O₂ → 6 CO₂ + 8 H₂O"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 178,
            text: "Wie viele Atome Sauerstoff befinden sich auf der Produktseite von: 2 KClO₃ → 2 KCl + 3 O₂?",
            options: [
                  "3",
                  "6",
                  "2",
                  "9"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 179,
            text: "In der Reaktion Mg + 2 HCl → MgCl₂ + H₂: Welches Stoffmengenverhältnis besteht zwischen HCl und H₂?",
            options: [
                  "1:1",
                  "2:1",
                  "1:2",
                  "2:2"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 180,
            text: "Gleiche aus: Al + HCl → AlCl₃ + H₂",
            options: [
                  "Al + 3 HCl → AlCl₃ + H₂",
                  "2 Al + 6 HCl → 2 AlCl₃ + 3 H₂",
                  "Al + 2 HCl → AlCl₃ + H₂",
                  "2 Al + 3 HCl → 2 AlCl₃ + 3 H₂"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 181,
            text: "Welcher Reaktionstyp liegt vor: 2 Mg + O₂ → 2 MgO?",
            options: [
                  "Analyse",
                  "Synthese",
                  "Einfach-Austausch",
                  "Doppel-Austausch"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 182,
            text: "Welcher Reaktionstyp liegt vor: 2 H₂O → 2 H₂ + O₂?",
            options: [
                  "Synthese",
                  "Analyse (Zersetzung)",
                  "Verbrennung",
                  "Austausch"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 183,
            text: "Eine Verbindung enthält 40% C, 6,7% H und 53,3% O. Was ist das Atomverhältnis C:H:O?",
            options: [
                  "1:1:1",
                  "1:2:1",
                  "2:4:2",
                  "3:6:3"
            ],
            correctAnswers: [
                  1,
                  2,
                  3
            ],
            difficulty: 2,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 184,
            text: "Die Molekülformel von Glucose ist C₆H₁₂O₆. Wie lautet die empirische Formel?",
            options: [
                  "C₆H₁₂O₆",
                  "CH₂O",
                  "C₃H₆O₃",
                  "CHO"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 185,
            text: "Welcher Reaktionstyp liegt vor: Zn + CuSO₄ → ZnSO₄ + Cu?",
            options: [
                  "Synthese",
                  "Analyse",
                  "Einfach-Austausch",
                  "Doppel-Austausch"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 186,
            text: "Berechne die prozentuale Masse von Sauerstoff in H₂O. (H = 1, O = 16 g/mol)",
            options: [
                  "11,1%",
                  "88,9%",
                  "50%",
                  "66,7%"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 187,
            text: "Welcher Reaktionstyp liegt vor: AgNO₃ + NaCl → AgCl↓ + NaNO₃?",
            options: [
                  "Synthese",
                  "Einfach-Austausch",
                  "Doppel-Austausch (Fällung)",
                  "Verbrennung"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 188,
            text: "Die empirische Formel einer Verbindung ist CH₂. Die molare Masse beträgt 42 g/mol. Wie lautet die Molekülformel? (C = 12, H = 1)",
            options: [
                  "CH₂",
                  "C₂H₄",
                  "C₃H₆",
                  "C₄H₈"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 189,
            text: "Welche Aussagen über die Verbrennung von Kohlenwasserstoffen sind korrekt?",
            options: [
                  "Es entstehen CO₂ und H₂O",
                  "Sauerstoff wird verbraucht",
                  "Es wird Energie freigesetzt",
                  "Es handelt sich um eine exotherme Reaktion"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 2,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 190,
            text: "Berechne den Massenanteil von Stickstoff in NH₄NO₃. (N = 14, H = 1, O = 16 g/mol)",
            options: [
                  "17,5%",
                  "28%",
                  "35%",
                  "14%"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 191,
            text: "Berechne die Molarität einer Lösung, die 4 mol NaCl in 2 L Lösung enthält.",
            options: [
                  "0,5 M",
                  "2 M",
                  "4 M",
                  "8 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 192,
            text: "Wie viel Gramm NaOH werden benötigt, um 500 mL einer 0,5 M Lösung herzustellen? (M(NaOH) = 40 g/mol)",
            options: [
                  "5 g",
                  "10 g",
                  "20 g",
                  "40 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 193,
            text: "Was ist der Massenanteil von Salz in einer Lösung aus 10 g NaCl und 90 g Wasser?",
            options: [
                  "10%",
                  "11,1%",
                  "9%",
                  "90%"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 194,
            text: "Welche Formel beschreibt die Verdünnung?",
            options: [
                  "c₁ × V₁ = c₂ × V₂",
                  "c₁ + V₁ = c₂ + V₂",
                  "c₁ / V₁ = c₂ / V₂",
                  "c₁ - V₁ = c₂ - V₂"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 195,
            text: "100 mL einer 2 M HCl-Lösung werden auf 500 mL verdünnt. Welche Konzentration hat die neue Lösung?",
            options: [
                  "0,2 M",
                  "0,4 M",
                  "1 M",
                  "10 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 196,
            text: "Wie viel mol NaCl sind in 250 mL einer 0,2 M NaCl-Lösung enthalten?",
            options: [
                  "0,02 mol",
                  "0,05 mol",
                  "0,5 mol",
                  "50 mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 197,
            text: "Welche Faktoren beeinflussen die Löslichkeit von Feststoffen in Wasser?",
            options: [
                  "Temperatur",
                  "Art des gelösten Stoffes",
                  "Druck",
                  "Rühren"
            ],
            correctAnswers: [
                  0,
                  1
            ],
            difficulty: 2,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 198,
            text: "Berechne die Stoffmenge in 2 L einer 0,25 M Glucoselösung.",
            options: [
                  "0,125 mol",
                  "0,25 mol",
                  "0,5 mol",
                  "1 mol"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 199,
            text: "Eine Lösung enthält 5,85 g NaCl in 500 mL. Wie hoch ist die Molarität? (M(NaCl) = 58,5 g/mol)",
            options: [
                  "0,1 M",
                  "0,2 M",
                  "0,5 M",
                  "1 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 200,
            text: "Was passiert mit der Löslichkeit der meisten festen Stoffe bei Temperaturerhöhung?",
            options: [
                  "Sie nimmt ab",
                  "Sie bleibt gleich",
                  "Sie nimmt zu",
                  "Der Stoff verdampft"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 201,
            text: "Ordne die folgenden Säuren als stark oder schwach ein: HNO₃, CH₃COOH, H₂SO₄, HF",
            options: [
                  "Alle sind stark",
                  "HNO₃ und H₂SO₄ sind stark; CH₃COOH und HF sind schwach",
                  "Alle sind schwach",
                  "Nur H₂SO₄ ist stark"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 202,
            text: "Schreibe die Neutralisationsreaktion: H₂SO₄ + KOH → ?",
            options: [
                  "K₂SO₄ + H₂O",
                  "K₂SO₄ + 2 H₂O",
                  "KSO₄ + H₂O",
                  "K₂S + 4 H₂O"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 203,
            text: "Wie viele mol NaOH werden benötigt, um 1 mol H₃PO₄ vollständig zu neutralisieren?",
            options: [
                  "1 mol",
                  "2 mol",
                  "3 mol",
                  "4 mol"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 204,
            text: "Welche der folgenden Basen sind stark?",
            options: [
                  "NaOH",
                  "KOH",
                  "NH₃",
                  "Ca(OH)₂"
            ],
            correctAnswers: [
                  0,
                  1,
                  3
            ],
            difficulty: 2,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 205,
            text: "Was entsteht bei der Reaktion von HNO₃ mit Ca(OH)₂?",
            options: [
                  "Ca(NO₃)₂ + H₂O",
                  "Ca(NO₃)₂ + 2 H₂O",
                  "CaNO₃ + H₂O",
                  "Ca + NO₃ + H₂O"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 206,
            text: "Welche Aussagen über Essigsäure (CH₃COOH) sind korrekt?",
            options: [
                  "Sie ist eine schwache Säure",
                  "Sie dissoziiert nur teilweise",
                  "Sie bildet ein Gleichgewicht mit CH₃COO⁻ und H⁺",
                  "Sie ist eine starke Säure"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 2,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 207,
            text: "Wie lautet die allgemeine Reaktionsgleichung einer Neutralisation?",
            options: [
                  "Säure + Base → Salz + Wasser",
                  "Säure + Base → Gas + Wasser",
                  "Säure + Metall → Salz + Wasserstoff",
                  "Base + Metall → Salz + Wasser"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 208,
            text: "Welches Salz entsteht bei der Neutralisation von Schwefelsäure mit Natriumhydroxid?",
            options: [
                  "NaCl",
                  "Na₂SO₄",
                  "NaNO₃",
                  "Na₂CO₃"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 209,
            text: "Was passiert, wenn eine starke Säure in Wasser gelöst wird?",
            options: [
                  "Sie bleibt unverändert",
                  "Sie dissoziiert vollständig in Ionen",
                  "Sie bildet ein Gleichgewicht",
                  "Sie reagiert nicht mit Wasser"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 210,
            text: "Welche Formel hat Phosphorsäure und wie viele H⁺-Ionen kann sie abgeben?",
            options: [
                  "H₂PO₄, 2 H⁺",
                  "H₃PO₄, 3 H⁺",
                  "HPO₄, 1 H⁺",
                  "H₄PO₄, 4 H⁺"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 211,
            text: "Wie lautet die Elektronenkonfiguration von Sauerstoff (O, Z=8)?",
            options: [
                  "1s² 2s² 2p²",
                  "1s² 2s² 2p⁴",
                  "1s² 2s² 2p⁶",
                  "1s² 2p⁶"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 212,
            text: "Wie viele Valenzelektronen hat Schwefel (S, Z=16)?",
            options: [
                  "2",
                  "4",
                  "6",
                  "16"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 213,
            text: "Wie lautet die Elektronenkonfiguration von Natrium (Na, Z=11)?",
            options: [
                  "1s² 2s² 2p⁶ 3s¹",
                  "1s² 2s² 2p⁷",
                  "1s² 2s² 2p⁶ 3p¹",
                  "1s² 2s² 3s² 3p⁵"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 214,
            text: "Wie viele Elektronen passen maximal in die dritte Schale (M-Schale)?",
            options: [
                  "8",
                  "18",
                  "32",
                  "2"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 215,
            text: "Die Formel 2n² gibt an:",
            options: [
                  "Die Anzahl der Protonen",
                  "Die maximale Elektronenzahl pro Schale",
                  "Die Anzahl der Neutronen",
                  "Die Masse des Atoms"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 216,
            text: "Wie lautet die Elektronenkonfiguration von Argon (Ar, Z=18)?",
            options: [
                  "1s² 2s² 2p⁶ 3s² 3p⁴",
                  "1s² 2s² 2p⁶ 3s² 3p⁶",
                  "1s² 2s² 2p⁶ 3s² 3d⁶",
                  "1s² 2s² 2p⁶ 4s²"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 217,
            text: "Welches Element hat die Elektronenkonfiguration 1s² 2s² 2p⁶ 3s² 3p³?",
            options: [
                  "Silicium (Si)",
                  "Phosphor (P)",
                  "Schwefel (S)",
                  "Chlor (Cl)"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 218,
            text: "Wie viele ungepaarte Elektronen hat Stickstoff (N, Z=7)?",
            options: [
                  "1",
                  "2",
                  "3",
                  "4"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 219,
            text: "In welcher Reihenfolge werden die Orbitale nach dem Aufbauprinzip gefüllt?",
            options: [
                  "1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p",
                  "1s, 2s, 2p, 3s, 3p, 3d, 4s, 4p",
                  "1s, 2s, 3s, 4s, 2p, 3p, 4p",
                  "1s, 2s, 2p, 3s, 3d, 3p, 4s"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 220,
            text: "Wie viele Orbitale gibt es im d-Unterniveau?",
            options: [
                  "1",
                  "3",
                  "5",
                  "7"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 221,
            text: "Zeichne die Lewis-Struktur von Wasser (H₂O). Wie viele freie Elektronenpaare hat Sauerstoff?",
            options: [
                  "0",
                  "1",
                  "2",
                  "3"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 222,
            text: "Welche Formel hat die ionische Verbindung aus Calcium und Chlor?",
            options: [
                  "CaCl",
                  "CaCl₂",
                  "Ca₂Cl",
                  "Ca₂Cl₃"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 223,
            text: "Wie viele bindende und freie Elektronenpaare hat Ammoniak (NH₃)?",
            options: [
                  "3 bindend, 0 frei",
                  "3 bindend, 1 frei",
                  "4 bindend, 0 frei",
                  "2 bindend, 2 frei"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 224,
            text: "Welches Ion bildet Aluminium typischerweise?",
            options: [
                  "Al⁺",
                  "Al²⁺",
                  "Al³⁺",
                  "Al⁻"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 225,
            text: "In der Lewis-Struktur von CO₂: Wie viele Bindungen hat jedes Sauerstoffatom zum Kohlenstoff?",
            options: [
                  "Eine Einfachbindung",
                  "Eine Doppelbindung",
                  "Eine Dreifachbindung",
                  "Keine Bindung"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 226,
            text: "Welche ionische Verbindung entsteht aus Magnesium und Sauerstoff?",
            options: [
                  "MgO",
                  "Mg₂O",
                  "MgO₂",
                  "Mg₂O₃"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 227,
            text: "Wie viele Valenzelektronen sind in der Lewis-Struktur von N₂ insgesamt?",
            options: [
                  "5",
                  "10",
                  "14",
                  "7"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 228,
            text: "Welche Bindungsart liegt in N₂ vor?",
            options: [
                  "Einfachbindung",
                  "Doppelbindung",
                  "Dreifachbindung",
                  "Ionische Bindung"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 229,
            text: "Welche Formel hat die ionische Verbindung aus Aluminium und Sauerstoff?",
            options: [
                  "AlO",
                  "Al₂O₃",
                  "Al₃O₂",
                  "AlO₃"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 230,
            text: "In der Lewis-Struktur von HCl: Wie viele freie Elektronenpaare hat Chlor?",
            options: [
                  "1",
                  "2",
                  "3",
                  "4"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 231,
            text: "Welche Molekülgeometrie hat Wasser (H₂O)?",
            options: [
                  "Linear",
                  "Gewinkelt",
                  "Trigonal-planar",
                  "Tetraedrisch"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 232,
            text: "Welche Molekülgeometrie hat Ammoniak (NH₃)?",
            options: [
                  "Trigonal-planar",
                  "Trigonal-pyramidal",
                  "Tetraedrisch",
                  "Linear"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 233,
            text: "Ist das CO₂-Molekül polar oder unpolar?",
            options: [
                  "Polar, weil C-O-Bindungen polar sind",
                  "Unpolar, weil die Dipolmomente sich aufheben",
                  "Polar, weil es Sauerstoff enthält",
                  "Unpolar, weil es keine Bindungen hat"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 234,
            text: "Welcher Bindungswinkel liegt in Wasser (H₂O) ungefähr vor?",
            options: [
                  "180°",
                  "120°",
                  "109,5°",
                  "104,5°"
            ],
            correctAnswers: [
                  3
            ],
            difficulty: 2,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 235,
            text: "Welche Molekülgeometrie hat Methan (CH₄)?",
            options: [
                  "Quadratisch-planar",
                  "Tetraedrisch",
                  "Trigonal-pyramidal",
                  "Linear"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 236,
            text: "Welche Molekülgeometrie hat BF₃?",
            options: [
                  "Trigonal-planar",
                  "Trigonal-pyramidal",
                  "Tetraedrisch",
                  "Linear"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 237,
            text: "Ist H₂O polar oder unpolar?",
            options: [
                  "Unpolar, weil es symmetrisch ist",
                  "Polar, weil die Dipolmomente sich nicht aufheben",
                  "Unpolar, weil Wasserstoff unpolar ist",
                  "Polar, weil es nur aus Nichtmetallen besteht"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 238,
            text: "Ordne nach steigender Elektronegativität: C, N, O, F",
            options: [
                  "C < N < O < F",
                  "F < O < N < C",
                  "N < C < O < F",
                  "C < O < N < F"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 239,
            text: "Welche Molekülgeometrie hat PCl₃?",
            options: [
                  "Trigonal-planar",
                  "Trigonal-pyramidal",
                  "Tetraedrisch",
                  "T-förmig"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 240,
            text: "Wie viele Elektronenpaare (bindend + frei) umgeben das Zentralatom in SF₆?",
            options: [
                  "4",
                  "5",
                  "6",
                  "8"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 241,
            text: "Welche Hybridisierung hat der Kohlenstoff in Ethen (C₂H₄)?",
            options: [
                  "sp",
                  "sp²",
                  "sp³",
                  "sp³d"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 242,
            text: "Welche Hybridisierung hat der Kohlenstoff in Ethin (C₂H₂)?",
            options: [
                  "sp",
                  "sp²",
                  "sp³",
                  "sp³d²"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 243,
            text: "Eine Doppelbindung besteht aus:",
            options: [
                  "2 σ-Bindungen",
                  "2 π-Bindungen",
                  "1 σ-Bindung und 1 π-Bindung",
                  "3 σ-Bindungen"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 244,
            text: "Eine Dreifachbindung besteht aus:",
            options: [
                  "3 σ-Bindungen",
                  "1 σ-Bindung und 2 π-Bindungen",
                  "2 σ-Bindungen und 1 π-Bindung",
                  "3 π-Bindungen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 245,
            text: "Welche Hybridisierung hat Stickstoff in Ammoniak (NH₃)?",
            options: [
                  "sp",
                  "sp²",
                  "sp³",
                  "sp³d"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 246,
            text: "Welche Hybridisierung hat Sauerstoff in Wasser (H₂O)?",
            options: [
                  "sp",
                  "sp²",
                  "sp³",
                  "unhybridisiert"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 247,
            text: "Welcher Bindungswinkel wird bei sp²-Hybridisierung erwartet?",
            options: [
                  "180°",
                  "120°",
                  "109,5°",
                  "90°"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 248,
            text: "Welcher Bindungswinkel wird bei sp-Hybridisierung erwartet?",
            options: [
                  "180°",
                  "120°",
                  "109,5°",
                  "90°"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 249,
            text: "Was ist die Bindungsordnung?",
            options: [
                  "(Bindende Elektronen - Antibindende Elektronen) / 2",
                  "Bindende Elektronen + Antibindende Elektronen",
                  "Die Anzahl der Bindungen",
                  "Die Anzahl der freien Elektronenpaare"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 250,
            text: "Welche Bindungsordnung hat das H₂-Molekül?",
            options: [
                  "0",
                  "0,5",
                  "1",
                  "2"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 2,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 251,
            text: "Die Verbrennung von Methan ist exotherm. Was passiert mit der Umgebung?",
            options: [
                  "Sie wird wärmer",
                  "Sie wird kälter",
                  "Die Temperatur bleibt gleich",
                  "Es entsteht ein Vakuum"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 252,
            text: "Das Auflösen von Ammoniumnitrat in Wasser ist endotherm. Was beobachtet man?",
            options: [
                  "Die Lösung wird kälter",
                  "Die Lösung wird wärmer",
                  "Es entsteht ein Gas",
                  "Die Lösung färbt sich"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 253,
            text: "Was besagt der Satz von Hess?",
            options: [
                  "Die Gesamtenthalpieänderung ist unabhängig vom Reaktionsweg",
                  "Alle Reaktionen sind exotherm",
                  "Enthalpie kann nur bei hohen Temperaturen gemessen werden",
                  "Die Enthalpie hängt vom Druck ab"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 254,
            text: "Berechne ΔH für: C(s) + O₂(g) → CO₂(g), wenn ΔH°f(CO₂) = -393,5 kJ/mol.",
            options: [
                  "-393,5 kJ/mol",
                  "+393,5 kJ/mol",
                  "0 kJ/mol",
                  "-787 kJ/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 255,
            text: "Die Bindungsdissoziationsenergie ist:",
            options: [
                  "Die Energie, die benötigt wird, um eine Bindung zu brechen",
                  "Die Energie, die bei der Bildung einer Bindung frei wird",
                  "Die kinetische Energie der Atome",
                  "Die potentielle Energie des Kerns"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 256,
            text: "Bei der Neutralisation von HCl mit NaOH wird Wärme frei. Diese Reaktion ist:",
            options: [
                  "Exotherm",
                  "Endotherm",
                  "Isothermal",
                  "Adiabatisch"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 257,
            text: "Was ist die spezifische Wärmekapazität?",
            options: [
                  "Die Wärmemenge, die 1 g eines Stoffes um 1°C erwärmt",
                  "Die Wärmemenge bei der Verbrennung",
                  "Die maximale Temperatur eines Stoffes",
                  "Die Wärmeleitfähigkeit"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 258,
            text: "Die Formel q = m × c × ΔT berechnet:",
            options: [
                  "Die aufgenommene oder abgegebene Wärmemenge",
                  "Die Reaktionsgeschwindigkeit",
                  "Die Gleichgewichtskonstante",
                  "Die Aktivierungsenergie"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 259,
            text: "Die spezifische Wärmekapazität von Wasser beträgt 4,18 J/(g·K). Wie viel Energie ist nötig, um 100 g Wasser um 10°C zu erwärmen?",
            options: [
                  "4180 J",
                  "418 J",
                  "41,8 J",
                  "41800 J"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 260,
            text: "Was ist die Verbrennungsenthalpie?",
            options: [
                  "Die Enthalpieänderung bei der vollständigen Verbrennung von 1 mol einer Substanz mit O₂",
                  "Die Enthalpie bei der Bildung aus den Elementen",
                  "Die Enthalpie beim Schmelzen",
                  "Die Enthalpie bei der Lösung in Wasser"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 261,
            text: "Der Tripelpunkt von Wasser liegt bei:",
            options: [
                  "0,01°C und 611 Pa",
                  "0°C und 101.325 Pa",
                  "100°C und 101.325 Pa",
                  "374°C und 22,1 MPa"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 262,
            text: "Was passiert mit dem Siedepunkt, wenn der Druck erhöht wird?",
            options: [
                  "Der Siedepunkt steigt",
                  "Der Siedepunkt sinkt",
                  "Der Siedepunkt bleibt gleich",
                  "Der Stoff sublimiert"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 263,
            text: "Warum kocht Wasser auf einem hohen Berg bei niedrigerer Temperatur?",
            options: [
                  "Der Luftdruck ist niedriger",
                  "Die Luft ist kälter",
                  "Die Schwerkraft ist geringer",
                  "Es gibt weniger Sauerstoff"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 264,
            text: "Trockeneis (festes CO₂) sublimiert bei Normaldruck. Was bedeutet das?",
            options: [
                  "Der Tripelpunkt von CO₂ liegt oberhalb von 1 atm",
                  "CO₂ kann nicht flüssig werden",
                  "Der Schmelzpunkt von CO₂ liegt unter dem Tripelpunkt",
                  "CO₂ ist immer gasförmig"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 265,
            text: "Welche intermolekularen Kräfte beeinflussen den Siedepunkt?",
            options: [
                  "Van-der-Waals-Kräfte",
                  "Wasserstoffbrücken",
                  "Dipol-Dipol-Wechselwirkungen",
                  "Nur ionische Bindungen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 2,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 266,
            text: "Warum hat Wasser einen höheren Siedepunkt als H₂S, obwohl H₂S schwerer ist?",
            options: [
                  "Wasser bildet starke Wasserstoffbrücken",
                  "Wasser hat eine höhere Molmasse",
                  "H₂S ist polar",
                  "Schwefel ist elektronegativer als Sauerstoff"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 267,
            text: "Was ist der Dampfdruck?",
            options: [
                  "Der Druck, den der gasförmige Anteil eines Stoffes im Gleichgewicht mit der flüssigen Phase ausübt",
                  "Der maximale Druck in einem geschlossenen Behälter",
                  "Der atmosphärische Druck",
                  "Der Druck beim Siedepunkt"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 268,
            text: "Wie ändert sich der Dampfdruck mit steigender Temperatur?",
            options: [
                  "Er steigt",
                  "Er sinkt",
                  "Er bleibt konstant",
                  "Er wird negativ"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 269,
            text: "Im Phasendiagramm trennt die Schmelzkurve:",
            options: [
                  "Die feste und flüssige Phase",
                  "Die flüssige und gasförmige Phase",
                  "Die feste und gasförmige Phase",
                  "Alle drei Phasen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 270,
            text: "Was ist oberhalb des kritischen Punktes?",
            options: [
                  "Ein überkritisches Fluid",
                  "Ein Plasma",
                  "Ein Festkörper",
                  "Ein perfektes Gas"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 271,
            text: "Die Formel für die Gefrierpunktserniedrigung lautet ΔTf = Kf × m. Was ist Kf?",
            options: [
                  "Die kryoskopische Konstante (spezifisch für das Lösungsmittel)",
                  "Die Molalität",
                  "Die Molmasse",
                  "Die Konzentration"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 272,
            text: "Die kryoskopische Konstante von Wasser ist Kf = 1,86 K·kg/mol. Berechne ΔTf für eine 1 m Glucose-Lösung.",
            options: [
                  "1,86°C",
                  "3,72°C",
                  "0,93°C",
                  "5,58°C"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 273,
            text: "Die Formel für die Siedepunkterhöhung lautet ΔTb = Kb × m. Die ebullioskopische Konstante von Wasser ist Kb = 0,512 K·kg/mol. Berechne ΔTb für eine 2 m Lösung.",
            options: [
                  "1,024°C",
                  "0,512°C",
                  "2,048°C",
                  "0,256°C"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 274,
            text: "Das Raoult'sche Gesetz lautet: P = x × P°. Was ist x?",
            options: [
                  "Der Molenbruch des Lösungsmittels",
                  "Die Molalität",
                  "Die Masse des gelösten Stoffes",
                  "Die Temperatur"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 275,
            text: "Warum führt ein gelöster nicht-flüchtiger Stoff zur Dampfdruckerniedrigung?",
            options: [
                  "Der gelöste Stoff blockiert Lösungsmittelmoleküle an der Oberfläche",
                  "Der Molenbruch des Lösungsmittels sinkt",
                  "Weniger Lösungsmittelmoleküle können verdampfen",
                  "Der gelöste Stoff erhöht den Dampfdruck"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 2,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 276,
            text: "Die van't Hoff-Gleichung für den osmotischen Druck lautet: π = MRT. Was bedeuten die Symbole?",
            options: [
                  "π = osmotischer Druck, M = Molarität, R = Gaskonstante, T = Temperatur",
                  "π = Dampfdruck, M = Masse, R = Radius, T = Zeit",
                  "π = Pi, M = Molmasse, R = Reaktionsgeschwindigkeit, T = Temperatur",
                  "π = Partialdruck, M = Molalität, R = Rydberg-Konstante, T = Tripelpunkt"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 277,
            text: "Eine 0,1 M Glucose-Lösung hat bei 25°C einen osmotischen Druck von etwa:",
            options: [
                  "2,45 atm",
                  "0,245 atm",
                  "24,5 atm",
                  "0,0245 atm"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 278,
            text: "Welche Lösung hat den niedrigsten Gefrierpunkt?",
            options: [
                  "1 m NaCl",
                  "1 m Glucose",
                  "0,5 m CaCl₂",
                  "Alle haben den gleichen Gefrierpunkt"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 279,
            text: "Was ist der van't Hoff-Faktor i?",
            options: [
                  "Die Anzahl der Teilchen, in die eine Formeleinheit dissoziiert",
                  "Die Molmasse des gelösten Stoffes",
                  "Die Dichte der Lösung",
                  "Die Temperaturänderung"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 280,
            text: "Für welchen Stoff ist i = 3?",
            options: [
                  "CaCl₂ (Ca²⁺ + 2 Cl⁻)",
                  "NaCl (Na⁺ + Cl⁻)",
                  "Glucose (dissoziiert nicht)",
                  "AlCl₃ (Al³⁺ + 3 Cl⁻)"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 281,
            text: "Berechne den pH-Wert einer 0,01 M HCl-Lösung.",
            options: [
                  "2",
                  "1",
                  "0,01",
                  "12"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 282,
            text: "Berechne den pOH-Wert einer 0,001 M NaOH-Lösung.",
            options: [
                  "3",
                  "11",
                  "0,001",
                  "14"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 283,
            text: "Welchen pH-Wert hat die NaOH-Lösung aus Frage 2?",
            options: [
                  "11",
                  "3",
                  "7",
                  "14"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 284,
            text: "Was ist der pH-Wert einer 0,01 M HCl-Lösung?",
            options: [
                  "1",
                  "2",
                  "3",
                  "4"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 2,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 285,
            text: "Welche der folgenden ist eine schwache Säure?",
            options: [
                  "Essigsäure (CH₃COOH)",
                  "Salzsäure (HCl)",
                  "Salpetersäure (HNO₃)",
                  "Schwefelsäure (H₂SO₄)"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 286,
            text: "Ein Puffer besteht typischerweise aus:",
            options: [
                  "Einer schwachen Säure und ihrem konjugierten Basensalz",
                  "Zwei starken Säuren",
                  "Einer starken Säure und einer starken Base",
                  "Reinem Wasser"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 287,
            text: "Die Henderson-Hasselbalch-Gleichung lautet:",
            options: [
                  "pH = pKs + log([A⁻]/[HA])",
                  "pH = pKs - log([A⁻]/[HA])",
                  "pH = pKs × [A⁻]/[HA]",
                  "pH = pKs + [A⁻]/[HA]"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 288,
            text: "Der pKs von Essigsäure ist 4,76. Welchen pH hat ein Puffer mit gleichen Konzentrationen von Essigsäure und Acetat?",
            options: [
                  "4,76",
                  "7,00",
                  "2,38",
                  "9,52"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 289,
            text: "Bei der Titration einer starken Säure mit einer starken Base liegt der Äquivalenzpunkt bei:",
            options: [
                  "pH = 7",
                  "pH = 4,76",
                  "pH = 9",
                  "pH = 3"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 290,
            text: "Phenolphthalein ist farblos bei pH < 8,2 und rosa bei pH > 10. Für welche Titration ist es geeignet?",
            options: [
                  "Starke Säure mit starker Base",
                  "Schwache Säure mit schwacher Base",
                  "Starke Säure mit schwacher Base",
                  "Keine Titration"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 291,
            text: "Bestimme die Oxidationszahl von Schwefel in H₂SO₄.",
            options: [
                  "+6",
                  "+4",
                  "-2",
                  "0"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 292,
            text: "Bestimme die Oxidationszahl von Stickstoff in HNO₃.",
            options: [
                  "+5",
                  "+3",
                  "-3",
                  "0"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 293,
            text: "Bei der Reaktion Zn + Cu²⁺ → Zn²⁺ + Cu: Was wird oxidiert?",
            options: [
                  "Zink",
                  "Kupfer",
                  "Beide",
                  "Keines"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 294,
            text: "Bei der gleichen Reaktion: Was ist das Oxidationsmittel?",
            options: [
                  "Cu²⁺",
                  "Zn",
                  "Zn²⁺",
                  "Cu"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 295,
            text: "Das Standardpotential der Wasserstoffelektrode ist definiert als:",
            options: [
                  "0,00 V",
                  "+1,00 V",
                  "-1,00 V",
                  "+0,76 V"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 296,
            text: "Ein positives Standardpotential (E° > 0) bedeutet:",
            options: [
                  "Die Reduktion ist gegenüber der Wasserstoffelektrode bevorzugt",
                  "Das Element ist ein gutes Reduktionsmittel",
                  "Das Element wird leicht oxidiert",
                  "Die Reaktion ist endotherm"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 297,
            text: "Das Standardpotential von Cu²⁺/Cu ist +0,34 V, das von Zn²⁺/Zn ist -0,76 V. Welches Metall ist das stärkere Reduktionsmittel?",
            options: [
                  "Zink",
                  "Kupfer",
                  "Beide gleich",
                  "Keines"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 298,
            text: "Berechne die EMK (elektromotorische Kraft) der Daniell-Zelle (Zn/Zn²⁺//Cu²⁺/Cu).",
            options: [
                  "+1,10 V",
                  "-1,10 V",
                  "+0,42 V",
                  "-0,42 V"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 299,
            text: "Bei der Elektrolyse von Wasser mit H₂SO₄ als Elektrolyt: Welches Gas entsteht an der Kathode?",
            options: [
                  "Wasserstoff (H₂)",
                  "Sauerstoff (O₂)",
                  "Schwefeldioxid (SO₂)",
                  "Kein Gas"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 300,
            text: "Welches Verhältnis haben die Volumina H₂ : O₂ bei der Wasserelektrolyse?",
            options: [
                  "2 : 1",
                  "1 : 2",
                  "1 : 1",
                  "3 : 1"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 2,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 301,
            text: "Ein Element X steht in der 3. Periode und der 6. Hauptgruppe. Welche Aussagen sind korrekt?",
            options: [
                  "Es hat 6 Valenzelektronen",
                  "Es hat 3 besetzte Elektronenschalen",
                  "Es handelt sich um Schwefel (S)",
                  "Es ist ein Metall"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 302,
            text: "Warum haben alle Isotope eines Elements die gleichen chemischen Eigenschaften?",
            options: [
                  "Weil sie die gleiche Anzahl an Neutronen haben",
                  "Weil sie die gleiche Anzahl an Protonen haben",
                  "Weil sie die gleiche Anzahl an Elektronen haben",
                  "Weil sie die gleiche Massenzahl haben"
            ],
            correctAnswers: [
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 303,
            text: "Das natürlich vorkommende Chlor besteht aus 75,77% ³⁵Cl und 24,23% ³⁷Cl. Welche Aussage zur mittleren Atommasse ist korrekt?",
            options: [
                  "Sie liegt genau bei 36",
                  "Sie liegt näher bei 35 als bei 37",
                  "Sie liegt näher bei 37 als bei 35",
                  "Sie beträgt exakt 35,5"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 304,
            text: "Welche Trends im Periodensystem sind korrekt (innerhalb einer Hauptgruppe von oben nach unten)?",
            options: [
                  "Die Atomradien nehmen zu",
                  "Die Ionisierungsenergie nimmt ab",
                  "Die Anzahl der Valenzelektronen bleibt gleich",
                  "Die Elektronegativität nimmt zu"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 305,
            text: "Ein Ion hat 18 Elektronen und 17 Protonen. Welche Aussagen treffen zu?",
            options: [
                  "Es handelt sich um ein Chlorid-Ion (Cl⁻)",
                  "Das Ion ist negativ geladen",
                  "Das Ion hat die gleiche Elektronenkonfiguration wie Argon",
                  "Es handelt sich um ein Kalium-Ion (K⁺)"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 306,
            text: "Welche Elemente zeigen typischerweise Eigenschaften von sowohl Metallen als auch Nichtmetallen?",
            options: [
                  "Silicium (Si)",
                  "Natrium (Na)",
                  "Germanium (Ge)",
                  "Chlor (Cl)"
            ],
            correctAnswers: [
                  0,
                  2
            ],
            difficulty: 3,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 307,
            text: "Ein Atom hat die Elektronenkonfiguration der 3. Schale vollständig gefüllt (insgesamt 18 Elektronen). Welches Element ist es und in welcher Periode steht es?",
            options: [
                  "Argon (Ar), 3. Periode",
                  "Krypton (Kr), 4. Periode",
                  "Neon (Ne), 2. Periode",
                  "Calcium (Ca), 4. Periode"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 308,
            text: "Warum sind Edelgase unter normalen Bedingungen chemisch sehr reaktionsträge?",
            options: [
                  "Sie haben eine vollständig gefüllte Valenzschale",
                  "Sie haben keine Elektronen",
                  "Sie erreichen die stabile Edelgaskonfiguration bereits",
                  "Sie haben nur Protonen im Kern"
            ],
            correctAnswers: [
                  0,
                  2
            ],
            difficulty: 3,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 309,
            text: "Ein Element der 2. Hauptgruppe bildet ein zweifach positiv geladenes Ion. Was passiert dabei mit den Elektronen?",
            options: [
                  "Das Atom nimmt 2 Elektronen auf",
                  "Das Atom gibt 2 Elektronen ab",
                  "Das Ion hat danach eine Edelgaskonfiguration",
                  "Die Protonenzahl ändert sich um 2"
            ],
            correctAnswers: [
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 310,
            text: "Ordne die folgenden Elemente nach steigendem Atomradius: Li, Na, K. Welche Begründung ist korrekt?",
            options: [
                  "Li < Na < K, weil die Anzahl der Elektronenschalen zunimmt",
                  "K < Na < Li, weil die Kernladung zunimmt",
                  "Li < Na < K, weil die Kernladung abnimmt",
                  "Alle haben den gleichen Atomradius"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 311,
            text: "Berechne die Stoffmenge n, wenn 44 g Kohlenstoffdioxid (CO₂) vorliegen. (M(CO₂) = 44 g/mol)",
            options: [
                  "0,5 mol",
                  "1 mol",
                  "2 mol",
                  "44 mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 312,
            text: "Wie viele Wasserstoff-Atome sind in 0,5 mol Methan (CH₄) enthalten?",
            options: [
                  "6,022 × 10²³",
                  "1,2044 × 10²⁴",
                  "3,011 × 10²³",
                  "2,4088 × 10²⁴"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 313,
            text: "Ein Ion hat 18 Elektronen und 16 Protonen. Welche Aussagen sind korrekt?",
            options: [
                  "Es handelt sich um ein Sulfid-Ion (S²⁻)",
                  "Das Ion ist ein Anion",
                  "Das Ion hat 2 negative Ladungen",
                  "Es handelt sich um Argon"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 314,
            text: "Die molare Masse von Schwefelsäure (H₂SO₄) beträgt 98 g/mol. Wie viel mol sind 49 g H₂SO₄?",
            options: [
                  "0,25 mol",
                  "0,5 mol",
                  "1 mol",
                  "2 mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 315,
            text: "Aluminium bildet Al³⁺-Ionen. Wie viele Elektronen hat ein Aluminium-Atom abgegeben?",
            options: [
                  "1",
                  "2",
                  "3",
                  "13"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 3,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 316,
            text: "Berechne die Anzahl der Moleküle in 9 g Wasser (H₂O). (M(H₂O) = 18 g/mol)",
            options: [
                  "3,011 × 10²³",
                  "6,022 × 10²³",
                  "1,2044 × 10²⁴",
                  "9,033 × 10²³"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 317,
            text: "Welche Ionenpaare haben die gleiche Elektronenzahl (isoelektronisch)?",
            options: [
                  "Na⁺ und F⁻",
                  "K⁺ und Ca²⁺",
                  "O²⁻ und Ne",
                  "Cl⁻ und S²⁻"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 3,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 318,
            text: "Wie lautet die Formel zur Berechnung der Teilchenzahl N aus der Stoffmenge n?",
            options: [
                  "N = n × Nₐ",
                  "N = n / Nₐ",
                  "N = m × Nₐ",
                  "N = M × Nₐ"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 319,
            text: "Ein Kupfer-Ion hat 27 Elektronen. Welche Ladung hat das Ion, wenn Kupfer 29 Protonen besitzt?",
            options: [
                  "+1",
                  "+2",
                  "-1",
                  "-2"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 320,
            text: "Wie viele Atome sind insgesamt in 1 mol Calciumcarbonat (CaCO₃) enthalten?",
            options: [
                  "6,022 × 10²³",
                  "3,011 × 10²⁴",
                  "1,2044 × 10²⁴",
                  "5 × 6,022 × 10²³"
            ],
            correctAnswers: [
                  1,
                  3
            ],
            difficulty: 3,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 321,
            text: "Bei der Verbrennung von 16 g Methan (CH₄) mit überschüssigem Sauerstoff: Wie viel Gramm CO₂ entstehen? (M(CH₄) = 16 g/mol, M(CO₂) = 44 g/mol)",
            options: [
                  "44 g",
                  "22 g",
                  "88 g",
                  "16 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 322,
            text: "Für die Reaktion 2 Al + 3 Cl₂ → 2 AlCl₃: Wie viel Gramm Cl₂ werden benötigt, um 27 g Al vollständig umzusetzen? (M(Al) = 27 g/mol, M(Cl₂) = 71 g/mol)",
            options: [
                  "71 g",
                  "106,5 g",
                  "35,5 g",
                  "213 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 323,
            text: "Bei der Reaktion N₂ + 3 H₂ → 2 NH₃ werden 5,6 L N₂ (bei STP) eingesetzt. Wie viel Liter NH₃ entstehen?",
            options: [
                  "5,6 L",
                  "11,2 L",
                  "16,8 L",
                  "2,8 L"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 324,
            text: "Gleiche die Redoxreaktion aus: Fe₂O₃ + CO → Fe + CO₂",
            options: [
                  "Fe₂O₃ + CO → 2 Fe + CO₂",
                  "Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂",
                  "2 Fe₂O₃ + 3 CO → 4 Fe + 3 CO₂",
                  "Fe₂O₃ + 2 CO → 2 Fe + 2 CO₂"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 325,
            text: "Wie viel mol CaCO₃ werden benötigt, um 4,48 L CO₂ (bei STP) zu erzeugen? CaCO₃ → CaO + CO₂",
            options: [
                  "0,1 mol",
                  "0,2 mol",
                  "0,4 mol",
                  "1 mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 326,
            text: "Bei der Reaktion 2 H₂O₂ → 2 H₂O + O₂: Wie viel Gramm O₂ entstehen aus 68 g H₂O₂? (M(H₂O₂) = 34 g/mol, M(O₂) = 32 g/mol)",
            options: [
                  "16 g",
                  "32 g",
                  "64 g",
                  "34 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 327,
            text: "Welche Aussagen über die Gleichung 4 NH₃ + 5 O₂ → 4 NO + 6 H₂O sind korrekt?",
            options: [
                  "4 mol NH₃ reagieren mit 5 mol O₂",
                  "Es entstehen 6 mol H₂O pro 4 mol NH₃",
                  "Die Anzahl der H-Atome ist auf beiden Seiten gleich",
                  "Die Anzahl der O-Atome ist auf beiden Seiten gleich"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 3,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 328,
            text: "Bei der Reaktion Zn + 2 HCl → ZnCl₂ + H₂: Wie viel Liter H₂ (bei STP) entstehen aus 13 g Zn? (M(Zn) = 65 g/mol, Vm = 22,4 L/mol)",
            options: [
                  "2,24 L",
                  "4,48 L",
                  "11,2 L",
                  "22,4 L"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 329,
            text: "Gleiche aus: Ca(OH)₂ + H₃PO₄ → Ca₃(PO₄)₂ + H₂O",
            options: [
                  "Ca(OH)₂ + H₃PO₄ → Ca₃(PO₄)₂ + 3 H₂O",
                  "3 Ca(OH)₂ + 2 H₃PO₄ → Ca₃(PO₄)₂ + 6 H₂O",
                  "2 Ca(OH)₂ + 2 H₃PO₄ → Ca₃(PO₄)₂ + 4 H₂O",
                  "3 Ca(OH)₂ + H₃PO₄ → Ca₃(PO₄)₂ + 3 H₂O"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 330,
            text: "Aus 100 g CaCO₃ werden theoretisch wie viel Gramm CaO erhalten? CaCO₃ → CaO + CO₂ (M(CaCO₃) = 100 g/mol, M(CaO) = 56 g/mol)",
            options: [
                  "44 g",
                  "56 g",
                  "100 g",
                  "28 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 331,
            text: "Eine Verbindung enthält 52,2% C, 13,0% H und 34,8% O. Bestimme die empirische Formel. (C = 12, H = 1, O = 16)",
            options: [
                  "CHO",
                  "C₂H₆O",
                  "CH₃O",
                  "C₂H₄O"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 332,
            text: "Bei der Verbrennung von 0,5 g einer organischen Verbindung entstehen 0,687 g CO₂ und 0,562 g H₂O. Welche empirische Formel hat die Verbindung?",
            options: [
                  "CH₂",
                  "CH₄",
                  "C₂H₆",
                  "CH₃"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 333,
            text: "Identifiziere den Reaktionstyp: 2 KClO₃ → 2 KCl + 3 O₂",
            options: [
                  "Synthese",
                  "Thermische Zersetzung",
                  "Einfach-Austausch",
                  "Verbrennung"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 334,
            text: "Eine Verbindung hat die empirische Formel NO₂ und eine molare Masse von 92 g/mol. Wie lautet die Molekülformel?",
            options: [
                  "NO₂",
                  "N₂O₄",
                  "N₃O₆",
                  "N₄O₈"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 335,
            text: "Bei welchen Reaktionen handelt es sich um Redoxreaktionen?",
            options: [
                  "2 Na + Cl₂ → 2 NaCl",
                  "NaOH + HCl → NaCl + H₂O",
                  "Zn + CuSO₄ → ZnSO₄ + Cu",
                  "AgNO₃ + NaCl → AgCl + NaNO₃"
            ],
            correctAnswers: [
                  0,
                  2
            ],
            difficulty: 3,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 336,
            text: "Berechne die Masse von Kohlenstoff in 50 g Ethanol (C₂H₅OH). (M = 46 g/mol)",
            options: [
                  "26,1 g",
                  "13,0 g",
                  "24 g",
                  "12 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 337,
            text: "Eine 10,0 g Probe eines Metalloxids enthält 7,0 g Metall. Wenn das Metall Eisen ist (M = 56 g/mol), welche Formel hat das Oxid?",
            options: [
                  "FeO",
                  "Fe₂O₃",
                  "Fe₃O₄",
                  "FeO₂"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 338,
            text: "Bei der Reaktion von Bariumchlorid mit Natriumsulfat fällt ein weißer Niederschlag aus. Welche Verbindung ist das?",
            options: [
                  "NaCl",
                  "BaSO₄",
                  "Na₂SO₄",
                  "BaCl₂"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 339,
            text: "Eine Verbindung enthält nur C, H und O. Bei der Verbrennung von 1,50 g entstehen 2,20 g CO₂ und 0,90 g H₂O. Enthält die Verbindung Sauerstoff?",
            options: [
                  "Ja, die Verbindung enthält Sauerstoff",
                  "Nein, sie enthält nur C und H",
                  "Es kann nicht bestimmt werden",
                  "Sie enthält Stickstoff"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 340,
            text: "Welche Reaktion ist eine Säure-Base-Neutralisation?",
            options: [
                  "HCl + NaOH → NaCl + H₂O",
                  "2 H₂ + O₂ → 2 H₂O",
                  "Zn + 2 HCl → ZnCl₂ + H₂",
                  "H₂SO₄ + 2 KOH → K₂SO₄ + 2 H₂O"
            ],
            correctAnswers: [
                  0,
                  3
            ],
            difficulty: 3,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 341,
            text: "Wie viel mL einer 6 M HCl-Stammlösung werden benötigt, um 500 mL einer 0,3 M Lösung herzustellen?",
            options: [
                  "15 mL",
                  "25 mL",
                  "50 mL",
                  "100 mL"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 342,
            text: "Eine Lösung hat eine Dichte von 1,2 g/mL und enthält 20% NaOH (Massenanteil). Berechne die Molarität. (M(NaOH) = 40 g/mol)",
            options: [
                  "3 M",
                  "6 M",
                  "9 M",
                  "12 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 343,
            text: "Wie viel Gramm KOH werden benötigt, um 2 L einer 0,5 M Lösung herzustellen? (M(KOH) = 56 g/mol)",
            options: [
                  "28 g",
                  "56 g",
                  "112 g",
                  "14 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 344,
            text: "Bei der Titration von 25 mL einer NaOH-Lösung werden 20 mL HCl (0,5 M) benötigt. Welche Konzentration hat die NaOH-Lösung?",
            options: [
                  "0,2 M",
                  "0,4 M",
                  "0,5 M",
                  "0,625 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 345,
            text: "Die Löslichkeit von KNO₃ beträgt 31,6 g pro 100 g Wasser bei 20°C. Wie viel Gramm KNO₃ können in 250 g Wasser gelöst werden?",
            options: [
                  "31,6 g",
                  "63,2 g",
                  "79 g",
                  "126,4 g"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 3,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 346,
            text: "Welche Stoffmenge an H₂SO₄ ist in 50 mL einer 2 M Lösung enthalten und wie viele mol H⁺-Ionen werden bei vollständiger Dissoziation freigesetzt?",
            options: [
                  "0,1 mol H₂SO₄, 0,1 mol H⁺",
                  "0,1 mol H₂SO₄, 0,2 mol H⁺",
                  "0,2 mol H₂SO₄, 0,4 mol H⁺",
                  "0,05 mol H₂SO₄, 0,1 mol H⁺"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 347,
            text: "200 mL einer 0,5 M NaCl-Lösung werden mit 300 mL einer 0,3 M NaCl-Lösung gemischt. Welche Konzentration hat die Mischung?",
            options: [
                  "0,38 M",
                  "0,40 M",
                  "0,35 M",
                  "0,80 M"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 348,
            text: "Wie ändert sich die Löslichkeit von Gasen in Wasser bei Temperaturerhöhung?",
            options: [
                  "Sie nimmt zu",
                  "Sie nimmt ab",
                  "Sie bleibt konstant",
                  "Sie verdoppelt sich"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 349,
            text: "Eine konzentrierte H₂SO₄ hat eine Dichte von 1,84 g/mL und einen Massenanteil von 98%. Berechne die Molarität. (M(H₂SO₄) = 98 g/mol)",
            options: [
                  "9,2 M",
                  "18,4 M",
                  "1,84 M",
                  "36,8 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 350,
            text: "Bei welchem Volumen einer 0,1 M AgNO₃-Lösung fallen 1,435 g AgCl aus, wenn überschüssige NaCl-Lösung zugegeben wird? (M(AgCl) = 143,5 g/mol)",
            options: [
                  "50 mL",
                  "100 mL",
                  "150 mL",
                  "200 mL"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 351,
            text: "Bei der Titration von 25 mL HCl werden 20 mL NaOH (0,5 M) bis zum Äquivalenzpunkt benötigt. Welche Konzentration hat die HCl?",
            options: [
                  "0,25 M",
                  "0,4 M",
                  "0,5 M",
                  "0,625 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 352,
            text: "Wie viel mL einer 0,2 M H₂SO₄ werden benötigt, um 50 mL einer 0,1 M NaOH zu neutralisieren?",
            options: [
                  "6,25 mL",
                  "12,5 mL",
                  "25 mL",
                  "50 mL"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 353,
            text: "Welche Säure-Base-Reaktion findet statt: NH₃ + HCl → ?",
            options: [
                  "NH₄Cl",
                  "NH₄ + Cl",
                  "N₂ + HCl",
                  "NH₂ + HCl"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 354,
            text: "Erkläre, warum HF trotz hoher Elektronegativität von Fluor eine schwache Säure ist.",
            options: [
                  "Die H-F-Bindung ist sehr stark",
                  "Fluor ist zu klein, um H⁺ abzugeben",
                  "Die Dissoziation ist energetisch ungünstig wegen der starken Bindung",
                  "HF bildet Wasserstoffbrücken in Lösung"
            ],
            correctAnswers: [
                  0,
                  2,
                  3
            ],
            difficulty: 3,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 355,
            text: "Bei der Reaktion von 100 mL HCl (0,2 M) mit 100 mL NaOH (0,1 M): Ist die resultierende Lösung sauer, basisch oder neutral?",
            options: [
                  "Neutral",
                  "Sauer",
                  "Basisch",
                  "Kann nicht bestimmt werden"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 356,
            text: "Wie viel Gramm NaOH werden benötigt, um 500 mL einer 0,2 M Lösung herzustellen? (M(NaOH) = 40 g/mol)",
            options: [
                  "2 g",
                  "4 g",
                  "8 g",
                  "40 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 357,
            text: "Eine mehrprotonige Säure wie H₂SO₄ dissoziiert in zwei Stufen. Welche Aussagen sind korrekt?",
            options: [
                  "Die erste Dissoziation ist vollständig (starke Säure)",
                  "Die zweite Dissoziation ist schwächer",
                  "Beide Dissoziationen sind gleich stark",
                  "H₂SO₄ gibt insgesamt 2 H⁺ pro Molekül ab"
            ],
            correctAnswers: [
                  0,
                  1,
                  3
            ],
            difficulty: 3,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 358,
            text: "Was ist das Anion der Salpetersäure (HNO₃)?",
            options: [
                  "NO₂⁻",
                  "NO₃⁻",
                  "N₃⁻",
                  "NO⁻"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 359,
            text: "Welche Masse an H₂SO₄ ist in 250 mL einer 2 M Lösung enthalten? (M(H₂SO₄) = 98 g/mol)",
            options: [
                  "24,5 g",
                  "49 g",
                  "98 g",
                  "196 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 360,
            text: "Bei der Reaktion von überschüssiger HCl mit Marmor (CaCO₃) entstehen welche Produkte?",
            options: [
                  "CaCl₂ + H₂O + CO₂",
                  "CaCl + H₂O + CO",
                  "Ca + Cl₂ + H₂CO₃",
                  "CaCl₂ + H₂"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 361,
            text: "Wie lautet die Elektronenkonfiguration von Eisen (Fe, Z=26)?",
            options: [
                  "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸",
                  "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶",
                  "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 4d⁶",
                  "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²"
            ],
            correctAnswers: [
                  1,
                  3
            ],
            difficulty: 3,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 362,
            text: "Warum hat Chrom (Cr, Z=24) die Konfiguration [Ar] 3d⁵ 4s¹ statt [Ar] 3d⁴ 4s²?",
            options: [
                  "Halbgefüllte d-Orbitale sind besonders stabil",
                  "Das 4s-Orbital hat höhere Energie als 3d",
                  "Die symmetrische Verteilung der d-Elektronen ist energetisch günstiger",
                  "Chrom ist ein Übergangsmetall"
            ],
            correctAnswers: [
                  0,
                  2
            ],
            difficulty: 3,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 363,
            text: "Wie lautet die Elektronenkonfiguration des Fe²⁺-Ions?",
            options: [
                  "[Ar] 3d⁶",
                  "[Ar] 3d⁴ 4s²",
                  "[Ar] 3d⁵ 4s¹",
                  "[Ar] 3d⁶ 4s²"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 364,
            text: "Ein Element hat die Konfiguration [Kr] 4d¹⁰ 5s² 5p⁴. Welche Aussagen sind korrekt?",
            options: [
                  "Es steht in der 5. Periode",
                  "Es hat 6 Valenzelektronen",
                  "Es steht in der 6. Hauptgruppe",
                  "Es handelt sich um Tellur (Te)"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 3,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 365,
            text: "Wie viele ungepaarte Elektronen hat Fe³⁺ ([Ar] 3d⁵)?",
            options: [
                  "1",
                  "3",
                  "5",
                  "0"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 3,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 366,
            text: "Warum wird beim Ionisieren von Übergangsmetallen zuerst das 4s-Elektron entfernt?",
            options: [
                  "Das 4s-Orbital hat höhere Energie im Ion als 3d",
                  "Das 4s-Elektron ist weiter vom Kern entfernt",
                  "Die effektive Kernladung beeinflusst 4s stärker als 3d",
                  "Das 4s-Orbital ist nach der Ionisierung energetisch ungünstiger"
            ],
            correctAnswers: [
                  0,
                  1,
                  3
            ],
            difficulty: 3,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 367,
            text: "Welche Elektronenkonfiguration entspricht einem Edelgas?",
            options: [
                  "ns² np⁶",
                  "ns² np⁵",
                  "ns² (n-1)d¹⁰ np⁶",
                  "1s² (für Helium)"
            ],
            correctAnswers: [
                  0,
                  2,
                  3
            ],
            difficulty: 3,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 368,
            text: "Ein Ion hat die Konfiguration [Ar] 3d¹⁰. Welches Element und welche Ladung könnte es sein?",
            options: [
                  "Zn²⁺",
                  "Cu⁺",
                  "Ni",
                  "Ga³⁺"
            ],
            correctAnswers: [
                  0,
                  1,
                  3
            ],
            difficulty: 3,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 369,
            text: "Wie lautet die Kurzschreibweise der Elektronenkonfiguration von Brom (Br, Z=35)?",
            options: [
                  "[Ar] 3d¹⁰ 4s² 4p⁵",
                  "[Kr] 4p⁵",
                  "[Ar] 4s² 4p⁵",
                  "[Ar] 3d¹⁰ 4s² 4p⁷"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 370,
            text: "Was haben alle Elemente der 2. Hauptgruppe gemeinsam?",
            options: [
                  "Sie haben 2 Valenzelektronen",
                  "Ihre Valenzkonfiguration ist ns²",
                  "Sie bilden bevorzugt 2+ Ionen",
                  "Sie sind alle Metalle"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 3,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 371,
            text: "Zeichne die Lewis-Struktur von Schwefelsäure (H₂SO₄). Wie viele Bindungen hat Schwefel insgesamt?",
            options: [
                  "4",
                  "5",
                  "6",
                  "2"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 3,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 372,
            text: "Was ist eine Formalladung und wie berechnet man sie?",
            options: [
                  "Formalladung = Valenzelektronen - (freie Elektronen + ½ bindende Elektronen)",
                  "Formalladung = Protonen - Elektronen",
                  "Formalladung = Bindende Elektronen - Freie Elektronen",
                  "Formalladung entspricht immer der Ionenladung"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 373,
            text: "Welche Lewis-Struktur ist für Ozon (O₃) korrekt?",
            options: [
                  "O=O=O (linear, keine freien Paare)",
                  "O-O-O mit Resonanzstrukturen",
                  "Ein zentrales O mit Doppelbindung zu einem O und Einfachbindung zum anderen (Resonanz)",
                  "Drei einzelne O-Atome"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 3,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 374,
            text: "Warum ist die Gitterenergie von MgO höher als die von NaCl?",
            options: [
                  "Mg²⁺ und O²⁻ haben höhere Ladungen als Na⁺ und Cl⁻",
                  "Die Ionenradien sind kleiner",
                  "Die elektrostatische Anziehung ist stärker",
                  "Die Ionenradien haben keinen Einfluss auf die Gitterenergie"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 375,
            text: "In der Lewis-Struktur von NO₃⁻: Welche Formalladung hat das Stickstoffatom?",
            options: [
                  "0",
                  "+1",
                  "-1",
                  "+2"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 376,
            text: "Was sind Resonanzstrukturen?",
            options: [
                  "Verschiedene Moleküle mit gleicher Summenformel",
                  "Verschiedene Lewis-Strukturen desselben Moleküls mit unterschiedlicher Elektronenverteilung",
                  "Isomere einer Verbindung",
                  "Angeregte Zustände eines Moleküls"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 377,
            text: "Zeichne die Lewis-Struktur von SO₂. Wie viele freie Elektronenpaare hat Schwefel?",
            options: [
                  "0",
                  "1",
                  "2",
                  "3"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 378,
            text: "Welche Aussagen über die Gitterenergie sind korrekt?",
            options: [
                  "Sie ist proportional zum Produkt der Ionenladungen",
                  "Sie ist umgekehrt proportional zum Ionenabstand",
                  "Höhere Gitterenergie bedeutet stabileres Ionengitter",
                  "Sie kann mit dem Born-Landé-Gleichung berechnet werden"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 3,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 379,
            text: "In der Lewis-Struktur von CO: Welche Besonderheit liegt vor?",
            options: [
                  "Eine Dreifachbindung mit einem freien Elektronenpaar am C und einem am O",
                  "Eine dative (koordinative) Bindung vom O zum C",
                  "Kohlenstoff hat nur 6 Elektronen (Oktettunterschreitung)",
                  "CO hat eine reine Doppelbindung wie O₂"
            ],
            correctAnswers: [
                  0,
                  1
            ],
            difficulty: 3,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 380,
            text: "Welche Ionen haben die gleiche Elektronenkonfiguration wie Neon?",
            options: [
                  "Na⁺",
                  "Mg²⁺",
                  "O²⁻",
                  "F⁻"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 3,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 381,
            text: "Warum ist der Bindungswinkel in H₂O (104,5°) kleiner als der ideale Tetraederwinkel (109,5°)?",
            options: [
                  "Die freien Elektronenpaare stoßen stärker ab als bindende Paare",
                  "Wasserstoff ist zu klein",
                  "Sauerstoff zieht die Bindungen zusammen",
                  "Das Molekül ist linear"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 382,
            text: "Welche Molekülgeometrie hat XeF₄?",
            options: [
                  "Tetraedrisch",
                  "Quadratisch-planar",
                  "Seesaw (Wippe)",
                  "Oktaedrisch"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 383,
            text: "Ein Molekül hat die Formel AB₃ mit einem freien Elektronenpaar am Zentralatom. Welche Geometrie hat es?",
            options: [
                  "Trigonal-planar",
                  "Trigonal-pyramidal",
                  "T-förmig",
                  "Linear"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 384,
            text: "Ist CHCl₃ (Chloroform) polar oder unpolar? Begründe!",
            options: [
                  "Polar, weil die C-Cl-Bindungen polar sind und sich nicht aufheben",
                  "Unpolar, weil es symmetrisch ist",
                  "Polar, weil es 4 verschiedene Atome enthält",
                  "Unpolar, weil C-H und C-Cl sich gegenseitig aufheben"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 385,
            text: "Welche Elektronenpaar-Geometrie liegt vor, wenn ein Zentralatom 5 Elektronenpaare hat?",
            options: [
                  "Tetraedrisch",
                  "Trigonal-bipyramidal",
                  "Oktaedrisch",
                  "Pentagonal-planar"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 386,
            text: "Das Molekül SF₄ hat 4 Bindungen und 1 freies Paar. Welche Molekülgeometrie hat es?",
            options: [
                  "Tetraedrisch",
                  "Quadratisch-planar",
                  "Seesaw (Wippe)",
                  "Trigonal-bipyramidal"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 3,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 387,
            text: "Warum ist CCl₄ unpolar, obwohl C-Cl-Bindungen polar sind?",
            options: [
                  "Die vier polaren Bindungen heben sich durch die tetraedrische Symmetrie auf",
                  "Chlor ist nicht elektronegativ",
                  "Kohlenstoff ist elektronegativer als Chlor",
                  "Es gibt keine Elektronenpaare"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 388,
            text: "Welche Molekülgeometrie hat ClF₃?",
            options: [
                  "Trigonal-planar",
                  "Trigonal-pyramidal",
                  "T-förmig",
                  "Linear"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 3,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 389,
            text: "In welcher Reihenfolge nehmen die Abstoßungen zwischen Elektronenpaaren ab?",
            options: [
                  "frei-frei > frei-bindend > bindend-bindend",
                  "bindend-bindend > frei-bindend > frei-frei",
                  "Alle Abstoßungen sind gleich",
                  "frei-bindend > frei-frei > bindend-bindend"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 390,
            text: "Welche Molekülgeometrie hat I₃⁻?",
            options: [
                  "Gewinkelt",
                  "Linear",
                  "Trigonal-planar",
                  "T-förmig"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 391,
            text: "Warum kann He₂ nicht existieren?",
            options: [
                  "Die Bindungsordnung ist 0",
                  "Helium ist zu klein",
                  "Es gibt keine p-Orbitale",
                  "Helium ist radioaktiv"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 392,
            text: "Bestimme die Hybridisierung des zentralen Kohlenstoffs in Allen (H₂C=C=CH₂).",
            options: [
                  "sp für den mittleren C, sp² für die äußeren C",
                  "sp² für alle C",
                  "sp³ für alle C",
                  "sp für alle C"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 393,
            text: "Warum ist die C-C-Bindung in Ethan länger als in Ethen?",
            options: [
                  "Ethan hat eine Einfachbindung (σ), Ethen eine Doppelbindung (σ + π)",
                  "Ethan hat mehr Wasserstoffatome",
                  "Ethen ist planar",
                  "Die Atome in Ethan sind größer"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 394,
            text: "Das O₂-Molekül ist paramagnetisch. Was erklärt dies?",
            options: [
                  "Die MO-Theorie zeigt 2 ungepaarte Elektronen in antibindenden π*-Orbitalen",
                  "Sauerstoff hat freie Elektronenpaare",
                  "Die VB-Theorie sagt eine Doppelbindung voraus",
                  "Sauerstoff ist elektronegativ"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 395,
            text: "Welche Bindungsordnung hat N₂?",
            options: [
                  "1",
                  "2",
                  "3",
                  "4"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 3,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 396,
            text: "Welche Hybridisierung hat der Schwefel in SF₆?",
            options: [
                  "sp³",
                  "sp³d",
                  "sp³d²",
                  "sp²"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 3,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 397,
            text: "Welche Hybridisierung hat Phosphor in PCl₅?",
            options: [
                  "sp³",
                  "sp³d",
                  "sp³d²",
                  "sp²"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 3,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 398,
            text: "Das Ion O₂⁺ hat welche Bindungsordnung?",
            options: [
                  "1,5",
                  "2",
                  "2,5",
                  "3"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 3,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 399,
            text: "Warum ist die Bindung in N₂ so stark?",
            options: [
                  "Dreifachbindung mit Bindungsordnung 3",
                  "N ist sehr elektronegativ",
                  "N₂ ist unpolar",
                  "N hat viele freie Elektronenpaare"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 400,
            text: "Bei der σ-Bindung in HF überlappen:",
            options: [
                  "1s von H und 2p von F",
                  "1s von H und 2s von F",
                  "2p von H und 2p von F",
                  "1s von H und 1s von F"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 401,
            text: "Berechne ΔH° für die Reaktion: CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)",
            options: [
                  "-890,3 kJ/mol",
                  "+890,3 kJ/mol",
                  "-604,5 kJ/mol",
                  "-753,6 kJ/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 402,
            text: "Nach dem Satz von Hess kann man ΔH einer Reaktion berechnen durch:",
            options: [
                  "Kombination von Teilreaktionen",
                  "Verwendung von Standardbildungsenthalpien",
                  "Verwendung von Bindungsenergien",
                  "ΔH kann nur kalorimetrisch gemessen werden"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 403,
            text: "Schätze ΔH für die Reaktion H₂(g) + Cl₂(g) → 2 HCl(g) mit Bindungsenergien.",
            options: [
                  "-185 kJ/mol",
                  "+185 kJ/mol",
                  "-679 kJ/mol",
                  "+679 kJ/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 404,
            text: "Die Born-Haber-Zyklus-Methode wird verwendet für:",
            options: [
                  "Die Berechnung von Gitterenergien",
                  "Die Berechnung von Bindungsenergien",
                  "Die Bestimmung von Molekulargewichten",
                  "Die Messung von pH-Werten"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 405,
            text: "Die Gitterenergie von NaCl ist der Energiebetrag, der:",
            options: [
                  "Bei der Bildung von 1 mol NaCl aus gasförmigen Ionen frei wird",
                  "Benötigt wird, um NaCl zu schmelzen",
                  "Bei der Lösung von NaCl in Wasser frei wird",
                  "Benötigt wird, um NaCl zu verdampfen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 406,
            text: "Ein Bombenkalorimeter arbeitet bei:",
            options: [
                  "Konstantem Volumen",
                  "Konstantem Druck",
                  "Konstanter Temperatur",
                  "Konstantem Stoffmenge"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 407,
            text: "Was ist der Unterschied zwischen ΔH und ΔU (innere Energie)?",
            options: [
                  "ΔH = ΔU + PΔV (bei konstantem Druck)",
                  "ΔH und ΔU sind immer gleich",
                  "ΔH berücksichtigt keine Gase",
                  "ΔU ist nur für Festkörper definiert"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 408,
            text: "Bei Reaktionen mit Gasen ist der Unterschied zwischen ΔH und ΔU besonders groß, wenn:",
            options: [
                  "Sich die Molzahl der Gase stark ändert",
                  "Die Reaktion exotherm ist",
                  "Hohe Temperaturen vorliegen",
                  "Katalysatoren verwendet werden"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 409,
            text: "Die Enthalpie der Sublimation ist:",
            options: [
                  "Die Enthalpie des direkten Übergangs von fest zu gasförmig",
                  "Gleich der Summe aus Schmelz- und Verdampfungsenthalpie",
                  "Immer positiv (endotherm)",
                  "Die Enthalpie der Sublimation ist immer negativ (exotherm)"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 410,
            text: "Warum ist die Standardbildungsenthalpie von O₂(g) gleich null?",
            options: [
                  "O₂ ist die stabilste Form von Sauerstoff unter Standardbedingungen",
                  "O₂ hat keine Bindungen",
                  "Sauerstoff ist ein Nichtmetall",
                  "O₂ ist ein Gas"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 411,
            text: "Die Schmelzkurve von Wasser hat eine negative Steigung. Was bedeutet das?",
            options: [
                  "Eis kann unter Druck schmelzen",
                  "Der Schmelzpunkt sinkt mit steigendem Druck",
                  "Wasser ist im festen Zustand weniger dicht als im flüssigen",
                  "Eis ist dichter als flüssiges Wasser"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 412,
            text: "Die Clausius-Clapeyron-Gleichung beschreibt:",
            options: [
                  "Die Abhängigkeit des Dampfdrucks von der Temperatur",
                  "Die ideale Gasgleichung",
                  "Die Schmelzwärme",
                  "Die kritische Temperatur"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 413,
            text: "Im Phasendiagramm von CO₂ liegt der Tripelpunkt bei -56,6°C und 5,11 atm. Was folgt daraus?",
            options: [
                  "Bei Normaldruck sublimiert festes CO₂ direkt",
                  "Flüssiges CO₂ existiert nur unter Druck",
                  "Trockeneis wird industriell genutzt",
                  "Der Tripelpunkt liegt oberhalb von 1 atm für CO₂"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 414,
            text: "Warum steigt der Dampfdruck mit der Temperatur exponentiell?",
            options: [
                  "Die Clausius-Clapeyron-Gleichung zeigt eine exponentielle Beziehung",
                  "Mehr Moleküle haben genügend Energie, um die Flüssigkeit zu verlassen",
                  "Die Verdampfungsenthalpie wird überwunden",
                  "Der Dampfdruck steigt linear mit der Temperatur"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 415,
            text: "Was ist die Verdampfungsenthalpie (ΔHvap)?",
            options: [
                  "Die Energie, die benötigt wird, um 1 mol einer Flüssigkeit zu verdampfen",
                  "Sie ist immer positiv (endotherm)",
                  "Sie ist ein Maß für die Stärke der intermolekularen Kräfte",
                  "Die Verdampfungsenthalpie ist immer negativ"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 416,
            text: "Warum ist die Schmelzenthalpie von Eis (6,01 kJ/mol) viel kleiner als die Verdampfungsenthalpie (40,7 kJ/mol)?",
            options: [
                  "Beim Schmelzen werden nur einige Wasserstoffbrücken gebrochen",
                  "Beim Verdampfen werden alle intermolekularen Kräfte überwunden",
                  "Der Übergang flüssig → gas erfordert mehr Energie",
                  "Beim Schmelzen werden alle intermolekularen Kräfte gebrochen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 417,
            text: "Was ist ein überkritisches Fluid und welche Eigenschaften hat es?",
            options: [
                  "Ein Zustand oberhalb des kritischen Punktes",
                  "Eigenschaften zwischen Flüssigkeit und Gas",
                  "Gutes Lösungsmittel mit einstellbaren Eigenschaften",
                  "Ein überkritisches Fluid existiert nur theoretisch"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 418,
            text: "Überkritisches CO₂ wird verwendet für:",
            options: [
                  "Koffeinentfernung aus Kaffee",
                  "Extraktion von Aromastoffen",
                  "Reinigung von Elektronik",
                  "Herstellung von Diamanten unter hohem Druck"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 419,
            text: "Warum zeigt die Dampfdruckkurve im Phasendiagramm immer nach oben rechts?",
            options: [
                  "Höhere Temperatur bedeutet höheren Dampfdruck",
                  "Die Verdampfung ist endotherm",
                  "Das Gleichgewicht verschiebt sich zur Gasphase",
                  "Überkritisches CO₂ ist nur für Koffein geeignet"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 420,
            text: "Gefriertrocknung (Lyophilisation) nutzt welches Prinzip?",
            options: [
                  "Sublimation unter vermindertem Druck",
                  "Das Wasser geht direkt von fest zu gasförmig",
                  "Der Tripelpunkt wird unterschritten",
                  "Die Dampfdruckkurve zeigt nach unten links"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 421,
            text: "Berechne die Gefrierpunktserniedrigung einer Lösung von 5,85 g NaCl in 100 g Wasser. (M(NaCl) = 58,5 g/mol, Kf = 1,86 K·kg/mol, i = 2)",
            options: [
                  "3,72°C",
                  "1,86°C",
                  "0,93°C",
                  "7,44°C"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 422,
            text: "Warum ist der experimentelle van't Hoff-Faktor oft kleiner als der theoretische Wert?",
            options: [
                  "Ionenpaare bilden sich in konzentrierten Lösungen",
                  "Nicht alle Ionen dissoziieren vollständig",
                  "Elektrostatische Wechselwirkungen zwischen Ionen",
                  "Ionenpaare erhöhen den van't Hoff-Faktor"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 423,
            text: "Die Molmasse einer unbekannten Substanz wird durch Gefrierpunktserniedrigung bestimmt. 2,5 g Substanz in 50 g Wasser senken den Gefrierpunkt um 0,93°C. Welche Molmasse hat die Substanz?",
            options: [
                  "100 g/mol",
                  "50 g/mol",
                  "200 g/mol",
                  "25 g/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 424,
            text: "Erkläre, warum der Siedepunkt steigt und der Gefrierpunkt sinkt, wenn ein Stoff gelöst wird.",
            options: [
                  "Die Dampfdruckerniedrigung bewirkt beides",
                  "Beim Sieden muss ein höherer Dampfdruck erreicht werden",
                  "Beim Gefrieren stört der gelöste Stoff die Kristallbildung",
                  "Die Dampfdruckerniedrigung bewirkt eine Gefrierpunkterhöhung"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 425,
            text: "Eine hypertone Lösung hat gegenüber einer Zelle:",
            options: [
                  "Einen höheren osmotischen Druck",
                  "Wasser fließt aus der Zelle heraus",
                  "Die Zelle schrumpft (Plasmolyse)",
                  "Bei hypertoner Lösung nimmt die Zelle Wasser auf"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 426,
            text: "Was ist Umkehrosmose?",
            options: [
                  "Osmose wird durch Druckanwendung umgekehrt",
                  "Lösungsmittel wird durch die Membran von der konzentrierten zur verdünnten Seite gedrückt",
                  "Wird zur Meerwasserentsalzung genutzt",
                  "Bei Umkehrosmose fließt Wasser zur konzentrierten Seite"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 427,
            text: "Vergleiche 0,1 m Lösungen von Glucose, NaCl und MgCl₂ bezüglich ihrer kolligativen Eigenschaften.",
            options: [
                  "MgCl₂ hat den größten Effekt (i ≈ 3)",
                  "NaCl hat einen mittleren Effekt (i ≈ 2)",
                  "Glucose hat den kleinsten Effekt (i = 1)",
                  "Alle Lösungen haben den gleichen kolligativen Effekt"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 428,
            text: "Warum ist Ethylenglykol (C₂H₆O₂) ein gutes Kühlmittel-Additiv?",
            options: [
                  "Es senkt den Gefrierpunkt des Wassers",
                  "Es erhöht den Siedepunkt des Wassers",
                  "Es ist nicht flüchtig und nicht korrosiv",
                  "Ethylenglykol erhöht den Gefrierpunkt"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 429,
            text: "Eine isotonische Kochsalzlösung (0,9% NaCl) wird in der Medizin verwendet. Warum?",
            options: [
                  "Sie hat den gleichen osmotischen Druck wie Blut",
                  "Rote Blutkörperchen platzen nicht und schrumpfen nicht",
                  "Sie ist verträglich für den Körper",
                  "Isotonische Lösung unterscheidet sich stark vom Blutdruck"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 430,
            text: "Das Raoult'sche Gesetz gilt ideal für:",
            options: [
                  "Sehr verdünnte Lösungen",
                  "Lösungen mit ähnlichen intermolekularen Kräften",
                  "Nicht-flüchtige gelöste Stoffe",
                  "Das Raoult'sche Gesetz gilt für alle Konzentrationen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 431,
            text: "Berechne den pH-Wert einer 0,1 M Essigsäure-Lösung. (pKs = 4,76)",
            options: [
                  "ca. 2,88",
                  "ca. 4,76",
                  "ca. 1,00",
                  "ca. 7,00"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 432,
            text: "Berechne den pH-Wert einer 0,1 M Natriumacetat-Lösung. (pKs der Essigsäure = 4,76)",
            options: [
                  "ca. 8,88",
                  "ca. 4,76",
                  "ca. 7,00",
                  "ca. 5,12"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 433,
            text: "Ein Puffer enthält 0,2 M Essigsäure und 0,1 M Natriumacetat. Berechne den pH. (pKs = 4,76)",
            options: [
                  "4,46",
                  "4,76",
                  "5,06",
                  "5,76"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 434,
            text: "Zu dem Puffer aus Frage 3 werden 0,01 mol HCl pro Liter gegeben. Wie ändert sich der pH?",
            options: [
                  "Der pH sinkt geringfügig (auf ca. 4,36)",
                  "Der pH sinkt stark auf 1",
                  "Der pH bleibt genau gleich",
                  "Der pH steigt"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 435,
            text: "Bei der Titration einer schwachen Säure mit einer starken Base liegt der Äquivalenzpunkt:",
            options: [
                  "Im basischen Bereich (pH > 7)",
                  "Bei pH = 7",
                  "Im sauren Bereich (pH < 7)",
                  "Kann nicht bestimmt werden"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 436,
            text: "Was ist der Halbtitrationsunkt?",
            options: [
                  "Der Punkt, an dem die Hälfte der Säure neutralisiert ist und pH = pKs",
                  "Der Äquivalenzpunkt",
                  "Der Startpunkt der Titration",
                  "Der Punkt bei pH = 7"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 437,
            text: "Welcher Indikator ist für die Titration einer schwachen Säure mit starker Base geeignet?",
            options: [
                  "Phenolphthalein (Umschlagbereich 8,2-10)",
                  "Methylorange (Umschlagbereich 3,1-4,4)",
                  "Beide sind gleich gut",
                  "Keiner ist geeignet"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 438,
            text: "Die Pufferkapazität ist am größten, wenn:",
            options: [
                  "[HA] = [A⁻] (pH = pKs)",
                  "[HA] >> [A⁻]",
                  "[A⁻] >> [HA]",
                  "Die Konzentration sehr niedrig ist"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 439,
            text: "Das Ionenprodukt des Wassers Kw = [H⁺][OH⁻] = 10⁻¹⁴ gilt bei 25°C. Wie ändert sich Kw mit der Temperatur?",
            options: [
                  "Kw steigt mit der Temperatur (Dissoziation ist endotherm)",
                  "Kw sinkt mit der Temperatur",
                  "Kw bleibt konstant",
                  "Kw wird negativ"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 440,
            text: "Eine mehrprotonige Säure wie H₃PO₄ hat mehrere pKs-Werte. Warum?",
            options: [
                  "Jedes Proton hat eine andere Dissoziationskonstante",
                  "Die Abgabe jedes weiteren Protons wird schwieriger",
                  "pKs1 < pKs2 < pKs3",
                  "Jedes Proton hat die gleiche Dissoziationskonstante"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 441,
            text: "Die Nernst-Gleichung lautet: E = E° - (RT/nF) × ln(Q). Bei 25°C vereinfacht zu:",
            options: [
                  "E = E° - (0,0592/n) × log(Q)",
                  "E = E° + (0,0592/n) × log(Q)",
                  "E = E° - (0,0592 × n) × log(Q)",
                  "E = E° / log(Q)"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 442,
            text: "Für die Reaktion Zn + Cu²⁺ → Zn²⁺ + Cu mit [Cu²⁺] = 0,01 M und [Zn²⁺] = 1 M. Berechne E bei 25°C. (E° = 1,10 V)",
            options: [
                  "1,04 V",
                  "1,10 V",
                  "1,16 V",
                  "0,98 V"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 443,
            text: "Die Faraday-Konstante F = 96.485 C/mol. Bei der Elektrolyse, wie viel Ladung ist nötig, um 1 mol Ag aus AgNO₃ abzuscheiden?",
            options: [
                  "96.485 C",
                  "192.970 C",
                  "48.242 C",
                  "289.455 C"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 444,
            text: "Wie viel Masse Cu wird bei der Elektrolyse mit 1 A Strom für 1 Stunde abgeschieden? (M(Cu) = 63,5 g/mol, n = 2)",
            options: [
                  "1,18 g",
                  "2,36 g",
                  "0,59 g",
                  "3,54 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 445,
            text: "Beim Ausgleichen der Redoxgleichung MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ in saurer Lösung: Wie ist das Verhältnis MnO₄⁻ : Fe²⁺?",
            options: [
                  "1 : 5",
                  "1 : 3",
                  "5 : 1",
                  "1 : 1"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 446,
            text: "Die Beziehung zwischen E° und ΔG° ist:",
            options: [
                  "ΔG° = -nFE°",
                  "ΔG° = nFE°",
                  "ΔG° = -E°/nF",
                  "ΔG° = nF/E°"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 447,
            text: "Berechne ΔG° für die Daniell-Zelle (E° = 1,10 V, n = 2).",
            options: [
                  "-212 kJ/mol",
                  "+212 kJ/mol",
                  "-106 kJ/mol",
                  "+106 kJ/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 448,
            text: "Korrosion von Eisen ist ein elektrochemischer Prozess. Was passiert an der anodischen Stelle?",
            options: [
                  "Fe → Fe²⁺ + 2e⁻ (Oxidation)",
                  "O₂ + 2H₂O + 4e⁻ → 4OH⁻ (Reduktion)",
                  "Beide gleichzeitig",
                  "Keine Reaktion"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 3,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 449,
            text: "Galvanisieren (z.B. Verchromung) funktioniert nach welchem Prinzip?",
            options: [
                  "Das zu beschichtende Objekt ist die Kathode",
                  "Metallionen werden reduziert und auf dem Objekt abgeschieden",
                  "Die Anode besteht aus dem Beschichtungsmetall",
                  "Kalium gibt weniger leicht Elektronen ab als Zink"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 450,
            text: "Die Elektrochemische Spannungsreihe zeigt, dass Kalium (E° = -2,93 V) reaktiver ist als Zink (E° = -0,76 V). Warum?",
            options: [
                  "Kalium gibt leichter Elektronen ab",
                  "Kalium hat ein niedrigeres Standardpotential",
                  "Kalium ist ein stärkeres Reduktionsmittel",
                  "Das zu beschichtende Objekt ist die Anode"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 3,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 451,
            text: "Berechne die mittlere Atommasse von Brom, wenn ⁷⁹Br (78,918 u) mit 50,69% und ⁸¹Br (80,916 u) mit 49,31% vorkommt.",
            options: [
                  "79,90 u",
                  "79,00 u",
                  "80,00 u",
                  "80,92 u"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 452,
            text: "Ein Element hat zwei stabile Isotope: Isotop A mit Masse 62,93 u (69,17%) und Isotop B mit Masse 64,93 u (30,83%). Welches Element ist es?",
            options: [
                  "Zink (Zn)",
                  "Kupfer (Cu)",
                  "Nickel (Ni)",
                  "Gallium (Ga)"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 453,
            text: "Welche Aussagen über die Ionisierungsenergie sind korrekt?",
            options: [
                  "Die erste Ionisierungsenergie ist die Energie, um das erste Elektron zu entfernen",
                  "Die zweite Ionisierungsenergie ist immer größer als die erste",
                  "Bei Alkalimetallen ist die zweite Ionisierungsenergie deutlich höher als die erste",
                  "Edelgase haben niedrige Ionisierungsenergien"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 454,
            text: "Ein unbekanntes Ion X²⁺ hat 10 Elektronen. Welche Aussagen sind richtig?",
            options: [
                  "Das neutrale Atom hatte 12 Elektronen",
                  "Es könnte sich um Magnesium (Mg) handeln",
                  "Das Ion hat die Elektronenkonfiguration von Neon",
                  "Das Ion hat 12 Protonen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 455,
            text: "Erkläre die Elektronegativitätswerte: F (3,98), O (3,44), N (3,04), C (2,55). Welcher Trend wird hier sichtbar?",
            options: [
                  "Die Elektronegativität nimmt innerhalb einer Periode von links nach rechts zu",
                  "Fluor ist das elektronegativste Element",
                  "Kohlenstoff zieht Elektronen stärker an als Sauerstoff",
                  "Die Kernladung beeinflusst die Elektronegativität"
            ],
            correctAnswers: [
                  0,
                  1,
                  3
            ],
            difficulty: 4,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 456,
            text: "Ein Atom verliert nacheinander 3 Elektronen. Die Ionisierungsenergien sind: IE₁ = 578 kJ/mol, IE₂ = 1817 kJ/mol, IE₃ = 2745 kJ/mol. Welche Aussage ist am wahrscheinlichsten?",
            options: [
                  "Das Element steht in der 1. Hauptgruppe",
                  "Das Element steht in der 3. Hauptgruppe",
                  "Das Element bildet bevorzugt einwertige Kationen",
                  "Der große Sprung zwischen IE₁ und IE₂ deutet auf ein Alkalimetall hin"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 457,
            text: "Ordne die folgenden Teilchen nach zunehmendem Radius: Na⁺, Mg²⁺, Al³⁺, Ne. Was ist die richtige Reihenfolge?",
            options: [
                  "Al³⁺ < Mg²⁺ < Na⁺ < Ne",
                  "Ne < Na⁺ < Mg²⁺ < Al³⁺",
                  "Al³⁺ < Mg²⁺ < Ne < Na⁺",
                  "Na⁺ < Mg²⁺ < Al³⁺ < Ne"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 458,
            text: "Welche Erklärung für die hohe erste Ionisierungsenergie von Stickstoff (im Vergleich zu Sauerstoff) ist korrekt?",
            options: [
                  "Stickstoff hat eine halb gefüllte p-Unterschale, die besonders stabil ist",
                  "Stickstoff hat mehr Protonen als Sauerstoff",
                  "Bei Sauerstoff führt die Elektron-Elektron-Abstoßung in einem doppelt besetzten p-Orbital zur leichteren Ionisierung",
                  "Sauerstoff ist ein Nichtmetall"
            ],
            correctAnswers: [
                  0,
                  2
            ],
            difficulty: 4,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 459,
            text: "Die Elektronenaffinität von Chlor beträgt -349 kJ/mol. Was bedeutet dieser negative Wert?",
            options: [
                  "Energie wird freigesetzt, wenn Chlor ein Elektron aufnimmt",
                  "Die Aufnahme eines Elektrons ist energetisch günstig",
                  "Chlor gibt leicht Elektronen ab",
                  "Das entstehende Cl⁻-Ion ist stabiler als das neutrale Cl-Atom"
            ],
            correctAnswers: [
                  0,
                  1,
                  3
            ],
            difficulty: 4,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 460,
            text: "Warum ist der Atomradius von Kalium (K) größer als der von Calcium (Ca), obwohl beide in der 4. Periode stehen?",
            options: [
                  "Calcium hat mehr Protonen und damit eine höhere effektive Kernladung",
                  "Die höhere Kernladung bei Calcium zieht die Elektronen stärker an",
                  "Kalium hat mehr Elektronen als Calcium",
                  "Bei Calcium ist die Abschirmung durch innere Elektronen stärker"
            ],
            correctAnswers: [
                  0,
                  1
            ],
            difficulty: 4,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 461,
            text: "Berechne die molare Masse von Kupfersulfat-Pentahydrat (CuSO₄·5H₂O). (Cu = 63,5; S = 32; O = 16; H = 1 g/mol)",
            options: [
                  "159,5 g/mol",
                  "249,5 g/mol",
                  "169,5 g/mol",
                  "339,5 g/mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 462,
            text: "Wie viel Gramm Natriumchlorid (NaCl) enthält 2,5 × 10²⁴ Formeleinheiten? (M(NaCl) = 58,44 g/mol)",
            options: [
                  "58,44 g",
                  "146,1 g",
                  "242,7 g",
                  "23,38 g"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 463,
            text: "Ein Gemisch enthält 0,3 mol Na⁺-Ionen und 0,2 mol Cl⁻-Ionen. Wie viele Ionen sind insgesamt vorhanden?",
            options: [
                  "3,011 × 10²³",
                  "0,5 mol",
                  "3,011 × 10²⁴",
                  "1,807 × 10²³"
            ],
            correctAnswers: [
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 464,
            text: "Ein unbekanntes Element bildet ein Ion mit 54 Elektronen und der Ladung +2. Welches Element ist es?",
            options: [
                  "Xenon (Xe)",
                  "Barium (Ba)",
                  "Cäsium (Cs)",
                  "Iod (I)"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 465,
            text: "Berechne, wie viele Sauerstoff-Atome in 25 g Glucose (C₆H₁₂O₆) enthalten sind. (M = 180 g/mol)",
            options: [
                  "5,02 × 10²²",
                  "8,36 × 10²²",
                  "5,02 × 10²³",
                  "8,36 × 10²¹"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 466,
            text: "Welche Masse hat ein einzelnes Wassermolekül (H₂O)? (M = 18 g/mol)",
            options: [
                  "2,99 × 10⁻²³ g",
                  "18 g",
                  "2,99 × 10⁻²² g",
                  "3,01 × 10⁻²³ g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 467,
            text: "Eisen kann als Fe²⁺ oder Fe³⁺ vorliegen. Welche Aussagen sind korrekt?",
            options: [
                  "Fe²⁺ hat 24 Elektronen",
                  "Fe³⁺ hat 23 Elektronen",
                  "Beide Ionen haben 26 Protonen",
                  "Fe³⁺ ist stabiler wegen der Halbbesetzung der d-Orbitale"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 468,
            text: "Eine Probe enthält 1,5 mol Calciumphosphat Ca₃(PO₄)₂. Wie viel mol Phosphor-Atome sind enthalten?",
            options: [
                  "1,5 mol",
                  "3 mol",
                  "4,5 mol",
                  "6 mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 469,
            text: "Berechne die Masse von 4,5 × 10²² Atomen Kupfer. (M(Cu) = 63,5 g/mol)",
            options: [
                  "4,75 g",
                  "0,475 g",
                  "47,5 g",
                  "0,0747 mol"
            ],
            correctAnswers: [
                  0,
                  3
            ],
            difficulty: 4,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 470,
            text: "In welchem Verhältnis stehen die Massen von Kohlenstoff und Sauerstoff in Kohlenstoffdioxid (CO₂)? (C = 12, O = 16 g/mol)",
            options: [
                  "1:2",
                  "3:8",
                  "12:32",
                  "3:4"
            ],
            correctAnswers: [
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 471,
            text: "Bei der Reaktion 2 Al + 6 HCl → 2 AlCl₃ + 3 H₂ werden 5,4 g Al mit 100 mL HCl (c = 2 mol/L) umgesetzt. Welcher Stoff ist im Unterschuss?",
            options: [
                  "Aluminium",
                  "Salzsäure",
                  "Beide im gleichen Verhältnis",
                  "Keiner, beide reagieren vollständig"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 472,
            text: "Für die Reaktion Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂: Wie viel Gramm Fe werden aus 320 g Fe₂O₃ gewonnen? (M(Fe₂O₃) = 160 g/mol, M(Fe) = 56 g/mol)",
            options: [
                  "112 g",
                  "224 g",
                  "168 g",
                  "280 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 473,
            text: "Bei einer Reaktion mit 80% Ausbeute: Wenn theoretisch 50 g Produkt entstehen sollten, wie viel erhält man tatsächlich?",
            options: [
                  "40 g",
                  "50 g",
                  "62,5 g",
                  "64 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 474,
            text: "3 Cu + 8 HNO₃(verdünnt) → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O. Wie viel mol NO entstehen aus 9,6 g Cu? (M(Cu) = 64 g/mol)",
            options: [
                  "0,05 mol",
                  "0,1 mol",
                  "0,15 mol",
                  "0,2 mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 475,
            text: "Bei der Reaktion N₂ + 3 H₂ → 2 NH₃ werden 28 g N₂ und 8 g H₂ eingesetzt. Welche Aussagen sind korrekt? (M(N₂) = 28, M(H₂) = 2 g/mol)",
            options: [
                  "N₂ ist im Überschuss",
                  "H₂ ist im Überschuss",
                  "Es entstehen maximal 2 mol NH₃",
                  "1 mol N₂ bleibt unreagiert"
            ],
            correctAnswers: [
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 476,
            text: "Wie viel Gramm Wasser entstehen bei der vollständigen Verbrennung von 22 g Propan (C₃H₈)? (M(C₃H₈) = 44 g/mol, M(H₂O) = 18 g/mol)",
            options: [
                  "18 g",
                  "36 g",
                  "72 g",
                  "44 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 477,
            text: "Eine Probe Kalkstein enthält 80% CaCO₃. Wie viel Gramm CO₂ entstehen beim Erhitzen von 125 g der Probe? (M(CaCO₃) = 100, M(CO₂) = 44 g/mol)",
            options: [
                  "44 g",
                  "35,2 g",
                  "55 g",
                  "40 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 478,
            text: "Gleiche die Gleichung aus und bestimme die Koeffizienten: __KMnO₄ + __HCl → __KCl + __MnCl₂ + __H₂O + __Cl₂",
            options: [
                  "2, 16, 2, 2, 8, 5",
                  "1, 8, 1, 1, 4, 2",
                  "2, 8, 2, 2, 4, 3",
                  "1, 16, 1, 1, 8, 5"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 479,
            text: "Bei der Elektrolyse von Wasser werden 0,5 mol H₂O zersetzt. Wie viel Liter O₂ (bei STP) entstehen? 2 H₂O → 2 H₂ + O₂",
            options: [
                  "2,8 L",
                  "5,6 L",
                  "11,2 L",
                  "22,4 L"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 480,
            text: "Wie viel Prozent Ausbeute wurden erzielt, wenn bei einer Reaktion theoretisch 25 g Produkt entstehen sollten, aber nur 20 g erhalten wurden?",
            options: [
                  "75%",
                  "80%",
                  "85%",
                  "125%"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 481,
            text: "Bei der Verbrennung von 2,50 g einer Verbindung (nur C, H, O) entstehen 3,67 g CO₂ und 1,50 g H₂O. Bestimme die empirische Formel.",
            options: [
                  "C₂H₄O",
                  "C₃H₆O",
                  "CH₂O",
                  "C₃H₆O₂"
            ],
            correctAnswers: [
                  3
            ],
            difficulty: 4,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 482,
            text: "Eine organische Verbindung enthält 40,0% C, 6,7% H und 53,3% O. Die molare Masse beträgt 180 g/mol. Welche Molekülformel hat die Verbindung?",
            options: [
                  "CH₂O",
                  "C₃H₆O₃",
                  "C₆H₁₂O₆",
                  "C₄H₈O₄"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 483,
            text: "Bei einer Einfach-Austauschreaktion wird Aluminium in eine Kupfer(II)-sulfat-Lösung gegeben. Welche Aussagen sind korrekt?",
            options: [
                  "Aluminium oxidiert zu Al³⁺",
                  "Cu²⁺ wird zu elementarem Kupfer reduziert",
                  "Die Reaktion ist: 2 Al + 3 CuSO₄ → Al₂(SO₄)₃ + 3 Cu",
                  "Aluminium ist das stärkere Reduktionsmittel"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 484,
            text: "Ein Gemisch aus CaCO₃ und MgCO₃ wiegt 10,0 g. Beim Erhitzen werden 4,4 g CO₂ freigesetzt. Wie viel Gramm CaCO₃ enthält das Gemisch? (M: CaCO₃=100, MgCO₃=84, CO₂=44)",
            options: [
                  "5,0 g",
                  "6,0 g",
                  "7,5 g",
                  "4,0 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 485,
            text: "Berechne die Masse von Sauerstoff, die benötigt wird, um 100 g Glucose (C₆H₁₂O₆) vollständig zu verbrennen. (M(Glucose) = 180, M(O₂) = 32 g/mol)",
            options: [
                  "106,7 g",
                  "53,3 g",
                  "80 g",
                  "32 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 486,
            text: "Eine Verbindung besteht aus 87,5% N und 12,5% H. Welche der folgenden ist die Molekülformel, wenn die molare Masse 32 g/mol beträgt?",
            options: [
                  "NH₂",
                  "N₂H₄",
                  "NH₃",
                  "N₂H₂"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 487,
            text: "Bei der Reaktion von 5,0 g Magnesium mit Salzsäure im Überschuss: Welches Volumen H₂ (bei STP) entsteht und wie viel Gramm MgCl₂ werden gebildet? (Mg = 24, MgCl₂ = 95 g/mol)",
            options: [
                  "4,67 L H₂, 19,8 g MgCl₂",
                  "2,33 L H₂, 9,9 g MgCl₂",
                  "4,67 L H₂, 9,9 g MgCl₂",
                  "2,33 L H₂, 19,8 g MgCl₂"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 488,
            text: "Eine Probe Eisen(II)-sulfat-Heptahydrat (FeSO₄·7H₂O) wird erhitzt. Wie viel Prozent der Masse gehen als Wasser verloren? (M: FeSO₄·7H₂O = 278 g/mol)",
            options: [
                  "25,2%",
                  "45,3%",
                  "54,7%",
                  "36,0%"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 489,
            text: "Bei der Reaktion Pb(NO₃)₂ + 2 KI → PbI₂↓ + 2 KNO₃ werden 50 mL Pb(NO₃)₂ (0,5 M) mit 100 mL KI (0,4 M) gemischt. Wie viel Gramm PbI₂ fallen aus? (M(PbI₂) = 461 g/mol)",
            options: [
                  "9,22 g",
                  "11,5 g",
                  "4,61 g",
                  "23,1 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 490,
            text: "Identifiziere alle Reaktionstypen in: 2 Fe₂O₃ + 3 C → 4 Fe + 3 CO₂",
            options: [
                  "Redoxreaktion",
                  "Synthese",
                  "Reduktion von Fe₂O₃",
                  "Oxidation von Kohlenstoff"
            ],
            correctAnswers: [
                  0,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 491,
            text: "Wie viel mL konzentrierte HNO₃ (ρ = 1,42 g/mL, 70% Massenanteil) werden benötigt, um 2 L einer 0,5 M Lösung herzustellen? (M(HNO₃) = 63 g/mol)",
            options: [
                  "31,5 mL",
                  "44,4 mL",
                  "63 mL",
                  "88,8 mL"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 492,
            text: "Bei der Neutralisation von 50 mL H₂SO₄ unbekannter Konzentration werden 40 mL NaOH (0,5 M) benötigt. Welche Konzentration hat die H₂SO₄?",
            options: [
                  "0,1 M",
                  "0,2 M",
                  "0,25 M",
                  "0,4 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 493,
            text: "Eine Lösung wird hergestellt, indem 50 g CuSO₄·5H₂O in Wasser gelöst und auf 500 mL aufgefüllt werden. Welche Molarität hat die Lösung bezogen auf CuSO₄? (M(CuSO₄·5H₂O) = 250 g/mol)",
            options: [
                  "0,2 M",
                  "0,4 M",
                  "0,5 M",
                  "1,0 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 494,
            text: "Wie viel Gramm Na₂CO₃ müssen in 250 mL Lösung gelöst werden, um eine Konzentration von 0,2 M Na⁺-Ionen zu erreichen? (M(Na₂CO₃) = 106 g/mol)",
            options: [
                  "2,65 g",
                  "5,30 g",
                  "10,6 g",
                  "21,2 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 495,
            text: "Das Henry-Gesetz beschreibt die Löslichkeit von Gasen. Wenn bei 1 bar 0,034 mol O₂ in 1 L Wasser gelöst sind, wie viel mol lösen sich bei 3 bar?",
            options: [
                  "0,034 mol",
                  "0,068 mol",
                  "0,102 mol",
                  "0,011 mol"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 496,
            text: "100 mL einer 2 M HCl werden mit 100 mL einer 1 M NaOH gemischt. Welche Konzentration hat die resultierende HCl-Lösung?",
            options: [
                  "0,25 M",
                  "0,5 M",
                  "1 M",
                  "1,5 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 497,
            text: "Berechne die Molalität (mol/kg Lösungsmittel) einer Lösung aus 18 g Glucose (M = 180 g/mol) in 200 g Wasser.",
            options: [
                  "0,1 mol/kg",
                  "0,5 mol/kg",
                  "1,0 mol/kg",
                  "0,05 mol/kg"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 498,
            text: "Bei der Fällung von BaSO₄ werden 50 mL Ba(NO₃)₂ (0,2 M) mit überschüssiger Na₂SO₄-Lösung versetzt. Wie viel Gramm BaSO₄ fallen aus? (M(BaSO₄) = 233 g/mol)",
            options: [
                  "1,165 g",
                  "2,33 g",
                  "4,66 g",
                  "11,65 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 499,
            text: "Eine Lösung enthält 0,1 mol/L Ca²⁺ und 0,2 mol/L Cl⁻. Welche Aussagen sind korrekt?",
            options: [
                  "Die Lösung ist elektrisch neutral",
                  "Das Ionenverhältnis entspricht CaCl₂",
                  "Die Gesamtionenkonzentration beträgt 0,3 mol/L",
                  "Es sind 0,1 mol/L CaCl₂ gelöst"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 500,
            text: "Wie viel mL Wasser müssen zu 100 mL einer 12 M HCl-Lösung gegeben werden, um eine 3 M Lösung zu erhalten?",
            options: [
                  "100 mL",
                  "200 mL",
                  "300 mL",
                  "400 mL"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 501,
            text: "Bei der Titration von 25 mL einer H₂SO₄-Lösung werden 40 mL KOH (0,5 M) benötigt. Welche Masse H₂SO₄ war in der Probe? (M(H₂SO₄) = 98 g/mol)",
            options: [
                  "0,49 g",
                  "0,98 g",
                  "1,96 g",
                  "4,9 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 502,
            text: "Eine Probe von 5,0 g unreinem NaOH wird in Wasser gelöst. Zur Neutralisation werden 100 mL HCl (1 M) benötigt. Wie hoch ist der Reinheitsgrad des NaOH? (M(NaOH) = 40 g/mol)",
            options: [
                  "60%",
                  "70%",
                  "80%",
                  "90%"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 503,
            text: "Wie viel mL einer konzentrierten HCl (12 M) werden benötigt, um 2 L einer 0,5 M Lösung herzustellen?",
            options: [
                  "41,7 mL",
                  "83,3 mL",
                  "100 mL",
                  "166,7 mL"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 504,
            text: "Bei der Titration einer Mischung aus NaOH und Na₂CO₃ werden zwei Äquivalenzpunkte beobachtet. Was passiert bei jedem Punkt?",
            options: [
                  "Erster: NaOH + Na₂CO₃ → NaHCO₃, Zweiter: NaHCO₃ → CO₂",
                  "Erster: NaOH wird neutralisiert, Zweiter: Na₂CO₃ wird zu NaHCO₃",
                  "Erster: Alles NaOH + Na₂CO₃ → NaHCO₃, Zweiter: NaHCO₃ → H₂O + CO₂",
                  "Beide Punkte sind identisch"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 505,
            text: "Berechne das Volumen an CO₂ (bei STP), das entsteht, wenn 10 g CaCO₃ vollständig mit HCl reagieren. (M(CaCO₃) = 100 g/mol)",
            options: [
                  "1,12 L",
                  "2,24 L",
                  "4,48 L",
                  "22,4 L"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 506,
            text: "Eine Lösung enthält sowohl HCl als auch H₂SO₄. Bei der Titration von 25 mL mit NaOH werden 30 mL (0,5 M) verbraucht. Nach Zugabe von BaCl₂ fallen 2,33 g BaSO₄ aus. Welche Konzentrationen haben HCl und H₂SO₄? (M(BaSO₄) = 233 g/mol)",
            options: [
                  "HCl: 0,2 M, H₂SO₄: 0,2 M",
                  "HCl: 0,4 M, H₂SO₄: 0,1 M",
                  "HCl: 0,2 M, H₂SO₄: 0,4 M",
                  "HCl: 0,1 M, H₂SO₄: 0,2 M"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 507,
            text: "Die Neutralisationswärme von starker Säure + starker Base beträgt etwa -57 kJ/mol. Wie viel Wärme wird bei der Reaktion von 50 mL HCl (2 M) mit überschüssiger NaOH freigesetzt?",
            options: [
                  "2,85 kJ",
                  "5,7 kJ",
                  "11,4 kJ",
                  "57 kJ"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 508,
            text: "Ein Antazidum enthält Mg(OH)₂. Wie viel Gramm Mg(OH)₂ werden benötigt, um 100 mL Magensäure (0,1 M HCl) zu neutralisieren? (M(Mg(OH)₂) = 58 g/mol)",
            options: [
                  "0,145 g",
                  "0,29 g",
                  "0,58 g",
                  "1,16 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 509,
            text: "Bei einer Rücktitration werden 0,5 g einer Probe mit 50 mL HCl (0,5 M) versetzt. Der Überschuss wird mit 20 mL NaOH (0,5 M) zurücktitriert. Wie viel mol HCl haben mit der Probe reagiert?",
            options: [
                  "0,01 mol",
                  "0,015 mol",
                  "0,025 mol",
                  "0,035 mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 510,
            text: "Eine H₃PO₄-Lösung wird schrittweise mit NaOH titriert. Wie viele Äquivalenzpunkte sind theoretisch zu erwarten?",
            options: [
                  "1",
                  "2",
                  "3",
                  "4"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 511,
            text: "Warum ist die Elektronenkonfiguration von Kupfer (Cu, Z=29) [Ar] 3d¹⁰ 4s¹ und nicht [Ar] 3d⁹ 4s²?",
            options: [
                  "Vollständig gefüllte d-Orbitale sind besonders stabil",
                  "Die Elektronenpaarungsenergie ist zu hoch",
                  "Ein Elektron wechselt vom 4s ins 3d zur Stabilisierung",
                  "Kupfer zeigt anomales Verhalten wie Chrom"
            ],
            correctAnswers: [
                  0,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 512,
            text: "Ein Element hat 4 ungepaarte Elektronen und die Konfiguration [Ar] 3d⁶ 4s². Welches Element ist es?",
            options: [
                  "Mangan (Mn)",
                  "Eisen (Fe)",
                  "Kobalt (Co)",
                  "Nickel (Ni)"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 513,
            text: "Wie lautet die Elektronenkonfiguration von Mo (Z=42)? Beachte Ausnahmen!",
            options: [
                  "[Kr] 4d⁴ 5s²",
                  "[Kr] 4d⁵ 5s¹",
                  "[Kr] 4d⁶",
                  "[Kr] 5s² 4d⁴"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 514,
            text: "Berechne die Wellenlänge des Lichts, das beim Übergang eines Elektrons von n=4 zu n=2 im Wasserstoff emittiert wird. (RH = 1,097 × 10⁷ m⁻¹)",
            options: [
                  "486 nm (blau)",
                  "656 nm (rot)",
                  "410 nm (violett)",
                  "434 nm (blau-violett)"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 515,
            text: "Ein Ion M³⁺ hat die Konfiguration [Ar] 3d³. Welches Element ist M?",
            options: [
                  "Titan (Ti)",
                  "Vanadium (V)",
                  "Chrom (Cr)",
                  "Mangan (Mn)"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 516,
            text: "Welche Ionen sind isoelektronisch mit Argon?",
            options: [
                  "K⁺",
                  "Ca²⁺",
                  "Cl⁻",
                  "S²⁻"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 517,
            text: "Im Bohr-Modell: Welche Energie hat ein Elektron im Wasserstoff auf der n=3-Schale? (E₁ = -13,6 eV)",
            options: [
                  "-13,6 eV",
                  "-3,4 eV",
                  "-1,51 eV",
                  "-0,85 eV"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 518,
            text: "Ordne die folgenden Orbitale nach steigender Energie: 4s, 3d, 4p, 5s, 4d",
            options: [
                  "3d < 4s < 4p < 5s < 4d",
                  "4s < 3d < 4p < 5s < 4d",
                  "3d < 4s < 4p < 4d < 5s",
                  "4s < 3d < 4p < 4d < 5s"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 519,
            text: "Ein Element der 4. Periode hat 3 ungepaarte Elektronen in den d-Orbitalen und keine Elektronen im 4s. Um welches Ion handelt es sich?",
            options: [
                  "V²⁺",
                  "Cr³⁺",
                  "Mn⁴⁺",
                  "Co³⁺"
            ],
            correctAnswers: [
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 520,
            text: "Welche Quantenzahlen (n, l, ml, ms) sind für das höchstenergetische Elektron in Phosphor möglich?",
            options: [
                  "n=3, l=1, ml=+1, ms=+½",
                  "n=3, l=1, ml=0, ms=+½",
                  "n=3, l=1, ml=-1, ms=+½",
                  "Alle drei sind möglich (entartet)"
            ],
            correctAnswers: [
                  3
            ],
            difficulty: 4,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 521,
            text: "Zeichne alle Resonanzstrukturen für das Carbonat-Ion (CO₃²⁻). Wie viele gleichwertige Resonanzstrukturen gibt es?",
            options: [
                  "2",
                  "3",
                  "4",
                  "1"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 522,
            text: "Berechne die Formalladungen in der Lewis-Struktur von Salpetersäure (HNO₃). Welche Formalladung hat das Stickstoffatom?",
            options: [
                  "0",
                  "+1",
                  "-1",
                  "+2"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 523,
            text: "Warum kann Schwefel in SF₆ die Oktettregel verletzen?",
            options: [
                  "Schwefel hat d-Orbitale zur Verfügung (expandiertes Oktett)",
                  "Schwefel ist ein Metall",
                  "Fluor ist zu klein",
                  "Die Bindungen sind ionisch"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 524,
            text: "In der Lewis-Struktur von XeF₄: Wie viele freie Elektronenpaare hat Xenon?",
            options: [
                  "0",
                  "1",
                  "2",
                  "3"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 525,
            text: "Ordne die folgenden ionischen Verbindungen nach steigender Gitterenergie: NaCl, MgO, KBr, CaO",
            options: [
                  "KBr < NaCl < CaO < MgO",
                  "KBr < NaCl < MgO < CaO",
                  "NaCl < KBr < MgO < CaO",
                  "MgO < CaO < NaCl < KBr"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 526,
            text: "Welche Lewis-Struktur ist für das Azid-Ion (N₃⁻) am stabilsten?",
            options: [
                  "N=N=N mit Ladungen -1, +1, -1",
                  "N≡N-N mit Ladungen 0, +1, -2",
                  "N-N≡N mit Ladungen -2, +1, 0",
                  "Alle drei sind Resonanzstrukturen"
            ],
            correctAnswers: [
                  3
            ],
            difficulty: 4,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 527,
            text: "Der Born-Haber-Kreisprozess: Welche Energien gehen in die Berechnung der Gitterenergie von NaCl ein?",
            options: [
                  "Sublimationsenergie von Na",
                  "Ionisierungsenergie von Na",
                  "Dissoziationsenergie von Cl₂",
                  "Elektronenaffinität von Cl"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 528,
            text: "In BF₃ erfüllt Bor nicht die Oktettregel. Welche Aussagen sind korrekt?",
            options: [
                  "Bor hat nur 6 Valenzelektronen um sich",
                  "BF₃ ist eine Lewis-Säure",
                  "BF₃ kann ein Elektronenpaar von einer Lewis-Base aufnehmen",
                  "BF₃ ist ein Elektronenpaarakzeptor"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 529,
            text: "Zeichne die Lewis-Struktur von ClO₄⁻. Wie viele Doppelbindungen minimieren die Formalladungen?",
            options: [
                  "0",
                  "1",
                  "2",
                  "3"
            ],
            correctAnswers: [
                  3
            ],
            difficulty: 4,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 530,
            text: "Warum hat PCl₅ eine trigonal-bipyramidale Struktur trotz Oktettüberschreitung?",
            options: [
                  "Phosphor nutzt seine 3d-Orbitale",
                  "Es gibt 5 bindende Elektronenpaare um P",
                  "Die Elektronenpaare ordnen sich so an, dass die Abstoßung minimal ist",
                  "Phosphor kann mehr als 8 Elektronen aufnehmen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 531,
            text: "Das Molekül IF₅ hat welche Geometrie und wie viele freie Elektronenpaare hat Iod?",
            options: [
                  "Quadratisch-pyramidal, 1 freies Paar",
                  "Trigonal-bipyramidal, 0 freie Paare",
                  "Oktaedrisch, 1 freies Paar",
                  "Pentagonal-planar, 2 freie Paare"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 532,
            text: "Bestimme die Molekülgeometrie und Polarität von SO₂.",
            options: [
                  "Linear, unpolar",
                  "Gewinkelt, polar",
                  "Trigonal-planar, unpolar",
                  "Linear, polar"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 533,
            text: "Warum ist der Bindungswinkel in NH₃ (107°) größer als in H₂O (104,5°)?",
            options: [
                  "NH₃ hat nur ein freies Paar, H₂O hat zwei",
                  "Stickstoff ist größer als Sauerstoff",
                  "Wasserstoff ist elektronegativer",
                  "NH₃ hat mehr Bindungen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 534,
            text: "Welche Aussagen über XeF₂ sind korrekt?",
            options: [
                  "Es hat eine lineare Molekülgeometrie",
                  "Es hat 3 freie Elektronenpaare am Xe",
                  "Die Elektronenpaar-Geometrie ist trigonal-bipyramidal",
                  "Die freien Paare besetzen äquatoriale Positionen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 535,
            text: "Berechne das Dipolmoment von HCl, wenn die Bindungslänge 127 pm und die Partialladung 0,17 e beträgt. (e = 1,602 × 10⁻¹⁹ C, 1 D = 3,336 × 10⁻³⁰ C·m)",
            options: [
                  "~1,03 D",
                  "~2,06 D",
                  "~0,52 D",
                  "~3,09 D"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 536,
            text: "Das Molekül BrF₅ hat welche Struktur?",
            options: [
                  "Quadratisch-pyramidal",
                  "Trigonal-bipyramidal",
                  "Oktaedrisch",
                  "Pentagonal-planar"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 537,
            text: "Vergleiche die Bindungswinkel in BF₃, NF₃ und OF₂. Welche Reihenfolge ist korrekt?",
            options: [
                  "OF₂ < NF₃ < BF₃",
                  "BF₃ < NF₃ < OF₂",
                  "NF₃ < OF₂ < BF₃",
                  "Alle haben den gleichen Winkel"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 538,
            text: "Welche der folgenden Moleküle haben ein Dipolmoment von null?",
            options: [
                  "CO₂",
                  "BF₃",
                  "CCl₄",
                  "XeF₄"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 539,
            text: "Das Ion ICl₄⁻ hat welche Geometrie und wie viele freie Paare am I?",
            options: [
                  "Tetraedrisch, 0 freie Paare",
                  "Quadratisch-planar, 2 freie Paare",
                  "Seesaw, 1 freies Paar",
                  "Oktaedrisch, 2 freie Paare"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 540,
            text: "Warum ist NF₃ weniger polar als NH₃, obwohl F elektronegativer als H ist?",
            options: [
                  "Die N-F-Bindungsdipolmomente und das Dipolmoment des freien Paares zeigen in entgegengesetzte Richtungen",
                  "In NH₃ verstärken sich Bindungsdipole und freies Paar gegenseitig",
                  "Fluor ist zu elektronegativ",
                  "NF₃ ist ein lineares Molekül ohne Dipolmoment"
            ],
            correctAnswers: [
                  0,
                  1
            ],
            difficulty: 4,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 541,
            text: "Das Ion O₂²⁻ (Peroxid) hat welche Bindungsordnung und magnetische Eigenschaft?",
            options: [
                  "Bindungsordnung 1, diamagnetisch",
                  "Bindungsordnung 2, paramagnetisch",
                  "Bindungsordnung 1,5, paramagnetisch",
                  "Bindungsordnung 0, kein Molekül"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 542,
            text: "Ordne die Bindungsstärke: O₂, O₂⁺, O₂⁻, O₂²⁻",
            options: [
                  "O₂⁺ > O₂ > O₂⁻ > O₂²⁻",
                  "O₂ > O₂⁺ > O₂⁻ > O₂²⁻",
                  "O₂²⁻ > O₂⁻ > O₂ > O₂⁺",
                  "Alle haben die gleiche Bindungsstärke"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 543,
            text: "Welche Aussagen über das CO-Molekül sind korrekt?",
            options: [
                  "CO ist isoelektronisch zu N₂",
                  "CO hat eine Bindungsordnung von 3",
                  "CO hat ein Dipolmoment",
                  "CO ist diamagnetisch"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 544,
            text: "Das Benzol-Molekül (C₆H₆) zeigt Resonanz. Welche Aussagen sind korrekt?",
            options: [
                  "Alle C-Atome sind sp²-hybridisiert",
                  "Die π-Elektronen sind delokalisiert",
                  "Alle C-C-Bindungen haben die gleiche Länge",
                  "Das Molekül ist planar"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 4,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 545,
            text: "Bestimme die Hybridisierung jedes C-Atoms in Acrylnitril (H₂C=CH-C≡N).",
            options: [
                  "C1: sp², C2: sp², C3: sp",
                  "Alle sp²",
                  "Alle sp",
                  "C1: sp³, C2: sp², C3: sp"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 546,
            text: "Das Molekül NO hat ein ungepaartes Elektron. Welche Bindungsordnung hat es?",
            options: [
                  "2",
                  "2,5",
                  "3",
                  "1,5"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 547,
            text: "Bei homonuklearen zweiatomigen Molekülen der 2. Periode gibt es eine Orbitalumkehr bei O₂ und F₂. Was bedeutet das?",
            options: [
                  "Das σ₂p-Orbital liegt energetisch unter den π₂p-Orbitalen",
                  "Das σ₂p-Orbital liegt energetisch über den π₂p-Orbitalen",
                  "Es gibt keine π-Orbitale",
                  "Die Bindungsordnung ist negativ"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 548,
            text: "Welches Molekül hat die stärkste Bindung?",
            options: [
                  "N₂ (Bindungsordnung 3)",
                  "O₂ (Bindungsordnung 2)",
                  "F₂ (Bindungsordnung 1)",
                  "CO (Bindungsordnung 3, aber heteronuklear)"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 549,
            text: "Das Allyl-Kation (C₃H₅⁺) hat welche Struktur und π-Elektronenzahl?",
            options: [
                  "Alle C sp²-hybridisiert, 2 π-Elektronen delokalisiert",
                  "Alle C sp³-hybridisiert, 4 π-Elektronen",
                  "Gemischte Hybridisierung, 3 π-Elektronen",
                  "Lineare Struktur, keine π-Elektronen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 550,
            text: "Warum ist B₂ paramagnetisch?",
            options: [
                  "Die beiden Elektronen im π-System sind ungepaart (Hund'sche Regel)",
                  "Bor hat freie Elektronen",
                  "Die Bindungsordnung ist 0",
                  "Bor ist ein Metall"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 551,
            text: "Berechne die Gitterenergie von NaCl mit dem Born-Haber-Zyklus.",
            options: [
                  "-787 kJ/mol",
                  "-411 kJ/mol",
                  "-605 kJ/mol",
                  "-892 kJ/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 552,
            text: "In einem Kalorimeter mit Wärmekapazität 1,20 kJ/K verbrennt 1,00 g Benzoesäure (M = 122 g/mol, ΔHc = -3226 kJ/mol). Um wie viel steigt die Temperatur?",
            options: [
                  "22,0°C",
                  "26,4°C",
                  "2,69°C",
                  "268,8°C"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 553,
            text: "Die Standard-Reaktionsenthalpie kann berechnet werden als:",
            options: [
                  "ΔH°r = ΣΔH°f(Produkte) - ΣΔH°f(Reaktanten)",
                  "ΔH°r = ΣD(Bindungen gebrochen) - ΣD(Bindungen gebildet)",
                  "Beide Methoden sind korrekt",
                  "Keine der Methoden ist korrekt"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 4,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 554,
            text: "Berechne ΔH für: 2 C(s) + 3 H₂(g) + ½ O₂(g) → C₂H₅OH(l)",
            options: [
                  "-277,4 kJ/mol",
                  "+277,4 kJ/mol",
                  "-1367 kJ/mol",
                  "-2001,9 kJ/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 555,
            text: "Die Bindungsenergie einer C-H-Bindung in Methan beträgt ~413 kJ/mol. Welche Aussage ist korrekt?",
            options: [
                  "Die Gesamtenergie zum Brechen aller 4 C-H-Bindungen ist ~1652 kJ/mol",
                  "Die Bindungsenergien sind Durchschnittswerte",
                  "Die erste C-H-Bindung erfordert mehr Energie als die nachfolgenden",
                  "Die Bindungsenergie ist unabhängig von der molekularen Umgebung"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 556,
            text: "50 mL 2,0 M HCl werden mit 50 mL 2,0 M NaOH gemischt. Die Temperatur steigt um 13,7°C. Berechne ΔH der Neutralisation pro mol. (c = 4,18 J/(g·K), Dichte ≈ 1 g/mL)",
            options: [
                  "-57,3 kJ/mol",
                  "-5,73 kJ/mol",
                  "-114,6 kJ/mol",
                  "-28,7 kJ/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 557,
            text: "Warum ist die Gitterenergie von MgO (~3850 kJ/mol) viel größer als die von NaCl (~787 kJ/mol)?",
            options: [
                  "Mg²⁺ und O²⁻ haben höhere Ladungen als Na⁺ und Cl⁻",
                  "Der Ionenabstand in MgO ist kleiner",
                  "Die Gitterenergie ist proportional zu q₁×q₂/r",
                  "Der Ionenabstand hat keinen Einfluss auf die Gitterenergie"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 558,
            text: "Berechne ΔU für die Reaktion: C(s) + O₂(g) → CO₂(g) bei 298 K, wenn ΔH = -393,5 kJ/mol.",
            options: [
                  "-393,5 kJ/mol (da Δn = 0)",
                  "-391,0 kJ/mol",
                  "-396,0 kJ/mol",
                  "Kann nicht berechnet werden"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 559,
            text: "Für welche Reaktion ist der Unterschied zwischen ΔH und ΔU am größten?",
            options: [
                  "2 H₂(g) + O₂(g) → 2 H₂O(l)",
                  "N₂(g) + O₂(g) → 2 NO(g)",
                  "C(s) + O₂(g) → CO₂(g)",
                  "H₂(g) + I₂(g) → 2 HI(g)"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 560,
            text: "Die Hydratationsenthalpie von Na⁺ ist -406 kJ/mol und die von Cl⁻ ist -363 kJ/mol. Die Lösungsenthalpie von NaCl ist +3,9 kJ/mol. Was ist die Gitterenergie von NaCl?",
            options: [
                  "-773 kJ/mol",
                  "+773 kJ/mol",
                  "-765 kJ/mol",
                  "+765 kJ/mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 4,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 561,
            text: "Der Dampfdruck von Wasser bei 25°C ist 23,8 mmHg und bei 100°C ist 760 mmHg. Berechne die Verdampfungsenthalpie mit der Clausius-Clapeyron-Gleichung.",
            options: [
                  "~44 kJ/mol",
                  "~22 kJ/mol",
                  "~88 kJ/mol",
                  "~11 kJ/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 562,
            text: "Die Clausius-Clapeyron-Gleichung lautet: ln(P₂/P₁) = -ΔHvap/R × (1/T₂ - 1/T₁). Welche Form hat diese Gleichung?",
            options: [
                  "Logarithmisch-linear",
                  "Ein Plot von ln(P) gegen 1/T ergibt eine Gerade",
                  "Die Steigung ist -ΔHvap/R",
                  "Die Clausius-Clapeyron-Gleichung gilt nur für ideale Gase"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 563,
            text: "Berechne den Dampfdruck von Ethanol bei 50°C, wenn P bei 25°C = 59 mmHg und ΔHvap = 38,6 kJ/mol.",
            options: [
                  "~220 mmHg",
                  "~110 mmHg",
                  "~440 mmHg",
                  "~59 mmHg"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 564,
            text: "Der kritische Punkt von Wasser liegt bei 374°C und 22,1 MPa. Welche Aussagen sind korrekt?",
            options: [
                  "Oberhalb dieser Werte existiert nur überkritisches Wasser",
                  "Die Dichte von Flüssigkeit und Dampf werden am kritischen Punkt gleich",
                  "Die Oberflächenspannung verschwindet am kritischen Punkt",
                  "Am kritischen Punkt ist die Oberflächenspannung maximal"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 565,
            text: "Bei der Erhöhung des Drucks auf Eis von 1 atm auf 500 atm bei 0°C:",
            options: [
                  "Schmilzt das Eis, da die Schmelzkurve negative Steigung hat",
                  "Der Schmelzpunkt sinkt auf etwa -4°C",
                  "Die Dichteanomalie des Wassers ist verantwortlich",
                  "Erhöhter Druck verhindert das Schmelzen von Eis"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 566,
            text: "Die Trouton-Regel besagt, dass ΔSvap ≈ 85 J/(mol·K) für viele unpolare Flüssigkeiten. Berechne den erwarteten Siedepunkt einer Substanz mit ΔHvap = 30 kJ/mol.",
            options: [
                  "~353 K (80°C)",
                  "~250 K (-23°C)",
                  "~450 K (177°C)",
                  "~300 K (27°C)"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 567,
            text: "Die Phasenregel von Gibbs lautet F = C - P + 2. Am Tripelpunkt von Wasser (C=1, P=3) ist F:",
            options: [
                  "0 (invarianter Punkt)",
                  "1",
                  "2",
                  "3"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 568,
            text: "Entlang der Schmelzkurve im Phasendiagramm gilt nach Gibbs F = ?",
            options: [
                  "1 (eine Variable kann geändert werden, die andere passt sich an)",
                  "0",
                  "2",
                  "3"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 569,
            text: "Die Oberflächenspannung von Wasser bei 20°C beträgt 72,8 mN/m. Wie ändert sie sich mit steigender Temperatur?",
            options: [
                  "Sie nimmt ab",
                  "Thermische Bewegung schwächt die intermolekularen Kräfte",
                  "Am kritischen Punkt wird sie null",
                  "Die Oberflächenspannung steigt mit der Temperatur"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 570,
            text: "Berechne die Energie, die benötigt wird, um 10 g Eis bei -10°C vollständig zu verdampfen.",
            options: [
                  "~30,5 kJ",
                  "~22,6 kJ",
                  "~3,34 kJ",
                  "~45 kJ"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 571,
            text: "Eine Protein-Lösung (5 g/L) hat bei 25°C einen osmotischen Druck von 0,001 atm. Berechne die Molmasse des Proteins.",
            options: [
                  "~122.000 g/mol",
                  "~12.200 g/mol",
                  "~1.220 g/mol",
                  "~1.220.000 g/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 572,
            text: "Ein Frostschutzmittel aus 50% Ethylenglykol (M = 62 g/mol) und 50% Wasser (Massenprozent). Berechne den Gefrierpunkt. (Kf = 1,86 K·kg/mol)",
            options: [
                  "ca. -30°C",
                  "ca. -15°C",
                  "ca. -45°C",
                  "ca. -5°C"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 573,
            text: "Der gemessene van't Hoff-Faktor für 0,1 m MgCl₂ ist 2,7 statt 3. Berechne den Dissoziationsgrad α.",
            options: [
                  "85%",
                  "90%",
                  "70%",
                  "100%"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 574,
            text: "Ein ideales Zweistoffgemisch aus A und B hat die Dampfdrücke P°A = 100 mmHg und P°B = 50 mmHg. Bei xA = 0,6, wie hoch ist der Gesamtdampfdruck?",
            options: [
                  "80 mmHg",
                  "75 mmHg",
                  "70 mmHg",
                  "85 mmHg"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 575,
            text: "Für das ideale Gemisch aus Frage 4: Wie ist die Zusammensetzung des Dampfes (yA)?",
            options: [
                  "0,75",
                  "0,60",
                  "0,50",
                  "0,80"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 576,
            text: "Was ist eine positive Abweichung vom Raoult'schen Gesetz?",
            options: [
                  "Der Dampfdruck ist höher als nach Raoult erwartet",
                  "Die Wechselwirkungen A-B sind schwächer als A-A und B-B",
                  "Ein azeotropes Gemisch mit Minimum im Siedepunkt ist möglich",
                  "Der Dampfdruck ist unabhängig von der Wechselwirkung zwischen Komponenten"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 577,
            text: "Meerwasser enthält etwa 3,5% NaCl. Berechne den minimalen Druck für Umkehrosmose bei 25°C. (M(NaCl) = 58,5 g/mol)",
            options: [
                  "ca. 29 atm",
                  "ca. 14 atm",
                  "ca. 58 atm",
                  "ca. 7 atm"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 578,
            text: "Die Ebullioskopie ist weniger genau als die Kryoskopie. Warum?",
            options: [
                  "Kb ist kleiner als Kf für die meisten Lösungsmittel",
                  "Die Siedepunkterhöhung ist kleiner als die Gefrierpunktserniedrigung",
                  "Verdampfung des Lösungsmittels kann die Konzentration ändern",
                  "Die Ebullioskopie ist genauer als die Kryoskopie"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 579,
            text: "Die kryoskopische Konstante wird abgeleitet als Kf = RT²M/(1000ΔHfus). Berechne Kf für Benzol. (Tf = 278,6 K, ΔHfus = 9,87 kJ/mol, M = 78 g/mol)",
            options: [
                  "5,12 K·kg/mol",
                  "1,86 K·kg/mol",
                  "2,53 K·kg/mol",
                  "10,24 K·kg/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 580,
            text: "Ein Polymerisationsgrad wird durch Osmometrie bestimmt. Eine Lösung von 2 g Polymer in 100 mL hat π = 0,0012 atm bei 25°C. Das Monomer hat M = 100 g/mol. Wie viele Monomereinheiten hat das Polymer?",
            options: [
                  "ca. 400",
                  "ca. 40",
                  "ca. 4000",
                  "ca. 4"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 581,
            text: "Berechne den pH-Wert einer 0,01 M H₂SO₄-Lösung (vollständige Dissoziation beider Protonen).",
            options: [
                  "1,70",
                  "2,00",
                  "1,00",
                  "0,70"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 582,
            text: "Berechne das Volumen an 0,1 M NaOH, das nötig ist, um 25 mL 0,1 M H₂SO₄ vollständig zu neutralisieren.",
            options: [
                  "50 mL",
                  "25 mL",
                  "12,5 mL",
                  "100 mL"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 583,
            text: "Berechne den pH am Äquivalenzpunkt bei der Titration von 50 mL 0,1 M CH₃COOH mit 0,1 M NaOH. (pKs = 4,76)",
            options: [
                  "8,72",
                  "7,00",
                  "4,76",
                  "9,38"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 584,
            text: "Die Pufferkapazität β ist definiert als β = Δn/ΔpH. Welche Faktoren beeinflussen sie?",
            options: [
                  "Die Gesamtkonzentration des Puffers (höher = bessere Kapazität)",
                  "Das Verhältnis [HA]/[A⁻] (optimal bei 1:1)",
                  "Der pKs-Wert sollte nahe am gewünschten pH liegen",
                  "Die Pufferkapazität ist unabhängig von der Konzentration"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 585,
            text: "Berechne den pH einer Lösung, die 0,1 M NH₃ und 0,15 M NH₄Cl enthält. (pKb(NH₃) = 4,75)",
            options: [
                  "9,07",
                  "9,25",
                  "4,93",
                  "8,75"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 586,
            text: "Bei der Titration von 25 mL 0,1 M Na₂CO₃ mit 0,1 M HCl gibt es zwei Äquivalenzpunkte. Bei welchen Volumina?",
            options: [
                  "25 mL und 50 mL",
                  "12,5 mL und 25 mL",
                  "50 mL und 100 mL",
                  "25 mL und 75 mL"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 587,
            text: "Der Blutpuffer hält den pH bei etwa 7,4. Er besteht hauptsächlich aus:",
            options: [
                  "H₂CO₃/HCO₃⁻ (Kohlensäure/Hydrogencarbonat)",
                  "H₂PO₄⁻/HPO₄²⁻ (Phosphatpuffer)",
                  "Proteine (Histidin-Reste)",
                  "Der Blutpuffer besteht nur aus H₂CO₃/HCO₃⁻"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 588,
            text: "Berechne das Verhältnis [HCO₃⁻]/[H₂CO₃] im Blut bei pH 7,4. (pKs1 = 6,1)",
            options: [
                  "20:1",
                  "10:1",
                  "1:1",
                  "1:20"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 589,
            text: "Eine Lösung enthält 0,1 M HCl und 0,1 M CH₃COOH. Was ist der pH-Wert?",
            options: [
                  "ca. 1,00 (dominiert von der starken Säure)",
                  "ca. 2,00",
                  "ca. 2,88",
                  "ca. 0,70"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 590,
            text: "Die Amphoteramphigkeitskonstante von Wasser ist Kw = 10⁻¹⁴ bei 25°C. Bei 60°C ist Kw = 10⁻¹³. Was ist der neutrale pH bei 60°C?",
            options: [
                  "6,5",
                  "7,0",
                  "6,0",
                  "7,5"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 591,
            text: "Berechne die Gleichgewichtskonstante K für die Reaktion Zn + Cu²⁺ ⇌ Zn²⁺ + Cu bei 25°C. (E° = 1,10 V)",
            options: [
                  "ca. 1,5 × 10³⁷",
                  "ca. 1,5 × 10¹⁸",
                  "ca. 1,5 × 10⁻³⁷",
                  "ca. 1,10"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 592,
            text: "Bei der Elektrolyse einer NaCl-Lösung an der Anode: Warum entsteht Cl₂ statt O₂, obwohl E°(O₂/H₂O) < E°(Cl₂/Cl⁻)?",
            options: [
                  "Überspannung bei der O₂-Entwicklung ist hoch",
                  "Die Kinetik der Cl₂-Bildung ist schneller",
                  "Bei hoher Cl⁻-Konzentration verschiebt sich das Potential",
                  "Bei hoher Cl⁻-Konzentration entsteht bevorzugt O₂"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 593,
            text: "Eine Brennstoffzelle nutzt die Reaktion H₂ + ½ O₂ → H₂O. Berechne die theoretische EMK. (E°(O₂/H₂O) = +1,23 V, E°(H⁺/H₂) = 0 V)",
            options: [
                  "1,23 V",
                  "2,46 V",
                  "0,62 V",
                  "0 V"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 594,
            text: "Der Wirkungsgrad einer Wasserstoff-Brennstoffzelle ist theoretisch höher als der einer Wärmekraftmaschine. Warum?",
            options: [
                  "Direkte Umwandlung chemischer in elektrische Energie",
                  "Keine Carnot-Limitierung",
                  "ΔG/ΔH kann über 80% betragen",
                  "Der Wirkungsgrad von Brennstoffzellen ist durch Carnot limitiert"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 595,
            text: "Berechne den pH einer Wasserstoffelektrode mit P(H₂) = 1 atm und E = -0,118 V gegen SHE.",
            options: [
                  "pH = 2",
                  "pH = 4",
                  "pH = 0",
                  "pH = 7"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 596,
            text: "Kathodischer Korrosionsschutz nutzt eine Opferanode. Welches Metall ist geeignet, um Eisen zu schützen?",
            options: [
                  "Zink (E° = -0,76 V)",
                  "Kupfer (E° = +0,34 V)",
                  "Silber (E° = +0,80 V)",
                  "Gold (E° = +1,50 V)"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 597,
            text: "Die Chlor-Alkali-Elektrolyse produziert Cl₂, H₂ und NaOH. Welche Gesamtgleichung beschreibt den Prozess?",
            options: [
                  "2 NaCl + 2 H₂O → Cl₂ + H₂ + 2 NaOH",
                  "NaCl + H₂O → NaOH + HCl",
                  "2 NaCl → 2 Na + Cl₂",
                  "NaCl + H₂O → NaClO + H₂"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 598,
            text: "Ein Bleiakkumulator hat die Reaktion: Pb + PbO₂ + 2 H₂SO₄ ⇌ 2 PbSO₄ + 2 H₂O. Die EMK ist etwa:",
            options: [
                  "2,0 V pro Zelle",
                  "1,5 V pro Zelle",
                  "1,2 V pro Zelle",
                  "3,0 V pro Zelle"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 599,
            text: "Bei der Elektrolyse von geschmolzenem NaCl: Was passiert an den Elektroden?",
            options: [
                  "Kathode: Na⁺ + e⁻ → Na; Anode: 2 Cl⁻ → Cl₂ + 2e⁻",
                  "Kathode: Cl₂-Entwicklung; Anode: Na-Abscheidung",
                  "An beiden Elektroden entsteht NaCl",
                  "Keine Reaktion"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 4,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 600,
            text: "Die Standardzellspannung einer Lithium-Ionen-Batterie (LiCoO₂/Graphit) beträgt etwa 3,7 V. Warum ist sie höher als bei einem Bleiakkumulator?",
            options: [
                  "Lithium hat ein sehr negatives Standardpotential (-3,04 V)",
                  "Der große Potentialunterschied zwischen Anode und Kathode",
                  "Organische Elektrolyte ermöglichen höhere Spannungen",
                  "Die Lithium-Ionen-Batterie hat niedrigere Spannung als der Bleiakku"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 4,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 601,
            text: "Ein Element X hat folgende Eigenschaften: Die dritte Ionisierungsenergie ist etwa 10-mal größer als die zweite. Welche Schlussfolgerungen sind korrekt?",
            options: [
                  "Das Element steht in der 2. Hauptgruppe",
                  "Das Element bildet bevorzugt X²⁺-Ionen",
                  "Nach der Abgabe von 2 Elektronen liegt eine Edelgaskonfiguration vor",
                  "Es könnte sich um Magnesium oder Calcium handeln"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 602,
            text: "Die Atomradien von Fe, Co und Ni (alle 4. Periode, Nebengruppe) sind nahezu gleich groß (ca. 125 pm). Erkläre dieses Phänomen.",
            options: [
                  "Die zusätzlichen Elektronen besetzen d-Orbitale, die schlecht abschirmen",
                  "Die steigende Kernladung wird durch die d-Elektronen fast vollständig kompensiert",
                  "Bei Nebengruppenelemente ist der Atomradius unabhängig von der Elektronenzahl",
                  "Die Kontraktion durch steigende Kernladung und die Abschirmung durch d-Elektronen heben sich nahezu auf"
            ],
            correctAnswers: [
                  0,
                  1,
                  3
            ],
            difficulty: 5,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 603,
            text: "Ein unbekanntes Element zeigt folgende Ionisierungsenergien (in kJ/mol): IE₁ = 1681, IE₂ = 3374, IE₃ = 6050, IE₄ = 8408, IE₅ = 10496. Wo steht dieses Element im Periodensystem?",
            options: [
                  "4. Hauptgruppe",
                  "5. Hauptgruppe",
                  "1. Hauptgruppe",
                  "2. Hauptgruppe"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 604,
            text: "Die Lanthanoid-Kontraktion beeinflusst die Eigenschaften der 5d-Übergangsmetalle. Welche Aussagen sind korrekt?",
            options: [
                  "Hafnium (Hf) hat einen ähnlichen Atomradius wie Zirkonium (Zr), obwohl es eine Periode tiefer steht",
                  "Die 4f-Elektronen schirmen die Kernladung schlecht ab",
                  "Die Lanthanoid-Kontraktion führt zu einer Verkleinerung der Atomradien",
                  "Wolfram und Molybdän haben dadurch sehr ähnliche chemische Eigenschaften"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 605,
            text: "Berechne die Energie, die benötigt wird, um 1 mol Natrium-Atome vollständig zu ionisieren (alle 11 Elektronen zu entfernen). Die Summe aller Ionisierungsenergien beträgt 90 434 kJ/mol. Wie viel Energie ist das pro Atom?",
            options: [
                  "1,50 × 10⁻¹⁸ J",
                  "1,50 × 10⁻¹⁵ J",
                  "8,22 × 10⁻¹⁸ J",
                  "90 434 J"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 606,
            text: "Das Element Gallium (Ga) schmilzt bereits bei 29,8°C, während Aluminium (Al) erst bei 660°C schmilzt. Welche Erklärung ist plausibel?",
            options: [
                  "Gallium hat eine ungewöhnliche Kristallstruktur mit Ga₂-Einheiten",
                  "Die d-Elektronen bei Gallium führen zu schwächerer metallischer Bindung",
                  "Die vollständig gefüllte d-Unterschale bei Gallium verringert die Bindungsstärke",
                  "Aluminium hat stärkere Metall-Metall-Bindungen durch seine drei Valenzelektronen"
            ],
            correctAnswers: [
                  0,
                  2
            ],
            difficulty: 5,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 607,
            text: "Warum ist die zweite Elektronenaffinität von Sauerstoff positiv (+844 kJ/mol), obwohl die erste negativ ist (-141 kJ/mol)?",
            options: [
                  "Das O⁻-Ion muss gegen die Elektron-Elektron-Abstoßung ein weiteres Elektron aufnehmen",
                  "Das entstehende O²⁻-Ion ist in der Gasphase instabil",
                  "Die Aufnahme des zweiten Elektrons erfordert Energiezufuhr",
                  "Die Gitterenergie in Ionenverbindungen stabilisiert O²⁻-Ionen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 608,
            text: "Ein Massenspektrometer zeigt für ein Element zwei Peaks bei m/z = 63 (Intensität 69,2%) und m/z = 65 (Intensität 30,8%). Die berechnete mittlere Atommasse beträgt 63,55 u. Welche Aussagen sind korrekt?",
            options: [
                  "Es handelt sich um Kupfer",
                  "Das häufigere Isotop ist ⁶³Cu",
                  "Die Massendifferenz der Isotope beträgt 2 Neutronen",
                  "Beide Isotope haben 29 Protonen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 609,
            text: "Die effektive Kernladung Z_eff für das Valenzelektron von Natrium beträgt etwa +2,2, obwohl die tatsächliche Kernladung +11 ist. Welche Schlussfolgerungen sind richtig?",
            options: [
                  "Die inneren 10 Elektronen schirmen etwa 8,8 Kernladungen ab",
                  "Die Abschirmung ist nicht vollständig, da die Elektronenorbitale sich durchdringen",
                  "Z_eff erklärt, warum das Valenzelektron relativ leicht abgegeben wird",
                  "Bei Magnesium ist Z_eff für die Valenzelektronen höher als bei Natrium"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 610,
            text: "Analysiere die Anomalie der Elektronenaffinität: EA(F) = -328 kJ/mol, EA(Cl) = -349 kJ/mol. Warum hat Chlor eine höhere (negativere) Elektronenaffinität als Fluor, obwohl Fluor elektronegativer ist?",
            options: [
                  "Das kleine Fluoratom hat eine höhere Elektronendichte, was zu stärkerer Elektron-Elektron-Abstoßung führt",
                  "Chlor hat größere Orbitale, die ein zusätzliches Elektron besser aufnehmen können",
                  "Fluor ist zu klein für eine effiziente Aufnahme eines weiteren Elektrons",
                  "Die Elektronegativität und die Elektronenaffinität messen unterschiedliche Eigenschaften"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 1,
            chapterName: "Aufbau der Atome & Periodensystem"
      },
      {
            id: 611,
            text: "Ein Mineral enthält 40,0% Calcium, 12,0% Kohlenstite und 48,0% Sauerstoff. Bestimme die empirische Formel. (Ca = 40, C = 12, O = 16 g/mol)",
            options: [
                  "CaCO₃",
                  "Ca₂CO₄",
                  "CaC₂O₄",
                  "Ca₃(CO₃)₂"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 612,
            text: "Ein Hydrat verliert beim Erhitzen 36,0% seiner Masse als Wasser. Die wasserfreie Verbindung hat die Formel MgSO₄ (M = 120,4 g/mol). Wie viele Mol Kristallwasser enthält das Hydrat pro Mol MgSO₄?",
            options: [
                  "5",
                  "6",
                  "7",
                  "4"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 5,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 613,
            text: "Wie viele Atome sind in 1,00 cm³ Aluminium enthalten? (ρ = 2,70 g/cm³, M = 27,0 g/mol)",
            options: [
                  "6,02 × 10²²",
                  "6,02 × 10²³",
                  "2,70 × 10²³",
                  "1,00 × 10²³"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 614,
            text: "Ein Ion X³⁻ ist isoelektronisch mit Argon (18 Elektronen). Welche Eigenschaften hat das entsprechende Element?",
            options: [
                  "Es hat 15 Protonen",
                  "Es steht in der 5. Hauptgruppe",
                  "Es handelt sich um Phosphor",
                  "Das neutrale Atom hat 5 Valenzelektronen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 615,
            text: "Vergleiche die Anzahl der Elektronen in 1 g Na⁺-Ionen mit der Anzahl in 1 g Mg²⁺-Ionen. (Na = 23, Mg = 24,3 g/mol)",
            options: [
                  "Na⁺ hat mehr Elektronen pro Gramm",
                  "Mg²⁺ hat mehr Elektronen pro Gramm",
                  "Beide haben gleich viele Elektronen pro Gramm",
                  "Na⁺ hat 10 Elektronen, Mg²⁺ hat 10 Elektronen pro Ion"
            ],
            correctAnswers: [
                  1,
                  3
            ],
            difficulty: 5,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 616,
            text: "Berechne das Verhältnis der Teilchenzahlen: 10 g He zu 10 g Ar. (He = 4, Ar = 40 g/mol)",
            options: [
                  "1:1",
                  "10:1",
                  "1:10",
                  "4:40"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 617,
            text: "In einer Probe Natriumcarbonat (Na₂CO₃) sind 6,022 × 10²⁴ Sauerstoff-Atome enthalten. Wie viel Gramm Na₂CO₃ ist das? (M = 106 g/mol)",
            options: [
                  "353,3 g",
                  "106 g",
                  "318 g",
                  "212 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 618,
            text: "Ein Element bildet Ionen mit den Ladungen +2 und +3. Das +3-Ion hat 23 Elektronen. Welches Element ist es und wie viele Elektronen hat das +2-Ion?",
            options: [
                  "Eisen (Fe), 24 Elektronen",
                  "Kobalt (Co), 25 Elektronen",
                  "Mangan (Mn), 23 Elektronen",
                  "Chrom (Cr), 22 Elektronen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 619,
            text: "Welche Masse Sauerstoff (O₂) enthält genauso viele Moleküle wie 7 g Stickstoff (N₂)? (N = 14, O = 16 g/mol)",
            options: [
                  "8 g",
                  "7 g",
                  "16 g",
                  "14 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 620,
            text: "In einem Kristall von Calciumfluorid (CaF₂) befinden sich 3,01 × 10²³ Ca²⁺-Ionen. Welche Aussagen sind korrekt?",
            options: [
                  "Es sind 6,02 × 10²³ F⁻-Ionen vorhanden",
                  "Die Gesamtmasse beträgt ca. 39 g",
                  "Es sind 0,5 mol CaF₂ vorhanden",
                  "Die Formeleinheiten enthalten doppelt so viele Fluorid- wie Calcium-Ionen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 2,
            chapterName: "Elemente, Ionen & Mol"
      },
      {
            id: 621,
            text: "Bei der Reaktion 4 FeS₂ + 11 O₂ → 2 Fe₂O₃ + 8 SO₂ werden 120 g FeS₂ mit 80 g O₂ umgesetzt. Welcher Stoff limitiert die Reaktion und wie viel SO₂ entsteht? (M(FeS₂) = 120, M(O₂) = 32, M(SO₂) = 64 g/mol)",
            options: [
                  "O₂ limitiert, 116,4 g SO₂",
                  "FeS₂ limitiert, 128 g SO₂",
                  "O₂ limitiert, 128 g SO₂",
                  "FeS₂ limitiert, 116,4 g SO₂"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 622,
            text: "Eine mehrstufige Synthese hat drei Schritte mit Ausbeuten von 90%, 85% und 95%. Wie hoch ist die Gesamtausbeute?",
            options: [
                  "90%",
                  "72,7%",
                  "76,5%",
                  "270%"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 623,
            text: "Bei der Verbrennung von 10,0 g einer Verbindung CₓHᵧ entstehen 30,0 g CO₂ und 18,0 g H₂O. Welche Molekülformel ist möglich?",
            options: [
                  "CH₄",
                  "C₂H₆",
                  "C₃H₈",
                  "C₄H₁₀"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 5,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 624,
            text: "Ein Gemisch aus NaCl und KCl wiegt 5,0 g. Beim Lösen und Fällen mit AgNO₃ entstehen 10,0 g AgCl. Wie viel Prozent NaCl enthält das Gemisch? (M: NaCl = 58,5, KCl = 74,5, AgCl = 143,5 g/mol)",
            options: [
                  "40%",
                  "50%",
                  "60%",
                  "70%"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 5,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 625,
            text: "Für die Reaktion 2 C₈H₁₈ + 25 O₂ → 16 CO₂ + 18 H₂O: Wie viel Liter O₂ (bei STP) werden für die Verbrennung von 1 kg Octan benötigt? (M(C₈H₁₈) = 114 g/mol)",
            options: [
                  "2456 L",
                  "1228 L",
                  "4912 L",
                  "980 L"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 626,
            text: "Bei der Reaktion 3 NO₂ + H₂O → 2 HNO₃ + NO: Wie viel Gramm HNO₃ können maximal aus 92 g NO₂ gewonnen werden? (M(NO₂) = 46, M(HNO₃) = 63 g/mol)",
            options: [
                  "63 g",
                  "84 g",
                  "126 g",
                  "42 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 627,
            text: "Ein Erz enthält Cu₂S. Bei der Reaktion 2 Cu₂S + 3 O₂ → 2 Cu₂O + 2 SO₂ und anschließend Cu₂O + C → 2 Cu + CO: Wie viel Gramm Cu erhält man aus 100 g Cu₂S bei 100% Ausbeute? (M(Cu₂S) = 159, M(Cu) = 63,5 g/mol)",
            options: [
                  "63,5 g",
                  "79,9 g",
                  "127 g",
                  "40 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 628,
            text: "Bei der Titration von 25,0 mL H₂SO₄ werden 40,0 mL NaOH (c = 0,5 mol/L) benötigt. H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O. Welche Konzentration hat die H₂SO₄?",
            options: [
                  "0,2 mol/L",
                  "0,4 mol/L",
                  "0,5 mol/L",
                  "0,8 mol/L"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 629,
            text: "Beim Erhitzen von 21,4 g eines Hydrats CuSO₄·xH₂O bleiben 13,7 g wasserfreies CuSO₄ zurück. Bestimme x. (M(CuSO₄) = 159,5, M(H₂O) = 18 g/mol)",
            options: [
                  "3",
                  "4",
                  "5",
                  "7"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 5,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 630,
            text: "Bei einer Rücktitration werden 50 mL NH₃-Lösung mit überschüssigem HCl (75 mL, 1 mol/L) versetzt. Der Überschuss wird mit 25 mL NaOH (1 mol/L) zurücktitriert. Welche Konzentration hat die NH₃-Lösung?",
            options: [
                  "0,5 mol/L",
                  "1 mol/L",
                  "1,5 mol/L",
                  "2 mol/L"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 3,
            chapterName: "Gleichungen & Stöchiometrie"
      },
      {
            id: 631,
            text: "Bei der Verbrennung von 0,858 g einer Verbindung (C, H, O, N) entstehen 1,80 g CO₂, 0,540 g H₂O und 0,0858 g N₂. Bestimme die empirische Formel.",
            options: [
                  "C₃H₄ON",
                  "C₆H₈O₂N",
                  "C₂H₄ON",
                  "C₃H₆ON"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 632,
            text: "Ein Gemisch aus Fe und Fe₂O₃ wiegt 20 g. Nach Reaktion mit überschüssiger HCl werden 2,24 L H₂ (bei STP) freigesetzt. Wie viel Prozent des Gemischs ist elementares Eisen? (Fe + 2 HCl → FeCl₂ + H₂)",
            options: [
                  "14%",
                  "28%",
                  "56%",
                  "42%"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 633,
            text: "Bei einer Reaktionsfolge wird Schwefel verbrannt: S + O₂ → SO₂, dann 2 SO₂ + O₂ → 2 SO₃, dann SO₃ + H₂O → H₂SO₄. Wie viel Gramm H₂SO₄ können theoretisch aus 64 g S gewonnen werden?",
            options: [
                  "98 g",
                  "196 g",
                  "147 g",
                  "245 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 634,
            text: "Eine Verbindung enthält nur C und H. Bei der Verbrennung von 1,00 g entstehen 3,14 g CO₂ und 1,29 g H₂O. Die Dichte des Gases beträgt 1,25 g/L bei STP. Bestimme die Molekülformel.",
            options: [
                  "C₂H₄",
                  "C₂H₆",
                  "C₃H₆",
                  "C₃H₈"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 635,
            text: "Ein Metallcarbonat MCO₃ reagiert mit HCl: MCO₃ + 2 HCl → MCl₂ + H₂O + CO₂. Aus 10,0 g MCO₃ entstehen 2,24 L CO₂ (STP). Welches Metall ist M?",
            options: [
                  "Magnesium (Mg)",
                  "Calcium (Ca)",
                  "Barium (Ba)",
                  "Zink (Zn)"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 636,
            text: "Bei der Analyse eines Proteins wird der Stickstoffgehalt nach Kjeldahl bestimmt. 1,50 g Protein liefern NH₃, das mit 15,0 mL H₂SO₄ (0,5 M) neutralisiert wird. Wie hoch ist der Stickstoffanteil des Proteins?",
            options: [
                  "7,0%",
                  "14,0%",
                  "9,3%",
                  "4,7%"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 637,
            text: "Bei der Elektrolyse einer Schmelze von Al₂O₃ werden 54 g Al gewonnen. Wie viel Liter O₂ (bei STP) werden dabei freigesetzt?",
            options: [
                  "33,6 L",
                  "22,4 L",
                  "44,8 L",
                  "11,2 L"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 638,
            text: "Eine Mischung aus Na₂CO₃ und NaHCO₃ wiegt 10,0 g. Beim Erhitzen entstehen 1,12 L CO₂ (STP). Berechne den Massenanteil von NaHCO₃. (2 NaHCO₃ → Na₂CO₃ + H₂O + CO₂)",
            options: [
                  "42%",
                  "84%",
                  "58%",
                  "21%"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 639,
            text: "Bestimme das Verhältnis der Massen von Fe und S, die zur Synthese von FeS₂ (Pyrit) benötigt werden.",
            options: [
                  "7:8",
                  "7:4",
                  "56:64",
                  "1:1,14"
            ],
            correctAnswers: [
                  0,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 640,
            text: "Bei der Reaktion 3 Cu + 8 HNO₃(verdünnt) → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O werden 50 g Cu eingesetzt. Wie viel Gramm HNO₃ werden benötigt und wie viel Liter NO (STP) entstehen?",
            options: [
                  "132,3 g HNO₃, 11,7 L NO",
                  "66,15 g HNO₃, 5,85 L NO",
                  "99,2 g HNO₃, 8,8 L NO",
                  "132,3 g HNO₃, 23,4 L NO"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 4,
            chapterName: "Reaktionen & Empirische Formeln"
      },
      {
            id: 641,
            text: "Eine 30%ige H₂SO₄ (ρ = 1,22 g/mL) soll auf 10% (ρ = 1,07 g/mL) verdünnt werden. Wie viel mL Wasser werden zu 100 mL der 30%igen Säure gegeben?",
            options: [
                  "200 mL",
                  "242 mL",
                  "300 mL",
                  "342 mL"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 642,
            text: "Ein Ionenaustauscher entfernt Ca²⁺-Ionen aus Wasser. Wenn 10 L Wasser mit c(Ca²⁺) = 0,002 M behandelt werden, wie viel mol Ca²⁺ werden entfernt?",
            options: [
                  "0,002 mol",
                  "0,02 mol",
                  "0,2 mol",
                  "2 mol"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 643,
            text: "Bei der Komplexbildung: Ag⁺ + 2 NH₃ → [Ag(NH₃)₂]⁺. Wie viel mL einer 2 M NH₃-Lösung werden benötigt, um alle Ag⁺-Ionen in 50 mL einer 0,1 M AgNO₃-Lösung zu komplexieren?",
            options: [
                  "2,5 mL",
                  "5 mL",
                  "10 mL",
                  "25 mL"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 644,
            text: "Berechne den Stoffmengenanteil (Molenbruch) von Ethanol in einer Lösung aus 46 g Ethanol (M = 46 g/mol) und 180 g Wasser (M = 18 g/mol).",
            options: [
                  "0,091",
                  "0,1",
                  "0,20",
                  "0,5"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 645,
            text: "Eine Mischung aus Na₂CO₃ und NaHCO₃ wird in Wasser gelöst. 25 mL dieser Lösung benötigen 15 mL HCl (1 M) bis zum ersten Äquivalenzpunkt und weitere 20 mL bis zum zweiten. Welche Konzentrationen haben Na₂CO₃ und NaHCO₃ in der Ausgangslösung?",
            options: [
                  "Na₂CO₃: 0,6 M, NaHCO₃: 0,2 M",
                  "Na₂CO₃: 0,4 M, NaHCO₃: 0,6 M",
                  "Na₂CO₃: 0,6 M, NaHCO₃: 0,8 M",
                  "Na₂CO₃: 0,2 M, NaHCO₃: 0,4 M"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 646,
            text: "Das Löslichkeitsprodukt von AgCl beträgt Ksp = 1,8 × 10⁻¹⁰. Wie hoch ist die maximale Konzentration von Ag⁺ in einer 0,1 M NaCl-Lösung?",
            options: [
                  "1,8 × 10⁻⁹ M",
                  "1,8 × 10⁻⁵ M",
                  "1,34 × 10⁻⁵ M",
                  "1,8 × 10⁻¹¹ M"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 647,
            text: "Wie viel g KMnO₄ werden benötigt, um 500 mL einer Lösung herzustellen, die 0,02 M in K⁺ und gleichzeitig 0,02 M in MnO₄⁻ ist? (M(KMnO₄) = 158 g/mol)",
            options: [
                  "0,79 g",
                  "1,58 g",
                  "3,16 g",
                  "15,8 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 648,
            text: "Bei einer Rücktitration werden 0,5 g CaCO₃ mit 50 mL HCl (1 M) versetzt. Der Überschuss wird mit 25 mL NaOH (0,5 M) zurücktitriert. Wie viel Prozent der Probe waren CaCO₃? (M(CaCO₃) = 100 g/mol)",
            options: [
                  "75%",
                  "85%",
                  "95%",
                  "100%"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 649,
            text: "Eine Fe³⁺-Lösung wird mit KSCN komplexometrisch bestimmt. 25 mL der Fe³⁺-Lösung reagieren mit 30 mL KSCN (0,1 M). Welche Konzentration hat die Fe³⁺-Lösung bei der Reaktion Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺?",
            options: [
                  "0,06 M",
                  "0,12 M",
                  "0,15 M",
                  "0,30 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 650,
            text: "Zwei Lösungen werden gemischt: 100 mL einer 0,3 M Pb(NO₃)₂ und 100 mL einer 0,4 M KI. Wie viel Gramm PbI₂ fallen aus? (M(PbI₂) = 461 g/mol, Ksp ist sehr klein)",
            options: [
                  "4,61 g",
                  "9,22 g",
                  "13,83 g",
                  "6,92 g"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 5,
            chapterName: "Lösungen & Konzentrationen"
      },
      {
            id: 651,
            text: "Eine Mischung aus Na₂CO₃ und NaHCO₃ wiegt 5,0 g. Bei Zugabe von überschüssiger HCl entstehen 1,12 L CO₂ (STP). Berechne die Masse jeder Komponente.",
            options: [
                  "Na₂CO₃: 2,12 g, NaHCO₃: 2,88 g",
                  "Na₂CO₃: 1,06 g, NaHCO₃: 3,94 g",
                  "Na₂CO₃: 3,18 g, NaHCO₃: 1,82 g",
                  "Na₂CO₃: 2,65 g, NaHCO₃: 2,35 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 652,
            text: "Ein Gemisch aus NaOH und Ba(OH)₂ wiegt 10 g. Zur Neutralisation werden 200 mL HCl (2 M) benötigt. Nach Zugabe von H₂SO₄ im Überschuss fallen 23,3 g BaSO₄ aus. Bestimme die Zusammensetzung.",
            options: [
                  "NaOH: 4 g, Ba(OH)₂: 6 g",
                  "NaOH: 6 g, Ba(OH)₂: 4 g",
                  "NaOH: 2,88 g, Ba(OH)₂: 7,12 g",
                  "NaOH: 5 g, Ba(OH)₂: 5 g"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 653,
            text: "Warum ist die Neutralisationswärme für die Reaktion von schwacher Säure mit starker Base geringer als -57 kJ/mol?",
            options: [
                  "Ein Teil der Energie wird für die Dissoziation der schwachen Säure benötigt",
                  "Schwache Säuren reagieren langsamer",
                  "Die Reaktion ist endotherm",
                  "Die Enthalpieänderung bei der Dissoziation der schwachen Säure ist positiv"
            ],
            correctAnswers: [
                  0,
                  3
            ],
            difficulty: 5,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 654,
            text: "Bei der Titration von 50 mL einer H₃PO₄-Lösung mit NaOH (0,5 M) werden folgende Volumina bis zu den Äquivalenzpunkten gemessen: 20 mL, 40 mL, 60 mL. Welche Konzentration hat die H₃PO₄?",
            options: [
                  "0,1 M",
                  "0,2 M",
                  "0,3 M",
                  "0,4 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 655,
            text: "Ein Säuregemisch aus HCl, H₂SO₄ und H₃PO₄ in 100 mL Lösung wird analysiert. Die Gesamtstoffmenge an H⁺-Ionen beträgt 0,1 mol. Nach Zugabe von Ba²⁺ fallen 0,01 mol BaSO₄ aus. Die Konzentration von Cl⁻ (mittels AgNO₃) beträgt 0,3 M. Welche Konzentrationen haben die drei Säuren?",
            options: [
                  "HCl: 0,3 M, H₂SO₄: 0,1 M, H₃PO₄: 0,1 M",
                  "HCl: 0,3 M, H₂SO₄: 0,1 M, H₃PO₄: 0,0667 M",
                  "HCl: 0,3 M, H₂SO₄: 0,05 M, H₃PO₄: 0,05 M",
                  "HCl: 0,4 M, H₂SO₄: 0,1 M, H₃PO₄: 0,1 M"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 656,
            text: "Erkläre, warum konzentrierte Schwefelsäure als Trockenmittel verwendet werden kann.",
            options: [
                  "Sie ist stark hygroskopisch",
                  "Sie reagiert mit Wasser unter Wärmeentwicklung",
                  "Sie hat eine hohe Affinität zu Wassermolekülen",
                  "Sie oxidiert Wasser zu Sauerstoff"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 657,
            text: "Bei der Reaktion von Aluminium mit Natronlauge entsteht ein Gas. Welches Gas ist es und wie lautet die Reaktionsgleichung?",
            options: [
                  "O₂; 4 Al + 3 O₂ → 2 Al₂O₃",
                  "H₂; 2 Al + 2 NaOH + 2 H₂O → 2 NaAlO₂ + 3 H₂",
                  "Cl₂; Al + 3 NaCl → AlCl₃ + 3 Na",
                  "NH₃; Al + NaOH → NaAlO₂ + NH₃"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 658,
            text: "Bei einer Doppeltitration einer Lösung mit NaOH und Na₂CO₃: Mit Phenolphthalein werden 15 mL HCl (0,5 M) verbraucht, mit Methylorange insgesamt 25 mL. Welche Konzentrationen haben NaOH und Na₂CO₃ in 50 mL der Lösung?",
            options: [
                  "NaOH: 0,05 M, Na₂CO₃: 0,1 M",
                  "NaOH: 0,1 M, Na₂CO₃: 0,05 M",
                  "NaOH: 0,05 M, Na₂CO₃: 0,2 M",
                  "NaOH: 0,1 M, Na₂CO₃: 0,1 M"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 659,
            text: "Eine Probe enthält CaCO₃ und MgCO₃. Beim Lösen in überschüssiger HCl und anschließendem Erhitzen der neutralisierten Lösung fallen 5,8 g CaSO₄ (nach Zugabe von H₂SO₄) aus. Die Gesamtmasse der Probe war 12 g. Wie viel MgCO₃ war enthalten?",
            options: [
                  "3,0 g",
                  "4,2 g",
                  "5,8 g",
                  "8,0 g"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 5,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 660,
            text: "Warum reagiert konzentrierte Salpetersäure mit Kupfer anders als verdünnte? Welche Produkte entstehen?",
            options: [
                  "Konzentriert: Cu(NO₃)₂ + NO₂ + H₂O; Verdünnt: Cu(NO₃)₂ + NO + H₂O",
                  "Beide bilden die gleichen Produkte",
                  "Konzentriert bildet N₂O, verdünnt bildet N₂",
                  "Konzentriert: Oxidation zu Cu²⁺ mit NO₂ (braun); Verdünnt: Oxidation zu Cu²⁺ mit NO (farblos)"
            ],
            correctAnswers: [
                  0,
                  3
            ],
            difficulty: 5,
            chapter: 6,
            chapterName: "Säuren & Basen Grundlagen"
      },
      {
            id: 661,
            text: "Erkläre, warum Palladium (Pd, Z=46) die Konfiguration [Kr] 4d¹⁰ statt [Kr] 4d⁸ 5s² hat.",
            options: [
                  "Die vollständige Füllung des 4d ist energetisch günstiger",
                  "Die Elektronenpaarungsenergie im 4d ist geringer als die Energie des 5s",
                  "Es gibt keine 5s-Elektronen in Pd",
                  "Die relativistischen Effekte stabilisieren das 4d-Orbital"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 662,
            text: "Die Balmer-Serie im Wasserstoffspektrum zeigt Linien bei welchen Übergängen?",
            options: [
                  "Von höheren Niveaus zu n=2",
                  "Von höheren Niveaus zu n=1",
                  "Von n=3,4,5,... zu n=2",
                  "Die Linien liegen im sichtbaren Bereich"
            ],
            correctAnswers: [
                  0,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 663,
            text: "Ein Ion X²⁺ ist diamagnetisch und hat die Konfiguration [Ar] 3d¹⁰. Welches Element und wie viele Elektronen hat das neutrale Atom?",
            options: [
                  "Zink (Zn), 30 Elektronen",
                  "Kupfer (Cu), 29 Elektronen",
                  "Nickel (Ni), 28 Elektronen",
                  "Gallium (Ga), 31 Elektronen"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 664,
            text: "Warum zeigen die Lanthanoide ähnliche chemische Eigenschaften?",
            options: [
                  "Sie alle füllen die 4f-Orbitale",
                  "Die 4f-Elektronen sind stark abgeschirmt",
                  "Die Valenzkonfiguration ist ähnlich (5d¹ 6s² oder 6s²)",
                  "Die Ionisierungsenergien sind nahezu identisch"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 665,
            text: "Berechne die Ionisierungsenergie von He⁺ (wasserstoffähnliches Ion mit Z=2).",
            options: [
                  "13,6 eV",
                  "27,2 eV",
                  "54,4 eV",
                  "6,8 eV"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 5,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 666,
            text: "Ein paramagnetisches Ion hat 5 ungepaarte Elektronen. Welche der folgenden könnten es sein?",
            options: [
                  "Mn²⁺ ([Ar] 3d⁵)",
                  "Fe³⁺ ([Ar] 3d⁵)",
                  "Cr³⁺ ([Ar] 3d³)",
                  "Co²⁺ ([Ar] 3d⁷)"
            ],
            correctAnswers: [
                  0,
                  1
            ],
            difficulty: 5,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 667,
            text: "Welche Aussagen zur Abschirmung und Penetration von Orbitalen sind korrekt?",
            options: [
                  "s-Elektronen penetrieren stärker zum Kern als p-Elektronen",
                  "Die Penetration erklärt, warum 4s vor 3d gefüllt wird",
                  "d- und f-Elektronen schirmen schlecht ab",
                  "Die effektive Kernladung ist für alle Elektronen gleich"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 668,
            text: "Der Übergang eines Elektrons im Wasserstoffatom von n=5 zu n=2 emittiert Licht. In welcher Serie liegt diese Linie und welche Farbe hat sie ungefähr?",
            options: [
                  "Lyman-Serie, UV",
                  "Balmer-Serie, blau-violett",
                  "Paschen-Serie, IR",
                  "Die Wellenlänge beträgt etwa 434 nm"
            ],
            correctAnswers: [
                  1,
                  3
            ],
            difficulty: 5,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 669,
            text: "Warum ist die dritte Ionisierungsenergie von Magnesium (Mg) viel höher als die zweite?",
            options: [
                  "Das dritte Elektron kommt aus einer inneren, abgeschlossenen Schale",
                  "Mg²⁺ hat Edelgaskonfiguration",
                  "Die effektive Kernladung ist für das 2p-Elektron viel höher",
                  "Es muss die stabile Neon-Konfiguration aufgebrochen werden"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 670,
            text: "Gadolinium (Gd, Z=64) hat eine unerwartete Elektronenkonfiguration. Wie lautet sie und warum?",
            options: [
                  "[Xe] 4f⁷ 5d¹ 6s² - halbgefüllte f-Schale ist besonders stabil",
                  "[Xe] 4f⁸ 6s² - reguläre Füllung",
                  "[Xe] 4f⁶ 5d² 6s² - d-Orbitale werden bevorzugt",
                  "Die Austauschenergie bei 7 parallelen f-Elektronen ist maximal"
            ],
            correctAnswers: [
                  0,
                  3
            ],
            difficulty: 5,
            chapter: 7,
            chapterName: "Bohr & Elektronenkonfiguration"
      },
      {
            id: 671,
            text: "Berechne die Gitterenergie von CaF₂ mit der Born-Landé-Gleichung näherungsweise. Gegeben: A (Madelung) ≈ 2,52, r₀ = 237 pm, n = 8. Wie verhält sich der Wert zu NaCl?",
            options: [
                  "CaF₂ hat etwa doppelt so hohe Gitterenergie wie NaCl",
                  "CaF₂ und NaCl haben ähnliche Gitterenergien",
                  "CaF₂ hat etwa dreimal so hohe Gitterenergie wie NaCl",
                  "NaCl hat höhere Gitterenergie als CaF₂"
            ],
            correctAnswers: [
                  2
            ],
            difficulty: 5,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 672,
            text: "Das Sulfat-Ion (SO₄²⁻) kann mit verschiedenen Resonanzstrukturen gezeichnet werden. Welche minimiert die Formalladungen am besten?",
            options: [
                  "S mit vier Einfachbindungen zu O (S: +2, O: je -1)",
                  "S mit zwei Doppelbindungen und zwei Einfachbindungen (S: 0, zwei O: 0, zwei O: -1)",
                  "S mit vier Doppelbindungen (nicht möglich)",
                  "S mit einer Doppelbindung und drei Einfachbindungen"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 673,
            text: "Erkläre den Unterschied zwischen dem Born-Haber-Kreisprozess und der Born-Landé-Gleichung zur Bestimmung der Gitterenergie.",
            options: [
                  "Born-Haber ist experimentell, Born-Landé ist theoretisch",
                  "Born-Haber nutzt Hess'schen Satz, Born-Landé nutzt elektrostatische Berechnungen",
                  "Abweichungen zwischen beiden deuten auf kovalente Anteile hin",
                  "Beide Methoden liefern immer identische Werte"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 674,
            text: "Das ICl₄⁻-Ion hat eine quadratisch-planare Struktur. Wie viele freie Elektronenpaare hat Iod und warum ist die Struktur nicht tetraedrisch?",
            options: [
                  "2 freie Paare; sie besetzen axiale Positionen der oktaedrischen Anordnung",
                  "1 freies Paar; es verzerrt die Geometrie",
                  "3 freie Paare; Iod hat expandiertes Oktett",
                  "0 freie Paare; alle Elektronen sind bindend"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 675,
            text: "Warum ist die Bindungsordnung im Benzol (C₆H₆) 1,5 und nicht 1 oder 2?",
            options: [
                  "Resonanzstrukturen mit alternierenden Einzel- und Doppelbindungen",
                  "Die tatsächliche Struktur ist ein Hybrid aller Resonanzformen",
                  "Alle C-C-Bindungen sind äquivalent",
                  "Die π-Elektronen sind delokalisiert"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 676,
            text: "Bei der Reaktion BF₃ + NH₃ → F₃B-NH₃: Welche Art von Bindung entsteht zwischen B und N?",
            options: [
                  "Koordinative (dative) Bindung",
                  "NH₃ ist der Elektronenpaardonator (Lewis-Base)",
                  "BF₃ ist der Elektronenpaarakzeptor (Lewis-Säure)",
                  "Es entsteht eine σ-Bindung durch Überlappung"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 677,
            text: "Das Thiosulfat-Ion (S₂O₃²⁻) hat eine ungewöhnliche Struktur. Welche Aussagen sind korrekt?",
            options: [
                  "Es ist isoelektronisch mit dem Sulfat-Ion, wenn S für O substituiert wird",
                  "Ein S-Atom ersetzt ein O-Atom des Sulfats",
                  "Die S-S-Bindung ist länger als typische S-O-Bindungen",
                  "Es gibt Resonanzstrukturen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 678,
            text: "Warum hat NO₂ ein ungepaartes Elektron, während NO₂⁻ diamagnetisch ist?",
            options: [
                  "NO₂ hat 17 Valenzelektronen (ungerade Zahl)",
                  "NO₂⁻ hat 18 Valenzelektronen (gerade Zahl)",
                  "Das zusätzliche Elektron im NO₂⁻ paart das ungepaarte",
                  "NO₂ ist ein Radikal"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 679,
            text: "Berechne mit dem Born-Haber-Kreisprozess die Gitterenergie von NaCl. Gegeben: ΔH_f(NaCl) = -411 kJ/mol, ΔH_sub(Na) = 108 kJ/mol, IE(Na) = 496 kJ/mol, ½ D(Cl₂) = 122 kJ/mol, EA(Cl) = -349 kJ/mol",
            options: [
                  "-788 kJ/mol",
                  "-411 kJ/mol",
                  "-1032 kJ/mol",
                  "-649 kJ/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 680,
            text: "Das Molekül SF₄ hat eine \"Wippen\"-Form (seesaw). Erkläre dies mit der Lewis-Struktur und VSEPR.",
            options: [
                  "S hat 4 bindende Paare und 1 freies Paar (5 Elektronenpaare)",
                  "Die Basisgeometrie ist trigonal-bipyramidal",
                  "Das freie Paar besetzt eine äquatoriale Position",
                  "Die äquatoriale Position minimiert die Abstoßung des freien Paares"
            ],
            correctAnswers: [
                  0,
                  1,
                  2,
                  3
            ],
            difficulty: 5,
            chapter: 8,
            chapterName: "Ionenbindung & Lewis"
      },
      {
            id: 681,
            text: "Das Molekül XeOF₄ hat welche Struktur? Bestimme die Position des Sauerstoffs.",
            options: [
                  "Quadratisch-pyramidal mit O in axialer Position",
                  "Oktaedrisch mit O in äquatorialer Position",
                  "Trigonal-bipyramidal",
                  "Quadratisch-pyramidal mit O in äquatorialer Position"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 682,
            text: "Warum bevorzugen freie Elektronenpaare in trigonal-bipyramidalen Strukturen äquatoriale Positionen?",
            options: [
                  "Äquatoriale Positionen haben nur zwei 90°-Nachbarn",
                  "Axiale Positionen haben drei 90°-Nachbarn",
                  "Die Abstoßung ist in äquatorialer Position geringer",
                  "Die Abstoßung ist in axialer Position geringer"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 683,
            text: "Das Ion [XeF₅]⁻ existiert. Welche Geometrie hat es und wie viele Elektronenpaare umgeben Xe?",
            options: [
                  "Pentagonal-planar, 7 Elektronenpaare (5 bindend, 2 frei)",
                  "Quadratisch-pyramidal, 6 Elektronenpaare",
                  "Trigonal-bipyramidal, 5 Elektronenpaare",
                  "Oktaedrisch, 6 Elektronenpaare"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 684,
            text: "Vergleiche die Dipolmomente von cis- und trans-1,2-Dichlorethen. Welche Aussagen sind korrekt?",
            options: [
                  "cis-Isomer hat ein Dipolmoment ≠ 0",
                  "trans-Isomer hat ein Dipolmoment = 0",
                  "Die C-Cl-Dipole heben sich im trans-Isomer auf",
                  "Beide Isomere haben das gleiche Dipolmoment"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 685,
            text: "Das Molekül PCl₃F₂ kann verschiedene Isomere haben. Welches ist das stabilste nach VSEPR?",
            options: [
                  "F-Atome in axialen Positionen (trigonal-bipyramidal)",
                  "Cl-Atome in axialen Positionen",
                  "Gemischte Anordnung",
                  "Alle Isomere sind gleich stabil"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 686,
            text: "Erkläre, warum OF₂ gewinkelt ist, während BeF₂ linear ist.",
            options: [
                  "O hat 2 freie Paare, Be hat keine",
                  "Be hat nur 2 Valenzelektronen und bildet 2 Bindungen ohne freie Paare",
                  "O hat 6 Valenzelektronen, 2 für Bindungen, 4 als freie Paare",
                  "Axiale Positionen haben nur einen 90°-Nachbarn"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 687,
            text: "Das Molekül SeF₆ ist oktaedrisch und unpolar. Was passiert mit der Geometrie und Polarität, wenn ein F durch ein Cl ersetzt wird (SeF₅Cl)?",
            options: [
                  "Bleibt oktaedrisch, wird polar",
                  "Wird verzerrt oktaedrisch, bleibt unpolar",
                  "Bleibt oktaedrisch, bleibt unpolar",
                  "Wird trigonal-bipyramidal, wird polar"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 688,
            text: "Das Thionylchlorid (SOCl₂) hat welche Geometrie und ist es polar?",
            options: [
                  "Trigonal-pyramidal, polar",
                  "Trigonal-planar, unpolar",
                  "Gewinkelt, polar",
                  "Tetraedrisch, unpolar"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 689,
            text: "Warum hat das Sulfat-Ion (SO₄²⁻) trotz seiner tetraedrischen Struktur kein Dipolmoment, aber Schwefelsäure (H₂SO₄) ist polar?",
            options: [
                  "SO₄²⁻ ist symmetrisch, die Dipole heben sich auf",
                  "H₂SO₄ hat eine unsymmetrische Struktur durch die O-H-Bindungen",
                  "Die Ladungen im SO₄²⁻ sind gleichmäßig verteilt",
                  "Freie Elektronenpaare bevorzugen immer axiale Positionen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 690,
            text: "Das Molekül [IF₆]⁺ und [IF₆]⁻ haben unterschiedliche Geometrien. Bestimme beide.",
            options: [
                  "[IF₆]⁺: Oktaedrisch, [IF₆]⁻: Pentagonal-bipyramidal",
                  "[IF₆]⁺: Oktaedrisch, [IF₆]⁻: Verzerrt oktaedrisch (aufgrund eines freien Paares)",
                  "Beide oktaedrisch",
                  "[IF₆]⁺: Trigonal-prismatisch, [IF₆]⁻: Oktaedrisch"
            ],
            correctAnswers: [
                  1
            ],
            difficulty: 5,
            chapter: 9,
            chapterName: "Polarität & VSEPR"
      },
      {
            id: 691,
            text: "Das Molekül C₂ existiert im Gasphase. Bestimme seine Bindungsordnung und magnetische Eigenschaft nach MO-Theorie.",
            options: [
                  "Bindungsordnung 2, diamagnetisch",
                  "Bindungsordnung 2, paramagnetisch",
                  "Bindungsordnung 3, diamagnetisch",
                  "Bindungsordnung 1, paramagnetisch"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 692,
            text: "Das Cyanid-Ion (CN⁻) ist isoelektronisch zu welchen Molekülen?",
            options: [
                  "N₂ und CO",
                  "O₂ und NO",
                  "F₂ und Cl₂",
                  "H₂ und He₂"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 693,
            text: "Im Cyclopentadienyl-Anion (C₅H₅⁻) sind wie viele π-Elektronen delokalisiert und warum ist es aromatisch?",
            options: [
                  "6 π-Elektronen, erfüllt die Hückel-Regel (4n+2 mit n=1)",
                  "4 π-Elektronen, antiaromatisch",
                  "5 π-Elektronen, nicht aromatisch",
                  "8 π-Elektronen, erfüllt die Hückel-Regel"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 694,
            text: "Das HOMO-LUMO-Konzept erklärt die Reaktivität von Molekülen. Was trifft zu?",
            options: [
                  "HOMO = Highest Occupied Molecular Orbital",
                  "LUMO = Lowest Unoccupied Molecular Orbital",
                  "Eine kleine HOMO-LUMO-Lücke bedeutet höhere Reaktivität",
                  "Die HOMO-LUMO-Lücke ist irrelevant für die Reaktivität"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 695,
            text: "Im Kohlenmonoxid (CO) zeigt das Dipolmoment in Richtung C. Warum?",
            options: [
                  "Das freie Elektronenpaar am C überwiegt den Elektronegativitätsunterschied",
                  "Kohlenstoff ist elektronegativer als Sauerstoff",
                  "CO hat kein Dipolmoment",
                  "Das Dipolmoment zeigt immer zum elektronegativeren Atom"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 696,
            text: "Das Dioxygen-Kation (O₂⁺) wird in Salzen wie O₂⁺[PtF₆]⁻ gefunden. Vergleiche O₂⁺ mit O₂.",
            options: [
                  "O₂⁺ hat eine kürzere Bindung als O₂",
                  "O₂⁺ hat eine höhere Bindungsordnung als O₂",
                  "O₂⁺ ist paramagnetisch mit 1 ungepaarten Elektron",
                  "LUMO bezeichnet das niedrigste besetzte Orbital"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 697,
            text: "Erkläre, warum das Butadien-Molekül (H₂C=CH-CH=CH₂) eine partielle Doppelbindungscharakter zwischen C2 und C3 zeigt.",
            options: [
                  "Konjugation der π-Elektronen über alle 4 C-Atome",
                  "Delokalisierung führt zu einer Bindungsordnung > 1 zwischen C2-C3",
                  "Das Molekül hat Resonanzstrukturen",
                  "O₂⁺ hat eine niedrigere Bindungsordnung als O₂"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 698,
            text: "Das Fluorid-Ion F⁻ reagiert als Lewis-Base. Welches Orbital stellt das Elektronenpaar bereit?",
            options: [
                  "Ein gefülltes 2p-Orbital",
                  "Ein leeres 2s-Orbital",
                  "Ein sp³-Hybridorbital",
                  "Ein antibindendes Orbital"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 699,
            text: "Das Molekül Diborane (B₂H₆) enthält 2-Elektronen-3-Zentren-Bindungen. Was bedeutet das?",
            options: [
                  "Ein Elektronenpaar wird von drei Atomen geteilt",
                  "Es gibt Brücken-Wasserstoffatome zwischen den Boratomen",
                  "Normale VB-Theorie kann diese Bindung nicht erklären",
                  "Konjugation führt zu lokalisierten π-Elektronen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 700,
            text: "Das Aufbauprinzip für Molekülorbitale folgt denselben Regeln wie für Atomorbitale. Ordne die MOs für O₂ nach steigender Energie.",
            options: [
                  "σ₂s < σ*₂s < σ₂p < π₂p < π*₂p < σ*₂p",
                  "σ₂s < σ*₂s < π₂p < σ₂p < π*₂p < σ*₂p",
                  "π₂p < σ₂s < σ*₂s < σ₂p < π*₂p < σ*₂p",
                  "σ₂s < σ*₂s < σ₂p < π₂p < σ*₂p < π*₂p"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 10,
            chapterName: "Valenzbindung, Hybridisierung & MO"
      },
      {
            id: 701,
            text: "Die mittlere C-C-Bindungsenergie in Ethan (C₂H₆) unterscheidet sich von der in Propan (C₃H₈). Warum?",
            options: [
                  "Bindungsenergien sind Durchschnittswerte und hängen von der molekularen Umgebung ab",
                  "Die C-C-Bindung in Propan ist von mehr H-Atomen umgeben",
                  "Hyperkonjugation beeinflusst die Bindungsstärke",
                  "Bindungsenergien sind in allen Molekülen identisch"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 702,
            text: "Die Standardbildungsenthalpie von Diamant ist +1,9 kJ/mol, die von Graphit ist 0. Was bedeutet das thermodynamisch?",
            options: [
                  "Graphit ist thermodynamisch stabiler als Diamant",
                  "Diamant wandelt sich spontan in Graphit um (wenn kinetisch möglich)",
                  "Die Umwandlung Diamant → Graphit ist exotherm",
                  "Diamant ist thermodynamisch stabiler als Graphit"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 703,
            text: "In der Industrie wird Ammoniak nach dem Haber-Bosch-Verfahren hergestellt: N₂ + 3 H₂ ⇌ 2 NH₃, ΔH = -92 kJ. Welche thermodynamischen Faktoren beeinflussen die Ausbeute?",
            options: [
                  "Niedrige Temperatur begünstigt die exotherme Reaktion",
                  "Hoher Druck begünstigt die Seite mit weniger Gasteilchen",
                  "Kompromiss zwischen Thermodynamik (niedrige T) und Kinetik (hohe T für Geschwindigkeit)",
                  "Hohe Temperatur begünstigt immer höhere Ausbeute"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 704,
            text: "Berechne die Resonanzenergie von Benzol. Gegeben: ΔH°f(Benzol) = +49 kJ/mol, geschätzte ΔH°f für hypothetisches 1,3,5-Cyclohexatrien = +208 kJ/mol.",
            options: [
                  "-159 kJ/mol (Benzol ist um 159 kJ/mol stabiler)",
                  "+159 kJ/mol",
                  "-49 kJ/mol",
                  "+257 kJ/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 705,
            text: "Die Dissoziation von H₂ in 2 H-Atome erfordert 436 kJ/mol. Bei welcher Temperatur wird die mittlere kinetische Energie der Moleküle dieser Energie entsprechen? (E = 3/2 kT, k = 1,38 × 10⁻²³ J/K, N_A = 6,02 × 10²³)",
            options: [
                  "~35.000 K",
                  "~3.500 K",
                  "~350 K",
                  "~350.000 K"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 706,
            text: "Ein Chemiker misst die Verbrennungsenthalpie einer unbekannten organischen Verbindung als -2220 kJ/mol. Die Verbindung enthält nur C, H und O. Bei der Verbrennung von 1 mol entstehen 3 mol CO₂ und 4 mol H₂O. Bestimme ΔH°f der Verbindung.",
            options: [
                  "-248 kJ/mol",
                  "+248 kJ/mol",
                  "-2220 kJ/mol",
                  "-484 kJ/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 707,
            text: "Die Kapitza-Gleichung beschreibt die Temperaturabhängigkeit von ΔH. Was ist die Kirchhoff-Gleichung?",
            options: [
                  "d(ΔH)/dT = ΔCp",
                  "Die Änderung der Reaktionsenthalpie mit der Temperatur hängt von der Differenz der Wärmekapazitäten ab",
                  "Bei konstantem ΔCp gilt: ΔH(T₂) = ΔH(T₁) + ΔCp(T₂ - T₁)",
                  "Die Kirchhoff-Gleichung gilt nur bei konstantem ΔCp"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 708,
            text: "Warum ist die Bildung von Wasser aus H₂ und O₂ so stark exotherm (ΔH = -286 kJ/mol H₂O)?",
            options: [
                  "O-H-Bindungen sind sehr stark (464 kJ/mol)",
                  "Die gebrochenen Bindungen (H-H, O=O) sind schwächer als die gebildeten O-H-Bindungen",
                  "Die Energie der gebildeten Bindungen übersteigt die der gebrochenen Bindungen",
                  "O-H-Bindungen sind relativ schwach (~200 kJ/mol)"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 709,
            text: "In einem geschlossenen System reagieren 2 mol H₂ mit 1 mol O₂ zu 2 mol H₂O(g). Berechne ΔU bei 298 K. (ΔH°f(H₂O,g) = -242 kJ/mol, R = 8,314 J/(mol·K))",
            options: [
                  "-479 kJ",
                  "-484 kJ",
                  "-242 kJ",
                  "-489 kJ"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 710,
            text: "Die Madelung-Konstante für NaCl ist 1,748. Was sagt diese Konstante aus und wie beeinflusst sie die Gitterenergie?",
            options: [
                  "Sie beschreibt die geometrische Anordnung der Ionen im Gitter",
                  "Sie erhöht die berechnete Gitterenergie gegenüber einer einfachen Ionen-Paar-Wechselwirkung",
                  "Sie berücksichtigt alle anziehenden und abstoßenden Wechselwirkungen im Kristall",
                  "Die Madelung-Konstante ist für alle Kristalle identisch"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 11,
            chapterName: "Thermodynamik & Enthalpie"
      },
      {
            id: 711,
            text: "Wasser hat mehrere Eismodifikationen (Eis I bis XIX). Was sagt das Phasendiagramm von Wasser bei hohen Drücken aus?",
            options: [
                  "Verschiedene kristalline Strukturen sind bei unterschiedlichen P und T stabil",
                  "Eis VI, VII, etc. sind dichter als normales Eis I",
                  "Polymorphie ist bei hohem Druck relevant",
                  "Wasser existiert nur in einer Eismodifikation"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 712,
            text: "Die Antoine-Gleichung log₁₀(P) = A - B/(C+T) ist genauer als Clausius-Clapeyron. Warum?",
            options: [
                  "Sie berücksichtigt die Temperaturabhängigkeit von ΔHvap",
                  "Die Parameter A, B, C werden empirisch angepasst",
                  "Sie gilt über einen größeren Temperaturbereich",
                  "Die Antoine-Gleichung ist weniger genau als Clausius-Clapeyron"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 713,
            text: "Erkläre das Phänomen der Regelation bei Eis.",
            options: [
                  "Eis schmilzt unter Druck und gefriert wieder, wenn der Druck nachlässt",
                  "Ein Draht kann durch einen Eisblock “schneiden” ohne ihn zu teilen",
                  "Die negative Steigung der Schmelzkurve ermöglicht dies",
                  "Regelation ist bei allen Festkörpern beobachtbar"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 714,
            text: "Überkritisches Wasser (T > 374°C, P > 22,1 MPa) hat ungewöhnliche Eigenschaften. Welche?",
            options: [
                  "Es kann unpolare organische Verbindungen lösen",
                  "Die Dielektrizitätskonstante sinkt stark",
                  "Es ist korrosiv und reaktiv",
                  "Überkritisches Wasser kann keine unpolaren Stoffe lösen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 715,
            text: "Das Phasendiagramm von Helium-4 zeigt bei sehr niedrigen Temperaturen eine superfluide Phase. Was bedeutet das?",
            options: [
                  "Helium fließt ohne Viskosität",
                  "Quanteneffekte dominieren das Verhalten",
                  "Es gibt keinen normalen Tripelpunkt mit fester Phase unter Normaldruck",
                  "Helium-4 hat einen normalen Tripelpunkt"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 716,
            text: "Ein geschlossener Behälter enthält flüssiges Wasser und Wasserdampf bei 25°C. Das System wird auf 200°C erhitzt. Beschreibe die Änderungen.",
            options: [
                  "Der Dampfdruck steigt",
                  "Mehr Flüssigkeit verdampft",
                  "Das Volumen der Flüssigkeit nimmt ab, das des Dampfes zu",
                  "Bei Erhitzung nimmt das Dampfvolumen ab"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 717,
            text: "Warum weicht Wasser so stark von der Trouton-Regel ab? (ΔSvap = 109 J/(mol·K) statt ~85)",
            options: [
                  "Starke Wasserstoffbrücken in der flüssigen Phase",
                  "Mehr Ordnung in der flüssigen Phase als bei anderen Flüssigkeiten",
                  "Der Übergang zur Gasphase bringt mehr Unordnung",
                  "Wasser befolgt die Trouton-Regel exakt"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 718,
            text: "Ein Druckkochtopf arbeitet bei 2 atm. Berechne näherungsweise die Siedetemperatur von Wasser. (ΔHvap = 40,7 kJ/mol)",
            options: [
                  "~120°C",
                  "~150°C",
                  "~100°C",
                  "~200°C"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 719,
            text: "Die Kelvin-Gleichung beschreibt den Dampfdruck über gekrümmten Oberflächen. Wie beeinflusst dies kleine Tröpfchen?",
            options: [
                  "Kleine Tröpfchen haben einen höheren Dampfdruck",
                  "Sie verdampfen schneller als große Tröpfchen",
                  "Dieses Prinzip erklärt Übersättigung bei der Wolkenbildung",
                  "Bei kleinen Tröpfchen sinkt der Dampfdruck"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 720,
            text: "Bei der Gefriertrocknung von Kaffee wird zuerst auf -40°C eingefroren, dann bei ~0,1 mbar vakuumiert. Erkläre den Prozess thermodynamisch.",
            options: [
                  "Bei 0,1 mbar liegt man unter dem Tripelpunkt von Wasser",
                  "Das gefrorene Wasser sublimiert direkt",
                  "Wärme muss zugeführt werden (ΔHsub = ΔHfus + ΔHvap ≈ 51 kJ/mol)",
                  "Sublimation erfordert Temperaturen über 100°C"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 12,
            chapterName: "Aggregatzustände & Phasendiagramme"
      },
      {
            id: 721,
            text: "Das Henry-Gesetz beschreibt die Löslichkeit von Gasen. Wie hängt es mit kolligativen Eigenschaften zusammen?",
            options: [
                  "Gelöste Gase tragen zur Dampfdruckerniedrigung bei",
                  "Der Partialdruck des gelösten Gases folgt c = kH × p",
                  "Bei Tauchern kann schneller Druckabfall zur Dekompressionskrankheit führen",
                  "Gelöste Gase haben keinen Einfluss auf kolligative Eigenschaften"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 722,
            text: "Das Aktivitätskonzept korrigiert das Raoult'sche Gesetz für reale Lösungen. Was ist die Aktivität?",
            options: [
                  "a = γ × x, wobei γ der Aktivitätskoeffizient ist",
                  "Sie berücksichtigt nicht-ideale Wechselwirkungen",
                  "In sehr verdünnten Lösungen nähert sich γ → 1",
                  "Die Aktivität entspricht immer dem Molenbruch"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 723,
            text: "Ein azeotropes Gemisch von Ethanol und Wasser (95,6% Ethanol) kann nicht durch einfache Destillation getrennt werden. Warum?",
            options: [
                  "Dampf und Flüssigkeit haben die gleiche Zusammensetzung",
                  "Positive Abweichung vom Raoult'schen Gesetz führt zu einem Siedepunktminimum",
                  "Das Azeotrop siedet bei niedrigerer Temperatur als beide reinen Komponenten",
                  "Azeotrope können durch einfache Destillation getrennt werden"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 724,
            text: "Die Debye-Hückel-Theorie erklärt die Abweichung starker Elektrolyte vom idealen Verhalten. Welche Aussagen sind korrekt?",
            options: [
                  "Ionen sind von einer \"Ionenwolke\" entgegengesetzter Ladung umgeben",
                  "Der Aktivitätskoeffizient sinkt mit steigender Ionenstärke",
                  "Bei sehr hohen Konzentrationen versagt die Theorie",
                  "Die Debye-Hückel-Theorie gilt für alle Konzentrationen"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 725,
            text: "In biologischen Systemen spielt der onkotische Druck eine wichtige Rolle. Was ist das?",
            options: [
                  "Der osmotische Druck, der durch Proteine im Blutplasma erzeugt wird",
                  "Er hält Flüssigkeit in den Blutgefäßen",
                  "Bei Proteinmangel kommt es zu Ödemen",
                  "Der onkotische Druck wird durch kleine Moleküle erzeugt"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 726,
            text: "Erkläre, warum Fische in Salz- und Süßwasser unterschiedliche osmoregulatorische Anpassungen haben.",
            options: [
                  "Meerwasser ist hyperton zu den Körperflüssigkeiten der Fische",
                  "Süßwasserfische müssen überschüssiges Wasser ausscheiden",
                  "Salzwasserfische müssen aktiv Wasser aufnehmen und Salz ausscheiden",
                  "Süß- und Salzwasserfische haben identische Osmoregulation"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 727,
            text: "Die Zahlengemittelte Molmasse (Mn) und die Massengemittelte Molmasse (Mw) von Polymeren werden unterschiedlich bestimmt. Welche Methode liefert Mn?",
            options: [
                  "Osmometrie",
                  "Lichtstreuung",
                  "Viskosimetrie",
                  "Gelpermeationschromatographie"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 728,
            text: "Ein Polymer hat Mn = 50.000 g/mol und Mw = 100.000 g/mol. Was ist der Polydispersitätsindex (PDI)?",
            options: [
                  "2,0",
                  "1,0",
                  "0,5",
                  "1,5"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 729,
            text: "Die Membranpotential-Gleichung (Nernst) hängt mit Osmose zusammen. Erkläre den Zusammenhang.",
            options: [
                  "Semipermeable Membranen sind selektiv für bestimmte Ionen",
                  "Unterschiedliche Ionenkonzentrationen erzeugen ein elektrisches Potential",
                  "Dies ist fundamental für Nervenimpulse",
                  "Osmose hat keinen Zusammenhang mit dem Membranpotential"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 730,
            text: "Bei der Dialyse von Blut wird eine semipermeable Membran verwendet. Welche kolligativen Prinzipien sind relevant?",
            options: [
                  "Osmose treibt Wasser in Richtung höherer Konzentration gelöster Stoffe",
                  "Die Dialyselösung muss isoosmotisch zum Blut sein, um Zellschäden zu vermeiden",
                  "Harnstoff und andere kleine Moleküle diffundieren durch die Membran",
                  "Die Dialyselösung muss hyperton zum Blut sein"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 13,
            chapterName: "Kolligative Eigenschaften"
      },
      {
            id: 731,
            text: "Ein Patient hyperventiliert und baut CO₂ ab. Wie beeinflusst das den Blut-pH?",
            options: [
                  "Der pH steigt (respiratorische Alkalose)",
                  "Weniger H₂CO₃ bedeutet weniger H⁺-Ionen",
                  "Das Gleichgewicht H₂CO₃ ⇌ H⁺ + HCO₃⁻ verschiebt sich nach links",
                  "Hyperventilation führt zu respiratorischer Acidose"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 732,
            text: "Die exakte Berechnung des pH einer schwachen Säure erfordert die Lösung einer quadratischen Gleichung. Wann ist die Näherung pH = ½(pKs - log c) gültig?",
            options: [
                  "Wenn der Dissoziationsgrad α << 1 (α < 5%)",
                  "Wenn c >> Ks",
                  "Für nicht zu verdünnte Lösungen",
                  "Die Näherungsformel gilt auch bei starker Dissoziation"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 733,
            text: "Bei der Titration einer schwachen Säure mit einer schwachen Base ist der Äquivalenzpunkt:",
            options: [
                  "Schwer zu bestimmen, da die Titrationskurve flach verläuft",
                  "Der pH hängt von den relativen pK-Werten ab",
                  "Kein scharfer Farbumschlag mit Indikatoren",
                  "Die Titration schwacher Säure mit schwacher Base zeigt scharfen Äquivalenzpunkt"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 734,
            text: "Die isoelektrische Punkt (pI) einer Aminosäure ist der pH, bei dem sie keine Nettoladung hat. Für Glycin (pKs1 = 2,34, pKs2 = 9,60) ist pI:",
            options: [
                  "5,97",
                  "6,97",
                  "2,34",
                  "9,60"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 735,
            text: "Die Autoprotolyse von Wasser: 2 H₂O ⇌ H₃O⁺ + OH⁻. Berechne ΔG° bei 25°C für diese Reaktion.",
            options: [
                  "ca. +80 kJ/mol",
                  "ca. -80 kJ/mol",
                  "0 kJ/mol",
                  "ca. +40 kJ/mol"
            ],
            correctAnswers: [
                  0
            ],
            difficulty: 5,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 736,
            text: "Ein Puffer sollte innerhalb von ±1 pH-Einheit seines pKs-Wertes verwendet werden. Erkläre warum.",
            options: [
                  "Außerhalb dieses Bereichs ist das Verhältnis [HA]/[A⁻] zu extrem (>10:1 oder <1:10)",
                  "Die Pufferkapazität sinkt stark",
                  "Eine Komponente ist nahezu erschöpft",
                  "Die Pufferkapazität ist bei pH ≠ pKs am höchsten"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 737,
            text: "TRIS (Trishydroxymethylaminomethan) ist ein gängiger Laborpuffer mit pKa = 8,1. Wie ändert sich der pH einer TRIS-Lösung mit der Temperatur?",
            options: [
                  "Der pH sinkt bei Temperaturerhöhung (ΔpKa/ΔT ≈ -0,03/°C)",
                  "TRIS-Puffer sollten bei der Arbeitstemperatur eingestellt werden",
                  "Bei 37°C hat TRIS einen niedrigeren pKa als bei 25°C",
                  "Der pH von TRIS ist temperaturunabhängig"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 738,
            text: "Die Gran-Plot-Methode ermöglicht eine präzise Bestimmung des Äquivalenzpunktes. Was ist das Prinzip?",
            options: [
                  "Linearisierung der Titrationskurve vor und nach dem Äquivalenzpunkt",
                  "Extrapolation zum Schnittpunkt mit der x-Achse",
                  "Verbesserung der Genauigkeit gegenüber visueller Bestimmung",
                  "Der Gran-Plot basiert auf visueller Farbbestimmung"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 739,
            text: "Bei der Titration von H₃PO₄ (pKs1=2,15, pKs2=7,20, pKs3=12,35) mit NaOH: Warum ist der dritte Äquivalenzpunkt schwer zu erkennen?",
            options: [
                  "pKs3 ist so hoch, dass die Titrationskurve flach verläuft",
                  "OH⁻-Ionen aus dem Lösungsmittel konkurrieren",
                  "Die Dissoziation von HPO₄²⁻ ist gering",
                  "Der dritte Äquivalenzpunkt von H₃PO₄ ist leicht erkennbar"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 740,
            text: "Superacids wie FSO₃H·SbF₅ haben Hammett-Aciditätsfunktionen H₀ < -20. Was bedeutet das?",
            options: [
                  "Sie sind milliardenfach stärker als 100%ige Schwefelsäure",
                  "Sie können selbst schwache Basen wie Alkane protonieren",
                  "Der pH-Begriff ist hier nicht mehr anwendbar",
                  "Superacids sind nur wenig stärker als Schwefelsäure"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 14,
            chapterName: "Säuren, Basen, pH & Puffer"
      },
      {
            id: 741,
            text: "Das Pourbaix-Diagramm zeigt Stabilitätsbereiche von Metallspezies als Funktion von pH und Potential. Was zeigt es für Eisen?",
            options: [
                  "Bereiche, in denen Fe, Fe²⁺, Fe³⁺, Fe(OH)₂ und Fe(OH)₃ stabil sind",
                  "Die Korrosionsbedingungen können abgelesen werden",
                  "Passivierung durch Oxidschichten ist bei bestimmten pH/E erkennbar",
                  "Das Pourbaix-Diagramm zeigt nur die Stabilität von reinem Metall"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 742,
            text: "Die Butler-Volmer-Gleichung beschreibt die Kinetik elektrochemischer Reaktionen. Welche Parameter sind wichtig?",
            options: [
                  "Austauschstromdichte i₀",
                  "Überspannung η",
                  "Durchtrittsfaktor α",
                  "Die Temperatur hat keinen Einfluss auf die Reaktionskinetik"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 743,
            text: "Elektrochemische Impedanzspektroskopie (EIS) wird verwendet, um:",
            options: [
                  "Die Eigenschaften von Elektroden und Elektrolyten zu charakterisieren",
                  "Korrosionsprozesse zu untersuchen",
                  "Batteriegesundheit zu überwachen",
                  "Bei der Butler-Volmer-Gleichung ist nur die Überspannung relevant"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 744,
            text: "Bei der Chlor-Alkali-Elektrolyse werden verschiedene Verfahren verwendet. Was zeichnet das Membranverfahren aus?",
            options: [
                  "Ionenaustausch-Membran trennt Anoden- und Kathodenraum",
                  "Verhindert Vermischung von Cl₂ und NaOH",
                  "Hohe Reinheit der Produkte",
                  "EIS wird nur für Korrosionsuntersuchungen verwendet"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 745,
            text: "Redox-Flow-Batterien (z.B. Vanadium) haben welche Vorteile gegenüber Lithium-Ionen-Batterien?",
            options: [
                  "Kapazität und Leistung können unabhängig skaliert werden",
                  "Lange Lebensdauer (über 20.000 Zyklen)",
                  "Keine Degradation der aktiven Materialien",
                  "Das Membranverfahren vermischt Cl₂ und NaOH"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 746,
            text: "Die Elektrokatalyse von Wasserspaltung ist wichtig für grünen Wasserstoff. Was sind die Hauptherausforderungen?",
            options: [
                  "Hohe Überspannung bei der Sauerstoffentwicklung (OER)",
                  "Teure Katalysatoren (Pt, Ir, Ru)",
                  "Stabilität unter Betriebsbedingungen",
                  "Redox-Flow-Batterien haben kürzere Lebensdauer als Li-Ion"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 747,
            text: "Die elektrochemische CO₂-Reduktion kann verschiedene Produkte liefern. Welche Faktoren bestimmen die Selektivität?",
            options: [
                  "Das Katalysatormaterial (Cu für Kohlenwasserstoffe)",
                  "Das angelegte Potential",
                  "Der pH und die CO₂-Konzentration",
                  "Bei der Wasserspaltung ist die HER die größere Herausforderung"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 748,
            text: "Festoxid-Brennstoffzellen (SOFC) arbeiten bei 600-1000°C. Welche Vorteile hat das?",
            options: [
                  "Hoher Wirkungsgrad (bis 60%)",
                  "Keine teuren Edelmetallkatalysatoren nötig",
                  "Brennstoffflexibilität (H₂, CH₄, CO)",
                  "Cu-Katalysatoren produzieren selektiv CO"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 749,
            text: "Bei Lithium-Ionen-Batterien bildet sich eine Solid Electrolyte Interphase (SEI). Welche Bedeutung hat sie?",
            options: [
                  "Sie schützt die Graphit-Anode vor weiterer Zersetzung des Elektrolyten",
                  "Sie ist ionenleitend aber elektronenisolierend",
                  "Ihre Bildung verbraucht Lithium (irreversibler Kapazitätsverlust)",
                  "SOFCs erfordern teure Edelmetallkatalysatoren"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      },
      {
            id: 750,
            text: "Die Zukunft der Batterie-Technologie umfasst Festkörperbatterien. Welche Vorteile werden erwartet?",
            options: [
                  "Höhere Energiedichte durch Lithium-Metall-Anoden",
                  "Verbesserte Sicherheit (kein flüssiger Elektrolyt)",
                  "Breiteres Temperaturfenster",
                  "Die SEI-Schicht ist elektronenleitend"
            ],
            correctAnswers: [
                  0,
                  1,
                  2
            ],
            difficulty: 5,
            chapter: 15,
            chapterName: "Elektrochemie & Redox"
      }
]
  }
};

// Exportiere für globale Nutzung
window.QUESTIONS_DATA = QUESTIONS_DATA;
