/*Exercise 13: Enumerability and Property Attributes

Problem:

Create an object `user` with properties 'username', 'password', and 'email'. 

Make 'password' non-enumerable so that it doesn't show up during 
property enumeration or when converting the object to JSON. 

Verify this behavior. */

const user = {
    username: "nisha_thapa",
    password: "secure1234",
    email: "nisha@testing.com",
  };
  
  // Make 'password' non-enumerable using Object.defineProperty
  Object.defineProperty(user, "password", {
    enumerable: false, //  Hides property during enumeration
    writable: true, // Allows modification
    configurable: true, // Can be redefined if needed
  });
  
  //  Verify: Log the object properties using for...in
  console.log("Enumerating properties:");
  for (let key in user) {
    console.log(key); // 'username', 'email' (but NOT 'password')
  }
  
  //  Verify: Convert object to JSON
  console.log("\nJSON representation:", JSON.stringify(user)); 
  // Output: {"username":"john_doe","email":"john@example.com"} (password is hidden)
  
  //  Verify: Direct access still works
  console.log("\nDirect Access:", user.password); // secure123
  
  //  Verify: Object.keys (password should be hidden)
  console.log("\nObject.keys:", Object.keys(user)); // ["username", "email"]
  
  //  Verify: Checking property existence
  console.log("\nHas 'password'?", user.hasOwnProperty("password")); // true
  console.log("\nUsing getOwnPropertyDescriptor:", Object.getOwnPropertyDescriptor(user, "password"));
  