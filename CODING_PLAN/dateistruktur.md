# 📁 Dateistruktur: Casual Training Mode

## Übersicht

Vorgeschlagene Ordner- und Dateistruktur für den Prototyp.

---

## Projektstruktur

```
blabla/
│
├── CODING_PLAN/                    # 📋 Planungsdokumente
│   ├── checkliste.md
│   ├── execution_plan.md
│   └── dateistruktur.md
│
└── casual-mode/                    # 🎮 Der eigentliche Prototyp
    │
    ├── index.html                  # Hauptseite
    │
    ├── css/
    │   └── style.css               # Styling
    │
    ├── js/
    │   ├── app.js                  # Haupt-Anwendungslogik
    │   ├── questionManager.js      # Fragen laden & auswählen
    │   ├── progressTracker.js      # Fortschritt verwalten
    │   └── ui.js                   # UI-Updates & Rendering
    │
    └── data/
        ├── questions-chemie.json   # Fragenpool Chemie
        ├── questions-biologie.json # Fragenpool Biologie (später)
        └── questions-physik.json   # Fragenpool Physik (später)
```

---

## Datei-Beschreibungen

### 📄 index.html

Die Hauptseite der Anwendung.

```html
<!-- Enthält: -->
- Header mit Logo/Titel
- Fach-Auswahl Dropdown
- Progress-Bar Container
- Fragen-Bereich
- Antwort-Checkboxen
- Buttons (Prüfen, Weiter)
- Feedback-Bereich
```

### 🎨 css/style.css

Alle Styles für die Anwendung.

```css
/* Enthält: */
- Allgemeine Styles (Reset, Fonts)
- Header Styling
- Progress-Bar Animation
- Fragen-Container Design
- Checkbox/Option Styling
- Button Styles
- Feedback Farben (grün/rot)
- Responsive Design
```

### ⚙️ js/app.js

Zentrale Steuerung der Anwendung.

```javascript
// Enthält:
- Initialisierung beim Laden
- Event Listeners
- Spielablauf-Steuerung
- Koordination zwischen Modulen
```

### 📚 js/questionManager.js

Verwaltung der Fragen.

```javascript
// Enthält:
- loadQuestions(subject) - Fragen aus JSON laden
- getRandomQuestion() - Zufällige Frage aus Pool
- filterByDifficulty() - Nach Schwierigkeit filtern
- validateAnswer() - Antwort prüfen
```

### 📊 js/progressTracker.js

Fortschrittsverwaltung.

```javascript
// Enthält:
- loadProgress(subject) - Fortschritt aus LocalStorage
- saveProgress() - Fortschritt speichern
- markAsCorrect(questionId) - Frage als richtig markieren
- markAsWrong(questionId) - Frage als falsch markieren
- getProgressPercent() - Prozent berechnen
- calculateDifficulty() - Aktuelle Schwierigkeit
```

### 🖼️ js/ui.js

Benutzeroberfläche Updates.

```javascript
// Enthält:
- renderQuestion(question) - Frage anzeigen
- updateProgressBar(percent) - Progress-Bar aktualisieren
- showFeedback(isCorrect) - Feedback anzeigen
- highlightCorrectAnswers() - Lösung zeigen
- resetUI() - UI zurücksetzen
```

### 📝 data/questions-chemie.json

Fragenpool für Chemie.

```json
{
  "subject": "Chemie",
  "questions": [
    {
      "id": 1,
      "text": "...",
      "options": ["A.", "B.", "C.", "D."],
      "correctAnswers": [0, 2],
      "difficulty": 1
    }
    // ... weitere Fragen
  ]
}
```

---

## Warum diese Struktur?

### ✅ Vorteile

1. **Modular**: Jede Datei hat eine klare Aufgabe
2. **Erweiterbar**: Neue Fächer = neue JSON-Datei
3. **Wartbar**: Änderungen an einem Teil betreffen nicht andere
4. **Übersichtlich**: Klare Trennung von HTML, CSS, JS, Daten
5. **Testbar**: Module können einzeln getestet werden

### 🔄 Später integrierbar

Die Struktur ist so aufgebaut, dass der Code später leicht in die bestehende Lern-App integriert werden kann:

- JavaScript-Module können exportiert werden
- CSS kann in bestehendes Stylesheet eingefügt werden
- JSON-Daten können in Datenbank migriert werden

---

## Erstellungs-Reihenfolge

1. ✅ `CODING_PLAN/` - Planungsdokumente (bereits erstellt)
2. ⬜ `casual-mode/data/questions-chemie.json` - Testdaten zuerst
3. ⬜ `casual-mode/index.html` - Grundstruktur
4. ⬜ `casual-mode/css/style.css` - Basis-Styling
5. ⬜ `casual-mode/js/progressTracker.js` - Fortschritt-Logik
6. ⬜ `casual-mode/js/questionManager.js` - Fragen-Logik
7. ⬜ `casual-mode/js/ui.js` - UI-Funktionen
8. ⬜ `casual-mode/js/app.js` - Alles verbinden
