

//Q-01

// function power(a, b) {
//     return Math.pow(a, b);
//   }
  
//   console.log(power(2, 3));  
//   console.log(power(5, 2)); 

//Q-02

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
//   }
  
//   var year = parseInt(prompt("Enter a year:"));
  
//   if (isLeapYear(year)) {
//     document.write(year + " is a leap year.");
//   } else {
//     document.write(year + " is not a leap year.");
//   }
  
//Q-03

// function calculateTriangleArea(a, b, c) {
   
//     var s = (a + b + c) / 2;
    
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
//     return area;
//   }
  
//   var a = 3;
//   var b = 4;
//   var c = 5;
//   document.write("Area of triangle: " + calculateTriangleArea(a, b, c));
  
//Q-04


// function calculateAverage(marks1, marks2, marks3) {
//   return (marks1 + marks2 + marks3) / 3;
// }

// function calculatePercentage(marks1, marks2, marks3, totalMarks) {
//   const totalObtained = marks1 + marks2 + marks3;
//   return (totalObtained / totalMarks) * 100;
// }

// function calculateStudentResult(marks1, marks2, marks3) {
//   const totalMarks = 300; 
//   const average = calculateAverage(marks1, marks2, marks3);
//   const percentage = calculatePercentage(marks1, marks2, marks3, totalMarks);

//   document.write(`Marks 1: ${marks1}` + "<br>");
//   document.write(`Marks 2: ${marks2}` + "<br>");
//   document.write(`Marks 3: ${marks3}` + "<br>");
//   document.write(`Average: ${average.toFixed(2)}` + "<br>");
//   document.write(`Percentage: ${percentage.toFixed(2)}%` + "<br>");
// }

// calculateStudentResult(80, 90, 85);

//Q-05

// function findIndex(string, char) {
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === char) {
//         return i;
//       }
//     }
//     return -1; 
//   }

//   const string = "Hello World";
//   const char = "W";
//   document.write(findIndex(string, char));

//Q-06

// function deleteVowels(sentence) {
//     const vowels = 'aeiouAEIOU';
//     var result = '';
  
//     for (var char of sentence) {
//       if (!vowels.includes(char)) {
//         result += char;
//       }
//     }
  
//     return result;
//   }
  
//   const sentence = "Hello World";
//   document.write(deleteVowels(sentence)); 

//Q-07

// function countVowelPairs(text) {
//     let count = 0;
//     const vowels = 'aeiou';
    
//     text = text.toLowerCase();

//     for (let i = 0; i < text.length - 1; i++) {
//         let currentChar = text[i];
//         let nextChar = text[i + 1];

//         switch (currentChar) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 if (vowels.includes(nextChar)) {
//                     count++;
//                 }
//                 break;
//             default:
//                 break;
//         }
//     }
//     return count;
// }

// const sentence = "I feel the heat";
// document.write(`The number of vowel pairs in the sentence is: ${countVowelPairs(sentence)}`);

//Q-08

// function kmToMeters(km) {
//     return km * 1000;
//   }
  
//   function kmToFeet(km) {
//     return km * 3280.84;
//   }
  
//   function kmToInches(km) {
//     return km * 39370.1;
//   }

//   function kmToCentimeters(km) {
//     return km * 100000;
//   }
  
//   function convertDistance(km) {
//     document.write(`Distance in kilometers: ${km} km` + "<br>");
//     document.write(`Distance in meters: ${kmToMeters(km)} m` + "<br>");
//     document.write(`Distance in feet: ${kmToFeet(km).toFixed(2)} ft` + "<br>");
//     document.write(`Distance in inches: ${kmToInches(km).toFixed(2)} in` + "<br>");
//     document.write(`Distance in centimeters: ${kmToCentimeters(km)} cm` + "<br>");
//   }
  
//   const km = parseFloat(prompt("Enter distance in kilometers:"));
//   convertDistance(km);
  

//Q-09

// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12;
  
//     if (hoursWorked <= regularHours) {
//       return 0; 
//     } else {
//       const overtimeHours = hoursWorked - regularHours;
//       return overtimeHours * overtimeRate;
//     }
//   }
  
//   function calculateEmployeePay(hoursWorked, hourlyWage) {
//     const regularPay = Math.min(hoursWorked, 40) * hourlyWage;
//     const overtimePay = calculateOvertimePay(hoursWorked);
//     const totalPay = regularPay + overtimePay;
  
//     document.write(`Hours Worked: ${hoursWorked} hours` + "<br>");
//     document.write(`Regular Pay: Rs. ${regularPay}` + "<br>");
//     document.write(`Overtime Pay: Rs. ${overtimePay}` + "<br>");
//     document.write(`Total Pay: Rs. ${totalPay}` + "<br>");
//   }
  
//   const hoursWorked = parseInt(prompt("Enter hours worked:"));
//   const hourlyWage = parseFloat(prompt("Enter hourly wage:"));
//   calculateEmployeePay(hoursWorked, hourlyWage);
  

//Q-10

function calculateCurrencyNotes(amount) {
    const notes = [100, 50, 10];
    const noteCount = [0, 0, 0];
  
    for (let i = 0; i < notes.length; i++) {
      noteCount[i] = Math.floor(amount / notes[i]);
      amount %= notes[i];
    }
  
    return noteCount;
  }
  
  
  function withdrawAmount(amount) {
    amount *= 100; 
    const noteCount = calculateCurrencyNotes(amount);
  
    document.write(`Amount: Rs. ${amount / 100}` + "<br>");
    document.write(`Notes of 100: ${noteCount[0]}` + "<br>");
    document.write(`Notes of 50: ${noteCount[1]}` + "<br>");
    document.write(`Notes of 10: ${noteCount[2]}` + "<br>");
  }
  
  
  const amount = parseFloat(prompt("Enter amount to withdraw (in hundreds):"));
  withdrawAmount(amount);






 