/*Exercise 4: Using Prototypes to Extend Built-in Objects

Problem:

Extend the built-in `Array` prototype by adding a method 'last' that 
returns the last element of an array. 

Ensure that your method does not interfere with the 
built-in `Array` properties and is non-enumerable.*/


// Step 1: Extend the Array prototype with a non-enumerable 'last' method
Object.defineProperty(Array.prototype, "last", {
    value: function () {
      return this[this.length - 1];
    },
    enumerable: false,   // Prevents showing in for...in loops or Object.keys()
  configurable: true,  // Allows future modifications if needed
  writable: false      // Prevents accidental overwrites
  });

  // Step 2: Test the 'last' method
const numbers = [10, 20, 30, 40];
console.log(numbers.last()); // Expected Output: 40

const emptyArray = [];
console.log(emptyArray.last()); // Expected Output: undefined

// Step 3: Ensure 'last' is non-enumerable
console.log(Object.keys(numbers)); // Expected Output: ['0', '1', '2', '3'] (No 'last' method)
console.log(numbers.hasOwnProperty("last")); // Expected Output: false (Exists on prototype)