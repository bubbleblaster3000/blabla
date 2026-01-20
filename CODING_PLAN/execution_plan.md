# 🚀 Execution Plan: Casual Training Mode

## Übersicht

Schritt-für-Schritt Anleitung zur Implementierung des Casual Training Mode.

---

## Phase 1: Grundlagen (Daten & Struktur)

**Geschätzte Zeit: 1-2 Stunden**

### 1.1 Fragen-Datenformat definieren

```json
{
  "id": 1,
  "text": "Welche Aussagen zum Atomaufbau sind korrekt?",
  "options": [
    "A. Protonen befinden sich im Atomkern",
    "B. Elektronen haben eine positive Ladung",
    "C. Neutronen sind elektrisch neutral",
    "D. Die Elektronenhülle ist größer als der Kern"
  ],
  "correctAnswers": [0, 2, 3],
  "difficulty": 1
}
```

### 1.2 Beispiel-Fragen erstellen

- 15-20 Testfragen für Chemie
- Verschiedene Schwierigkeitsgrade (1-5)
- Verschiedene Anzahl korrekter Antworten

### 1.3 Fortschritts-Speicherung konzipieren

```javascript
// LocalStorage Struktur
{
  "casualMode_chemie": {
    "correctlyAnswered": [1, 5, 8, 12],
    "wronglyAnswered": [3, 7]
  }
}
```

---

## Phase 2: Kern-Logik (JavaScript)

**Geschätzte Zeit: 2-3 Stunden**

### 2.1 Funktion: Zufällige Frage aus Pool holen

```javascript
function getRandomQuestion(subject) {
  // 1. Alle Fragen laden
  // 2. Richtig beantwortete entfernen
  // 3. Nach aktuellem Schwierigkeitsgrad filtern
  // 4. Zufällig eine auswählen
}
```

### 2.2 Funktion: Antwort validieren

```javascript
function validateAnswer(questionId, selectedAnswers) {
  // 1. Korrekte Antworten der Frage holen
  // 2. Vergleichen ob EXAKT übereinstimmend
  // 3. true/false zurückgeben
}
```

### 2.3 Funktion: Fortschritt aktualisieren

```javascript
function updateProgress(questionId, isCorrect) {
  // 1. Fortschritt aus LocalStorage laden
  // 2. Je nach Ergebnis in richtig/falsch Array verschieben
  // 3. Zurück in LocalStorage speichern
}
```

### 2.4 Funktion: Schwierigkeit berechnen

```javascript
function calculateDifficulty(progressPercent) {
  // 0-20%  -> Difficulty 1-2
  // 21-40% -> Difficulty 2-3
  // 41-60% -> Difficulty 3-4
  // 61-80% -> Difficulty 4-5
  // 81-100% -> Difficulty 5
}
```

---

## Phase 3: Benutzeroberfläche (HTML/CSS)

**Geschätzte Zeit: 2-3 Stunden**

### 3.1 HTML-Struktur

- Header mit Titel und Fach-Auswahl
- Progress-Bar Bereich
- Fragen-Container
- Antwort-Optionen mit Checkboxen
- Buttons (Prüfen, Nächste Frage)
- Feedback-Bereich

### 3.2 CSS-Styling

- Modernes, responsives Design
- Animierte Progress-Bar
- Hover-Effekte für Optionen
- Farbcodierung für Feedback (grün/rot)
- Mobile-friendly

### 3.3 Progress-Bar Implementation

- Visuelle Fortschrittsanzeige
- Prozent-Zahl daneben
- Smooth Animation bei Änderung

### 3.4 Feedback nach Antwort

- Overlay oder Inline-Feedback
- Korrekte Antworten hervorheben
- Motivierende Nachrichten

---

## Phase 4: Integration & Testing

**Geschätzte Zeit: 1-2 Stunden**

### 4.1 Alles zusammenführen

- JavaScript mit HTML verbinden
- Event Listeners einrichten
- Initialisierung beim Laden

### 4.2 Testen

- Verschiedene Szenarien durchspielen
- Edge Cases prüfen (alle richtig, alle falsch, etc.)
- LocalStorage testen (Browser schließen/öffnen)

### 4.3 Bug Fixes

- Gefundene Fehler beheben
- Performance optimieren

---

## Phase 5: Erweiterung (Optional)

**Für später**

### 5.1 Mehr Fragen hinzufügen

- Ziel: 300 Fragen pro Fach
- Verschiedene Themengebiete abdecken

### 5.2 Weitere Fächer

- Biologie
- Physik
- Mathematik
- etc.

### 5.3 Zusätzliche Features

- Statistiken/Auswertungen
- Lernhinweise bei falschen Antworten
- Timer pro Frage
- Achievements/Badges

---

## Abhängigkeiten-Diagramm

```
Phase 1.1 (Datenformat)
    │
    ├── Phase 1.2 (Beispiel-Fragen)
    │       │
    │       └── Phase 2.1 (Frage holen)
    │               │
    │               └── Phase 3.2 (Fragen-UI)
    │
    └── Phase 1.3 (Fortschritt-Konzept)
            │
            ├── Phase 2.2 (Validierung)
            │       │
            │       └── Phase 3.4 (Feedback)
            │
            └── Phase 2.3 (Fortschritt Update)
                    │
                    └── Phase 3.3 (Progress-Bar)
```

---

## Nächster Schritt

**Starte mit Phase 1.1** - Erstelle die JSON-Struktur für Fragen!
