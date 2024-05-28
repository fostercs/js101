# CS101 Syllabus

### Background
- Importance of data wrangling
- Code maintainability and repeatability
- Introduction to performance considerations

### Why JS?
- Ubiquity and accessibility of JavaScript
- Goals of Code Along Studio's CS 101 course

### Acknowledgments & Disclaimer
- Contributions from Douglas Crockford
- Consideration of other languages and technologies

## OOP (Object-Oriented Programming)
- **Definition**
  - Concept of objects
  - Classes as blueprints
- **Core Concepts**
  - **Classes and Objects**
    - Class definition
    - Object instantiation
  - **Encapsulation**
    - Data and methods bundling
  - **Inheritance**
    - Extending classes
  - **Polymorphism**
    - Unified interface for different data types
  - **Abstraction**
    - Hiding complex details
- **OOP in JS**
  - Prototype-based inheritance
  - ES6 class syntax
  - Code example

## Design Patterns
- **Definition**
  - Typical solutions to common design problems
- **Types of Design Patterns**
  - **Creational Patterns**
    - Singleton
    - Factory
    - Builder
  - **Structural Patterns**
    - Adapter
    - Composite
    - Decorator
  - **Behavioral Patterns**
    - Observer
    - Strategy
    - Command
- **Design Patterns in JS**
  - Implementation flexibility
  - Singleton pattern example

## Functional Programming (FP)
- **Definition**
  - Programs constructed by applying and composing functions
- **Core Concepts**
  - **Pure Functions**
    - Same result for same arguments, no side effects
  - **First-Class Functions**
    - Functions as first-class citizens
  - **Immutability**
    - No modification of data objects
  - **Higher-Order Functions**
    - Functions taking/returning other functions
- **FP in JS**
  - **Pure Functions**
    - Example: `add` function
  - **Higher-Order Functions**
    - Example: `applyOperation` function
  - **Immutability**
    - Example: creating new array from existing array

### Native JS Functions
- **map**
  - Definition: Transforms each element in an array
  - Usage example:
    ```javascript
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); // [2, 4, 6, 8]
    ```
- **filter**
  - Definition: Filters elements in an array based on a condition
  - Usage example:
    ```javascript
    const numbers = [1, 2, 3, 4];
    const even = numbers.filter(num => num % 2 === 0);
    console.log(even); // [2, 4]
    ```
- **reduce**
  - Definition: Reduces array to a single value
  - Usage example:
    ```javascript
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum); // 10
    ```

### Solving algorithms with functional patterns
- **[is a palindrome](./is-a-palindrome.js)**

### Core Concepts
- Importance of OOP, design patterns, and FP for maintainable and efficient code
- JavaScript as a versatile language for exploring these paradigms
- Solving algorithms with functional patterns

# CS101

### Background
As a computer science engineer, it is important to understand how to wrangle data in the most idiomatic and idempotent manner to produce maintainable and repeatable code. Performance is also important, and we'll get into that later.

### Why JS?
JS is an ideal language choice because of its ubiquitous nature; it's everywhere, and that makes it especially accessible. Here at Code Along Studio, we have selected JS to craft our CS 101 course with the goal of offering a high-quality, but absolutely free, online resource for individuals without expensive computing resources.

### Acknowledgments & Disclaimer
This content could not have been realized without contributions from Douglas Crockford. Additionally, Crockford has provided compelling arguments for why developers should consider other languages and technologies other than JS for projects.

## OOP (Object-Oriented Programming)

### Definition
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code to manipulate that data. Objects are instances of classes, which can encapsulate data (attributes) and functions (methods) that operate on the data.

### Core Concepts
1. **Classes and Objects**: Classes are blueprints for creating objects. An object is an instance of a class.
2. **Encapsulation**: Bundling the data (attributes) and methods that operate on the data into a single unit or class.
3. **Inheritance**: A mechanism where a new class inherits properties and behavior (methods) from an existing class.
4. **Polymorphism**: The ability to present the same interface for differing underlying forms (data types).
5. **Abstraction**: Hiding complex implementation details and showing only the necessary features of an object.

### OOP in JS
In JavaScript, OOP can be implemented using prototypes and ES6 classes. The ES6 class syntax is syntactic sugar over JavaScript's prototype-based inheritance.

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

## Design Patterns

### Design Patterns Definition
Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that can be customized to solve a particular design problem in your code.

### Types of Design Patterns
1. **Creational Patterns**: Deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. Examples include Singleton, Factory, and Builder.
2. **Structural Patterns**: Deal with object composition or the way to compose objects to form larger structures. Examples include Adapter, Composite, and Decorator.
3. **Behavioral Patterns**: Deal with communication between objects and the delegation of responsibility. Examples include Observer, Strategy, and Command.

### Design Patterns in JS
JavaScript's flexibility allows for the implementation of these patterns in various ways. Here is an example of the Singleton pattern:

```javascript
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.data = "Singleton Data";
    }

    getData() {
        return this.data;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true
```

## Functional Programming (FP)

### Definition
Functional Programming (FP) is a programming paradigm where programs are constructed by applying and composing functions. It emphasizes the use of pure functions and avoiding shared state, mutable data, and side-effects.

### Core Concepts of Functional Programming
1. **Pure Functions**: Functions that return the same result given the same arguments and have no side effects.
2. **First-Class Functions**: Functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
3. **Immutability**: Data objects should not be modified after they are created. Instead, new objects should be created.
4. **Higher-Order Functions**: Functions that take other functions as arguments or return them as results.

### FP in JS
JavaScript supports functional programming features, allowing you to write concise and readable functional code.

```javascript
// Example of a pure function
const add = (a, b) => a + b;

// Example of higher-order function
const applyOperation = (a, b, operation) => operation(a, b);

console.log(applyOperation(2, 3, add)); // 5

// Example of immutability
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];

console.log(originalArray); // [1, 2, 3]
console.log(newArray); // [1, 2, 3, 4]
```

### Summary
Understanding OOP, design patterns, and functional programming is crucial for writing maintainable, efficient, and robust code. JavaScript, with its flexibility and extensive ecosystem, is an excellent language for exploring these paradigms.
