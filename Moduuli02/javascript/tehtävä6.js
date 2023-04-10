'use strict';
function roll() {
  return Math.floor(Math.random() * 6 + 1);
}

const rolls = []
while (true) {
  const number = roll()
  rolls.push(number)
  if (number == 6) {
    break;
  } let list = "<ul>"
    for (let i = 0; i<number; i++) {
      list += "<li>" + rolls[i] + "</li>"
    } list += "</ul>"
} document.querySelector('#result').innerHTML = rolls;


