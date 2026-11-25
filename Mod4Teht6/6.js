'use strict';

const form = document.querySelector('#search-form');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const value_from_input = document.querySelector('#query').value;
  const response = await fetch(`https://chucknorris.io${value_from_input}`);
  const jsonData = await response.json();

  resultsContainer.innerHTML = '';

  for (const joke of jsonData.result) {
    const article = document.createElement('article');
    const p = document.createElement('p');
    p.textContent = joke.value;

    article.appendChild(p);
    resultsContainer.appendChild(article);
  }
});