"use strict";
var i;
var randomOddNumber = Math.floor(Math.random() * 50) + 1;

while (randomOddNumber % 2 == 0) {
    randomOddNumber = Math.floor(Math.random() * 50) + 1;
}

console.log("Random odd number to skip is " + randomOddNumber);

for (i = 1; i < 50; i++) {
    if (i % 2 == 0) {
        continue;
    }
    if (i == randomOddNumber) {
        console.log("Yikes! Skipping number " + randomOddNumber);
        continue;
    }
    console.log("Here is an odd number: " + i);
}