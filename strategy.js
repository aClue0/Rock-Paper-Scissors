// TODO: get human choice

function getHumanChoice() {
  let humanChoice = prompt("What is your choice?", " ");
  return humanChoice;
}

// TODO: generate computer choice

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerChoice;
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

// TODO: Declare Human and Computer scores

let humanScore = 0;
let computerScore = 0;
function handleScore(humanScore, computerScore) {
  if (humanScore == 3) {
    humanScore = 0;
    computerScore = 0;
    return "You Win!";
  } else if (computerScore == 3) {
    humanScore = 0;
    computerScore = 0;
    return "Computer Wins!";
  }
}

// TODO: Write logic to play round

function playRound() {
  humanChoice.toLowerCase();
  computerChoice.toLowerCase();

  function sayYouLose(humanChoice, computerChoice) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
  }
  function sayYouWin(humanChoice, computerChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
  }
  function sayDraw(humanChoice, computerChoice) {
    console.log(`It's a draw!`);
  }

  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "paper":
          sayYouLose(humanChoice, computerChoice);
          break;
        case "scissors":
          sayYouWin(humanChoice, computerChoice);
          break;
        case "rock":
          sayDraw();
          break;
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "paper":
          sayDraw();
          break;
        case "scissors":
          sayYouLose(humanChoice, computerChoice);
          break;
        case "rock":
          sayYouWin(humanChoice, computerChoice);
          break;
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "paper":
          sayYouWin(humanChoice, computerChoice);
          break;
        case "scissors":
          sayDraw();
          break;
        case "rock":
          sayYouLose(humanChoice, computerChoice);
          break;
      }

      break;
  }
}
// TODO: Write logic to play the entire game of 5 rounds
