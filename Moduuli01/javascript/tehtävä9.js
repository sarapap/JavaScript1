'use script';
const number = prompt('Enter an integer.');
let isPrime = true;

if (number == 1) {
  document.querySelector('#result').innerHTML = '1 is not a prime number.';
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false
      break;
    }
  } if (isPrime) {
    document.querySelector('#result2').innerHTML = number + ' is a prime number.';
  } else {
    document.querySelector('#result3').innerHTML = number + ' is a not a prime number.';
  }
} else {
  document.querySelector('#result4').innerHTML = number + ' is not a prime number.';
}