let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  const guess = parseInt(guessInput.value);
  attempts++;

  if (isNaN(guess)) {
    message.textContent = "Please enter a number!";
    return;
  }

  if (guess < 1 || guess > 100) {
    message.textContent = " Number must be between 1 and 100!";
  } else if (guess === randomNumber) {
    message.textContent = `Correct! You guessed it in ${attempts} attempts!`;
  } else if (guess < randomNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = "";
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("guessInput").value = "";
}
