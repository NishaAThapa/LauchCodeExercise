/**Exercise 17: 'arguments' Object in Arrow Functions

Problem:

Demonstrate how the `arguments` object behaves differently in 
regular functions versus arrow functions by writing a 
function `compareArguments` that logs the `arguments` object in both cases. */
function compareArguments() {
    // Regular function
    function regularFunction() {
      console.log("Regular function arguments:", arguments);
    }
  
    // Arrow function
    const arrowFunction = () => {
      console.log("Arrow function arguments:", arguments);
    };
  
    // Calling both functions with multiple arguments
    regularFunction(1, 2, 3); // Logs arguments in regular function
    arrowFunction(1, 2, 3);   // Logs arguments in arrow function
  }
  
  // Call the compareArguments function
  compareArguments(4, 5, 6);
  