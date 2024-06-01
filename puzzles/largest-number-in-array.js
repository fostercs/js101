// Write a function that takes a list of numbers and returns the largest number in the list.
// If the list is empty, return zero.

function findLargestNumber(numbers) {
    if (numbers.length === 0) return 0;
    let largestIndexValue = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largestIndexValue) {
            largestIndexValue = numbers[i]
        }
    }
    return largestIndexValue;
}

let numbers = [7, 2, 6, 3, -1, 10];
console.log(findLargestNumber(numbers)); // Output: 7
