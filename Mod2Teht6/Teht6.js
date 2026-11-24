'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const listElement = document.querySelector('#dice-list');
let result = 0;

while (result !== 6) {
  result = rollDice();

  const listItem = document.createElement('li');
  listItem.textContent = result;
  listElement.appendChild(listItem);
}