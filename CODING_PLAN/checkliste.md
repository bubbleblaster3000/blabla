# 📋 Checkliste: Casual Training Mode

## Übersicht

Diese Checkliste enthält alle Aufgaben, die für die Implementierung des Casual Training Mode erforderlich sind.

---

## Aufgaben

| # | Aufgabe | Beschreibung | Status |
|---|---------|--------------|--------|
| 1 | **Datenstruktur für Fragen** | Format für MC-Fragen definieren (Frage, Optionen, korrekte Antworten, Schwierigkeitsgrad) | ✅ |
| 2 | **Fragen-Datenbank** | 750 Fragen (15 Kapitel × 5 Levels × 10 Fragen) | ✅ |
| 3 | **Spieler-Fortschritt speichern** | Welche Fragen wurden richtig/falsch beantwortet? (LocalStorage) | ✅ |
| 4 | **Fragen-Auswahl-Logik** | Sequentielle Abfrage: Level 1 → Level 5 | ✅ |
| 5 | **Schwierigkeits-Skalierung** | Level steigt automatisch nach Abschluss aller Fragen eines Levels | ✅ |
| 6 | **Antwort-Validierung** | Prüfen ob ALLE richtigen Antworten ausgewählt wurden (keine Teilpunkte) | ✅ |
| 7 | **Progress-Bar UI** | Visuelle Anzeige des Fortschritts in Prozent | ✅ |
| 8 | **Fach-Auswahl** | Menü um zwischen verschiedenen Fächern zu wechseln | ✅ |
| 9 | **Fragen-UI** | Multiple-Choice Darstellung mit Checkboxen (4-6 Optionen) | ✅ |
| 10 | **Feedback-System** | Anzeige ob richtig/falsch nach Beantwortung | ✅ |
| 11 | **Markdown → JS Konverter** | Script zum Konvertieren der MD-Fragen in questionsData.js | ✅ |

---

## Fragen-Struktur (750 Fragen)

| Level | Fragen-IDs | Schwierigkeit | Anzahl |
|-------|------------|---------------|--------|
| 1 | 1 - 150 | Definitionen & Grundbegriffe | 150 |
| 2 | 151 - 300 | Anwendung einfacher Konzepte | 150 |
| 3 | 301 - 450 | Mittlere Schwierigkeit | 150 |
| 4 | 451 - 600 | Fortgeschritten | 150 |
| 5 | 601 - 750 | Experte | 150 |

**Reihenfolge:** Zuerst alle Level 1 Fragen aller Kapitel, dann Level 2, usw.
