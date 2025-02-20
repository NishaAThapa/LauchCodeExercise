/*Exercise 2: Prototypal Inheritance with Object.create


Problem:

Create a prototype object `animal` with a method 'speak' that 
returns the string 'Generic animal sound'. 

Then, create an object `dog` that uses `animal` as its prototype. 

Add a 'speak' method to `dog` that returns the string 'Woof!'. 

Demonstrate how `dog` inherits from `animal` and how method overriding works. */

// Step 1: Create the prototype object 'animal' with a 'speak' method
const animal = {
    speak: function () {
      return "Generic animal sound";
    }
  };
  
  // Step 2: Create 'dog' using 'animal' as its prototype
  const dog = Object.create(animal);
  
  // Step 3: Add a 'speak' method to 'dog' that overrides the inherited one
  dog.speak = function () {
    return "Woof!";
  };
  
  // Step 4: Demonstrate inheritance and method overriding
  console.log(animal.speak()); // Expected Output: "Generic animal sound"
  console.log(dog.speak());    // Expected Output: "Woof!"
  
  // Step 5: Check if 'dog' inherits from 'animal'
  console.log(Object.getPrototypeOf(dog) === animal); // Expected Output: true
  
  // Step 6: Confirm 'dog' has overridden 'speak'
  console.log(dog.hasOwnProperty("speak")); // Expected Output: true
  