// Magic Eight Ball
// User enters a question in userQuestion and the program returns an answer at random

let username = '';
let userQuestion = 'Will the weather be nice today?';

const msg = username ? `Hello ${username}!` : 'Hello!';
const welcome = `${msg}\nYou have asked...\n'${userQuestion}'`;
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

const answer = randomNumber;
switch (answer) {
  case 0:
    eightBall = 'Signs point to yes';
    break;
  case 1:
    eightBall = 'It is certain';
    break;
  case 2:
    eightBall = 'It is decidedly so';
    break;
  case 3:
    eightBall = 'Reply hazy, try again';
    break;
  case 4:
    eightBall = 'Cannot predict now';
    break;
  case 5: 
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Outlook not so good';
    break;
}

console.log(welcome);
console.log(eightBall);