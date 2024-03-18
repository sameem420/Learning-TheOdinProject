const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const finalResult = document.querySelector("#finalResult");

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

console.log(playerScore, computerScore);

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    result.innerHTML = "<h1>Draw! Rock is equals to Rock</h1>";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    result.innerHTML = "<h1>You Won! Rock beats Scissors</h1>";
    playerScore++;
    document.querySelector("#playerScore").textContent = playerScore;
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    result.innerHTML = "<h1>You Lose! Paper beats Rock</h1>";
    computerScore++;
    document.querySelector("#compScore").textContent = computerScore;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    result.innerHTML = "<h1>You Won! Paper beats Rock</h1>";
    playerScore++;
    document.querySelector("#playerScore").textContent = playerScore;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    result.innerHTML = "<h1>Draw! Paper is equals to Paper</h1>";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    result.innerHTML = "<h1>You Lose! Scissors beats Paper</h1>";
    computerScore++;
    document.querySelector("#compScore").textContent = computerScore;
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    result.innerHTML = "<h1>You Lose! Rock beats Scissors</h1>";
    computerScore++;
    document.querySelector("#compScore").textContent = computerScore;
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    result.innerHTML = "<h1>Draw! Scissors is equals to Scissors</h1>";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    result.innerHTML = "<h1>You Won! Scissors beats Paper</h1>";
    playerScore++;
    document.querySelector("#playerScore").textContent = playerScore;
  }
}

rockBtn.addEventListener("click", function () {
  roundCount++;
  console.log("Rock");
  if (roundCount == 5) {
    if (computerScore > playerScore) {
      finalResult.textContent = `Computer Wins with the Highest Score - ${computerScore}`;
      setTimeout(function () {
        window.location.reload();
      }, 8000);
    } else {
      finalResult.textContent = `You Win with the Highest Score - ${playerScore}`;
      setTimeout(function () {
        window.location.reload();
      }, 8000);
    }
  }
  let playerSelection = rockBtn.id;
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener("click", function () {
  roundCount++;
  console.log("Paper");
  if (roundCount == 5) {
    if (computerScore > playerScore) {
      finalResult.textContent = `Computer Wins with the Highest Score - ${computerScore}`;
      setTimeout(function () {
        window.location.reload();
      }, 8000);
    } else {
      finalResult.textContent = `You Win with the Highest Score - ${playerScore}`;
      setTimeout(function () {
        window.location.reload();
      }, 8000);
    }
  }
  let playerSelection = paperBtn.id;
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener("click", function () {
  roundCount++;
  console.log("Scissors");
  if (roundCount == 5) {
    if (computerScore > playerScore) {
      finalResult.textContent = `Computer Wins with the Highest Score - ${computerScore}`;
      setTimeout(function () {
        window.location.reload();
      }, 8000);
    } else {
      finalResult.textContent = `You Win with the Highest Score - ${playerScore}`;
      setTimeout(function () {
        window.location.reload();
      }, 8000);
    }
  }
  let playerSelection = scissorsBtn.id;
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});
