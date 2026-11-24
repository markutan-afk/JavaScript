function concat(arr) {
  let combinedString = "";

  for (let i = 0; i < arr.length; i++) {
    combinedString += arr[i];
  }

  return combinedString;
}

const names = ["Johnny", "DeeDee", "Joey", "Marky"];
const output = concat(names);

document.getElementById("result").textContent = output;