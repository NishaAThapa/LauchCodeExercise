/**Exercise 4: Recursive Function to Flatten Nested Arrays

Problem:

Write a recursive function `flattenArray` that takes a deeply nested array 
and returns a new, flat array containing all the elements. 

Explain the importance of the base case in your recursive function. */

function flattenArray(arr) {
    // Base case: if the element is not an array, return it as is.
    let result = [];
    
    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
      // If the element is an array, recursively flatten it
      if (Array.isArray(arr[i])) {
        result = result.concat(flattenArray(arr[i]));
      } else {
        // Otherwise, push the element to the result
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  // Test cases
  const nestedArray = [1, [2, [3, [4, 5]]], 6];
  console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
  