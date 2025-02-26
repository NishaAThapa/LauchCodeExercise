/*Exercise 11: Complex Conditional Logic in Loops

Problem:

Write a function `filterAndTransform` that takes an array of 
numbers and returns a new array where:

- All negative numbers are removed.
- All even numbers are squared.
- All odd numbers are incremented by 1.

Use for loops, if-else statements, and logical operators to 
implement this function. */
function filterAndTransform(numbers) {
    let result = [];
  
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
  
      if (num < 0) {
        // Skip negative numbers
        continue;
      }
  
      if (num % 2 === 0) {
        // Square even numbers
        result.push(num * num);
      } else {
        // Increment odd numbers by 1
        result.push(num + 1);
      }
    }
  
    return result;
  }
  
  // Example usage
  const numbers = [-5, 3, -2, 4, 7, 8, -1, 0];
  console.log(filterAndTransform(numbers));
  