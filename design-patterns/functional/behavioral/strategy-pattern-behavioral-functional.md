Strategy Pattern in JavaScript Using Functional Approach

Summary:
This demonstration will illustrate the Strategy Pattern in JavaScript using a functional approach with map, filter, and reduce. The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It allows the algorithm to vary independently from clients that use it. This pattern is commonly used when a family of algorithms needs to be encapsulated and made interchangeable based on specific requirements.

```javascript
// Strategy functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// Strategy mapping
const strategies = {
  add,
  subtract,
  multiply,
};

// Context
const executeStrategy = (strategy, a, b) => {
  if (strategy in strategies) {
    return strategies[strategy](a, b);
  } else {
    throw new Error('Invalid strategy');
  }
};

// Usage
const result1 = executeStrategy('add', 5, 3);
const result2 = executeStrategy('subtract', 10, 4);
const result3 = executeStrategy('multiply', 2, 6);

console.log(result1); // Output: 8
console.log(result2); // Output: 6
console.log(result3); // Output: 12
```

Usage:
The Strategy Pattern is utilized when a family of algorithms needs to be encapsulated and made interchangeable based on specific requirements. It's commonly employed in scenarios where algorithms need to be selected at runtime, such as sorting strategies, data validation, or mathematical operations.

Pros and Cons of map, filter, and reduce:
- **Pros**: Functional style, immutability, composition.
- **Cons**: Overhead, learning curve, potential performance impact.