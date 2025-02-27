/**Exercise 2: Arrow Functions and 'this' Binding

Problem:

Create an object `calculator` with a property 'currentValue' and two methods: 
one using a traditional function and another using an arrow function. 

Both methods increment 'currentValue' by 1. 

Demonstrate how the keyword `this` behaves differently in both methods. */

const calculator = {
    currentValue: 0,
  
    // Traditional function method
    incrementTraditional: function() {
      this.currentValue += 1;
      console.log("Traditional increment:", this.currentValue);
    },
  
    // Arrow function method
    incrementArrow: () => {
      this.currentValue += 1;
      console.log("Arrow increment:", this.currentValue);
    }
  };
  
  // Call both methods
  calculator.incrementTraditional(); // Traditional function
  calculator.incrementArrow(); // Arrow function
  
  // Output the currentValue after both operations
  console.log("Final value of currentValue:", calculator.currentValue);
  