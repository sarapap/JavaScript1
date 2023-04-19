'use strict';

const form = document.querySelector("#form")
form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const value = document.querySelector('input[name=q]').value;


   try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=:${value}`);
      if (!response.ok) throw new Error('Invalid input!');
      const json = await response.json();
      console.log('result', json);
   } catch (e) {
      console.log('error', e);
   }
});