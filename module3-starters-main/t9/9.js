'use strict';

const calculationInput = document.querySelector('#calculation');
const startBtn = document.querySelector('#start');
const resultParagraph = document.querySelector('#result');

startBtn.addEventListener('click', () => {
  const input = calculationInput.value;
  let answer;

  if (input.includes('+')) {
    const parts = input.split('+');
    answer = Number(parts[0]) + Number(parts[1]);
  } else if (input.includes('-')) {
    const parts = input.split('-');
    answer = Number(parts[0]) - Number(parts[1]);
  } else if (input.includes('*')) {
    const parts = input.split('*');
    answer = Number(parts[0]) * Number(parts[1]);
  } else if (input.includes('/')) {
    const parts = input.split('/');
    answer = Number(parts[0]) / Number(parts[1]);
  }

  resultParagraph.textContent = answer;
});