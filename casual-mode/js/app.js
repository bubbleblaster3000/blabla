/**
 * Casual Mode - Main Application
 * Koordiniert alle Module und steuert den Spielablauf
 */

class CasualModeApp {
  constructor() {
    this.questionManager = new QuestionManager();
    this.progressTracker = new ProgressTracker();
    this.ui = new UI();
    
    this.currentSubject = 'chemie';
    this.questionCounter = 0;
  }

  /**
   * Initialisiert die Anwendung
   */
  init() {
    // UI initialisieren
    this.ui.init();
    
    // Event Listeners einrichten
    this.setupEventListeners();
    
    // Standard-Fach laden (jetzt synchron)
    this.loadSubject(this.currentSubject);
  }

  /**
   * Richtet alle Event Listeners ein
   */
  setupEventListeners() {
    // Fach-Auswahl
    document.querySelectorAll('.subject-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const subject = e.target.dataset.subject;
        if (subject) {
          this.loadSubject(subject);
        }
      });
    });

    // Antwort prüfen
    document.getElementById('checkBtn').addEventListener('click', () => {
      this.checkAnswer();
    });

    // Nächste Frage
    document.getElementById('nextBtn').addEventListener('click', () => {
      this.nextQuestion();
    });

    // Start-Button
    document.getElementById('startBtn').addEventListener('click', () => {
      this.startGame();
    });

    // Reset-Button
    document.getElementById('resetBtn').addEventListener('click', () => {
      this.resetProgress();
    });

    // Nochmal spielen Button
    document.getElementById('playAgainBtn').addEventListener('click', () => {
      this.resetProgress();
    });
  }

  /**
   * Lädt ein Fach und initialisiert den Spielstand
   * @param {string} subject - Name des Fachs
   */
  loadSubject(subject) {
    this.currentSubject = subject;
    this.ui.setActiveSubject(subject);

    // Fragen laden (jetzt synchron aus eingebetteten Daten)
    const loaded = this.questionManager.loadQuestions(subject);
    
    if (!loaded) {
      alert(`Fragen für ${subject} konnten nicht geladen werden.`);
      return;
    }

    // Progress Tracker initialisieren
    const totalQuestions = this.questionManager.getTotalCount();
    this.progressTracker.init(subject, totalQuestions);

    // UI aktualisieren
    this.updateUI();

    // Prüfen ob bereits komplett
    if (this.progressTracker.isComplete()) {
      this.ui.showCompleteScreen();
    } else {
      this.ui.showStartScreen();
    }
  }

  /**
   * Startet das Spiel
   */
  startGame() {
    this.ui.showGameScreen();
    this.questionCounter = 0;
    this.nextQuestion();
  }

  /**
   * Lädt und zeigt die nächste Frage
   */
  nextQuestion() {
    // Schwierigkeit basierend auf Fortschritt
    const difficulty = this.progressTracker.calculateDifficulty();
    
    // Bereits richtig beantwortete Fragen ausschließen
    const excludeIds = this.progressTracker.getCorrectlyAnswered();
    
    // Zufällige Frage holen
    const question = this.questionManager.getRandomQuestion(excludeIds, difficulty);

    if (!question) {
      // Alle Fragen abgeschlossen!
      this.ui.showCompleteScreen();
      return;
    }

    this.questionCounter++;

    // UI aktualisieren
    this.ui.updateDifficulty(difficulty);
    this.ui.renderQuestion(
      question, 
      this.questionCounter, 
      this.progressTracker.getRemainingCount()
    );
  }

  /**
   * Prüft die gegebene Antwort
   */
  checkAnswer() {
    const selectedAnswers = this.ui.getSelectedAnswers();
    const result = this.questionManager.validateAnswer(selectedAnswers);
    const question = this.questionManager.getCurrentQuestion();

    if (result.isCorrect) {
      this.progressTracker.markAsCorrect(question.id);
    } else {
      this.progressTracker.markAsWrong(question.id);
    }

    // UI aktualisieren
    this.updateUI();
    this.ui.highlightAnswers(result);
    this.ui.showFeedback(result.isCorrect, result);
  }

  /**
   * Aktualisiert alle UI-Elemente basierend auf dem aktuellen Stand
   */
  updateUI() {
    const percent = this.progressTracker.getProgressPercent();
    const correct = this.progressTracker.getCorrectCount();
    const remaining = this.progressTracker.getRemainingCount();
    
    this.ui.updateProgressBar(percent, correct, remaining);
  }

  /**
   * Setzt den Fortschritt für das aktuelle Fach zurück
   */
  resetProgress() {
    this.progressTracker.resetProgress();
    this.questionCounter = 0;
    this.updateUI();
    this.startGame();
  }
}

// App starten wenn DOM geladen
document.addEventListener('DOMContentLoaded', () => {
  const app = new CasualModeApp();
  app.init();
});
