'use strict';

const nimi = prompt("Anna nimesi.");
const number = Math.floor(Math.random() * 4 + 1);
if (number < 2) {
  document.querySelector('#result').innerHTML = nimi + ', you are Gryffindor!';
} else if (number > 3) {
  document.querySelector('#result2').innerHTML = nimi + ', you are Ravenclaw!';
} else if (number > 2 && number < 4) {
  document.querySelector('#result3').innerHTML = nimi + ', you are Hufflepuff!'
} else {
  document.querySelector('#result4').innerHTML = nimi + ', you are Slytherin!';
}
