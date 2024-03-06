function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    console.log("Draw! Rock is equals to Rock");
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    console.log("You Won! Rock beats Scissors");
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    console.log("You Lose! Paper beats Rock");
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    console.log("You Won! Paper beats Rock");
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    console.log("Draw! Paper is equals to Paper");
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    console.log("You Lose! Scissors beats Paper");
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    console.log("You Lose! Rock beats Scissors");
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    console.log("Draw! Scissors is equals to Scissors");
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    console.log("You Won! Scissors beats Paper");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your choice? (Rock, Paper, Scissors)");
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
}

playGame();
