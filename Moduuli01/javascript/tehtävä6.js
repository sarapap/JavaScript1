'use strict';
if (confirm("Should I calculate the square root?") == true) {
  const number = prompt('Enter a number.');
    if (number < 0) {
      document.querySelector('#result').innerHTML = "The square root of a negative number is not defined.";
    } else {
      document.querySelector('#result2').innerHTML = "The square root of number " + number + " is " + Math.sqrt(number);
    }
} else {
  document.querySelector('#result3').innerHTML = "The square root is not calculated."
}
