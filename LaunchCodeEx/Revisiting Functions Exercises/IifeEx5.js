/**Exercise 5: Immediately Invoked Function Expressions (IIFE)

Problem:

Use an IIFE to create a module called `counterModule` that encapsulates a 
private variable 'count'. 

Expose methods `increment`, `decrement`, and `getValue` to 
manipulate and retrieve the value of 'count'. 

Demonstrate that 'count' is not accessible from the global scope. */
const counterModule = (function() {
    // Private variable 'count' inside the IIFE
    let count = 0;
  
    // Exposing public methods to manipulate and access 'count'
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      getValue: function() {
        return count;
      }
    };
  })();
  
  // Demonstrate usage of the module
  console.log(counterModule.getValue()); // Output: 0
  
  counterModule.increment();
  console.log(counterModule.getValue()); // Output: 1
  
  counterModule.increment();
  console.log(counterModule.getValue()); // Output: 2
  
  counterModule.decrement();
  console.log(counterModule.getValue()); // Output: 1
  
  