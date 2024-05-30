# CS101 Syllabus

### Handbook
[Gitlab Handbook](https://handbook.gitlab.com/handbook/)

### Background
- Importance of data wrangling
- Code maintainability and repeatability
- Introduction to performance considerations

### Why JS?
- Ubiquity and accessibility of JavaScript
- Course goals

### Acknowledgments & Disclaimer
- Contributions from Douglas Crockford
- Contributions from Sandy Metz
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
  - **Behavioral Patterns**
    - Command
    - Observer
    - Strategy
  - **Creational Patterns**
    - Builder
    - Factory
    - Singleton
  - **Structural Patterns**
    - Adapter
    - Decorator
    - Facade
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

### User Story
As a software engineer, I want code that is not only clear and maintainable but also robust and resilient in distributed or concurrent environments, therefore we will utilize idiomatic and idempotent paradigms when creating code. Performance is also important, but we'll get to that later.

### A note on mastery

Immutability involves creating stable, unchangeable states in evolutionary biology, personal development, and software development; Realms where consistency and reliability can be ensured. This course will not focus on immutability. Instead, we will emphasize programming fundamentals, including the importance of deliberate, strategic changes in software development. By focusing on making intentional modifications, we aim to explore how thoughtful and adaptive changes can enhance code quality, foster innovation, and improve problem-solving skills. Additionally, we will highlight how the functional programming paradigm, with its emphasis on immutability, accelerates developer velocity by reducing bugs, simplifying debugging, and making code easier to reason about. This approach offers a more dynamic and flexible path to mastering programming concepts.

### More on immutability
[immutability.js](./immutable.js)

### Why JS?
JS is an ideal language choice because of its ubiquitous nature; it's everywhere, and that makes it especially accessible. JS was selected to craft the CS 101 course with the goal of offering a high-quality online curriculum for individuals that do not have expensive computing resources at their disposal.

### Acknowledgments
This content could not have been realized without contributions from the following individuals:
- Douglas Crockford
- Sandy Metz
- Kyle Simpson

### Disclaimer
Crockford has provided compelling arguments for why developers should consider other languages and technologies other than JS for projects.

## OOP (Object-Oriented Programming)
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code to manipulate that data. Objects are instances of classes, which can encapsulate data (attributes) and functions (methods) that operate on the data.

### OOP Core Concepts
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

### Design Patterns
Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that can be customized to solve a particular design problem in your code.

### Commonly Used Design Patterns

#### Behavioral Patterns

1. **Command**: Encapsulates a request as an object, allowing for parameterization of clients with queues, requests, and operations.
2. **Observer**: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
3. **Strategy**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

#### Creational Patterns

1. **Builder**: Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
2. **Factory**: Defines an interface for creating an object but lets subclasses alter the type of objects that will be created.
3. **Singleton**: Ensures a class has only one instance and provides a global point of access to that instance.

#### Structural Patterns

1. **Adapter**: Allows objects with incompatible interfaces to collaborate.
2. **Decorator**: Attaches additional responsibilities to an object dynamically, providing a flexible alternative to subclassing for extending functionality.
3. **Facade**: Provides a unified interface to a set of interfaces in a subsystem, defining a higher-level interface that makes the subsystem easier to use.

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
