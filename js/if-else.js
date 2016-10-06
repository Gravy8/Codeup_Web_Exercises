var classOneGrade = 70;
var classTwoGrade = 80;
var classThreeGrade = 95;

var personOne = "Ryan";
var personTwo = "Cameron";
var personThree = "George";

var ryanPurchase = 250;
var cameronPurchase = 180;
var georgePurchase = 320;

var amountForDiscount = 200;

var discountAmount = .2;
var priceAfterDiscount = .8;

var ryanAfterDiscount = "";
var cameronAfterDiscount = "";
var georgeAfterDiscount = "";


var coinFlip = Math.floor(Math.random()* 2);




if ((classOneGrade + classTwoGrade + classThreeGrade) / 3 > 80) {
    console.log("Your'e Awesome")
} else {
    console.log("You need to Practice More")
}



if (ryanPurchase >= amountForDiscount) {
    ryanAfterDiscount = ryanPurchase * priceAfterDiscount;
    console.log(personOne + "'s price before the discount is " + ryanPurchase + ". The discount amount will be "
        + ryanPurchase * discountAmount + ". He will pay " + ryanAfterDiscount + ".");
} else {
    console.log(personOne + " will not receive a discount. His total purchase was only " + ryanPurchase);
}


if (cameronPurchase >= amountForDiscount) {
    cameronAfterDiscount = cameronPurchase * priceAfterDiscount;
    console.log(personTwo + "'s price before the discount is " + cameronPurchase + ". The discount amount will be "
        + cameronPurchase * discountAmount + ". He will pay " + cameronAfterDiscount + ".");
} else {
    console.log(personTwo + " will not receive a discount. His total purchase was only " + cameronPurchase);
}


if (georgePurchase >= amountForDiscount) {
    georgeAfterDiscount = georgePurchase * priceAfterDiscount;
    console.log(personThree + "'s price before the discount is " + georgePurchase + ". The discount amount will be "
        + georgePurchase * discountAmount + ". He will pay " + georgeAfterDiscount + ".");
} else {
    console.log(personThree + " will not receive a discount. His total purchase was only " + georgePurchase);
}



if (coinFlip == 1) {
    console.log("Buy a House");
} else {
    console.log("Buy a Car");
}


