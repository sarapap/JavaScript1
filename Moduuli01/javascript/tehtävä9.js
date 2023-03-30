'use script';
const number = prompt("Enter an integer.")
if (number < 2) {
  console.log("The number you entered is not a prime number.")
for (let i = 2; i <= number ; i++) {
  if (number % 1 == 0) {
      console.log("The number you entered is not a prime number.")
    }
}
} else {
  console.log("The number you entered is a prime number.")
}
