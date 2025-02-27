/**Exercise 9: Rest Parameters

Problem:

Rewrite the `multiplyAll` function from Exercise 8 using 
rest parameters instead of the arguments object. */

function multiplyAll(...numbers) {
    let product = 1; // Initialize product to 1 (multiplicative identity)
    
    // Loop through the 'numbers' array and multiply each one
    for (let number of numbers) {
      product *= number; // Multiply each argument with the product
    }
    
    return product; // Return the final product
  }
  
  // Test the function with different numbers of arguments
  console.log(multiplyAll(2, 3, 4));  // 24 (2 * 3 * 4)
  console.log(multiplyAll(5, 6));     // 30 (5 * 6)
  console.log(multiplyAll(1, 7, 8, 9)); // 504 (1 * 7 * 8 * 9)
  console.log(multiplyAll());         // 1 (no arguments passed, returns the identity value for multiplication)
  