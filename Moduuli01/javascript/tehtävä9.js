'use script';
const integers = []
jakaja = 1
const number = prompt('Enter an integer.')

while (jakaja <= number) {
  if (number % jakaja == 0) {
    integers.push(jakaja)
  jakaja = jakaja + 1
  }
} if (integers[0] == 1 && integers[1] == number) {
    document.querySelector('#result').innerHTML = 'The integer you entered is a prime number.'
} else {
  document.querySelector('#result2').innerHTML = 'The integer you entered is not a prime number.'
}
