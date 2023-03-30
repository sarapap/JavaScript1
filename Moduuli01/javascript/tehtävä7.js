'use script';
const number = prompt("Enter a number of dice rolls.")
const silmaluku = Math.floor(Math.random() * 6 + 1);
while (number > 0) {
  tulos = number + silmaluku
  console.log('Silmälukujen summa on = ' + tulos)
}
