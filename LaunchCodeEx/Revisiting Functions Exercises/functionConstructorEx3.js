/**
Exercise 3: Using the Function Constructor

Problem:

Use the Function constructor to create a function dynamically that 
computes the factorial of a number. 

The function should be named `dynamicFactorial` and accept a single parameter 'n',
which is an integer. */

// Create the dynamicFactorial function using the Function constructor
const dynamicFactorial = new Function('n', `
    if (n === 0 || n === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  `);
  
  // Test the dynamicFactorial function
  console.log(dynamicFactorial(5));  // 120
  console.log(dynamicFactorial(3));  // 6
  console.log(dynamicFactorial(0));  // 1
  