const registrationContainer = document.getElementById('registration-container');
const gameContainer = document.getElementById('game-container');
const nameInput = document.getElementById('name-input');
const teamInput = document.getElementById('team-input');
const registerButton = document.getElementById('register-button');
const timerContainer = document.getElementById('timer-container');
const questionContainer = document.getElementById('question-container');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');

let timerInterval;

registerButton.addEventListener('click', () => {
    // Hide registration and show game container
    registrationContainer.hidden = true;
    gameContainer.hidden = false;

    // Start the game
    startGame();
});

function startGame() {
    // Start the timer
    let timeRemaining = 30;  // Example: 30 seconds per question
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerContainer.textContent = `Time Remaining: ${timeRemaining}s`;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            // Handle time out...
        }
    }, 1000);

    // Display the first question
    displayQuestion('What is the capital of France?');
}

function displayQuestion(questionText) {
    questionContainer.textContent = questionText;
}

submitButton.addEventListener('click', () => {
    const answerText = answerInput.value;
    // Send answer to the server...
});


