'use strict';
if (confirm("Should I calculate the square root?") == true) {
  const number = prompt('Enter a number.');
    if (number < 0) {
      console.log("The square root of a negative number is not defined.")
    } else {
      console.log(Math.sqrt(number));
    }
} else {
  console.log("The square root is not calculated.")
}
