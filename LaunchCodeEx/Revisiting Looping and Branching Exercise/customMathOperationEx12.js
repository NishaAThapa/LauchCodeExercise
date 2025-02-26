/*Exercise 12: Custom Mathematical Operator Functions

Problem:

Implement custom functions for addition (add), subtraction (subtract), 
multiplication (multiply), division (divide), modulus (mod), and 
exponentiation (power) without using the built-in operators (+, -, *, /, %, **). 

Use only the increment (++) and decrement (--) operators, 
loops, and conditional statements. */

// Addition using only increment (++)
function add(a, b) {
    while (b > 0) {
      a++;
      b--;
    }
    while (b < 0) {
      a--;
      b++;
    }
    return a;
  }
  
  // Subtraction using only decrement (--)
  function subtract(a, b) {
    while (b > 0) {
      a--;
      b--;
    }
    while (b < 0) {
      a++;
      b++;
    }
    return a;
  }
  
  // Multiplication using loops
  function multiply(a, b) {
    let result = 0;
    let isNegative = false;
  
    if (b < 0) {
      b = -b;
      isNegative = true;
    }
  
    for (let i = 0; i < b; i++) {
      result = add(result, a);
    }
  
    return isNegative ? subtract(0, result) : result;
  }
  
  // Division using repeated subtraction
  function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
  
    let result = 0;
    let isNegative = false;
  
    if (a < 0) {
      a = -a;
      isNegative = !isNegative;
    }
    if (b < 0) {
      b = -b;
      isNegative = !isNegative;
    }
  
    while (a >= b) {
      a = subtract(a, b);
      result++;
    }
  
    return isNegative ? subtract(0, result) : result;
  }
  
  // Modulus using division logic
  function mod(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
  
    while (a >= b) {
      a = subtract(a, b);
    }
    return a;
  }
  
  // Exponentiation using loops
  function power(base, exponent) {
    if (exponent === 0) return 1;
    
    let result = base;
    let isNegative = exponent < 0;
  
    if (isNegative) exponent = -exponent;
  
    for (let i = 1; i < exponent; i++) {
      result = multiply(result, base);
    }
  
    return isNegative ? divide(1, result) : result;
  }
  
  // Example usage
  console.log(add(5, 3));         // 8
  console.log(subtract(10, 4));   // 6
  console.log(multiply(3, -4));   // -12
  console.log(divide(10, 2));     // 5
  console.log(mod(10, 3));        // 1
  console.log(power(2, 3));       // 8
  console.log(power(2, -3));      // 0 (Integer division limitation)
  