'use strict';

const form = document.querySelector('form');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const value_from_input = document.querySelector('#query').value;
  const response = await fetch(`https://tvmaze.com${value_from_input}`);
  const jsonData = await response.json();

  resultsContainer.innerHTML = '';

  for (const tvShow of jsonData) {
    const show = tvShow.show;

    const article = document.createElement('article');

    const heading = document.createElement('h2');
    heading.textContent = show.name;

    const link = document.createElement('a');
    link.href = show.url;
    link.target = '_blank';
    link.textContent = 'Show details';

    const img = document.createElement('img');
    img.src = show.image?.medium || '';
    img.alt = show.name;

    const summary = document.createElement('div');
    summary.innerHTML = show.summary || '';

    article.append(heading, link, img, summary);
    resultsContainer.appendChild(article);
  }
});