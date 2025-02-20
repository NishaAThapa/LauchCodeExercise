
/*Exercise 5: Understanding the Prototype Chain

Problem:

Given the following code in `explain.js`, explain the 
output of each console.log statement: */


function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const alice = new Person("Alice");

console.log(alice.greet());  // Output: "Hello, My name is ALice"
/*
  Explain here:
- When alice.greet() is called, JavaScript first looks for greet in alice itself.
Since alice does not have a greet property directly, JavaScript follows the prototype 
chain to Person.prototype, where greet is found.
It executes greet(), using this.name, which refers to "Alice".
*/
console.log(alice.hasOwnProperty("greet")); 
/*
  Explain here:
  Output: False
hasOwnProperty("greet") checks if greet exists directly on alice.
greet is not a property of alice, it is inherited from Person.prototype.
Since greet exists in the prototype chain but not directly on alice, the result is false.
*/
console.log(Object.getPrototypeOf(alice) === Person.prototype);
/*
  Explain here
  Output:True
Object.getPrototypeOf(alice) returns the prototype of alice, which is Person.prototype.
alice was created using new Person(), so its prototype is set to Person.prototype.
Since Person.prototype === Object.getPrototypeOf(alice), the output is true.
*/
console.log(Person.prototype.constructor === Person);
/*
  Explain here:
  Output: true
Every function prototype has a constructor property that points back to the function that created it.
Person.prototype.constructor points to Person, because Person.prototype is automatically created when defining Person.
Since Person.prototype.constructor === Person, the output is true.

*/