/*Exercise 10: Memory Management with Closures and the Heap

Problem:

Explain how closures can lead to increased memory usage in JavaScript. 

Create an example where a closure holds onto a large object in the heap, 
preventing it from being garbage collected. 

Show how to modify the code to allow for proper garbage collection. */

function createSafeFunction() {
    let largeObject = new Array(1000000).fill("*");
  
    return function () {
      console.log(largeObject[0]);
      largeObject = null; // Release reference to allow garbage collection
    };
  }
  
  const safeFunction = createSafeFunction();
  safeFunction(); // Uses the large object
  
  // Now, the large object can be garbage collected
  