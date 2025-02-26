/**Exercise 16: Logical Operator Precedence in Complex Conditions

Problem:

Write a function `validateInput` that accepts an object with 
properties 'username', 'password', and 'email'. 

The function should return true if:

- username and password are non-empty strings, and email contains an '@' symbol, 

or

- The user has a property isGuest set to true.


Use logical operators and parentheses to ensure the correct evaluation order. */

function validateInput(user) {
    return (
      (typeof user.username === "string" && user.username.trim() !== "" &&
       typeof user.password === "string" && user.password.trim() !== "" &&
       typeof user.email === "string" && user.email.includes("@")) 
      || user.isGuest === true
    );
  }
  
  // **Example Usage**
  console.log(validateInput({ username: "JohnDoe", password: "secure123", email: "john@example.com" })); 
  // true (valid user)
  
  console.log(validateInput({ username: "Alice", password: "pass123", email: "aliceexample.com" })); 
  // false (invalid email)
  
  console.log(validateInput({ username: "", password: "password", email: "user@example.com" })); 
  // false (empty username)
  
  console.log(validateInput({ isGuest: true })); 
  // true (guest user)
  
  console.log(validateInput({ username: "User", password: "pass", email: "user@example.com", isGuest: true })); 
  // true (valid user and guest flag, still valid)
  