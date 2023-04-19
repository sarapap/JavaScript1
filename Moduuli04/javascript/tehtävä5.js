'use strict';
const joke = 'https://api.chucknorris.io/jokes/random';

async function random_joke() {

  try {
    const response = await fetch(joke)
    if (!response.ok) throw new Error('Invalid input!');
    const json = await response.json();
    console.log(json['value'])
  } catch (e) {
    console.log('error', e);
  }
};

random_joke()


