'use strict';
const names = ['John', 'Paul', 'Jones'];
const id = document.querySelector("#target");

for (let name of names) {
  id.innerHTML += `<li>` + name + `</li>`;
}
