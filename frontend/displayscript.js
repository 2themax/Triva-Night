const bobbleheadVideo = document.getElementById('bobblehead-video');
const questionContainer = document.getElementById('question-container');

function playBobbleheadVideo() {
    bobbleheadVideo.play();
}

function displayQuestion(questionText) {
    questionContainer.textContent = questionText;
}

// Example usage:
// Play the Bobblehead video
playBobbleheadVideo();

// Display a question
displayQuestion('What is the capital of France?');

