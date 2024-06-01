// https://fostercs.github.io/
// JS101
"use strict";

// arrays
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const forLoop = (arr) => {
    for (let i = 0; i < arr.length; i++) console.log(arr[i]);
};

// forLoop
forLoop(nums);

const whileLoop = (arr) => {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
};

// whileLoop
whileLoop(nums);

// map function
const map = (arr, callback) => {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(callback(arr[i]));
    }
    return output;
};
// test
map(nums, (val) => val - 1);
