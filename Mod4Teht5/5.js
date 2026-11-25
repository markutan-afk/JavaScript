'use strict';

async function getRandomJoke() {
  try {
    const response = await fetch('https://chucknorris.io');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = await response.json();
    console.log(jsonData.value);
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}

getRandomJoke();