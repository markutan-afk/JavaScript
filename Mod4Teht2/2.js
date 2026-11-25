'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const value_from_input = document.querySelector('#query').value;
  const response = await fetch(`https://tvmaze.com${value_from_input}`);
  const jsonData = await response.json();

  console.log(jsonData);
});