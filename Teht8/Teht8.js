'use strict';

const startYear = Number(prompt('Enter the start year:'));
const endYear = Number(prompt('Enter the end year:'));

const listElement = document.querySelector('#leap-years');
let htmlContent = '';

for (let year = startYear; year <= endYear; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    htmlContent += `<li>${year}</li>\n`;
  }
}

listElement.innerHTML = htmlContent;