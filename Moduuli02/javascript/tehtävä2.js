'use strict';
const participants = [];
const number = prompt('Enter a number of participants.');

let list = "<ol>";
for (let i = 0; i < number; i++) {
  participants[i] = prompt('Enter the names of all participants.');
  list += "<li>" + participants[i] + "</li>";
} list += "</ol";

document.querySelector('#result').innerHTML = 'The participants: ' + list;
