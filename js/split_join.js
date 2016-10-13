(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    var formattedPlanets = planetsArray.join("<br>");
    console.log(formattedPlanets);
    //       Why might this be useful?

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    function stringToUl(string, delimiter) {
        var arrayOfString = string.split(delimiter);
        var listString = "<ul>";
        arrayOfString.forEach(function (element) {
            listString += "<li>" + element + "</li>";
        });
        listString += "</ul>";
        return listString;
    }
    console.log(stringToUl(formattedPlanets, "<br>"));






})();