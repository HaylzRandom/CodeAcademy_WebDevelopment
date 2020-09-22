const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = (vegArray) => {
  vegArray.forEach(politelyDecline);
}

declineEverything(veggies);


// Checkpoint 2 solutions:
// Using an anonymous function and string interpolation:
const acceptEverything = (vegArray) => {
  vegArray.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  })
}

acceptEverything(veggies);

