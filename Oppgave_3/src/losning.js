const words = ["apple", "banana", "cherry", "grape", "orange"];
let currentWordIndex = 0;
let errors = 0;

const wordElement = document.getElementById("word");
const letterElement = document.getElementById("letter");
const wrongsElement = document.getElementById("wrongs");
const startButton = document.querySelector("button");

startButton.addEventListener("click", startGame);
document.addEventListener("keyup", checkLetter);

function startGame() {
  currentWordIndex = 0;
  errors = 0;
  wordElement.className = ""; // Remove the green class
  updateUI();
  startButton.disabled = true;
}

function updateUI() {
  wordElement.textContent = words[currentWordIndex];
  letterElement.textContent = "";
  wrongsElement.textContent = `Antall feil: ${errors}`;
}

function checkLetter(event) {
  const currentWord = words[currentWordIndex];
  const typedLetter = event.key;

  if (currentWord.indexOf(typedLetter) === 0) {
    letterElement.textContent = `Bokstaven du skrev kommer her: ${typedLetter}`;
    if (typedLetter === currentWord[currentWord.length - 1]) {
      nextWord();
    }
  } else {
    errors++;
    wrongsElement.textContent = `Antall feil: ${errors}`;
  }
}

function nextWord() {
  currentWordIndex++;
  if (currentWordIndex < words.length) {
    updateUI();
  } else {
    wordElement.textContent = "Spillet er ferdig!";
    wordElement.className = "green"; // Add this line
    letterElement.textContent = "";
    startButton.disabled = false;
  }
}
