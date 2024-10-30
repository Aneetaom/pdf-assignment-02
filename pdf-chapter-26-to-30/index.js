
//Q-01

// var str = "3.45214";
//  str = Number(str);
//  document.write("Number: ", str, "<br>");

// document.write("round of value is:" + Math.round(2.5 ) + "<br>");

// document.write("floor value:" + Math.floor(3.5) + "<br>");

// document.write("ceil value:" + Math.ceil(3.5) + "<br>");

//Q-02

// var str = "-2.45214";
//  str = Number(str);
//  document.write("Number: ", str, "<br>");
//  document.write("round of value is:" + Math.round(-3.5 ) + "<br>");
//  document.write("floor value:" + Math.floor(-2.5) + "<br>");
//  document.write("ceil value:" + Math.ceil(-2.5) + "<br>");

//Q-03

// document.write("The absolute value of -4 is: " + Math.abs(-4) + "<br>");

//Q-04



// function rollDice() {
//   return Math.floor(Math.random() * 6) + 1;
// }
// document.write("Random dice value :", rollDice() + "<br>");
// document.write("Random dice value :", rollDice() + "<br>");

//Q-05

// var coinToss = Math.random() >= 0.5 ? "Heads" : "Tails";
// document.write(`Random coin value: ${coinToss}`);

//Q-06

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write(`Random number between 1 and 100: ${randomNumber}`);

//Q-07

// var weightInput = prompt("Enter your weight in kilograms (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
// var weight = parseFloat(weightInput);
// document.write(`The weight of the user is ${weight} kilograms`);

//Q-08

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));

if (userGuess === secretNumber) {
    document.write = alert("Congratulations! You guessed the correct number.");
} else {
    document.write = alert(`Try again! \n  \n Sorry, the correct number was ${secretNumber}.`);
}


