'use strict';
const id = document.querySelector("#target");
const div = document.createElement('target1');

div.innerHTML = '<li>First Item</li><li>Second Item</li><li>Third Item</li>';
id.appendChild(div)

const element = document.getElementsByTagName('li')[1]
element.classList.add("my-item");
