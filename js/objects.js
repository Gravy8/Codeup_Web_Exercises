(function() {
    "use strict";

    var person = {};


    // TODO: Create firstName and lastName properties in your person object; assign your name to them

    person.firstName = "Brad";
    person.lastName = "Colton";

    // TODO: Add a sayHello method to the person object that

    //       alerts a greeting using the firstName and lastName properties
    person.sayHello = function () {
        alert("Hello " + person.firstName + " " + person.lastName);
    };
    // Say hello from the person object.
    person.sayHello();
})();
