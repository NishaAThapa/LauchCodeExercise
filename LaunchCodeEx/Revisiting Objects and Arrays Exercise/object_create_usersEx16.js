/*Exercise 16: Advanced Use of Object.create and Prototypes

Problem:

Create a function `createUser` that returns an object with a 
'name' property and a method `sayHello`. 

Use Object.create to set the prototype of the returned object to a 
shared prototype object. 

Demonstrate that multiple users share the same prototype.*/

// Step 1: Create a shared prototype object
const userPrototype = {
    sayHello: function () {
      return `Hello, my name is ${this.name}`;
    },
  };
  
  // Step 2: Define the createUser function
  function createUser(name) {
    const user = Object.create(userPrototype); // Set prototype
    user.name = name; // Assign the name property
    return user;
  }
  
  // Step 3: Create multiple user instances
  const user1 = createUser("Nisha");
  const user2 = createUser("Ram");
  
  // Step 4: Test shared prototype
  console.log(user1.sayHello()); // "Hello, my name is Nisha"
  console.log(user2.sayHello()); // "Hello, my name is Ram"
  
  // Step 5: Verify shared prototype
  console.log(Object.getPrototypeOf(user1) === userPrototype); // true
  console.log(Object.getPrototypeOf(user2) === userPrototype); // true
  
  // Step 6: Confirm prototype method is not duplicated
  console.log(user1.hasOwnProperty("sayHello")); // false
  console.log(user2.hasOwnProperty("sayHello")); // false
  