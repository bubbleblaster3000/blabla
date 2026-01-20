/**
 * Progress Tracker Module
 * Verwaltet den Spielfortschritt und speichert ihn im LocalStorage
 */

class ProgressTracker {
  constructor() {
    this.storagePrefix = 'casualMode_';
    this.currentSubject = null;
    this.progress = {
      correctlyAnswered: [],
      wronglyAnswered: []
    };
  }

  /**
   * Initialisiert den Tracker für ein Fach
   * @param {string} subject - Name des Fachs
   * @param {number} totalQuestions - Gesamtzahl der Fragen
   */
  init(subject, totalQuestions) {
    this.currentSubject = subject;
    this.totalQuestions = totalQuestions;
    this.loadProgress();
  }

  /**
   * Lädt den Fortschritt aus LocalStorage
   */
  loadProgress() {
    const stored = localStorage.getItem(this.storagePrefix + this.currentSubject);
    if (stored) {
      try {
        this.progress = JSON.parse(stored);
      } catch (e) {
        console.error('Fehler beim Laden des Fortschritts:', e);
        this.resetProgress();
      }
    } else {
      this.resetProgress();
    }
  }

  /**
   * Speichert den Fortschritt im LocalStorage
   */
  saveProgress() {
    localStorage.setItem(
      this.storagePrefix + this.currentSubject,
      JSON.stringify(this.progress)
    );
  }

  /**
   * Setzt den Fortschritt zurück
   */
  resetProgress() {
    this.progress = {
      correctlyAnswered: [],
      wronglyAnswered: []
    };
    this.saveProgress();
  }

  /**
   * Markiert eine Frage als richtig beantwortet
   * @param {number} questionId - ID der Frage
   */
  markAsCorrect(questionId) {
    // Aus falsch beantwortet entfernen, falls vorhanden
    const wrongIndex = this.progress.wronglyAnswered.indexOf(questionId);
    if (wrongIndex > -1) {
      this.progress.wronglyAnswered.splice(wrongIndex, 1);
    }

    // Zu richtig beantwortet hinzufügen, falls nicht bereits vorhanden
    if (!this.progress.correctlyAnswered.includes(questionId)) {
      this.progress.correctlyAnswered.push(questionId);
    }

    this.saveProgress();
  }

  /**
   * Markiert eine Frage als falsch beantwortet
   * @param {number} questionId - ID der Frage
   */
  markAsWrong(questionId) {
    // Nur hinzufügen, wenn nicht bereits in einer der Listen
    if (!this.progress.correctlyAnswered.includes(questionId) &&
        !this.progress.wronglyAnswered.includes(questionId)) {
      this.progress.wronglyAnswered.push(questionId);
    }

    this.saveProgress();
  }

  /**
   * Gibt den Fortschritt in Prozent zurück
   * @returns {number} Fortschritt in Prozent (0-100)
   */
  getProgressPercent() {
    if (this.totalQuestions === 0) return 0;
    return Math.round((this.progress.correctlyAnswered.length / this.totalQuestions) * 100);
  }

  /**
   * Gibt die Anzahl der richtig beantworteten Fragen zurück
   * @returns {number}
   */
  getCorrectCount() {
    return this.progress.correctlyAnswered.length;
  }

  /**
   * Gibt die Anzahl der noch offenen Fragen zurück
   * @returns {number}
   */
  getRemainingCount() {
    return this.totalQuestions - this.progress.correctlyAnswered.length;
  }

  /**
   * Prüft, ob eine Frage bereits richtig beantwortet wurde
   * @param {number} questionId - ID der Frage
   * @returns {boolean}
   */
  isCorrectlyAnswered(questionId) {
    return this.progress.correctlyAnswered.includes(questionId);
  }

  /**
   * Gibt alle richtig beantworteten Fragen-IDs zurück
   * @returns {number[]}
   */
  getCorrectlyAnswered() {
    return [...this.progress.correctlyAnswered];
  }

  /**
   * Berechnet die aktuelle Schwierigkeitsstufe basierend auf dem Fortschritt
   * @returns {number} Schwierigkeit (1-5)
   */
  calculateDifficulty() {
    const percent = this.getProgressPercent();
    
    if (percent < 20) return 1;
    if (percent < 40) return 2;
    if (percent < 60) return 3;
    if (percent < 80) return 4;
    return 5;
  }

  /**
   * Prüft, ob alle Fragen abgeschlossen sind
   * @returns {boolean}
   */
  isComplete() {
    return this.progress.correctlyAnswered.length >= this.totalQuestions;
  }
}

// Exportiere für globale Nutzung
window.ProgressTracker = ProgressTracker;
