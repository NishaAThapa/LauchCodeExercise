/*Exercise 3: Deep Cloning Objects

Problem:

Write a function `deepClone` that creates a deep copy of a given object, 
including all nested objects and arrays. 

Demonstrate that modifying the clone does not affect the original object. */

// Step 1: Define the deepClone function
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  // Step 2: Create a nested object to test deep cloning
  const original = {
    name: "Nisha",
    age: 30,
    address: {
      city: "Kansas",
      zip: "10001"
    },
    hobbies: ["reading", "traveling"]
  };
  
  // Step 3: Create a deep clone of the original object
  const cloned = deepClone(original);
  
  // Step 4: Modify the cloned object
  cloned.name = "Ram";
  cloned.address.city = "Los Angeles";
  cloned.hobbies.push("coding");
  
  // Step 5: Log both objects to show that the original remains unchanged
  console.log("Original Object:", original);
  console.log("Cloned Object:", cloned);
  