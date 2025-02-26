/*Exercise 13: Deep Understanding of Truthy and Falsy Values

Problem:

Write a function `countFalsyValues` that takes an array of values and 
returns the number of falsy values in the array. 

Use the Boolean constructor and logical operators to implement this. */

function countFalsyValues(arr) {
    return arr.reduce((count, value) => count + !Boolean(value), 0);
  }
  
  // Example usage
  console.log(countFalsyValues([0, "", null, undefined, NaN, false, 1, "hello", [], {}])); // Output: 5
  console.log(countFalsyValues([true, 1, "text", [], {}])); // Output: 0
  console.log(countFalsyValues([false, 0, "", NaN])); // Output: 4
  