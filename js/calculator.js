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
var temporaryOperator = "";
var temporaryNumber = "";




function clickedOne () {
    if (document.getElementById("input-operator").value == "") {
        document.getElementById("input-one").value += "1";
    } else {
        document.getElementById("input-two").value += "1";
    }
}

function clickedTwo () {
    if (document.getElementById("input-operator").value == "") {
        document.getElementById("input-one").value += "2";
    } else {
        document.getElementById("input-two").value += "2";
    }
}

function clickedThree () {
    if (document.getElementById("input-operator").value == "") {
        document.getElementById("input-one").value += "3";
    } else {
        document.getElementById("input-two").value += "3";
    }
}

function clickedFour () {
    if (document.getElementById("input-operator").value == "") {
        document.getElementById("input-one").value += "4";
    } else {
        document.getElementById("input-two").value += "4";
    }
}

function clickedFive () {
    if (document.getElementById("input-operator").value == "") {
        document.getElementById("input-one").value += "5";
    } else {
        document.getElementById("input-two").value += "5";
    }
}

function clickedSix () {
    if (document.getElementById("input-operator").value == "") {
        document.getElementById("input-one").value += "6";
    } else {
        document.getElementById("input-two").value += "6";
    }
}

function clickedSeven () {
    if (document.getElementById("input-operator").value == "") {
        document.getElementById("input-one").value += "7";
    } else {
        document.getElementById("input-two").value += "7";
    }
}

function clickedEight () {
    if (document.getElementById("input-operator").value == "") {
        document.getElementById("input-one").value += "8";
    } else {
        document.getElementById("input-two").value += "8";
    }
}

function clickedNine () {
    if (document.getElementById("input-operator").value == "") {
        document.getElementById("input-one").value += "9";
    } else {
        document.getElementById("input-two").value += "9";
    }
}

function clickedZero () {
    if (document.getElementById("input-operator").value == "") {
        if (document.getElementById("input-one").value == ""){
        } else {
            document.getElementById("input-one").value += "0";
        }
    } else {
        if (document.getElementById("input-two").value == ""){
        } else {
            document.getElementById("input-two").value += "0";
        }
    }
}


function clickedPlus () {
    if ((document.getElementById("input-one").value != "") && (document.getElementById("input-operator").value != "")) {
    } else if ((document.getElementById("input-one").value == "") && (document.getElementById("input-two").value != "")) {
        document.getElementById("input-one").value = document.getElementById("input-two").value;
        document.getElementById("input-two").value = "";
        document.getElementById("input-operator").value = "+";
        temporaryNumber = "";
        temporaryOperator = "";
    } else if (document.getElementById("input-one").value == "") {
    } else if (document.getElementById("input-two").value == "") {
        document.getElementById("input-operator").value += "+";
    }
}

function clickedMinus () {
    if ((document.getElementById("input-one").value != "") && (document.getElementById("input-operator").value != "")) {
    } else if ((document.getElementById("input-one").value == "") && (document.getElementById("input-two").value != "")) {
        document.getElementById("input-one").value = document.getElementById("input-two").value;
        document.getElementById("input-two").value = "";
        document.getElementById("input-operator").value = "-";
        temporaryNumber = "";
        temporaryOperator = "";
    } else if (document.getElementById("input-one").value == "") {
    } else if (document.getElementById("input-two").value == "") {
        document.getElementById("input-operator").value += "-";
    }
}

function clickedTimes () {
    if ((document.getElementById("input-one").value != "") && (document.getElementById("input-operator").value != "")) {
    } else if ((document.getElementById("input-one").value == "") && (document.getElementById("input-two").value != "")) {
        document.getElementById("input-one").value = document.getElementById("input-two").value;
        document.getElementById("input-two").value = "";
        document.getElementById("input-operator").value = "*";
        temporaryNumber = "";
        temporaryOperator = "";
    } else if (document.getElementById("input-one").value == "") {
    } else if (document.getElementById("input-two").value == "") {
        document.getElementById("input-operator").value += "*";
    }
}

function clickedDividedBy () {
    if ((document.getElementById("input-one").value != "") && (document.getElementById("input-operator").value != "")) {
    } else if ((document.getElementById("input-one").value == "") && (document.getElementById("input-two").value != "")) {
        document.getElementById("input-one").value = document.getElementById("input-two").value;
        document.getElementById("input-two").value = "";
        document.getElementById("input-operator").value = "/";
        temporaryNumber = "";
        temporaryOperator = "";
    }else if (document.getElementById("input-one").value == "") {
    } else if (document.getElementById("input-two").value == "") {
        document.getElementById("input-operator").value += "/";
    }
}


function clickedEquals () {
    if ((document.getElementById("input-one").value == "") && (document.getElementById("input-operator").value == "")
        && (document.getElementById("input-two").value != "")) {
        switch (temporaryOperator) {
            case "+":
                document.getElementById("input-two").value = parseFloat(document.getElementById("input-two").value) + parseFloat(temporaryNumber);
                break;
            case "-":
                document.getElementById("input-two").value = parseFloat(document.getElementById("input-two").value) - parseFloat(temporaryNumber);
                break;
            case "*":
                document.getElementById("input-two").value = parseFloat(document.getElementById("input-two").value) * parseFloat(temporaryNumber);
                break;
            case "/":
                document.getElementById("input-two").value = parseFloat(document.getElementById("input-two").value) / parseFloat(temporaryNumber);
                break;
        }
    }

    if ((document.getElementById("input-one").value != "") && (document.getElementById("input-two").value != "")) {
        var firstNumber = parseFloat(document.getElementById("input-one").value);
        var secondNumber = parseFloat(document.getElementById("input-two").value);

        temporaryOperator = document.getElementById("input-operator").value;
        temporaryNumber = document.getElementById("input-two").value;

        switch (document.getElementById("input-operator").value) {
            case "+":
                document.getElementById("input-two").value = firstNumber + secondNumber;
                break;
            case "-":
                document.getElementById("input-two").value = firstNumber - secondNumber;
                break;
            case "*":
                document.getElementById("input-two").value = firstNumber * secondNumber;
                break;
            case "/":
                document.getElementById("input-two").value = firstNumber / secondNumber;
                break;
        }
        document.getElementById("input-one").value = "";
        document.getElementById("input-operator").value = "";

    }
}

function clearAll () {
    document.getElementById("input-one").value = "";
    document.getElementById("input-operator").value = "";
    document.getElementById("input-two").value = "";
    temporaryNumber = "";
    temporaryOperator = "";
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