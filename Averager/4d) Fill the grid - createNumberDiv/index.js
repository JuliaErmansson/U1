"use strict";


/*

Code a function  that creates a div, assigns a random number (0-99)
as the HTML-content of that div (innerHTML) and returns the reference to the
newly created div.

Note that the newly created div must not be appended inside the function createNumberDiv.
The must happen outside the function.


TEST:

This must append a div with a random number to the body each time it is called.


*/

function createNumberDiv () {
    let numberDiv = document.createElement("div");// Här har vi skapat en funktion som heter "" och i den skapas en div som tilldelar olika nummer mellan 0 - 99
    numberDiv.innerHTML = randomNumber(100);

    return numberDiv;
}

function randomNumber (max) {
return Math.floor(max * Math.random());
}


document.querySelector("body").appendChild( createNumberDiv() ); // Med det här blir "" ett barn till bodyn