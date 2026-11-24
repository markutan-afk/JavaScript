const numbers = [];

while (true) {
  const input = prompt("Enter a number:");

  if (input === null) {
    break;
  }

  const num = Number(input);

  if (input.trim() === "" || Number.isNaN(num)) {
    alert("Please enter a valid number.");
    continue;
  }

  if (numbers.includes(num)) {
    alert(`The number ${num} has already been given.`);
    console.log(`The number ${num} has already been given.`);
    break;
  }

  numbers.push(num);
}

numbers.sort((a, b) => a - b);

console.log("Given numbers in ascending order:", numbers);