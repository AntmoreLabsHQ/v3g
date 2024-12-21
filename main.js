(() => {
  let gameContainer;
  let floatingButton;

  // Inject Styles
  const injectStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Quiz Popup Styles */
      #quiz-popup {
        display: none;
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 350px;
        height: auto;
        background: white;
        z-index: 9999;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      .quiz-modal {
        padding: 20px;
        text-align: center;
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

      /* Floating Button Styles */
      #quiz-floating-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9998;
        background: #0078ff;
        color: white;
        border: none;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      #quiz-floating-button:hover {
        background: #005fcc;
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

  // Create Floating Button
  const createFloatingButton = () => {
    floatingButton = document.createElement('button');
    floatingButton.id = 'quiz-floating-button';
    floatingButton.innerText = '🎮';
    floatingButton.title = 'Start Quiz';
    document.body.appendChild(floatingButton);

    floatingButton.addEventListener('click', showGame);
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

  // Load Styles and Floating Button
  injectStyles();
  createFloatingButton();
})();
