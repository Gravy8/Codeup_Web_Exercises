var allCones = Math.floor(Math.random() * 50) + 51;
var cones;
var i = 1;

do {
    cones = Math.floor(Math.random() * 5) + 1;
    if (allCones < cones) {
        console.log("Sorry, i only have " + allCones);
    } else {
        allCones -= cones;
        console.log("I just sold " + cones + " cones!");
    }
} while (allCones > 0);
console.log("I've sold all of my cones!");


while (i < 65536) {
    i *= 2;
    console.log(i);
}
