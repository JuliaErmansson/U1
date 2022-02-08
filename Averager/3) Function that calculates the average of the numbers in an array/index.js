"use strict";

/*

MATHS REMINDER: How to calculate an average of some numbers
The average of three numbers n1, n2 and n3 (whichever they may be) is:
average = (n1 + n2 + n3) / 3

The average of four numbers n1, n2, n3 and n4 is:
average = (n1 + n2 + n3 + n4) / 4

and so on.

So the average of N numbers is:
average = (n1 + n2 + ... + nN) / N

Example:
The average of 2, 4, 6, 12 and 1 is:
average = (2 + 4 + 6 + 12 + 1) / 5 = 25 / 5 = 5

In other words:
average = sum of all numbers / how many numbers

*/


/*

From a previous exercise you have a function (adder) that returns the sum of all the elements of an array.
You must use that function to code a new function (averg) that returns the average of 
all the numbers in an array

The function only needs to work when all the elements are numbers

TEST



VIDEO:  Record a video where you explain how averg works line by line. Max 3 minutes.
        This video must be called avergExplanation.


*/

// Copy your earlier function here
function adder ( _array ) {}

function averg ( _array ) {
  // in here you must use adder
}

function adder_all (_array) {
  let sum = 0
  for (let i = 0; i < _array.length; i++) {
    sum = sum + _array[i];
  }

  return sum;
}



function averg ( _array ) {
  console.log(adder_all( _array)/_array.length);
}



//averg([1, 2, 3, 4, 5]); // Expected: 3
averg([4,2]); // Expected: 3
averg([-1,1]); // Expected: 0

// Här har vi skapat en funktion som heter averg med parametern _array och med funktionen så kan man räkna ut vad average av en array är
//I funktionen så konsol loggar vi funktionen adder_all och dividerar alla siffror i _array med arrayens längd.

