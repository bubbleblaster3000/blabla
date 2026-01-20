/**
 * Question Manager Module
 * Verwaltet das Laden und Auswählen von Fragen
 */

class QuestionManager {
  constructor() {
    this.questions = [];
    this.currentQuestion = null;
    this.subject = null;
  }

  /**
   * Lädt Fragen aus dem eingebetteten QUESTIONS_DATA Objekt
   * @param {string} subject - Name des Fachs
   * @returns {boolean}
   */
  loadQuestions(subject) {
    const subjectKey = subject.toLowerCase();
    
    if (!QUESTIONS_DATA || !QUESTIONS_DATA[subjectKey]) {
      console.error(`Keine Fragen für ${subject} gefunden.`);
      return false;
    }
    
    const data = QUESTIONS_DATA[subjectKey];
    this.questions = data.questions;
    this.subject = subject;
    return true;
  }

  /**
   * Gibt die Gesamtzahl der Fragen zurück
   * @returns {number}
   */
  getTotalCount() {
    return this.questions.length;
  }

  /**
   * Filtert Fragen nach Schwierigkeitsgrad
   * @param {Object[]} questions - Array von Fragen
   * @param {number} targetDifficulty - Ziel-Schwierigkeit (1-5)
   * @returns {Object[]} Gefilterte Fragen
   */
  filterByDifficulty(questions, targetDifficulty) {
    // Toleranzbereich: Ziel +/- 1
    const minDiff = Math.max(1, targetDifficulty - 1);
    const maxDiff = Math.min(5, targetDifficulty + 1);

    // Erst versuchen, Fragen im Zielbereich zu finden
    let filtered = questions.filter(q => 
      q.difficulty >= minDiff && q.difficulty <= maxDiff
    );

    // Falls keine gefunden, erweitere den Bereich
    if (filtered.length === 0) {
      // Priorisiere nach Nähe zur Ziel-Schwierigkeit
      filtered = questions.sort((a, b) => {
        const diffA = Math.abs(a.difficulty - targetDifficulty);
        const diffB = Math.abs(b.difficulty - targetDifficulty);
        return diffA - diffB;
      });
    }

    return filtered;
  }

  /**
   * Wählt eine zufällige Frage aus dem verfügbaren Pool
   * @param {number[]} excludeIds - IDs der auszuschließenden Fragen
   * @param {number} targetDifficulty - Ziel-Schwierigkeit
   * @returns {Object|null} Die ausgewählte Frage oder null
   */
  getRandomQuestion(excludeIds = [], targetDifficulty = 1) {
    // Filtere bereits richtig beantwortete Fragen aus
    let availableQuestions = this.questions.filter(
      q => !excludeIds.includes(q.id)
    );

    if (availableQuestions.length === 0) {
      return null; // Alle Fragen wurden richtig beantwortet
    }

    // Filtere nach Schwierigkeit
    let filteredQuestions = this.filterByDifficulty(availableQuestions, targetDifficulty);

    // Wähle zufällig eine Frage aus
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    this.currentQuestion = filteredQuestions[randomIndex];

    return this.currentQuestion;
  }

  /**
   * Validiert die Antwort des Spielers
   * @param {number[]} selectedAnswers - Indizes der ausgewählten Antworten
   * @returns {Object} Ergebnis der Validierung
   */
  validateAnswer(selectedAnswers) {
    if (!this.currentQuestion) {
      return { isCorrect: false, correctAnswers: [] };
    }

    const correctAnswers = this.currentQuestion.correctAnswers;

    // Sortiere beide Arrays für den Vergleich
    const sortedSelected = [...selectedAnswers].sort((a, b) => a - b);
    const sortedCorrect = [...correctAnswers].sort((a, b) => a - b);

    // Prüfe, ob die Arrays exakt übereinstimmen
    const isCorrect = 
      sortedSelected.length === sortedCorrect.length &&
      sortedSelected.every((val, idx) => val === sortedCorrect[idx]);

    return {
      isCorrect,
      correctAnswers,
      selectedAnswers,
      // Für detailliertes Feedback
      missed: correctAnswers.filter(a => !selectedAnswers.includes(a)),
      wrong: selectedAnswers.filter(a => !correctAnswers.includes(a))
    };
  }

  /**
   * Gibt die aktuelle Frage zurück
   * @returns {Object|null}
   */
  getCurrentQuestion() {
    return this.currentQuestion;
  }

  /**
   * Gibt eine Frage nach ID zurück
   * @param {number} id - Fragen-ID
   * @returns {Object|undefined}
   */
  getQuestionById(id) {
    return this.questions.find(q => q.id === id);
  }
}

// Exportiere für globale Nutzung
window.QuestionManager = QuestionManager;
