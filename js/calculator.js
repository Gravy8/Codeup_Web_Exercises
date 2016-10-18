var numberOne = document.getElementById("1button");
var numberTwo = document.getElementById("2button");
var numberThree = document.getElementById("3button");
var numberFour = document.getElementById("4button");
var numberFive = document.getElementById("5button");
var numberSix = document.getElementById("6button");
var numberSeven = document.getElementById("7button");
var numberEight = document.getElementById("8button");
var numberNine = document.getElementById("9button");
var numberZero = document.getElementById("0button");
var addition = document.getElementById("+button");
var subtraction = document.getElementById("-button");
var multiplication = document.getElementById("*button");
var division = document.getElementById("/button");
var equate = document.getElementById("=button");
var clear = document.getElementById("cbutton");
var decimal = document.getElementById(".button");
var exponent = document.getElementById("exponent-button");
var negativeConverter = document.getElementById("negative-button");

var boxOne = document.getElementById("input-one");
var boxTwo = document.getElementById("input-two");
var boxOperator = document.getElementById("input-operator");

var temporaryOperator = "";
var temporaryNumber = "";




function clickedOne () {
    if ((boxOne.value == "") && (boxTwo.value != "")) {
        clearAll();
        boxOne.value += "1";
    } else if (boxOperator.value == "") {
        boxOne.value += "1";
    } else {
        boxTwo.value += "1";
    }
}

function clickedTwo () {
    if ((boxOne.value == "") && (boxTwo.value != "")) {
        clearAll();
        boxOne.value += "2";
    } else if (boxOperator.value == "") {
        boxOne.value += "2";
    } else {
        boxTwo.value += "2";
    }
}

function clickedThree () {
    if ((boxOne.value == "") && (boxTwo.value != "")) {
        clearAll();
        boxOne.valuboxOnee += "3";
    } else if (boxOperator.value == "") {
        boxOne.value += "3";
    } else {
        boxTwo.value += "3";
    }
}

function clickedFour () {
    if ((boxOne.value == "") && (boxTwo.value != "")) {
        clearAll();
        boxOne.value += "4";
    } else if (boxOperator.value == "") {
        boxOne.value += "4";
    } else {
        boxTwo.value += "4";
    }
}

function clickedFive () {
    if ((boxOne.value == "") && (boxTwo.value != "")) {
        clearAll();
        boxOne.value += "5";
    } else if (boxOperator.value == "") {
        boxOne.value += "5";
    } else {
        boxTwo.value += "5";
    }
}

function clickedSix () {
    if ((boxOne.value == "") && (boxTwo.value != "")) {
        clearAll();
        boxOne.value += "6";
    } else if (boxOperator.value == "") {
        boxOne.value += "6";
    } else {
        boxTwo.value += "6";
    }
}

function clickedSeven () {
    if ((boxOne.value == "") && (boxTwo.value != "")) {
        clearAll();
        boxOne.value += "7";
    } else if (boxOperator.value == "") {
        boxOne.value += "7";
    } else {
        boxTwo.value += "7";
    }
}

function clickedEight () {
    if ((boxOne.value == "") && (boxTwo.value != "")) {
        clearAll();
        boxOne.value += "8";
    } else if (boxOperator.value == "") {
        boxOne.value += "8";
    } else {
        boxTwo.value += "8";
    }
}

function clickedNine () {
    if ((boxOne.value == "") && (boxTwo.value != "")) {
        clearAll();
        boxOne.value += "9";
    } else if (boxOperator.value == "") {
        boxOne.value += "9";
    } else {
        boxTwo.value += "9";
    }
}

function clickedZero () {
    if ((boxOne.value == "") && (boxTwo.value != "")) {
        clearAll();
        boxOne.value += "0";
    } else if (boxOperator.value == "") {
        if (boxOne.value == "0"){
        } else {
            boxOne.value += "0";
        }
    } else {
        if (boxTwo.value == "0"){
        } else {
            boxTwo.value += "0";
        }
    }
}


function clickedPlus () {
    if ((boxOne.value != "") && (boxOperator.value != "")) {
    } else if (boxTwo.value == "NaN") {
    } else if ((boxOne.value == "") && (boxTwo.value != "")) {
        boxOne.value = boxTwo.value;
        boxTwo.value = "";
        boxOperator.value = "+";
        temporaryNumber = "";
        temporaryOperator = "";
    } else if (boxOne.value == "") {
    } else if (boxTwo.value == "") {
        boxOperator.value += "+";
    }
}

function clickedMinus () {
    if ((boxOne.value != "") && (boxOperator.value != "")) {
    } else if (boxTwo.value == "NaN") {
    } else if ((boxOne.value == "") && (boxTwo.value != "")) {
        boxOne.value = boxTwo.value;
        boxTwo.value = "";
        boxOperator.value = "-";
        temporaryNumber = "";
        temporaryOperator = "";
    } else if (boxOne.value == "") {
    } else if (boxTwo.value == "") {
        boxOperator.value += "-";
    }
}

function clickedTimes () {
    if ((boxOne.value != "") && (boxOperator.value != "")) {
    } else if (boxTwo.value == "NaN") {
    } else if ((boxOne.value == "") && (boxTwo.value != "")) {
        boxOne.value = boxTwo.value;
        boxTwo.value = "";
        boxOperator.value = "*";
        temporaryNumber = "";
        temporaryOperator = "";
    } else if (boxOne.value == "") {
    } else if (boxTwo.value == "") {
        boxOperator.value += "*";
    }
}

function clickedDividedBy () {
    if ((boxOne.value != "") && (boxOperator.value != "")) {
    } else if (boxTwo.value == "NaN") {
    } else if ((boxOne.value == "") && (boxTwo.value != "")) {
        boxOne.value = boxTwo.value;
        boxTwo.value = "";
        boxOperator.value = "/";
        temporaryNumber = "";
        temporaryOperator = "";
    } else if (boxOne.value == "") {
    } else if (boxTwo.value == "") {
        boxOperator.value += "/";
    }
}

function clickedEquals () {
    if ((boxOne.value == "") && (boxOperator.value == "")
        && (boxTwo.value != "")) {
        switch (temporaryOperator) {
            case "+":
                boxTwo.value = parseFloat(boxTwo.value) + parseFloat(temporaryNumber);
                break;
            case "-":
                boxTwo.value = parseFloat(boxTwo.value) - parseFloat(temporaryNumber);
                break;
            case "*":
                boxTwo.value = parseFloat(boxTwo.value) * parseFloat(temporaryNumber);
                break;
            case "/":
                boxTwo.value = parseFloat(boxTwo.value) / parseFloat(temporaryNumber);
                break;
            case "^":
                boxTwo.value = Math.pow(parseFloat(boxTwo.value), parseFloat(temporaryNumber));
                break;
        }
    }

    if ((boxOne.value != "") && (boxTwo.value != "")) {
        var firstNumber = parseFloat(boxOne.value);
        var secondNumber = parseFloat(boxTwo.value);

        temporaryOperator = boxOperator.value;
        temporaryNumber = boxTwo.value;

        switch (boxOperator.value) {
            case "+":
                boxTwo.value = firstNumber + secondNumber;
                break;
            case "-":
                boxTwo.value = firstNumber - secondNumber;
                break;
            case "*":
                boxTwo.value = firstNumber * secondNumber;
                break;
            case "/":
                boxTwo.value = firstNumber / secondNumber;
                break;
            case "^":
                boxTwo.value = Math.pow(firstNumber, secondNumber);
                break;
        }
        if (boxTwo.value == "Infinity") {
            boxTwo.value = "NaN";
        }
        boxOne.value = "";
        boxOperator.value = "";

    }
}

function clearAll () {
    boxOne.value = "";
    boxOperator.value = "";
    boxTwo.value = "";
    temporaryNumber = "";
    temporaryOperator = "";
}

function clickedDecimal () {
    if ((boxOne.value == "") && (boxTwo.value != "")) {
        clearAll();
        boxOne.value += "0.";
    } else if (boxOperator.value == "") {
        if (boxOne.value == "") {
            boxOne.value += "0.";
        } else if ((boxOne.value != "") &&
(boxOne.value.indexOf(".") != -1)) {
        } else {
            boxOne.value += ".";
        }
    } else {
        if (boxTwo.value == "") {
            boxTwo.value += "0.";
        } else if ((boxTwo.value != "") &&
(boxTwo.value.indexOf(".") != -1)) {
        } else {
            boxTwo.value += ".";
        }
    }
}

function clickedExponent () {
    if ((boxOne.value != "") && (boxOperator.value != "")) {
    } else if (boxTwo.value == "NaN") {
    } else if ((boxOne.value == "") && (boxTwo.value != "")) {
        boxOne.value = boxTwo.value;
        boxTwo.value = "";
        boxOperator.value = "^";
        temporaryNumber = "";
        temporaryOperator = "";
    } else if (boxOne.value == "") {
    } else if (boxTwo.value == "") {
        boxOperator.value += "^";
    }
}

function clickedConverter () {
    if ((boxOne.value == "") && (boxTwo.value != "")) {
    } else if (boxOperator.value == "") {
        if (boxOne.value == "") {
            boxOne.value += "-";
        } else if (boxOne.value == "-") {
            boxOne.value = "";
        } else if (boxOne.value.indexOf("-") != -1) {
            boxOne.value = Math.abs(parseFloat(boxOne.value));
        } else {
            boxOne.value = -Math.abs(parseFloat(boxOneboxOne.value));
        }
    } else {
        if (boxTwo.value == "") {
            boxTwo.value += "-";
        } else if (boxTwo.value == "-") {
            boxTwo.value = "";
        } else if (boxTwo.value.indexOf("-") != -1) {
            boxTwo.value = Math.abs(parseFloat(boxTwo.value));
        } else {
            boxTwo.value = -Math.abs(parseFloat(boxTwo.value));
        }
    }
}





numberOne.addEventListener("click", clickedOne);
numberTwo.addEventListener("click", clickedTwo);
numberThree.addEventListener("click", clickedThree);
numberFour.addEventListener("click", clickedFour);
numberFive.addEventListener("click", clickedFive);
numberSix.addEventListener("click", clickedSix);
numberSeven.addEventListener("click", clickedSeven);
numberEight.addEventListener("click", clickedEight);
numberNine.addEventListener("click", clickedNine);
numberZero.addEventListener("click", clickedZero);
addition.addEventListener("click", clickedPlus);
subtraction.addEventListener("click", clickedMinus);
multiplication.addEventListener("click", clickedTimes);
division.addEventListener("click", clickedDividedBy);
equate.addEventListener("click", clickedEquals);
clear.addEventListener("click", clearAll);
decimal.addEventListener("click", clickedDecimal);
exponent.addEventListener("click", clickedExponent);
negativeConverter.addEventListener("click", clickedConverter);