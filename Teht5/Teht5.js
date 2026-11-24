const input = prompt("Enter a year:");
const year = parseInt(input);
const resultElement = document.getElementById("result");

if (isNaN(year)) {
    resultElement.textContent = "Please refresh the page and enter a valid number.";
} else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    resultElement.textContent = year + " is a leap year.";
} else {
    resultElement.textContent = year + " is not a leap year.";
}