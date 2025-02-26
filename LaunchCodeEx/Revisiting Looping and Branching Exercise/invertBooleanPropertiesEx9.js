/*Exercise 9: Advanced Usage of the NOT Operator

Problem:

Implement a function `invertBooleanProperties` that takes an object and 
inverts all of its Boolean properties (i.e., true becomes false, and vice versa). 

The function should modify the original object and handle nested objects. */

function invertBooleanProperties(obj) {
    if (typeof obj !== "object" || obj === null) return; // Ignore non-objects or null values
  
    for (let key in obj) {
      if (typeof obj[key] === "boolean") {
        obj[key] = !obj[key]; // Invert the boolean value
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        invertBooleanProperties(obj[key]); // Recursively process nested objects
      }
    }
  }
  
  // Test Case
  const userSettings = {
    darkMode: true,
    notifications: false,
    preferences: {
      autoSave: true,
      sound: false,
    },
  };
  
  console.log("Before:", JSON.stringify(userSettings, null, 2));
  invertBooleanProperties(userSettings);
  console.log("After:", JSON.stringify(userSettings, null, 2));
  