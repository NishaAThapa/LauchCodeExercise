/**Exercise 8: Using the Arguments Object

Problem:

Write a function `multiplyAll` that accepts any number of numerical arguments 
and returns their product. 

Use the 'arguments' object to handle an indefinite number of arguments. */

function multiplyAll() {
    let product = 1; // Initialize product to 1 (multiplicative identity)
    
    // Loop through the 'arguments' object
    for (let i = 0; i < arguments.length; i++) {
      product *= arguments[i]; // Multiply each argument with the product
    }
    
    return product; // Return the final product
  }
  
  // Test the function with different numbers of arguments
  console.log(multiplyAll(2, 3, 4));  // 24 (2 * 3 * 4)
  console.log(multiplyAll(5, 6));     // 30 (5 * 6)
  console.log(multiplyAll(1, 7, 8, 9)); // 504 (1 * 7 * 8 * 9)
  console.log(multiplyAll());         // 1 (no arguments passed, returns the identity value for multiplication)
  