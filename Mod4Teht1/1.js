'use strict';

const form = document.querySelector('#search-form');
const queryInput = document.querySelector('#query');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const searchTerm = queryInput.value.trim();
  if (!searchTerm) return;

  const url = `https://tvmaze.com{encodeURIComponent(searchTerm)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching TV series:', error);
  }
});