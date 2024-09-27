/*1. Question: Write a JavaScript program that takes a string variable called name and prints "Hello, [name]!" to the console. For example, if name = "John", the output should be "Hello, John!"*/

let name = "John";
console.log("Hello, " + name + "!");
// console.log(`Hello, ${name}!`);

//2. Question: Create a JavaScript program that calculates the sum of two numbers, a and b, and prints the result to the console. For example, if a = 5 and b = 10, the output should be 15.

let a = 5;
let b = 10;

let sum = a + b;
console.log("THE sum is " + sum);

// 3. Question: Declare a variable called age and assign it your age. Then, print "I am [age] years old." to the console. For example, if age = 25, the output should be "My age is 25".

let age = 25;
console.log("I am " + age + " years old.");
// console.log(`I am ${age} years old.`);

// 4.Question: Given 3 subjects Math, English, and Physics find the total marks and average of 3 subjects.

let math = 66;
let english = 57;
let physics = 75;

// calculate total marks
let total = math + english + physics;

// calculate average

let average = total / 3;

console.log("Total marks are " + total);
console.log("Average marks are " + average);

// 5.Question: Create 4 variables. 2 in the camel case and 2 in the snake case. (it could be anything) make sure it’s meaning full and print all the values in the console

// camel case variable
let firstName = "abul";
let lastName = "Hossain";

// snake case variable

let birth_year = 1998;
let current_age = 26;

console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Birth Year: " + birth_year);
console.log("Current Age: " + current_age);

// Basic Questions related to String Methods

// 1. Question: Write a program to check if a sentence has the word "Hello" using the search method.

// Hint: Use the search method to see if the sentence has the specified word, and then use an if-else statement to print a message.

let sentence = "Hello, how are you doing today?";

let hasHello = sentence.search("Hello");

if (hasHello !== -1) {
  console.log("The sentence has the word 'Hello'.");
} else {
  console.log("The sentence does not have the word 'Hello'.");
}

/*2.Question: Write a JavaScript program that takes a user's name and then displays a greeting message using string concatenation. The program should ensure that any whitespace in the user's input is removed before concatenation.


Example Output: Hello, Sarah
Hint: Use the prompt() function to get the user's name, trim() method to remove whitespace, and concat() or the + operator to concatenate the strings.*/

let userName = prompt("Enter your name: ");

userName = userName.trim();

let greeting = "hello, " + userName;

console.log(greeting);

/*3.Question: Write a JavaScript program that uses template literals to create a dynamic message. The program should take the user's favorite programming language, their name, and the year they started learning it as inputs. Then, display a message that includes this information, formatted across multiple lines. (underlines should be dynamic)


Example Output: Sara, you have been coding in Python since 2018. */

let userName2 = prompt("Enter your name: ");
let favoriteLanguage = prompt("Enter your favorite programming language: ");
let yearStartedLearning = prompt(
  "Enter the year you started learning this language: "
);

let message = `${userName}, you have been coding in ${favoriteLanguage} since ${yearStartedLearning}.`;

console.log(message);

/* 4.
Question: Write a JavaScript program that checks if a given email address belongs to Yahoo. The program should be case-insensitive and print a message indicating whether the email is a Yahoo address or not.


Hint: Use the includes method to check if the email contains @yahoo.com. Convert both the email address and the string @yahoo.com to lowercase before performing the check to ensure it's case-insensitive*/

let email = prompt("Enter your email");

let emailLowerCase = email.toLowerCase();

if (emailLowerCase.includes("@yahoo.com")) {
  console.log("This is a Yahoo email address.");
} else {
  console.log("This is not a Yahoo email address.");
}

/*5.
Question: Write a JavaScript program that checks whether a given number is divisible by 10. The program should print a message indicating whether the number is divisible by 10 or not.


Hint: Use the modulus operator % to determine if the remainder when dividing the number by 10 is 0.*/

let number = parseInt(prompt("Please enter a number:"));

if (number % 10 === 0) {
  console.log(number + " is divisible by 10.");
} else {
  console.log(number + " is not divisible by 10.");
}

/*6.Question: Write a JavaScript program that checks whether a given number is even or odd. The program should print a message indicating whether the number is even or odd.


Hint: Use the modulus operator % to check if the number is divisible by 2 without a remainder.*/

let number2 = parseInt(prompt("Please enter a number:"));

if (number2 % 2 === 0) {
  console.log(number2 + " is even.");
} else {
  console.log(number2 + " is odd.");
}

/*7. Question: Write a JavaScript program that checks whether a given character is a string or a number. The program should print a message indicating whether the given variable is a string or number. 


hint: you can use if / else and typeof to check*/

let input = prompt("Please enter a character or number:");

if (typeof input === "string") {
  console.log(input + " is a string.");
} else if (typeof input === "number") {
  console.log(input + " is a number.");
} else {
  console.log("Invalid input.");
}
