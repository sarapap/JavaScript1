'use strict';
let names = []
names[0] = prompt('Enter a name of a dog.');
names[1] = prompt('Enter a name of a dog.');
names[2] = prompt('Enter a name of a dog.');
names[3] = prompt('Enter a name of a dog.');
names[4] = prompt('Enter a name of a dog.');
names[5] = prompt('Enter a name of a dog.');

names.sort()
let lista = "<ul>";
lista += "<li>" + names[0] + "</li>"
lista += "<li>" + names[1] + "</li>"
lista += "<li>" + names[2] + "</li>"
lista += "<li>" + names[3] + "</li>"
lista += "<li>" + names[4] + "</li>"
lista += "<li>" + names[5] + "</li>"
lista += "</ul>";
document.querySelector('#result').innerHTML = lista;