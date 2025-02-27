/**Exercise 12: Function Scope and Closures

Problem:

Create a function `createCounter` that returns another function. 

The returned function should increment and return a 'counter' variable 
that is not accessible from the global scope. 

Demonstrate how closures retain access to outer variables. */

function createCounter() {
    let counter = 0;  // counter is defined in the outer function's scope
  
    return function() {
      counter++;  // Increment the counter
      return counter;  // Return the current value of counter
    };
  }
  
  // Create a new counter
  const counter1 = createCounter();
  console.log(counter1());  // Output: 1
  console.log(counter1());  // Output: 2
  console.log(counter1());  // Output: 3
  
  // Create another counter
  const counter2 = createCounter();
  console.log(counter2());  // Output: 1
  console.log(counter2());  // Output: 2
  