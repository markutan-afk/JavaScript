const rolls = parseInt(prompt("Enter the number of dice rolls:"));

let sum = 0;

for (let i = 0; i < rolls; i++) {
    const die = Math.floor(Math.random() * 6) + 1;
    sum += die;
}

console.log(`The sum of the dice rolls is: ${sum}`);
document.querySelector("#result").textContent = `The sum of the dice rolls is: ${sum}`;