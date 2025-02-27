/**Exercise 10: Higher-Order Functions and Callbacks

Problem:

Implement a higher-order function `processArray` that takes an array and 
a callback function. 

The function should apply the callback to each element of the array and 
return a new array with the results. 

Use this function to square each element in an array of numbers. */

// Higher-order function that processes each element of an array with a callback
function processArray(arr, callback) {
    const result = []; // Initialize an empty array to store the results
    
    // Loop through the array and apply the callback function to each element
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i])); // Apply callback and store the result
    }
    
    return result; // Return the new array with the processed elements
  }
  
  // Callback function to square a number
  function square(num) {
    return num * num;
  }
  
  // Example array
  const numbers = [1, 2, 3, 4, 5];
  
  // Use the higher-order function to square each number in the array
  const squaredNumbers = processArray(numbers, square);
  
  console.log(squaredNumbers); // [1, 4, 9, 16, 25]
  