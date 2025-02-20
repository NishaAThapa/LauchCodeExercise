/* Exercise 6: Advanced Array Manipulation with Splice and Slice

Problem:

Given an array numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];, perform the 
following operations:

1. Remove elements from index 2 to 4 (inclusive) using splice.
2. Create a new array containing elements from index 5 to the end using slice.
3. Insert the number 10 at index 3.

Show the final state of the original array and the new array. */

// Step 1: Define the original array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Original array:", numbers);

// Step 2: Remove elements from index 2 to 4 (inclusive) using splice
numbers.splice(2, 3); // Removes 3 elements starting from index 2
console.log("After splice (remove elements 3 to 5):", numbers);

// Step 3: Create a new array containing elements from index 5 to the end using slice
const newArray = numbers.slice(5); // Extracts elements from index 5 to the end
console.log("New array (elements from index 5 to end):", newArray);

// Step 4: Insert the number 10 at index 3 using splice
numbers.splice(3, 0, 10); // Inserts 10 at index 3
console.log("Final state of the original array after insertion:", numbers);


