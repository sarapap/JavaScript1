'use strict';

const nimi = prompt("Anna nimesi.");
const number = Math.floor(Math.random() * 4 + 1);
if (number < 2) {
  console.log(nimi + ', you are Gryffindor!')
} else if (number > 3) {
  console.log(nimi + ', you are Ravenclaw!')
} else if (number > 2 && number < 4) {
  console.log(nimi + ', you are Hufflepuff!')
} else {
  console.log(nimi + ', you are Slytherin!')
}
