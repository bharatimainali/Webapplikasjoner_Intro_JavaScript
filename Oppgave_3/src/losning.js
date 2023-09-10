const words = ["apple", "banana", "cherry", "grape", "orange"];
let currentWordIndex = 0;
let errors = 0;
let typedWord = "";

const wordElement = document.getElementById("word");
const letterElement = document.getElementById("letter");
const wrongsElement = document.getElementById("wrongs");
const startButton = document.querySelector("button");

startButton.addEventListener("click", startGame);
document.addEventListener("keyup", checkLetter);

function startGame() {
  currentWordIndex = 0;
  errors = 0;
  typedWord = "";
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

  typedWord += typedLetter;
  letterElement.textContent = `Bokstaven du skrev kommer her: ${typedWord}`;

  if (typedWord === currentWord) {
    typedWord = "";
    nextWord();
  } else if (currentWord.indexOf(typedWord) !== 0) {
    errors++;
    typedWord = "";
    wrongsElement.textContent = `Antall feil: ${errors}`;
  }
}

function nextWord() {
  currentWordIndex++;
  if (currentWordIndex < words.length) {
    updateUI();
  } else {
    wordElement.textContent = "Spillet er ferdig!";
    letterElement.textContent = "";
    startButton.disabled = false;
  }
}