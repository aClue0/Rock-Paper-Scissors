// TODO: get human choice
//
// FIX: Apply after you finish
// let humanChoice = prompt("What is your choice?", " ");
// console.log(humanChoice);

// TODO: generate computer choice

function generateChoice() {
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
console.log(generateChoice());
// TODO: find a way to store the scores
// TODO: show the scores
// TODO: Write logic to play round
// TODO: Write logic to play the entire game of 5 rounds
