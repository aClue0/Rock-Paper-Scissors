// TODO: get all the buttons and paragraphs and select them
const paper = document.querySelector(".paperBtn");
const rock = document.querySelector(".rockBtn");
const scissors = document.querySelector(".scissorsBtn");
const result = document.querySelector(".result");
const choice = document.querySelector(".choice");

// TODO: get human choice

let humanChoice = "";
buttons = Array.from(document.querySelectorAll("button"));
buttons.addEventListener("click", (ev) => {
  switch (ev.target) {
    case paper:
      humanChoice = "paper";
      break;
    case rock:
      humanChoice = "rock";
      break;
    case scissors:
      humanChoice = "scissors";
      break;

    default:
      break;
  }
});

// TODO: generate computer choice
//

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

// TODO: Write logic to play round
// if winning returns 1 if losing returns -1 if draw returns 0
function handleScore(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return 0;

  if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  )
    return 1;
  else return -1;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  let condition = handleScore(humanChoice, computerChoice);
  switch (condition) {
    case 0:
      break;

    default:
      break;
  }
}
// TODO: Write logic to play the entire game of 5 rounds

let humanScore = 0;
let computerScore = 0;

function playGame() {
  let isEnd = false;

  function isFinished(humanScore, computerScore) {
    let isFinished = false;
    if (humanScore === 3) {
      console.log("You Win!");
      isFinished = true;
    } else if (computerScore === 3) {
      console.log("You Lose!");
      isFinished = true;
    }
    return isFinished;
  }

  while (!isEnd) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    isEnd = isFinished(humanScore, computerScore);
  }
  humanScore = 0;
  computerScore = 0;
  console.log("Let's Play Again sometime!");
}

playGame();
