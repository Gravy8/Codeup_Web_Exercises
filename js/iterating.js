(function(){
    "use strict";

    /*var names = ["Brad", "Nick", "Ryan", "Lloyd"];

    console.log("There are " + names.length + " names in the names array.");

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    names.forEach(function (element, index, array) {
        console.log("The name at index " + index + " is " + element + ".");
    });

    names.forEach(function (element, index, array) {
        if (element.indexOf("Ryan") != -1) {
            console.log("The name at index " + index + " is " + element + ".");
        }
    });*/



    /*for (var i = 0; i < names.length; i++) {
        console.log(names[i] + " is at position " + i + " in the names array.")
    }*/
    /*var grades = [100, 80, 90, 80, 70];
    var grade;
    function average(grades) {
        var totalOfGrades = 0;
        for (var i = 0; i < grades.length; i++) {
            totalOfGrades += grades[i];
        }
        return totalOfGrades / i;
    }
    grade = average(grades);
    console.log("You made a grade of " + grade + ".");*/

    var names = ["john", "paul", "ringo", "george", "yoko"];
    var upperCaseNames = [];

    function firstLetterToUppercase(array) {
        var upperCaseWords = [];
        array.forEach(function (word) {
            upperCaseWords.push(word.replace(word[0], word[0].toUpperCase()));
        });
        return upperCaseWords;
    }
    upperCaseNames = firstLetterToUppercase(names);
    console.log(upperCaseNames);

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sumOfNumbers;

    function productOfNumbers(array) {
        var sum = 0;
        array.forEach(function(number) {
            sum += number;
        });
        return sum;
    }
    sumOfNumbers = productOfNumbers(numbers);
    console.log(sumOfNumbers);

    var listOfNames;
    function arrayIntoList(array) {
        var listString = "<ul>";
        array.forEach(function(word) {
            listString += "<li>" + word + "</li>";
        });
        listString += "</ul";
        return listString;
    }
    listOfNames = arrayIntoList(names);
    console.log(listOfNames);




})();