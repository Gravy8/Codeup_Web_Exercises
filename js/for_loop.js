for (var i = 1; i <=10; i++) {
    var j = i.toString();
    if (i < 10) {
        console.log(j.repeat(i));
    } else {
        console.log("0".repeat(i));
    }
}

var k = Math.floor(Math.random() * 10) + 1;
var answer;

for (var l = 1; l <= 10; l++) {
    answer = k * l;
    console.log(k + " X " + l + " = " + answer);
}

var oddOrEven;

for (var n = 1; n <= 10; n++) {
    var o = Math.floor(Math.random() * 180) + 21;
    if (o % 2 == 0) {
        oddOrEven = "Even";
    } else {
        oddOrEven = "Odd";
    }
    console.log(o + " is " + oddOrEven);
}

for (var p = 100; p > 0; p -= 5) {
    console.log(p);
}