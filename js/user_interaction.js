var name = prompt("Hi there, what's your name?");
while (name == "") {
    name = prompt("Hi there, what's your name?");
}
console.log("Hi " + name);
var pizza = confirm("Do you like pizza?");
if (pizza) {
    console.log("Duh, pizza is delicious");
} else {
    console.log("Something must be wrong with you");
}