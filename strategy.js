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

// TODO: Write logic to play round
//
function sayYouLose(humanChoice, computerChoice) {
  console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
  computerScore++;
}
function sayYouWin(humanChoice, computerChoice) {
  console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
  humanScore++;
}
function sayDraw(humanChoice, computerChoice) {
  console.log(`It's a draw!`);
}

function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();
  computerChoice.toLowerCase();
  console.log(
    `You chose ${humanChoice} , The computer chose ${computerChoice}.`,
  );

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
  console.log(
    `Current score is Human:${humanScore} , Computer:${computerScore}`,
  );
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

let playAgain = confirm("Do you want to play another game?");

if (playAgain) {
  playGame();
} else {
  console.log("Thank you for playing!");
}
