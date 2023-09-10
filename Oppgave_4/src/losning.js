document.addEventListener("DOMContentLoaded", function() {
  const numbers = [4, 3, 2, 1];

  const numbersList = document.getElementById("numbers");
  for (const num of numbers) {
      const li = document.createElement("li");
      li.textContent = num;
      numbersList.appendChild(li);
  }

  const guessList = document.getElementById("guess");
  for (let i = 0; i < numbers.length; i++) {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.type = "text";
      li.appendChild(input);
      guessList.appendChild(li);
  }

  document.querySelector("button").addEventListener("click", function() {
      const guess = [];
      const inputs = document.querySelectorAll("#guess li input");
      for (const input of inputs) {
          guess.push(Number(input.value));
      }

      const sortedGuess = guess.slice().sort((a, b) => a - b);
      const sortedNumbers = [...numbers].sort((a, b) => a - b);
      if (JSON.stringify(sortedGuess) === JSON.stringify(sortedNumbers)) {
          alert("Correctly sorted!");
      } else {
          alert("Incorrectly sorted!");
      }
  });
});