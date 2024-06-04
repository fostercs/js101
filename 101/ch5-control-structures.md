# JS101
## Control Structures
### If, Else If
```javascript
let number = 10;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}
```
### Nested If
```javascript
let age = 25;

if (age > 18) {
    if (age > 21) {
        console.log("You are older than 21.");
    } else {
        console.log("You are an adult but not older than 21.");
    }
} else {
    console.log("You are a minor.");
}
```
### Switch Statements
```javascript
let grade = 'B';

switch (grade) {
    case 'A':
        console.log("Excellent!");
        break;
    case 'B':
        console.log("Good job!");
        break;
    case 'C':
        console.log("Well done!");
        break;
    case 'D':
        console.log("You passed.");
        break;
    case 'F':
        console.log("Better luck next time.");
        break;
    default:
        console.log("Invalid grade.");
}
```
### Ternary Operator
```javascript
let isMember = true;
let discount = isMember ? 10 : 5;
console.log(`You get a ${discount}% discount.`);
```
### Logical Operators
```javascript
let a = 5;
let b = 10;

if (a > 0 && b > 0) {
    console.log("Both numbers are positive.");
}

if (a > 0 || b > 0) {
    console.log("At least one number is positive.");
}

if (!(a > 0)) {
    console.log("a is not positive.");
}
```