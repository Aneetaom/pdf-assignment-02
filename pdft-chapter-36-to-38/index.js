

//Q-01

//  var currentDate = new Date();
//   document.write( currentDate + "</br>");

  //Q-02
 
// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName + "!");
//   }
//    var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");
  
//   greetUser(firstName, lastName);

//Q-03

// function addNumbers(num1, num2) {
//     return num1 + num2;
//   }
  
//   var num1 = prompt("Enter first number:");
//   var num2 = prompt("Enter second number:");
  
//   num1 = parseFloat(num1);
//   num2 = parseFloat(num2);
  
//   if (isNaN(num1) || isNaN(num2)) {
//     alert("Invalid input. Please enter numbers.");
//   } else {
  
//     var sum = addNumbers(num1, num2);
//     alert("Sum: " + sum);
//   }


     //Q-04

    //  function calculate(num1, num2, operator) {
    //     switch (operator) {
    //       case '+':
    //         return num1 + num2;
    //       case '-':
    //         return num1 - num2;
    //       case '*':
    //         return num1 * num2;
    //       case '/':
    //         if (num2 !== 0) {
    //           return num1 / num2;
    //         } else {
    //           return "Error: Division by zero";
    //         }
    //       default:
    //         return "Invalid operator";
    //     }
    //   }
      
    //   var num1 = parseFloat(prompt("Enter first number:"));
    //   var num2 = parseFloat(prompt("Enter second number:"));
    //   var operator = prompt("Enter operator (+, -, *, /):");
      
    //   var result = calculate(num1, num2, operator);
    //   document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);

    //Q-05

// function square(x) {
//     return x * x;
//   }
  
//   console.log(square(5));  
//   console.log(square(10)); 

//Q-06

// function factorial(n) {
//     if (n < 0) {
//       return "Error: Factorial is not defined for negative numbers";
//     } else if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       let result = 1;
//       for (let i = 2; i <= n; i++) {
//         result *= i;
//       }
//       return result;
//     }
//   }
  
//   console.log(factorial(5)); 
//   console.log(factorial(0));  
//   console.log(factorial(-1)); 

//Q-07

// function displayNumbers(start, end) {
//     let output = "";
//     for (let i = start; i <= end; i++) {
//       output += i + " ";
//     }
//     document.write(output);
//   }
  
//   var start = parseInt(prompt("Enter start number:"));
//   var end = parseInt(prompt("Enter end number:"));

//   if (start <= end) {
//     displayNumbers(start, end);
//   } else {
//     document.write("Error: Start number should be less than or equal to end number.");
//   }

//Q-08

// function computeHypotenuse(base, perpendicular) {
//     function square(num) {
//         return num * num;
//     }
//     return Math.sqrt(square(base) + square(perpendicular));
// }

// document.write("The hypotenuse is: " + computeHypotenuse(3, 4));

//Q-09


// function calculateArea(width, height) {
//     return width * height;
// }

// document.write("Area (using values): " + calculateArea(5, 10) + "<br>");

// const w = 7;
// const h = 3;
// document.write("Area (using variables): " + calculateArea(w, h) + "<br>");

//Q-10

// function isPalindrome(str) {
//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }

// document.write("Is palindrome? " + isPalindrome("madam") + "<br>");
// document.write("Is palindrome? " + isPalindrome("hello") + "<br>");

//Q-11

// function capitalizeWords(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// document.write("Capitalized: " + capitalizeWords("the quick brown fox") + "<br>");

//Q-12

// function findLongestWord(str) {
//     const words = str.split(' ');
//     var longestWord = "";

//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// document.write("Longest word: " + findLongestWord("Web Development Tutorial") + "<br>");

//Q-13

// function countLetterOccurrences(str, letter) {
//     var count = 0;
//     for (let char of str) {
//         if (char.toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }

// document.write("Occurrences of 'o': " + countLetterOccurrences("hello world", "o") + "<br>");

//Q-14

// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// }

// calcCircumference(5);

// function calcArea(radius) {
//     const area = Math.PI * Math.pow(radius, 2);
//     document.write("The area is " + area.toFixed(2) + "<br>");
// }

// calcArea(5);





