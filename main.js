(() => {
  let gameContainer;

  // Inject Styles
  const injectStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Quiz Popup Styles */
      #quiz-popup {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        z-index: 9999;
      }

      .quiz-modal {
        background: white;
        padding: 20px;
        width: 300px;
        margin: 10% auto;
        text-align: center;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      .quiz-modal h2 {
        margin-bottom: 10px;
      }

      .quiz-option {
        display: block;
        margin: 5px auto;
        padding: 8px 12px;
        cursor: pointer;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #f7f7f7;
      }

      .quiz-option:hover {
        background: #e0e0e0;
      }

      .quiz-close {
        margin-top: 15px;
        color: red;
        cursor: pointer;
        text-decoration: underline;
      }
    `;
    document.head.appendChild(style);
  };

  // Create Game UI
  const createGameUI = () => {
    gameContainer = document.createElement('div');
    gameContainer.id = 'quiz-popup';
    gameContainer.innerHTML = `
      <div class="quiz-modal">
        <h2>Quiz Game</h2>
        <p id="quiz-question">What is 2 + 2?</p>
        <button class="quiz-option">2</button>
        <button class="quiz-option">4</button>
        <button class="quiz-option">5</button>
        <div class="quiz-close">Close</div>
      </div>
    `;
    document.body.appendChild(gameContainer);

    // Add Event Listeners
    document.querySelector('.quiz-close').addEventListener('click', closeGame);
    document.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.innerText === '4') {
          alert('Correct!');
        } else {
          alert('Wrong answer!');
        }
      });
    });
  };

  // Show Game Popup
  const showGame = () => {
    if (!gameContainer) {
      createGameUI();
    }
    gameContainer.style.display = 'block';
  };

  // Close Game Popup
  const closeGame = () => {
    if (gameContainer) {
      gameContainer.style.display = 'none';
    }
  };

  // Expose to Global Scope
  window.showGame = showGame;

  // Load Styles
  injectStyles();
})();

