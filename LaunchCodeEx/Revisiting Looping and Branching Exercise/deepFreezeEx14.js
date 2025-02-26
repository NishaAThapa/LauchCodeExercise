/*Exercise 14: Object Property Enumeration and Memory Reference

Problem:

Create an object `dataStore` that contains various data types as 
properties (numbers, strings, arrays, objects). 

Write a function `deepFreeze` that recursively freezes the object and 
all nested objects, preventing any modifications. 

Demonstrate that after freezing, properties cannot be changed, 
added, or deleted. */

function deepFreeze(obj) {
    // Retrieve the property names of the object
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        deepFreeze(obj[key]); // Recursively freeze nested objects
      }
    });
  
    return Object.freeze(obj); // Freeze the current object
  }
  
  // Creating the dataStore object with various data types
  const dataStore = {
    number: 42,
    string: "Hello",
    array: [1, 2, 3],
    nestedObject: {
      key1: "value1",
      key2: {
        deepKey: "deepValue",
      },
    },
  };
  
  // Freezing the dataStore object
  deepFreeze(dataStore);
  
  // Demonstration of freezing effect
  console.log(Object.isFrozen(dataStore)); // true
  console.log(Object.isFrozen(dataStore.nestedObject)); // true
  console.log(Object.isFrozen(dataStore.nestedObject.key2)); // true
  
  // Attempting to modify properties
  dataStore.number = 100; // No effect
  dataStore.nestedObject.key1 = "New Value"; // No effect
  dataStore.array.push(4); // No effect
  dataStore.newProperty = "This won't work"; // No effect
  delete dataStore.string; // No effect
  
  console.log(dataStore); // The object remains unchanged
  