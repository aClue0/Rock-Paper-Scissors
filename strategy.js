// TODO: get all the buttons and paragraphs and select them
const result = document.querySelector(".result");
const choice = document.querySelector(".choice");
let buttons = Array.from(document.querySelectorAll("button"));

// TODO: get human choice

let humanChoice = "";

buttons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    switch (ev.target.textContent) {
      case "Paper":
        humanChoice = "paper";
        break;
      case "Rock":
        humanChoice = "rock";
        break;
      case "Scissors":
        humanChoice = "scissors";
        break;

      default:
        break;
    }
    playRound(humanChoice);
  });
});

// TODO: generate computer choice
//

function generateComputerChoice() {
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

function playRound(humanChoice) {
  let computerChoice = generateComputerChoice();
  let condition = handleScore(humanChoice, computerChoice);
  console.log(humanChoice, computerChoice);
  console.log(condition);
  switch (condition) {
    case 0:
      result.textContent = "It's a Draw!";
      break;
    case 1:
      humanScore++;
      result.textContent = "You win This Round!";
      break;
    case -1:
      computerScore++;
      result.textContent = "You lose this Round!";
      break;
  }
  if (humanScore === 3 || computerScore === 3) {
    if (humanScore > computerScore) {
      result.textContent = "YOU WIN";
    } else {
      result.textContent = "YOU LOSE!";
    }
    humanScore = computerScore = 0;
  }
  console.log(humanScore, computerScore);
}
// TODO: Write logic to play the entire game of 5 rounds

let humanScore = 0;
let computerScore = 0;

// function playGame() {
//   let isEnd = false;

// function isFinished(humanScore, computerScore) {
//   let isFinished = false;
//   if (humanScore === 3) {
//     console.log("You Win!");
//     isFinished = true;
//   } else if (computerScore === 3) {
//     console.log("You Lose!");
//     isFinished = true;
//   }
//   return isFinished;
// }

// while (!isEnd) {
//   let humanChoice = getHumanChoice();
//   let computerChoice = generateComputerChoice();
//   playRound(humanChoice, computerChoice);
//   isEnd = isFinished(humanScore, computerScore);
// }
//   humanScore = 0;
//   computerScore = 0;
//   console.log("Let's Play Again sometime!");
// }
// playGame();
