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

luvut = []
jakaja = 1
kokonaisluku = int(input("Anna kokonaisluku: "))

while jakaja <= kokonaisluku:
    if kokonaisluku % jakaja == 0:
        luvut.append(jakaja)
    jakaja = jakaja + 1

if luvut[0] == 1 and luvut[1] == kokonaisluku:
    print("Luku on alkuluku.")
else:
    print("Luku on kokonaisluku.")