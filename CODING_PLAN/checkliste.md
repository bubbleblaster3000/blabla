# 📋 Checkliste: Casual Training Mode

## Übersicht

Diese Checkliste enthält alle Aufgaben, die für die Implementierung des Casual Training Mode erforderlich sind.

---

## Aufgaben

| # | Aufgabe | Beschreibung | Status |
|---|---------|--------------|--------|
| 1 | **Datenstruktur für Fragen** | Format für MC-Fragen definieren (Frage, Optionen, korrekte Antworten, Schwierigkeitsgrad) | ⬜ |
| 2 | **Fragen-Datenbank** | JSON-Struktur für Fragenpools pro Fach (z.B. Chemie, Biologie) | ⬜ |
| 3 | **Spieler-Fortschritt speichern** | Welche Fragen wurden richtig/falsch beantwortet? (LocalStorage) | ⬜ |
| 4 | **Fragen-Auswahl-Logik** | Zufällige Frage aus Pool (nur ungelöste + falsche) | ⬜ |
| 5 | **Schwierigkeits-Skalierung** | Je mehr % Fortschritt, desto schwerer die nächste Frage | ⬜ |
| 6 | **Antwort-Validierung** | Prüfen ob ALLE richtigen Antworten ausgewählt wurden (keine Teilpunkte) | ⬜ |
| 7 | **Progress-Bar UI** | Visuelle Anzeige des Fortschritts in Prozent | ⬜ |
| 8 | **Fach-Auswahl** | Menü um zwischen verschiedenen Fächern zu wechseln | ⬜ |
| 9 | **Fragen-UI** | Multiple-Choice Darstellung mit Checkboxen (4-6 Optionen) | ⬜ |
| 10 | **Feedback-System** | Anzeige ob richtig/falsch nach Beantwortung | ⬜ |

---

## Detaillierte Beschreibungen

### 1. Datenstruktur für Fragen

- Jede Frage braucht: `id`, `text`, `options[]`, `correctAnswers[]`, `difficulty`
- Schwierigkeitsgrade: 1 (leicht) bis 5 (sehr schwer)
- 4-6 Antwortmöglichkeiten pro Frage
- 1 bis alle Antworten können korrekt sein

### 2. Fragen-Datenbank

- JSON-Dateien pro Fach
- Ziel: ~300 Fragen pro Fach
- Gleichmäßige Verteilung der Schwierigkeitsgrade

### 3. Spieler-Fortschritt speichern

- LocalStorage für persistente Speicherung
- Speichern: `correctlyAnswered[]`, `wronglyAnswered[]`
- Pro Fach getrennt

### 4. Fragen-Auswahl-Logik

- Zufällige Auswahl aus verfügbarem Pool
- Pool = Alle Fragen MINUS richtig beantwortete
- Falsch beantwortete bleiben im Pool

### 5. Schwierigkeits-Skalierung

- 0-20% Fortschritt: Difficulty 1-2
- 21-40% Fortschritt: Difficulty 2-3
- 41-60% Fortschritt: Difficulty 3-4
- 61-80% Fortschritt: Difficulty 4-5
- 81-100% Fortschritt: Difficulty 5

### 6. Antwort-Validierung

- **Strenge Bewertung**: Nur 100% korrekt zählt als bestanden
- 3/4 richtige Antworten = NICHT bestanden
- Frage bleibt im Pool bei Fehler

### 7. Progress-Bar UI

- Prozentualer Fortschritt: `(richtig beantwortet / Gesamtzahl) * 100`
- Animierte Progress-Bar
- Numerische Anzeige zusätzlich

### 8. Fach-Auswahl

- Dropdown oder Buttons für Fächerwahl
- Fortschritt wird pro Fach getrennt gespeichert
- Mögliche Fächer: Chemie, Biologie, Physik, etc.

### 9. Fragen-UI

- Checkboxen für Multiple-Choice (mehrere auswählbar)
- Klare visuelle Trennung der Optionen
- "Antwort prüfen" Button

### 10. Feedback-System

- Grün bei richtiger Antwort
- Rot bei falscher Antwort
- Anzeige der korrekten Lösung bei Fehler
- "Nächste Frage" Button

---

## Legende

- ⬜ = Offen
- 🔄 = In Bearbeitung  
- ✅ = Erledigt
