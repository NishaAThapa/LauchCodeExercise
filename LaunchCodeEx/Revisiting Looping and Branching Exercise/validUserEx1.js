/*Exercise 1: Complex Conditional Logic with Multiple Operators

Problem:

Write a function `validateUser` that accepts an object representing 
a user with properties 'age', 'isAdmin', and 'subscriptionType'. 

The function should return true if the user meets all the following conditions:

- The user is at least 18 years old.
- The user is an admin or has a subscription type of 'pro' or 'enterprise'.
- The user does not have a banned property set to true.

Implement the function using a combination of if-else statements, 
logical operators, and the !== operator for strict inequality.*/

function validateUser(user) {
    // Check if user is at least 18 years old
    if (user.age < 18) {
      return false;
    }
  
    // Check if user is an admin OR has a valid subscription
    if (!(user.isAdmin || user.subscriptionType === 'pro' || user.subscriptionType === 'enterprise')) {
      return false;
    }
  
    // Ensure user is NOT banned
    if (user.banned === true) {
      return false;
    }
  
    // If all conditions pass, return true
    return true;
  }
  
  // Test cases
  const user1 = { age: 25, isAdmin: true, subscriptionType: 'free', banned: false }; //  Valid
  const user2 = { age: 17, isAdmin: false, subscriptionType: 'pro', banned: false }; //  Invalid (underage)
  const user3 = { age: 30, isAdmin: false, subscriptionType: 'basic', banned: false }; //  Invalid (no admin or pro/enterprise)
  const user4 = { age: 22, isAdmin: false, subscriptionType: 'enterprise', banned: false }; //  Valid
  const user5 = { age: 40, isAdmin: true, subscriptionType: 'enterprise', banned: true }; //  Invalid (banned)
  
  console.log(validateUser(user1)); // true
  console.log(validateUser(user2)); // false
  console.log(validateUser(user3)); // false
  console.log(validateUser(user4)); // true
  console.log(validateUser(user5)); // false
  