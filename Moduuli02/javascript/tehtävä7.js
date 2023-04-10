'use strict';
function roll(maara) {
  return Math.floor(Math.random() * 21 + 1);
}


const silmaluku = prompt("Enter the maximum number on the dice")
const rolls = []
while (true) {
  const number = roll(silmaluku)
  rolls.push(number)
  if (number == silmaluku) {
    break;
  } let list = "<ul>"
    for (let i = 0; i<number; i++) {
      list += "<li>" + rolls[i] + "</li>"
    } list += "</ul>"
} document.querySelector('#result').innerHTML = rolls;


