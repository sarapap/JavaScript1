'use strict';

const source = document.getElementById('source');
const first = document.querySelector('input[name=firstname]');
const last = document.querySelector('input[name=lastname]');
const target = document.querySelector("#target")

source.addEventListener('submit', function(evt) {
    evt.preventDefault();
    target.innerHTML = `Your name is ${first.value} ${last.value}`;
});