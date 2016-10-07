var j = 1;
var k = 0;
var output = "starting";


for(var i = 1; i <= 20; i++) {
    if (output == "starting") {
        output = j + k;
        console.log(output);
    } else {
        output = j + k;
        console.log(output);
        k = j;
        j = output;
    }
}