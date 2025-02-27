/**Exercise 14: Using bind(), call(), and apply()

Problem:

Write a function `greet` that accepts a 'greeting' message and logs it 
along with the person's 'name' (this.name). 

Create an object `user` with a 'name' property. 

Use the Function prototype methods call(), apply(), and bind() 
from the `greet` function to invoke `greet` with `user` as `this` 
and explain the differences. */

// Function that accepts a greeting and logs the name using 'this'
function greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
  
  // Create an object 'user' with a 'name' property
  const user = {
    name: 'Alice'
  };
  
  // 1. Using 'call()' to invoke 'greet' with 'this' set to 'user'
  greet.call(user, 'Hello');  // Output: "Hello, Alice!"
  
  // 2. Using 'apply()' to invoke 'greet' with 'this' set to 'user'
  greet.apply(user, ['Hi']);  // Output: "Hi, Alice!"
  
  // 3. Using 'bind()' to create a new function with 'this' permanently set to 'user'
  const boundGreet = greet.bind(user);
  boundGreet('Good morning');  // Output: "Good morning, Alice!"
  