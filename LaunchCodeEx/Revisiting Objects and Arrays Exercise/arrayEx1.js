/*Exercise 1: Advanced Object Creation and Property Manipulation

Problem:

Create an object `person` with properties 'firstName' and 'lastName'. 

Then, without modifying the original object, add a method 'getFullName' that 
returns the full name of the person. 

Ensure that 'getFullName' is non-enumerable, and cannot be modified or deleted. */

// Step 1: Create the person object
const person = {
    firstName: "Nisha",
    lastName: "Thapa"
  };
  
  // Step 2: Add a non-enumerable, non-configurable, non-writable method
  Object.defineProperty(person, "getFullName", {
    value: function () {
      return this.firstName + " " + this.lastName;
    },
    enumerable: false,   // Method won't show up in Object.keys()
    configurable: false, // Can't be deleted or modified
    writable: false      // Can't be changed
  });
  
  // Step 3: Test the function
  console.log(person.getFullName()); // Expected Output: "John Doe"
  
  // Step 4: Test if the method is enumerable
  console.log(Object.keys(person)); // Expected Output: ["firstName", "lastName"]
  
  // Step 5: Test if the method can be modified
  person.getFullName = function () {
    return "Modified";
  };
  console.log(person.getFullName()); // Expected Output: "John Doe" (unchanged)
  
  // Step 6: Test if the method can be deleted
  delete person.getFullName;
  console.log(person.getFullName()); // Expected Output: "John Doe" (not deleted)
  
