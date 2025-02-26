/*Exercise 7: Understanding Falsy Values in Complex Conditions

Problem:

Create a function `coalesce` that accepts any number of arguments and 
returns the first argument that is 
not falsy (false, 0, '', null, undefined, NaN). 

Use the logical OR (||) operator to implement this function. */

function coalesce(...args) {
    return args.find(arg => Boolean(arg));
  }
  
  // Test Cases
  console.log(coalesce(null, undefined, 0, "", "Hello", 42)); // "Hello"
  console.log(coalesce(false, 0, "", null, undefined, NaN, "First Truthy")); // "First Truthy"
  console.log(coalesce(0, "", false, NaN)); // undefined (all falsy)
  console.log(coalesce("Valid", "Another", 100)); // "Valid"
  