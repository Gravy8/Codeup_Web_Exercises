(function(){
    "use strict";

    var names = ["Brad", "Nick", "Ryan", "Lloyd"];

    console.log("There are " + names.length + " names in the names array.");

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    names.forEach(function (element, index, array) {
        console.log("The name at index " + index + " is " + element + ".");
    });

    names.forEach(function (element, index, array) {
        if (element.indexOf("Brad") != -1) {
            console.log("The name at index " + index + " is " + element + ".");
        }
    });



    /*for (var i = 0; i < names.length; i++) {
        console.log(names[i] + " is at position " + i + " in the names array.")
    }*/
    var grades = [100, 80, 90, 80, 70];
    var grade;
    function average(grades) {
        var totalOfGrades = 0;
        for (var i = 0; i < grades.length; i++) {
            totalOfGrades += grades[i];
        }
        return totalOfGrades / i;
    }
    grade = average(grades);
    console.log("You made a grade of " + grade + ".");
})();