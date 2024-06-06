// https://fostercs.github.io/
// JS101
"use strict";

// greeting

const greeting = "hello world";

const greetingFun = (greeting) => {
    // Type your solution here
    let greetingLength = greeting.length;
    console.log("Greeting Length: ", greetingLength);
    console.log("Greeting: ", greeting)
    // call our program
    return greeting;
};

// forLoop

// whileLoop

// array

// map

// filter

// reduce

// test

greetingFun(greeting);

module.exports = greetingFun;