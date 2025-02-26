/**Exercise 19: Handling Complex Truthy/Falsy Conditions

Problem:

Write a function `normalizeInput` that accepts any value and returns:

- The value itself if it is truthy.
- A default value 'N/A' if the value is falsy but not null or undefined.
- hrows an error if the value is null or undefined.

Use conditional logic and strict equality operators to implement this. */

function normalizeInput(value) {
    // Check if the value is null or undefined
    if (value === null || value === undefined) {
      throw new Error("Value cannot be null or undefined");
    }
  
    // Check if the value is falsy but not null/undefined
    if (!value) {
      return 'N/A';
    }
  
    // Return the value itself if it's truthy
    return value;
  }
  
  // Testing the function
  console.log(normalizeInput("Hello"));      // Output: Hello
  console.log(normalizeInput(0));            // Output: N/A
  console.log(normalizeInput(false));        // Output: N/A
  console.log(normalizeInput(null));         // Throws Error: Value cannot be null or undefined
  console.log(normalizeInput(undefined));    // Throws Error: Value cannot be null or undefined
  console.log(normalizeInput({}));           // Output: {}
  console.log(normalizeInput([]));           // Output: []
  