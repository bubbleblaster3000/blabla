/**
 * UI Module
 * Verwaltet alle Benutzeroberflächen-Updates
 */

class UI {
  constructor() {
    // Cache DOM-Elemente
    this.elements = {};
  }

  /**
   * Initialisiert die UI-Referenzen
   */
  init() {
    this.elements = {
      // Progress
      progressBar: document.getElementById('progressBar'),
      progressPercent: document.getElementById('progressPercent'),
      correctCount: document.getElementById('correctCount'),
      remainingCount: document.getElementById('remainingCount'),
      
      // Difficulty
      difficultyStars: document.getElementById('difficultyStars'),
      
      // Question
      questionCard: document.getElementById('questionCard'),
      questionNumber: document.getElementById('questionNumber'),
      questionText: document.getElementById('questionText'),
      optionsContainer: document.getElementById('optionsContainer'),
      
      // Buttons
      checkBtn: document.getElementById('checkBtn'),
      nextBtn: document.getElementById('nextBtn'),
      
      // Feedback
      feedback: document.getElementById('feedback'),
      feedbackIcon: document.getElementById('feedbackIcon'),
      feedbackText: document.getElementById('feedbackText'),
      feedbackDetail: document.getElementById('feedbackDetail'),
      
      // Screens
      startScreen: document.getElementById('startScreen'),
      gameScreen: document.getElementById('gameScreen'),
      completeScreen: document.getElementById('completeScreen')
    };
  }

  /**
   * Aktualisiert die Progress-Bar
   * @param {number} percent - Fortschritt in Prozent
   * @param {number} correct - Anzahl korrekt beantwortet
   * @param {number} remaining - Anzahl verbleibend
   */
  updateProgressBar(percent, correct, remaining) {
    this.elements.progressBar.style.width = `${percent}%`;
    this.elements.progressPercent.textContent = `${percent}%`;
    this.elements.correctCount.textContent = correct;
    this.elements.remainingCount.textContent = remaining;
  }

  /**
   * Aktualisiert die Schwierigkeitsanzeige
   * @param {number} difficulty - Aktuelle Schwierigkeit (1-5)
   */
  updateDifficulty(difficulty) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      starsHtml += `<span class="star ${i <= difficulty ? 'active' : ''}">★</span>`;
    }
    this.elements.difficultyStars.innerHTML = starsHtml;
  }

  /**
   * Rendert eine Frage
   * @param {Object} question - Die anzuzeigende Frage
   * @param {number} questionNum - Aktuelle Fragennummer
   * @param {number} total - Gesamtzahl (verbleibende)
   */
  renderQuestion(question, questionNum, total) {
    // Fragen-Header
    this.elements.questionNumber.textContent = 
      `Frage ${questionNum} von ${total} verbleibenden`;
    
    // Fragen-Text
    this.elements.questionText.textContent = question.text;
    
    // Optionen rendern
    this.elements.optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
      const optionEl = document.createElement('label');
      optionEl.className = 'option';
      optionEl.dataset.index = index;
      
      optionEl.innerHTML = `
        <input type="checkbox" value="${index}">
        <span class="checkbox"></span>
        <span class="option-text">${String.fromCharCode(65 + index)}. ${option}</span>
      `;
      
      optionEl.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT') {
          const checkbox = optionEl.querySelector('input');
          checkbox.checked = !checkbox.checked;
        }
        optionEl.classList.toggle('selected', optionEl.querySelector('input').checked);
        this.updateCheckButton();
      });
      
      this.elements.optionsContainer.appendChild(optionEl);
    });
    
    // Buttons zurücksetzen
    this.elements.checkBtn.classList.remove('hidden');
    this.elements.checkBtn.disabled = true;
    this.elements.nextBtn.classList.add('hidden');
    
    // Feedback verstecken
    this.hideFeedback();
    
    // Animation
    this.elements.questionCard.style.animation = 'none';
    setTimeout(() => {
      this.elements.questionCard.style.animation = 'fadeIn 0.4s ease';
    }, 10);
  }

  /**
   * Aktualisiert den Zustand des Prüfen-Buttons
   */
  updateCheckButton() {
    const anySelected = document.querySelectorAll('.option.selected').length > 0;
    this.elements.checkBtn.disabled = !anySelected;
  }

  /**
   * Gibt die ausgewählten Antwort-Indizes zurück
   * @returns {number[]}
   */
  getSelectedAnswers() {
    const selected = [];
    document.querySelectorAll('.option input:checked').forEach(input => {
      selected.push(parseInt(input.value));
    });
    return selected;
  }

  /**
   * Zeigt das Feedback an
   * @param {boolean} isCorrect - Ob die Antwort korrekt war
   * @param {Object} result - Validierungsergebnis
   */
  showFeedback(isCorrect, result) {
    const feedback = this.elements.feedback;
    
    if (isCorrect) {
      feedback.className = 'feedback show correct';
      this.elements.feedbackIcon.textContent = '🎉';
      this.elements.feedbackText.textContent = 'Richtig!';
      this.elements.feedbackDetail.textContent = 'Sehr gut! Du hast alle korrekten Antworten gefunden.';
    } else {
      feedback.className = 'feedback show incorrect';
      this.elements.feedbackIcon.textContent = '😕';
      this.elements.feedbackText.textContent = 'Leider falsch';
      
      let detail = '';
      if (result.missed.length > 0) {
        detail += `Du hast ${result.missed.length} richtige Antwort(en) übersehen. `;
      }
      if (result.wrong.length > 0) {
        detail += `${result.wrong.length} Antwort(en) waren falsch.`;
      }
      this.elements.feedbackDetail.textContent = detail || 'Versuche es nochmal!';
    }
    
    // Buttons aktualisieren
    this.elements.checkBtn.classList.add('hidden');
    this.elements.nextBtn.classList.remove('hidden');
  }

  /**
   * Versteckt das Feedback
   */
  hideFeedback() {
    this.elements.feedback.className = 'feedback';
  }

  /**
   * Hebt die korrekten/falschen Antworten hervor
   * @param {Object} result - Validierungsergebnis
   */
  highlightAnswers(result) {
    const options = document.querySelectorAll('.option');
    
    options.forEach((option, index) => {
      option.style.pointerEvents = 'none'; // Deaktiviere Klicks
      
      const isCorrect = result.correctAnswers.includes(index);
      const wasSelected = result.selectedAnswers.includes(index);
      
      if (isCorrect && wasSelected) {
        option.className = 'option correct';
      } else if (!isCorrect && wasSelected) {
        option.className = 'option incorrect';
      } else if (isCorrect && !wasSelected) {
        option.className = 'option missed';
      }
    });
  }

  /**
   * Zeigt den Start-Screen
   */
  showStartScreen() {
    this.elements.startScreen.classList.remove('hidden');
    this.elements.gameScreen.classList.add('hidden');
    this.elements.completeScreen.classList.add('hidden');
  }

  /**
   * Zeigt den Game-Screen
   */
  showGameScreen() {
    this.elements.startScreen.classList.add('hidden');
    this.elements.gameScreen.classList.remove('hidden');
    this.elements.completeScreen.classList.add('hidden');
  }

  /**
   * Zeigt den Complete-Screen
   */
  showCompleteScreen() {
    this.elements.startScreen.classList.add('hidden');
    this.elements.gameScreen.classList.add('hidden');
    this.elements.completeScreen.classList.remove('hidden');
  }

  /**
   * Setzt das aktive Fach in der Navigation
   * @param {string} subject - Name des Fachs
   */
  setActiveSubject(subject) {
    document.querySelectorAll('.subject-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.subject === subject);
    });
  }
}

// Exportiere für globale Nutzung
window.UI = UI;
