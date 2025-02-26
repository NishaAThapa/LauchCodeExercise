/*Exercise 3: Switch Statement with Fallthrough

Problem:

Write a function `getShippingCost` that calculates shipping costs based 
on package weight. 

Use a switch statement with fallthrough to handle the following cases:

- For weights up to 1kg, the cost is $5.
- For weights above 1kg and up to 5kg, the cost is $10.
- For weights above 5kg and up to 10kg, the cost is $15.
- For weights above 10kg, the cost is $20.


Weights are categorized as:

1: up to 1kg
2: above 1kg up to 5kg
3: above 5kg up to 10kg
4: above 10kg

Implement the function so that it returns the 
correct shipping cost based on the weight category. */
function getShippingCost(weight) {
    let cost;
  
    switch (true) {
      case weight <= 1:
        cost = 5;
        break;
      case weight <= 5:
        cost = 10;
        break;
      case weight <= 10:
        cost = 15;
        break;
      default:
        cost = 20;
    }
  
    return `$${cost}`;
  }
  
  // Test cases
  console.log(getShippingCost(0.5)); // $5
  console.log(getShippingCost(3));   // $10
  console.log(getShippingCost(7));   // $15
  console.log(getShippingCost(12));  // $20
  
