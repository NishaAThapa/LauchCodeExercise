/**Exercise 15: Advanced Use of Switch Statements

Problem:

Implement a function `evaluateOperation` that takes two numbers and 
a string representing an operator ('+', '-', '*', '/', '%', '^') and returns 
the result of applying that operator to the two numbers. 

Use a switch statement and ensure proper handling of invalid operators. */

function evaluateOperation(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      case "%":
        return num2 !== 0 ? num1 % num2 : "Error: Modulus by zero";
      case "^":
        return Math.pow(num1, num2);
      default:
        return "Error: Invalid operator";
    }
  }
  
  // **Example Usage**
  console.log(evaluateOperation(5, 3, "+")); // 8
  console.log(evaluateOperation(10, 2, "-")); // 8
  console.log(evaluateOperation(4, 3, "*")); // 12
  console.log(evaluateOperation(10, 0, "/")); // Error: Division by zero
  console.log(evaluateOperation(10, 3, "%")); // 1
  console.log(evaluateOperation(2, 3, "^")); // 8
  console.log(evaluateOperation(4, 5, "&")); // Error: Invalid operator
  