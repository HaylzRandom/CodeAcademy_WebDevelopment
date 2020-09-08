// A JavaScript program to determine a race number and start time depending on if registered early and age
let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const age = 18;

if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30am. Your race number is ${raceNumber} `);
}
else if (age > 18 && registeredEarly === false) {
  console.log(`You will race at 11:00am. Your race number is ${raceNumber}`);
}
else if (age < 18) {
  console.log(`You will race at 12:30pm. Your race number is ${raceNumber}`);
}
else {
  console.log('Please go and see the registration desk');
}