'use strict';

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt('Enter the number of sides on the dice:'));
const listElement = document.querySelector('#rolls');

if (sides >= 1) {
  let result = 0;

  while (result !== sides) {
    result = rollDice(sides);
    const listItem = document.createElement('li');
    listItem.textContent = result;
    listElement.appendChild(listItem);
  }
} else {
  alert('Please enter a valid number of sides (1 or more).');
}