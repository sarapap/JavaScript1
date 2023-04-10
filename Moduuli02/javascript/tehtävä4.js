'use strict';
let numbers = []
while (true) {
  const number = prompt("Enter a number.");
  numbers.push(number)
  if (number == 0) {
    break;
  }
} numbers.sort((smallest, largest) => largest-smallest);
console.log(numbers)
