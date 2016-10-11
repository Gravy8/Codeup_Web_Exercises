(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ["Brad", "Nick", "Ryan", "Lloyd"];
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log("There are " + names.length + " names in the names array.");
    // TODO: Create log statements that will print each of the names array elements individually.
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    for (var i = 0; i < names.length; i++) {
        console.log(names[i] + " is at position " + i + " in the names array.")
    }
    var grades = [100, 80, 90, 80, 70];
    var grade;
    function average(grades) {
        var totalOfGrades = 0;
        for (i = 0; i < grades.length; i++) {
            totalOfGrades += grades[i];
        }
        return totalOfGrades / i;
    }
    grade = average(grades);
    console.log("You made a grade of " + grade + ".");
})();