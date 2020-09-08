// A magic 8 ball javascript program

let userName = 'Hayley';

userName === 'Hayley' ? console.log('Hello Hayley!') : console.log('Hello!');

const userQuestion = 'Will I get a web development job?';

console.log(`${userName} asked ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'Reply hazy try again';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'It is certain';
    break;
  case 3: 
    eightBall = 'Cannot predict now';
    break;
  case 4: 
    eightBall = 'Signs point to yes';
    break;
  case 5: 
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7: 
    eightBall = 'Your question will be answered';
    break;
  default:
    eightBall = 'I do not understand the question';
    break;
}

console.log(eightBall);