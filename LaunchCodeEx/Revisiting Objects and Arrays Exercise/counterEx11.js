/*Exercise 11: Using Object.defineProperty to Control Property Attributes

Problem:

Create an object `counter` with a property 'count' that cannot 
be set to a value less than the current value. 

Use Object.defineProperty to enforce this constraint. */
const counter = {};

Object.defineProperty(counter, "count", {
  value: 0, // Initial value
  writable: true, // Required to allow updates
  configurable: false, // Prevents deletion or redefinition
});

Object.defineProperty(counter, "setCount", {
  value: function (newValue) {
    if (newValue >= this.count) {
      this.count = newValue;
    } else {
      console.log("Error: Cannot decrease the count.");
    }
  },
  writable: false, // Method should not be overridden
  configurable: false,
});

// Test the behavior
console.log("Initial Count:", counter.count); // 0

counter.setCount(5);
console.log("Updated Count:", counter.count); // 5

counter.setCount(3); // Error: Cannot decrease the count.
console.log("Final Count:", counter.count); // Still 5
