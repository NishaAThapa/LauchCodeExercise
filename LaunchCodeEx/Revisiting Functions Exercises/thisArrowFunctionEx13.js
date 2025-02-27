/**Exercise 13: 'this' in Arrow Functions

Problem:

Create an object with a method defined using an arrow function and 
another method using a regular function. 

Inside each method, attempt to access a property of the object using `this`. 

Explain the results. */

const person = {
    name: "Nisha",
    regularFunction: function () {
      return `My name is ${this.name}`;
    },
    arrowFunction: () => {
      return `My name is ${this.name}`;
    },
  };
  
  // Testing
  // Outputs: 'My name is Nisha'
  console.log(person.regularFunction());
  // Outputs: 'My name is undefined', throws error in strict mode
  console.log(person.arrowFunction());
  