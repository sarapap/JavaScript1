'use strict';
let numbers = []
numbers[0] = prompt('Enter a number.')
numbers[1] = prompt('Enter another number.')
numbers[2] = prompt('Enter a third number. ')
numbers[3] = prompt('Enter a fourth number. ')
numbers[4] = prompt('Enter a fifth number. ')

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
