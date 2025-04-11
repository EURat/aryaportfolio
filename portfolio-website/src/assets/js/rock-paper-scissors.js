document.addEventListener("DOMContentLoaded", () => {
  const choices = ["rock", "paper", "scissors"];
  const resultElement = document.getElementById("result");

  document.getElementById("rock").addEventListener("click", () => playGame("rock"));
  document.getElementById("paper").addEventListener("click", () => playGame("paper"));
  document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

  function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
      result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    resultElement.textContent = result;
  }
});