const numDice = Number(prompt("Enter the number of dice:"));
const targetSum = Number(prompt("Enter the sum of the eye numbers:"));
const totalSimulations = 10000;
let matchCount = 0;

for (let i = 0; i < totalSimulations; i++) {
    let currentSum = 0;

    for (let j = 0; j < numDice; j++) {
        const dieRoll = Math.floor(Math.random() * 6) + 1;
        currentSum += dieRoll;
    }

    if (currentSum === targetSum) {
        matchCount++;
    }
}

const probability = ((matchCount / totalSimulations) * 100).toFixed(2);

document.getElementById("result").textContent = 
    `Probability to get sum ${targetSum} with ${numDice} dice is ${probability}%`;