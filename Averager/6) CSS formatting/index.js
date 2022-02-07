"use strict";


/*

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

*/

function createNumberDiv () {
    let numberDiv = document.createElement('div')
    numberDiv.innerHTML = randomNumber(100)
    numberDiv.addEventListener("click", function (){numberDiv.classList.toggle('selected')})
    document.querySelector('#grid').appendChild(numberDiv)
  
    return numberDiv
  }
  
  function randomNumber (max) {
    return Math.floor(max * Math.random())
  }
  
  console.log(createNumberDiv())
  
  function gridMaker (gridContainer, R, C) {
    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`
    for (let i = 1; i < R * C; i++) {
      createNumberDiv()
    }
  }
  
  
  gridMaker(
    document.querySelector('#grid'),
    document.querySelector('#inputRows').value,
    document.querySelector('#inputCols').value

  )
  console.log(document.querySelector('#inputRows').value)
  