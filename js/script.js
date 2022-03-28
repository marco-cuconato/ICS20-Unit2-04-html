'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function enterclicked () {
  // input
  const base = parseInt(document.getElementById('base').value)
  const height = parseInt(document.getElementById('height').value)
  
  // process
  const area = (base * height) / 2
  
  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
