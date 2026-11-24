'use strict';

const target = document.querySelector('#target');
const answer = confirm('Should I calculate the square root?');

if (answer) {
    const number = Number(prompt('Enter a number:'));

    if (number < 0) {
        target.textContent = 'The square root of a negative number is not defined';
    } else {
        const sqrt = Math.sqrt(number);
        target.textContent = `The square root of ${number} is ${sqrt}`;
    }
} else {
    target.textContent = 'The square root is not calculated.';
}