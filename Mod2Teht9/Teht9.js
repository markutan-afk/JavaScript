function even(numbers) {
    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    return evenNumbers;
}

const originalArray = [2, 7, 4];
const newArray = even(originalArray);

console.log("Original array:", originalArray);
console.log("Even numbers array:", newArray);