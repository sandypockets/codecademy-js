// Get the user's choice
let userChoice;
const getUserChoice = function (userChoice) {
  userChoice = userChoice.toLowerCase();
  if (userChoice === 'rock' || userChoice === 'paper' || userChoice == 'scissors') {
    userChoice;
  } else {
    userChoice = '*** user choice error ***';
  }
}

// Get the computer's choice
let computerChoice;
const getComputerChoice = function () {
  computerChoice = Math.floor(Math.random() * 4);
  if (computerChoice === 0) {
    computerChoice = 'rock';
  } else if (computerChoice === 1) {
    computerChoice == 'paper';
  } else if (computerChoice === 2) {
    computerChoice = 'scissors';
  } else {
    computerChoice = '*** computer choice error ***';
  } computerChoice;
}

// Compare the computer's choices to the user's, and determine a winner. 
let winner;
let outcome;
const determineWinner = function (computerChoice, userChoice) {
  
  const user = 'You won!';
  const computer = 'The computer won!';
  const tie = 'The game was a tie!'

  if (computerChoice === 'rock' && userChoice === 'paper') {
    winner = user;
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    outcome = `The computer played ${computerChoice}, and you played ${userChoice}.`
    winner = computer;
  } else if (computerChoice === 'rock' && userChoice === 'rock') {
    outcome = 'You both played rock.'
    winner = tie;
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    outcome = `The computer played ${computerChoice}, and you played ${userChoice}.`
    winner = computer;
  } else if (computerChoice === 'paper' && userChoice === 'paper') {
    outcome = 'You both played paper.'
    winner = tie;
  } else if (computerChoice === 'paper' && userChoice === 'scissors') {
    outcome = `The computer played ${computerChoice}, and you played ${userChoice}.`
    winner = user;
  } else if (computerChoice === 'scissors' && userChoice === 'rock') {
    outcome = `The computer played ${computerChoice}, and you played ${userChoice}.`
    winner = user;
  } else if (computerChoice === 'scissors' && userChoice === 'paper') {
    outcome = `The computer played ${computerChoice}, and you played ${userChoice}.`
    winner = computer;
  } else if (computerChoice === 'scissors' && userChoice === 'scissors') {
    outcome = 'You both played scissors.'
    winner = tie;
  } else {
    winner = '*** winner error ***';
  } 
}

// Start program, display results
const playGame = function (userChoice) {
  getUserChoice(userChoice);
  getComputerChoice();
  determineWinner(computerChoice, userChoice)
  console.log(`${winner} ${outcome}`);
}

// Enter user choice as arg
playGame('rock');