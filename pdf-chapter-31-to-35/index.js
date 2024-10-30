

//Q-01

// var currentDate = new Date();
//  document.write( currentDate);

//Q-02


// var date = new Date(2024, 9, 29);
// var monthName = date.toLocaleString('default', { month: 'long' });
// document.write("Current month: " + monthName); // Output: "October"

//Q-03

 
// var date = new Date(2024, 9, 29);
// var dayName = date.toLocaleString('default', { weekday: 'short' });
// alert("Current day: " + dayName);

//Q-04

//var dayNames = ["Sun", "Mon", "Tue", "Wed", 'Thu', "Fri", "Sat"];
// var today = new Date();


// var dayOfWeek = today.getDay();
// document.write("Today is day number:", dayOfWeek); 

// if (dayOfWeek === 0 || dayOfWeek === 6) {
//    alert("It's fun day!");
// } else {
//    alert("It's a weekday.");
// }

//Q-05

// var today = new Date(); 
// var date = today.getDate();

// if (date < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// //Q-06

// var currentDate = new Date();
//  document.write( currentDate + "</br>");

// var dateObj = new Date();
// millisecondsSinceEpoch = Math.floor(dateObj.getTime() / (1000 * 60));
// minutesSinceEpoch = Math.floor(dateObj.getTime() / (1000 * 60)); 

// document.write("Elipsed milliseconds since  January 1, 1970:", millisecondsSinceEpoch + "</br>");
// document.write("Elipsed minutes since  January 1, 1970:", minutesSinceEpoch);

//Q-07

// var currentTime = new Date(); 
// var hours = currentTime.getHours(); 

// if (hours > 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

//Q-08

// var letterDate = new Date(2020, 11, 31);

// document.write("The later date  is:", letterDate);

//Q-09


// const ramadanStartDate = new Date("2015-06-18");

// const currentDate = new Date();

// const timeDifference = currentDate - ramadanStartDate;

// const daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// alert("Number of days past since first Ramadan: " + daysPast);


//Q-10


// var letterDate = new Date(2020, 11, 31);

//  document.write("The later date  is:", letterDate + "</br>");

// var referenceDate = new Date('2015-01-01T00:00:00Z');

// var currentDate = new Date();

// var secondsElapsed = Math.floor((currentDate - referenceDate) / 1000);

// document.write(`Seconds had passed since  beginning of 2015:: ${secondsElapsed}`);

 
//Q-11


// var currentDate = new Date();

// var currentHours = currentDate.getHours();

// currentDate.setHours(currentHours + 1);

// document.write("Current Date : " + currentDate + "</br>");

// document.write("One hour : " + currentDate);

//Q-12

// var currentDate = new Date();

//   document.write( currentDate);

// var currentDate = new Date();

// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert("Date 100 years back: " + currentDate);

//Q-13


// var age = prompt("Please enter your age:");

// age = parseInt(age);

// var currentYear = new Date().getFullYear();

// var birthYear = currentYear - age;

// document.write("Your birth year is: " + birthYear);

//Q-14


const customerName = prompt("Enter Customer Name:");
const currentMonth = new Date().toLocaleString("default", { month: "long" }); 
const numberOfUnits = parseFloat(prompt("Enter Number of Units Consumed:"));
const chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));

const netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
const latePaymentSurcharge = 150.00; 
const grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2); 

document.write(`
    <h2>K-Electric Bill</h2>
    <p><strong>Customer Name:</strong> ${customerName}</p>
    <p><strong>Month:</strong> ${currentMonth}</p>
    <p><strong>Number of Units:</strong> ${numberOfUnits}</p>
    <p><strong>Charges per Unit:</strong> $${chargesPerUnit.toFixed(2)}</p>
    <p><strong>Net Amount Payable (within Due Date):</strong> $${netAmountPayable}</p>
    <p><strong>Late Payment Surcharge:</strong> $${latePaymentSurcharge.toFixed(2)}</p>
    <p><strong>Gross Amount Payable (after Due Date):</strong> $${grossAmountPayable}</p>
`);


