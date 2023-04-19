'use strict';

const form = document.querySelector('#form')
form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const value = document.querySelector('input[name=q]').value;
    const result = document.querySelector('#result')

   try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=:${value}`);
      if (!response.ok) throw new Error('Invalid input!');
      const json = await response.json();

      for (let show of json) {
        const article = document.createElement('article');
        article.className = 'card'

        const article_heading = document.createElement('h2');
        article_heading.textContent = show['show']['name'];
        article.appendChild(article_heading);

        const link = document.createElement('a');
        link.textContent = show['show']['url'];
        link.target = '_blank';
        article.appendChild(link)

        const figure = document.createElement('figure');
        const image = document.createElement('img');
        image.src = show.show.image?.medium;
        image.alt = show['show']['name'];
        figure.appendChild(image);
        article.appendChild(figure);

        let summary = document.createElement('div');
        summary.textContent = show['show']['summary'];
        article.appendChild(summary);

        result.appendChild(article)
      }

      console.log('result', json);
   } catch (e) {
      console.log('error', e);
   }
});

