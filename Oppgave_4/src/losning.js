document.addEventListener("DOMContentLoaded", function () {
    const numbers = [4, 3, 2, 1]; // replace with numbers you want to sort
    const guess = [];
  
    // Populate the 'numbers' list in HTML
    const numbersList = document.getElementById("numbers");
    for (const num of numbers) {
      const li = document.createElement("li");
      li.textContent = num;
      numbersList.appendChild(li);
    }
  
    // Populate the 'guess' list in HTML
    const guessList = document.getElementById("guess");
    for (let i = 0; i < numbers.length; i++) {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.type = "text";
      li.appendChild(input);
      guessList.appendChild(li);
    }
  
    document.querySelector("button").addEventListener("click", function () {
      // Extract numbers from guess list
      const inputs = document.querySelectorAll("#guess li input");
      for (const input of inputs) {
        guess.push(Number(input.value));
      }
  
      // Sort the guess list
      const sortedGuess = guess.slice().sort((a, b) => a - b);
  
      // Check if guess list is equal to sorted numbers list
      if (
        JSON.stringify(sortedGuess) ===
        JSON.stringify(numbers.sort((a, b) => a - b))
      ) {
        alert("Correctly sorted!");
      } else {
        alert("Incorrectly sorted!");
      }
    });
  });
  // TODO
  