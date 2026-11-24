'use strict';

const form = document.querySelector('#source');
const firstNameInput = document.querySelector('input[name="fName"]');
const lastNameInput = document.querySelector('input[name="lName"]');
const target = document.querySelector('#target');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  target.textContent = `Your name is ${firstName} ${lastName}`;
});