/**Exercise 1: Function Declarations vs. Expressions and Hoisting

Problem:

Write code that demonstrates the difference in hoisting behavior between 
function declarations and function expressions. 

Specifically, attempt to call both a function declaration and 
a function expression before they are defined, and explain the results. */

// Function Declaration
console.log(declaredFunction()); // This will work due to hoisting

function declaredFunction() {
  return "I am a function declaration!";
}

// Function Expression (assigned to a variable)
try {
  console.log(expressionFunction()); // This will throw an error because function expressions are not hoisted
} catch (e) {
  console.log(e.message); // "expressionFunction is not a function"
}

var expressionFunction = function() {
  return "I am a function expression!";
};
