var gradeTotal = 0;
var gradeEntry;

function average3Grades() {
    for (var i = 1; i < 4; i++) {
        do {
            gradeEntry = parseInt(prompt("Enter your grade for class " + i));
        } while ((gradeEntry < 0) || (gradeEntry > 100) || (isNaN(gradeEntry)));
        gradeTotal += gradeEntry;
    }
    gradeAverage = gradeTotal / 3;

    if (gradeAverage >= 80) {
        alert("Your're Awesome!");
    } else {
        alert("You need to practice more!");
    }
}

var j = 0;


function genericGradesAverage() {
    do {
        if (confirm("Add another grade?")) {
            do {
                gradeEntry = parseInt(prompt("Enter your grade"));
            } while ((gradeEntry < 0) || (gradeEntry > 100) || (isNaN(gradeEntry)));
            j++;
            gradeTotal +=gradeEntry;
        } else {
            if (j <= 1) {
                alert("You haven't entered enough grades.");
                continue;
            } else {
                gradeAverage = gradeTotal / j;
                if (gradeAverage >= 80) {
                    alert("Your're Awesome!");
                } else {
                    alert("You need to practice more!");
                }
                break;
            }
        }
    } while (true);
}