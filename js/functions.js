"use strict";

var myNameIs = 'Bob'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.
function sayHello(name) {
    console.log("Hello, " + name);
}


// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

var myNameIs = "Brad";
sayHello(myNameIs);

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);
var random2 = Math.floor(Math.random() * 100) + 1;
// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.
function isOdd(number) {
    number % 2 != 0 ? console.log("Your number is odd"): console.log("Your number is not odd");
}



// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.

isOdd(random);
isOdd(random2);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function square(number) {
    return multiply(number, number);
}

/*function square(number) {
    return number * number;
}*/

function sumOfSquares(a, b) {
    return square(a) + square(b);
}

/*function sumOfSquares(a, b) {
    return (a * a) + (b * b);
}*/


console.log(sumOfSquares(random, random2));