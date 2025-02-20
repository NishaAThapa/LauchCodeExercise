/*Exercise 12: Memory Management and Garbage Collection

Problem:

Explain how JavaScript's memory management works concerning the 
stack and the heap. 

Provide an example where improper handling of closures can lead to memory leaks.*/

function createLeak() {
    const largeArray = new Array(1000000).fill("*");
    return function () {
      console.log(largeArray.length);
    };
  }
  
  let leakyFunction = createLeak();
  
  // leakyFunction holds a reference to largeArray through closure
  // Even if we don't use leakyFunction, largeArray remains in memory
  
  // To prevent the leak, set leakyFunction to null when done
  leakyFunction = null;
  
  /*
      Explanation Continued:
  
      - The `createLeak` function creates a large array and 
              returns a function that references it.
  
      - The returned function forms a closure over 'largeArray', 
              preventing it from being garbage collected.
  
      -If `leakyFunction` is not needed, setting it to null allows 
          'largeArray' to be garbage collected.
          
      -Properly managing references is crucial to avoid memory leaks.
  
  */