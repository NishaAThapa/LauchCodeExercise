/*Exercise 6: Complex Logical Conditions with Short-Circuit Evaluation

Problem:

Write a function `evaluateExpression` that accepts three Boolean functions 
funcA, funcB, and funcC. 

The function should return true if:

- funcA() returns true, or
- funcB() returns true, and funcC() returns false.


Use logical operators to ensure that funcC() is only called if 
funcB() returns true. 

Demonstrate the short-circuit behavior. */
function evaluateExpression(funcA, funcB, funcC) {
    return funcA() || (funcB() && !funcC());
  }
  
  // Test functions
  function trueFunc() {
    console.log("trueFunc called");
    return true;
  }
  
  function falseFunc() {
    console.log("falseFunc called");
    return false;
  }
  
  // Test Cases Demonstrating Short-Circuiting
  console.log(evaluateExpression(trueFunc, falseFunc, trueFunc));  
  // "trueFunc called"
  // Returns: true (funcA is true, funcB and funcC are never called)
  
  console.log(evaluateExpression(falseFunc, trueFunc, falseFunc)); 
  // "falseFunc called"
  // "trueFunc called"
  // "falseFunc called"
  // Returns: true (funcB is true, funcC is false)
  
  console.log(evaluateExpression(falseFunc, trueFunc, trueFunc));  
  // "falseFunc called"
  // "trueFunc called"
  // "trueFunc called"
  // Returns: false (funcB is true, but funcC is also true)
  