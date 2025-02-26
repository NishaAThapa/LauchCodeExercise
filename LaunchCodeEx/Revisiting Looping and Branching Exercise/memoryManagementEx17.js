/**
Exercise 17: Memory Management with Reference Types

Problem:

Demonstrate how copying objects in JavaScript affects memory references. 

Create an object `original` and a shallow copy `copy`. 

Modify a nested property in `copy` and show how it affects `original`. 

Then, create a deep copy to prevent this issue. */

// Step 1: Create an object with a nested property
const original = {
    name: "Alice",
    details: {
      age: 25,
      city: "New York"
    }
  };
  
  // Step 2: Create a shallow copy (copy by reference)
  const copy = { ...original };
  
  // Modifying the shallow copy
  copy.details.city = "Los Angeles";
  
  // Step 3: Show that the original object is also affected
  console.log(original.details.city); // Output: "Los Angeles" (Unexpected change)
  console.log(copy.details.city);     // Output: "Los Angeles"
  
  // Step 4: Create a deep copy using JSON methods (basic deep copy)
  const deepCopy = JSON.parse(JSON.stringify(original));
  
  // Modify deep copy
  deepCopy.details.city = "Chicago";
  
  // Step 5: Show that the original object remains unchanged
  console.log(original.details.city); // Output: "Los Angeles" (original stays same)
  console.log(deepCopy.details.city); // Output: "Chicago" (only deep copy is modified)
  
  // Alternative: Using structuredClone() for deep copy (modern browsers)
  const structuredCloneCopy = structuredClone(original);
  structuredCloneCopy.details.city = "San Francisco";
  
  console.log(original.details.city); // Output: "Los Angeles"
  console.log(structuredCloneCopy.details.city); // Output: "San Francisco"
  