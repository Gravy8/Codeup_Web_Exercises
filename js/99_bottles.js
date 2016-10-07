var numberOfBottles = 99;
var nextNumberOfBottles;

while (numberOfBottles > 0) {
    if (numberOfBottles > 1) {
        nextNumberOfBottles = numberOfBottles - 1;
        console.log(numberOfBottles + " bottles of beer on the wall. " + numberOfBottles +
            " bottles of beer, take one down, pass it around. " + nextNumberOfBottles + " bottles of beer on the wall.");
        numberOfBottles--;
    } else {
        console.log(numberOfBottles + " bottle of beer on the wall. " + numberOfBottles +
            " bottle of beer, take one down, pass it around... no more bottles of beer on the wall. " +
            "Someone should go to the store!");
        numberOfBottles--;
    }
}