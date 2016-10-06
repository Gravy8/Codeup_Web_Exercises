var luckyNumber = Math.floor(Math.random()* 6);
var cost = 60;
var endCost = 60

var monthNumber = Math.floor(Math.random()* 12) +1;
var month = "January";


switch (luckyNumber) {
    case 1:
       endCost = cost * .9;
        break;
    case 2:
        endCost = cost * .75;
        break;
    case 3:
        endCost = cost * .625;
        break;
    case 4:
        endCost = cost * .5;
        break;
    case 5:
        endCost = cost * 0;
        break;
}
console.log("Your total price is $" + endCost);




switch (monthNumber) {
    case 2:
        month = "February";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "July";
        break;
    case 8:
        month = "August";
        break;
    case 9:
        month = "September";
        break;
    case 10:
        month = "October";
        break;
    case 11:
        month = "November";
        break;
    case 12:
        month = "December";
}

console.log("The month that your number represents is " + month);