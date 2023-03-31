'use strict';
const number = +prompt("Enter a number of dice rolls.");
let summa = 0;

if (number >= 0) {
  for (let i = 1; i <= number; i++) {
    const silmaluku = Math.floor(Math.random() * 6 + 1);
    summa += silmaluku;
  }
  document.querySelector('#result').innerHTML = "Summa on " + summa;
} else {
  document.querySelector('#result').innerHTML = "You can not roll a negative number."
}