'use strict';
const year = prompt('Enter a year.');
if (year % 4 == 0) {
  if (year % 100 == 0 && year % 400 != 0) {
    document.querySelector('#result').innerHTML = 'The year is not a leap year.';
  } else {
    document.querySelector('#result2').innerHTML = 'The year is a leap year.';
  }
} else {
  document.querySelector('#result3').innerHTML = 'The year is not a leap year.';
}
