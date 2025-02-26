/*Exercise 2: Nested Ternary Operators for Complex Decisions

Problem:

Create a function `calculateDiscount` that takes a customer's 
membershipLevel ('gold', 'silver', 'bronze', or 'none') and a purchaseAmount. 

The function should return the discount percentage based on the following:

- 'gold': 20%
- 'silver': 15%
- 'bronze': 10%
- 'none': 0%

Use nested ternary operators to implement this logic 
in a single return statement.*/

function calculateDiscount(membershipLevel, purchaseAmount) {
    return membershipLevel === 'gold' ? 20 :
           membershipLevel === 'silver' ? 15 :
           membershipLevel === 'bronze' ? 10 :
           0; // Default for 'none'
  }
  
  // Test cases
  console.log(calculateDiscount('gold', 100));    // 20
  console.log(calculateDiscount('silver', 100));  // 15
  console.log(calculateDiscount('bronze', 100));  // 10
  console.log(calculateDiscount('none', 100));    // 0
  console.log(calculateDiscount('platinum', 100)); // 0 (Invalid level)
  