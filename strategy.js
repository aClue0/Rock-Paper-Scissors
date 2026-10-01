// TODO: get all the choiceButtons and paragraphs and select them
const result = document.querySelector(".result");
const choice = document.querySelector(".choice");

const choiceButtons = Array.from(document.querySelectorAll(".choiceBtn"));

// TODO: get human choice

let humanChoice = "";

choiceButtons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    if (isGameOver) return;

    let userChoice = ev.target.dataset.choice;

    switch (userChoice) {
      case "paper":
        humanChoice = "paper";
        break;
      case "rock":
        humanChoice = "rock";
        break;
      case "scissors":
        humanChoice = "scissors";
        break;

      default:
        break;
    }
    if (humanChoice && resetBtn) playRound(humanChoice);
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

// TODO: Write logic to handle winning or losing
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

// TODO: Write logice to play round
let humanScore = 0;
let computerScore = 0;
let isGameOver = false;

function playRound(humanChoice) {
  let computerChoice = generateComputerChoice();
  let condition = handleScore(humanChoice, computerChoice);

  choice.textContent = `You Chose ${humanChoice} , Computer chose ${computerChoice}`;
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
    isGameOver = true;
    document.body.appendChild(resetBtn);
  }
}

// TODO: make a reset button
const resetBtn = document.createElement("button");
resetBtn.textContent = "Play Again";
resetBtn.addEventListener("click", (ev) => {
  result.textContent = "Let's play another game!";
  choice.textContent = "";
  humanScore = 0;
  computerScore = 0;
  isGameOver = false;
  resetBtn.remove();
});
