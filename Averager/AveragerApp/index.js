"use strict";

// Program the complete Averager App here.
// Don't forget to include your CSS-file in the folder

// Include the link to your Github Repository here:
// Link: https://github.com/JuliaErmansson/U1



// GLOBAL VARIABLES
// None allowed




// FUNCTION DECLARATIONS (in alphabetical order)
function adder_all (_array) {
    let sum = 0
    for (let i = 0; i < _array.length; i++) {
      sum = sum + _array[i]
    }
  
    return sum
  }

  function averg (_array) {
    return adder_all(_array) / _array.length
  }

  function createNumberDiv (gridContainer) {
    let numberDiv = document.createElement('div')
    numberDiv.innerHTML = randomNumber(100)
    numberDiv.addEventListener('click', function () {
      numberDiv.classList.toggle('selected'), updateResults('selected')
    })
    document.querySelector('#grid').appendChild(numberDiv)
    gridContainer.appendChild(numberDiv)
  
    return numberDiv
  }

  function getArrayOfSelectedNumbers (className) {

    let arrayElements = Array.from(document.querySelectorAll("." + className));
  
    let arrayNumbers = [];
  
    for (let i = 0; i < arrayElements.length; i++) {
      let numberAsString = arrayElements[i].innerHTML;
      let number = parseInt(numberAsString);
      arrayNumbers.push(number);
    }
  
    return arrayNumbers;
  
  }

  function gridMaker (gridContainer, R, C) {
    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`
    gridContainer.style.display = 'grid'
    gridContainer.innerHTML = ''
  
    // for (let i = 0; i < R; i++) {
    //   for (let J = 0; J < C; J++) {
    //     let numberDiv = document.createElement('div')
    //     numberDiv.innerHTML = randomNumber(100)
  
    //     gridContainer.appendChild(numberDiv)
    //   }
    // }
    for (let i = 0; i < R * C; i++) {
      createNumberDiv(gridContainer)
    }
  }

  function randomNumber (max) {
    return Math.floor(max * Math.random())
  }

  function roundString(numberWithManyDecimals, decimals){
    var rounded = Math.pow(10, decimals);
    return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);
  }

  function updateResults (className) {
    let array = getArrayOfSelectedNumbers(className)
    let selected = array.join(',')
    let amount = array.length
    let sum = adder_all(array)
    let average = roundString(averg(array), 1)
    document.querySelector('#selected span').innerHTML = selected
    document.querySelector('#amount span').innerHTML = amount
    document.querySelector('#sum span').innerHTML = sum
    document.querySelector('#average span').innerHTML = average
  }

// EVENTLISTENERS FOR EXISTING HTML-ELEMENTS

document.querySelector('button').addEventListener('click', function () {
    gridMaker(
      document.querySelector('#grid'),
      document.querySelector('#inputRows').value,
      document.querySelector('#inputCols').value
    )
  })



// DIRECT CODE
// Initialise the page directly, no need to wait for user to click first time.
document.querySelector("button").click();
