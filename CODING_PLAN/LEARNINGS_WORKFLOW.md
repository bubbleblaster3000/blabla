# 📚 Workflow Learnings - Chemie Quiz Projekt

> **Erstellt:** 20. Januar 2026
> **Letzte Aktualisierung:** 20. Januar 2026
> **Zweck:** Dokumentation aller Erkenntnisse zur Verbesserung zukünftiger Workflows

---

## 📊 Status-Übersicht (Aktuell)

| Kategorie | Vorher | Nachher | Verbesserung |
|-----------|--------|---------|--------------|
| **Gesamtfragen** | 750 | 750 | ✓ |
| **"Alle genannten" Probleme** | 91 | 0 | ✅ -100% |
| **Duplikate zwischen Kapiteln** | 6 | 0 | ✅ -100% |
| **Extremwörter-Muster** | 96 | ~8 | ✅ -92% |
| **Klammer-Erklärungen** | 49 | ~2 | ✅ -96% |
| **Längen-Unterschiede** | 133 → 91 | 0 | ✅ -100% |
| **Kritische Fehler** | 0 | 0 | ✓ |

**Status:** ✅ Alle signifikanten Probleme wurden behoben. Nur noch ~10 minimale Formulierungsprobleme verbleiben.

---

## 📋 Inhaltsverzeichnis

1. Projekt-Übersicht
2. Markdown-Fragen-Format
3. Häufige Probleme und Lösungen
4. Verfügbare Scripts
5. Best Practices für Fragen
6. Checkliste vor Deployment
7. Troubleshooting

---

## 🎯 Projekt-Übersicht

### Struktur

```text
blabla/
├── casual-mode/
│   ├── js/
│   │   └── questionsData.js    # Generierte Fragen-Datenbank (750 Fragen)
│   └── casual-mode-standalone.html
├── CODING_PLAN/
│   └── fragen/
│       ├── 01_Aufbau_Atome_Periodensystem/
│       │   ├── chemie-level-1.md
│       │   ├── chemie-level-2.md
│       │   └── ...
│       └── ... (15 Kapitel insgesamt)
└── scripts/
    ├── convertQuestions.js     # MD → JS Konvertierung
    ├── analyzeQuestions.js     # Qualitätsprüfung
    └── fixAllGenanntenQuestions.js  # Auto-Fix Script
```

### Zahlen

- **15 Kapitel** × **5 Levels** × **10 Fragen** = **750 Fragen**
- Levels werden sequentiell abgefragt: L1 (1-150) → L2 (151-300) → L3 → L4 → L5

---

## 📝 Markdown-Fragen-Format

### Korrektes Format

```markdown
## Frage 1
**Fragetext hier?**

- [ ] A. Option A
- [ ] B. Option B
- [ ] C. Option C
- [ ] D. Option D

**Richtige Antworten:** A

---
```

### Wichtige Format-Regeln

| Element | Format | Häufiger Fehler |
|---------|--------|-----------------|
| Frage-Header | `## Frage X` | `### Frage X` (falsch) |
| Fragetext | `**Text?**` | Ohne Sternchen |
| Optionen | `- [ ] A. Text` | `- A) Text` (falsch) |
| Antworten | `**Richtige Antworten:** A` | `**Korrekte Antwort:** A` |
| Mehrere Antworten | `A, B, C` | `A,B,C` (ohne Leerzeichen) |
| Trenner | `---` | Fehlend |

### Gültige Antwort-Kombinationen

```text
Einzeln:     A, B, C, D
Zweier:      A, B | A, C | A, D | B, C | B, D | C, D
Dreier:      A, B, C | A, B, D | A, C, D | B, C, D
Alle:        A, B, C, D
```

---

## ⚠️ Häufige Probleme und Lösungen

### 🔴 KRITISCH - Müssen behoben werden

#### 1. "Alle genannten sind korrekt" als Option

**Problem:**

```markdown
- [ ] D. Alle genannten sind korrekt
**Richtige Antworten:** D
```

**Warum problematisch:** Bei Multi-Select muss der Benutzer A, B, C auswählen, nicht D.

**Lösung:**

```markdown
- [ ] D. [Tatsächliche falsche Option einfügen]
**Richtige Antworten:** A, B, C
```

**Automatische Erkennung:** `analyzeQuestions.js` sucht nach:

- "alle genannten"
- "alle oben genannten"
- "keine der genannten"
- "a und b sind beide korrekt"
- "keine davon"

---

#### 2. Doppelte Optionen in einer Frage

**Problem:** Case-Sensitivity bei chemischen Formeln

```markdown
- [ ] A. N = n × Nₐ
- [ ] B. N = n / Nₐ
- [ ] C. N = m × Nₐ
- [ ] D. N = M × Nₐ   ← M ≠ m in Chemie!
```

**Ursache:** `toLowerCase()` macht `M` (Molar) zu `m` (Masse) → False Positive

**Lösung:** Duplikat-Check OHNE toLowerCase() für chemische Inhalte:

```javascript
// FALSCH:
const normalized = opts.map(o => o.toLowerCase());

// RICHTIG:
const normalized = opts.map(o => o.trim());
```

---

#### 3. Doppelte Fragen zwischen Kapiteln

**Problem:** Gleiche Frage in verschiedenen Kapiteln/Levels

**Beispiele gefunden:**

- "Was ist ein Kation?" in Kap 2 UND Kap 8
- "Was ist eine schwache Säure?" in Kap 6 UND Kap 14

**Lösung:**

1. Duplikate mit `analyzeQuestions.js` finden
2. Eine der Fragen durch themenbezogene Alternative ersetzen
3. `convertQuestions.js` neu ausführen

---

### 🟠 MITTEL - Sollten geprüft werden

#### 4. Formulierungs-Probleme (Test-Taking-Tricks)

**Problem:** Muster in den Antworten erlauben das Erraten ohne Fachwissen:

| Muster | Beschreibung | Beispiel |
|--------|--------------|----------|
| **Länge** | Korrekte Antwort ist >50% länger | ✓ 60 Zeichen vs ✗ 20 Zeichen |
| **Klammern** | Nur korrekte hat Erklärungen | ✓ "Mol (Stoffmenge)" vs ✗ "Gramm" |
| **Extremwörter** | Falsche enthalten "immer", "nie" | ✗ "Gilt immer" → meist falsch |
| **Detail-Wörter** | Korrekte hat "z.B.", "d.h." | ✓ "z.B. NaCl" vs ✗ "Salze" |

**Automatische Erkennung:** `node scripts/analyzeFormulierung.js`

**Automatische Korrektur:** `node scripts/fixFormulierung.js`

**Fix-Strategien:**

1. **Klammern entfernen:** Entferne `(Erklärung)` aus korrekten Optionen

   ```text
   VORHER: ✓ "Ein Mol (6,022 × 10²³ Teilchen)"
   NACHHER: ✓ "Ein Mol"
   ```

2. **Extremwörter abschwächen:** Ersetze in falschen Optionen

   ```text
   "immer" → "häufig"
   "nie" → "selten"
   "alle" → "viele"
   "keine" → "wenige"
   "nur" → "meist"
   "ausschließlich" → "überwiegend"
   ```

3. **Längen angleichen:** Kürze zu lange korrekte Optionen

   ```text
   VORHER: ✓ "Die Masse bleibt erhalten, weil Atome nicht zerstört werden"
   NACHHER: ✓ "Die Masse bleibt erhalten"
   ```

---

#### 4b. Manuelle Längenkorrektur (91 Fragen - Erfolgreich abgeschlossen)

**Problem:** Automatische Scripts können nur einfache Muster erkennen. Komplexe semantische Änderungen erfordern manuelle Korrektur.

**Workflow für manuelle Korrektur:**

1. **Analyse starten:**
   ```bash
   node scripts/listRemainingProblems.js
   ```

2. **Fragen identifizieren:** Output zeigt pro Frage:
   - Datei und Fragenummer
   - Alle Optionen mit Zeichenzahl
   - Empfehlung (kürzen oder erweitern)

3. **Korrekturen anwenden:**

**Strategie A: Korrekte Optionen kürzen (wenn >60 Zeichen)**

| Technik | Beispiel |
|---------|----------|
| Abkürzungen | "Elektronen" → "e⁻" |
| Symbole | "ergibt" → "→", "gleich" → "=" |
| Chemische Notation | "Sauerstoff" → "O", "Wasserstoff" → "H" |
| Redundanz entfernen | "eine Bindung durch" → "Bindung durch" |
| Einheiten kürzen | "Grad Celsius" → "°C" |

```text
VORHER:  ✓ "Bei Sauerstoff führt die Elektron-Elektron-Abstoßung..." (116Z)
NACHHER: ✓ "Bei O führt e⁻-Abstoßung im doppelt besetzten p-Orbital..." (75Z)
```

**Strategie B: Falsche Optionen erweitern (wenn <25 Zeichen)**

| Technik | Beispiel |
|---------|----------|
| Kontext hinzufügen | "Ein Katalysator" → "Ein Katalysator, der Reaktionen beschleunigt" |
| Spezifizieren | "Reines Wasser" → "Reines Wasser ohne Zusätze (destilliert)" |
| Parallelstruktur | Gleiche Struktur wie korrekte Option verwenden |
| Chemische Details | "Endotherm" → "Die Reaktion verläuft insgesamt endotherm" |

```text
VORHER:  ✗ "Ein Edelgas" (11Z)
NACHHER: ✗ "Ein Edelgas, das nicht reagiert (z.B. Neon)" (45Z)
```

**Ergebnis:** 91 Fragen manuell korrigiert → 0 Längenprobleme verbleibend

---

#### 5. Alle 4 Optionen korrekt (A, B, C, D)

**Nicht unbedingt ein Problem**, aber:

- Benutzer muss ALLE 4 Optionen auswählen
- Kann verwirrend sein
- Besser: 3 korrekte + 1 falsche Option

---

#### 6. Singular-Frage mit Plural-Antwort

**Problem:**

```markdown
**Welche Aussagen sind korrekt?**  ← Plural
**Richtige Antworten:** B          ← Nur eine!
```

**Lösung:** Fragetext anpassen: "Welche Aussage ist korrekt?"

---

### 🟡 NIEDRIG - Kosmetisch

#### 7. Kleiner-als und Größer-als Zeichen

**Problem:** Können HTML-Rendering stören

**Wo häufig:** Vergleiche (pH kleiner 7), Elektronegativität

**Lösung:**

- In JS-Strings: Funktioniert meist
- Bei Problemen: HTML-Entities verwenden

---

#### 7. Inkonsistente Zahlenformate

**Problem:** Mischung von `3,14` (deutsch) und `3.14` (englisch)

**Empfehlung:** Konsistent deutsches Format (Komma) verwenden

---

## 🛠️ Verfügbare Scripts

### 1. convertQuestions.js - Markdown nach JavaScript

```bash
node scripts/convertQuestions.js
```

**Was es macht:**

- Liest alle `chemie-level-*.md` Dateien
- Konvertiert zu `questionsData.js`
- Sortiert nach Level (nicht nach Kapitel!)
- Output: IDs 1-150 = Level 1, 151-300 = Level 2, etc.

**Wann ausführen:**

- Nach jeder Änderung an MD-Dateien
- Nach Fixes von Problemen

---

### 2. analyzeQuestions.js - Qualitätsprüfung

```bash
node scripts/analyzeQuestions.js
```

**Prüft auf:**

| Kategorie | Schwere | Beschreibung |
|-----------|---------|--------------|
| Doppelte Optionen | KRITISCH | Gleiche Option mehrfach |
| Leere Optionen | KRITISCH | Option A/B/C/D fehlt |
| Ungültige Antwort | KRITISCH | z.B. "E" oder "A,B" |
| Fehlende Optionen | KRITISCH | Weniger als 4 Optionen |
| "Alle genannten" | HOCH | Meta-Optionen |
| Alle 4 korrekt | MITTEL | A, B, C, D |
| Duplikate | MITTEL | Gleiche Fragen |
| Sonderzeichen | NIEDRIG | Spezielle Zeichen |
| Lange Texte | INFO | Mehr als 400 Zeichen |

**Empfohlener Workflow:**

```bash
# Nach Änderungen immer:
node scripts/analyzeQuestions.js

# Bei 0 kritischen Problemen:
node scripts/convertQuestions.js
```

---

### 3. analyzeFormulierung.js - Formulierungs-Analyse

```bash
node scripts/analyzeFormulierung.js
```

**Prüft auf Test-Taking-Tricks:**

| Problem | Schwere | Beschreibung |
|---------|---------|--------------|
| Längen-Unterschied | MITTEL | Korrekte >50% länger als falsche |
| Klammer-Erklärungen | MITTEL | Nur korrekte hat (Erklärungen) |
| Extremwörter | MITTEL | Falsche enthalten "immer", "nie" |
| Detail-Wörter | NIEDRIG | Korrekte hat "z.B.", "d.h." |

---

### 4. fixFormulierung.js - Auto-Fix Formulierung

```bash
node scripts/fixFormulierung.js
```

**Was es macht:**

- Entfernt Klammer-Erklärungen aus korrekten Optionen
- Ersetzt Extremwörter in falschen Optionen
- Kürzt zu lange korrekte Optionen (begrenzt wirksam)

**Statistiken der letzten Ausführung:**

- Klammern entfernt: 49
- Extremwörter abgeschwächt: 96
- Längen ausgeglichen: 1 (Rest erforderte manuelle Korrektur)

---

### 4b. fixLaengenBalance.js - Längen-Balance (automatisch)

```bash
node scripts/fixLaengenBalance.js
```

**Was es macht:**

- Kürzt zu lange korrekte Optionen mit Mustern (Klammern, Einschübe)
- Verlängert zu kurze falsche Optionen mit Kontextergänzungen
- Statistiken: ~42 Fragen automatisch korrigiert

**Limitierung:** Kann komplexe semantische Änderungen nicht durchführen.

---

### 4c. listRemainingProblems.js - Verbleibende Probleme exportieren

```bash
node scripts/listRemainingProblems.js
```

**Was es macht:**

- Listet alle Fragen mit Längen-Ungleichgewicht
- Zeigt pro Frage: Optionen mit Zeichenzahl, Empfehlungen
- Exportiert nach `scripts/remaining_problems.json`

**Ausgabeformat:**

```text
Frage 3 in chemie-level-1.md (+120%)
"Was ist Sublimation?"
  ✓ A. (65Z) Übergang von fest zu gasförmig...
  ✗ B. (22Z) Verdampfung
  💡 Empfehlung: Falsche Optionen erweitern
```

---

### 5. fixAllGenanntenQuestions.js - Auto-Fix "Alle genannten"

```bash
node scripts/fixAllGenanntenQuestions.js
```

**Was es macht:**

- Findet alle "Alle genannten sind korrekt" Fragen
- Ersetzt Option D durch kapitel-spezifische falsche Option
- Ändert Antwort von "D" zu "A, B, C"

**Achtung:** Manuelle Überprüfung nach Ausführung empfohlen!

---

### 6. Markdown Linting

```bash
npx markdownlint-cli2 "CODING_PLAN/fragen/**/*.md"
```

**Prüft:** Markdown-Syntax und Formatierung

---

## ✅ Best Practices für Fragen

### DO - Richtig machen

1. **Eindeutige Fragen stellen**

   ```markdown
   **Was ist die Ordnungszahl von Kohlenstoff?**
   ```

2. **Klare, unterscheidbare Optionen**

   ```markdown
   - [ ] A. 6
   - [ ] B. 12
   - [ ] C. 14
   - [ ] D. 8
   ```

3. **Bei Multiple-Choice: Echte falsche Optionen**

   ```markdown
   - [ ] A. Korrekte Aussage 1
   - [ ] B. Korrekte Aussage 2
   - [ ] C. Korrekte Aussage 3
   - [ ] D. Falsche Aussage (plausibel aber falsch)
   **Richtige Antworten:** A, B, C
   ```

4. **Chemische Formeln konsistent schreiben**

   - Subscripts: `H₂O`, `CO₂`, `Na⁺`
   - Oder: `H2O`, `CO2`, `Na+`
   - Nicht mischen!

5. **Schwierigkeit dem Level anpassen**

   - Level 1: Definitionen, Grundbegriffe
   - Level 2: Einfache Anwendung
   - Level 3: Mittlere Komplexität
   - Level 4: Fortgeschritten
   - Level 5: Experte, Berechnungen

6. **Optionen ähnlich lang formulieren**

   ```text
   FALSCH:
   ✓ A. Die Reaktion ist exotherm, da Energie in Form von Wärme freigesetzt wird
   ✗ B. Endotherm
   ✗ C. Neutral
   ✗ D. Keine Reaktion
   
   RICHTIG:
   ✓ A. Die Reaktion ist exotherm und setzt Wärme frei
   ✗ B. Die Reaktion ist endotherm und nimmt Wärme auf
   ✗ C. Die Reaktion ist thermisch neutral
   ✗ D. Es findet keine chemische Reaktion statt
   ```

7. **Klammern und Details gleichmäßig verteilen**

   ```text
   FALSCH:
   ✓ A. Natriumchlorid (NaCl)
   ✗ B. Wasser
   ✗ C. Zucker
   
   RICHTIG (alle mit Formel):
   ✓ A. Natriumchlorid (NaCl)
   ✗ B. Wasser (H₂O)
   ✗ C. Glucose (C₆H₁₂O₆)
   
   RICHTIG (keine Formeln):
   ✓ A. Natriumchlorid
   ✗ B. Wasser
   ✗ C. Glucose
   ```

### DONT - Vermeiden

1. **Keine Meta-Optionen**

   ```text
   FALSCH: - [ ] D. Alle genannten sind korrekt
   FALSCH: - [ ] D. Keine der genannten
   FALSCH: - [ ] D. A und B sind beide richtig
   FALSCH: - [ ] D. Sowohl A als auch C
   ```

2. **Keine mehrdeutigen Formulierungen**

   ```text
   FALSCH: **Was könnte möglicherweise passieren?**
   RICHTIG: **Was passiert bei dieser Reaktion?**
   ```

3. **Keine identischen Fragen in verschiedenen Kapiteln**

   - Auch wenn thematisch passend
   - Lieber Variation der Fragestellung

4. **Keine Extremwörter nur in falschen Optionen**

   ```text
   FALSCH (Muster erkennbar):
   ✓ A. Reaktionen verlaufen oft schneller bei höherer Temperatur
   ✗ B. Reaktionen sind immer temperaturunabhängig
   ✗ C. Katalysatoren haben nie einen Einfluss
   ✗ D. Alle Reaktionen verlaufen gleich schnell
   
   RICHTIG (kein Muster):
   ✓ A. Reaktionen verlaufen oft schneller bei höherer Temperatur
   ✗ B. Die Temperatur beeinflusst hauptsächlich die Produktmenge
   ✗ C. Katalysatoren verlangsamen Reaktionen
   ✗ D. Höhere Temperaturen verlangsamen Reaktionen
   ```

5. **Keine zu langen Texte**

   - Frage: max. 400 Zeichen
   - Option: max. 150 Zeichen

---

## 📋 Checkliste vor Deployment

### 1. Scripts ausführen

- [ ] `node scripts/analyzeQuestions.js` ausführen
- [ ] 0 KRITISCHE Probleme
- [ ] 0 HOHE Probleme (oder bewusst akzeptiert)
- [ ] `npx markdownlint-cli2 "CODING_PLAN/fragen/**/*.md"` - 0 Errors
- [ ] `node scripts/convertQuestions.js` ausführen
- [ ] Ausgabe zeigt 750 Fragen

### 2. Qualitätsprüfung

- [ ] Keine "Alle 4 korrekt" (A, B, C, D) in Level 1-2 (zu verwirrend für Anfänger)
- [ ] Chemische Formeln konsistent (H₂O vs H2O nicht mischen)
- [ ] Keine unescapten `<` `>` Zeichen in kritischen Stellen
- [ ] Level 1 Fragen sind wirklich einfach (Definitionen)
- [ ] Level 5 Fragen sind wirklich schwer (Berechnungen, Analyse)

### 3. Daten-Integrität

- [ ] Genau 750 Fragen vorhanden
- [ ] Alle IDs eindeutig (1-750)
- [ ] Alle 15 Kapitel vertreten (je 50 Fragen)
- [ ] Jedes Level hat 150 Fragen (L1: 1-150, L2: 151-300, etc.)
- [ ] Keine doppelten Fragen zwischen Kapiteln

### 4. Funktionale Tests im Browser

- [ ] App lädt ohne Fehler (Console prüfen)
- [ ] Erste Frage wird angezeigt (Level 1, Kapitel 1)
- [ ] Multi-Select funktioniert (A, B, C Auswahl wird korrekt gewertet)
- [ ] Einzelne Antwort wird korrekt gewertet
- [ ] Fortschritt wird gespeichert (LocalStorage)
- [ ] Level-Wechsel bei Frage 150 → 151 (Level 1 → Level 2)
- [ ] Zurück-Navigation funktioniert

### 5. Kompatibilität

- [ ] Desktop-Browser (Chrome, Firefox, Safari)
- [ ] Mobile Darstellung (lange Optionen umbrechen korrekt)
- [ ] Unicode-Zeichen werden angezeigt (₂, ₃, ⁺, ⁻, →)
- [ ] Offline-Fähigkeit (Standalone-HTML funktioniert ohne Server)
- [ ] Dark Mode (falls implementiert)

### 6. Edge Cases testen

- [ ] Frage mit 4 korrekten Antworten (A, B, C, D)
- [ ] Frage mit nur 1 korrekten Antwort
- [ ] Längste Frage wird korrekt dargestellt
- [ ] Frage mit chemischen Formeln (Subscripts)
- [ ] Letzte Frage (750) erreichbar

---

## 🔧 Troubleshooting

### Problem: Script findet keine Fragen

**Symptom:** `Analysierte Fragen: 0`

**Ursachen:**

1. Falscher Pfad in Script
2. Falsches MD-Format (z.B. `### Frage` statt `## Frage`)

**Lösung:**

```javascript
// Prüfe Pfad:
const fragenDir = '/Users/julian/blabla/CODING_PLAN/fragen';

// Prüfe Format im MD:
// Muss sein: ## Frage X (nicht ###)
```

---

### Problem: False Positives bei Duplikat-Erkennung

**Symptom:** Chemische Formeln werden als Duplikate erkannt

**Ursache:** `toLowerCase()` macht `M` (Molar) zu `m` (Masse)

**Lösung:** Case-sensitive Vergleich für chemische Inhalte

---

### Problem: Antworten werden nicht erkannt

**Symptom:** `Ungültige korrekte Antwort: "A,B,C"`

**Ursache:** Fehlendes Leerzeichen nach Komma

**Lösung:**

```text
FALSCH: A,B,C
RICHTIG: A, B, C
```

---

### Problem: Fragen erscheinen in falscher Reihenfolge

**Symptom:** Level 3 Fragen kommen vor Level 1

**Ursache:** `questionsData.js` nicht neu generiert

**Lösung:**

```bash
node scripts/convertQuestions.js
# Prüfe Output: Level 1: Fragen 1-150, Level 2: 151-300, etc.
```

---

## 📊 Statistiken dieser Session

| Metrik | Wert |
|--------|------|
| Analysierte Fragen | 750 |
| Behobene "Alle genannten" | 91 |
| Behobene Duplikate | 6 |
| Behobene Längenprobleme (manuell) | 91 |
| Behobene Extremwörter | ~88 |
| Behobene Klammern | ~47 |
| Erstellte Scripts | 6 |
| Finale kritische Probleme | 0 |

---

## 🎓 Key Learnings aus der manuellen Korrektur

### Was funktioniert hat:

1. **Systematisches Vorgehen nach Kapiteln** - Alle Kapitel 01-15 nacheinander abarbeiten verhindert Übersehen

2. **Batch-Edits mit multi_replace** - Mehrere Fragen pro Kapitel gleichzeitig korrigieren ist effizienter

3. **Chemische Abkürzungen nutzen:**
   - `e⁻` statt "Elektronen"
   - `→` statt "ergibt/führt zu"
   - `T` statt "Temperatur"
   - `p` statt "Druck"
   - Chemische Symbole (O, H, N) statt Namen

4. **Parallelstruktur bei falschen Optionen** - Gleiche grammatische Struktur wie korrekte Optionen verwenden

### Was NICHT funktioniert hat:

1. **restructureQuestions.js** - Versuch einer automatischen Umstrukturierung beschädigte Fragen (kürzte korrekte Antworten falsch). → Git restore war nötig

2. **Zu aggressive automatische Kürzung** - Semantik kann verloren gehen wenn automatisch gekürzt wird

### Empfehlung für zukünftige Fragen:

Bereits beim Schreiben auf **ausgewogene Optionslängen** achten:
- Ziel: Alle Optionen zwischen 25-55 Zeichen
- Korrekte Optionen NICHT ausführlicher formulieren als falsche
- Klammer-Erklärungen entweder bei ALLEN oder bei KEINER Option

---

## 🔄 Empfohlener Workflow für neue Fragen

```text
[Neue Fragen in MD schreiben]
           ↓
[markdownlint ausführen]
           ↓
    Lint Errors? ──Ja──→ [Errors beheben] ──┐
           ↓ Nein                           │
           ←────────────────────────────────┘
           ↓
[analyzeQuestions.js ausführen]
           ↓
  Kritische Probleme? ──Ja──→ [Probleme beheben] ──┐
           ↓ Nein                                   │
           ←────────────────────────────────────────┘
           ↓
[convertQuestions.js ausführen]
           ↓
[Browser-Test durchführen]
           ↓
     Alles OK? ──Nein──→ [Zurück zum Start]
           ↓ Ja
        ✅ Fertig!
```

---

## 📝 Notizen für zukünftige Verbesserungen

1. **Automatischer Pre-Commit Hook** für Qualitätsprüfung
2. **CI/CD Pipeline** mit automatischen Tests
3. **Fragen-Editor UI** statt manuelle MD-Bearbeitung
4. **Schwierigkeits-Validierung** (ist Level 5 wirklich schwerer als Level 1?)
5. **Übersetzungs-Support** für mehrsprachige Versionen
6. **Längen-Check beim Schreiben** - Warnung wenn Optionen zu unterschiedlich lang sind

---

## 📋 Script-Ausführungsreihenfolge (Empfohlen)

```bash
# 1. Qualitätsprüfung
node scripts/analyzeQuestions.js

# 2. Formulierungsprobleme analysieren
node scripts/analyzeFormulierung.js

# 3. Automatische Fixes (wenn nötig)
node scripts/fixFormulierung.js
node scripts/fixLaengenBalance.js

# 4. Verbleibende Probleme identifizieren
node scripts/listRemainingProblems.js

# 5. Manuelle Korrektur (wenn nötig)
# → Fragen in MD-Dateien bearbeiten

# 6. Final: Datenbank regenerieren
node scripts/convertQuestions.js
```

---

*Dieses Dokument wird bei neuen Erkenntnissen aktualisiert.*
*Letzte Aktualisierung: 20. Januar 2026 - Manuelle Längenkorrektur abgeschlossen*
