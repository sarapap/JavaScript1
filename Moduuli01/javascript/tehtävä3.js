'use strict';
    let first = prompt("Anna luku.")
    let second = prompt("Anna toinen luku.")
    let third = prompt("Anna kolmas luku.")
    let sum = +first + +second + +third
    let product = first * second * third
    let average = (first * second * third) / 3
    document.querySelector('#result').innerHTML = "Lukujesi summa = " + sum;
    document.querySelector('#result2').innerHTML = " Lukujesi tulo = " + product;
    document.querySelector('#result3').innerHTML = " Lukujesi keskiarvo = " + average;