/**Exercise 6: Pass-by-Value vs. Pass-by-Reference

Problem:

Write a function `modifyValues` that attempts to modify a number and 
an object passed to it. 

Demonstrate how primitives and objects are handled differently 
when passed as arguments to a function. */

function modifyValues(num, obj) {
    // Modifying the primitive value (number)
    num = num + 10;
  
    // Modifying the reference type (object)
    obj.name = "Modified Object";
  }
  
  const number = 5;
  const object = { name: "Original Object" };
  
  console.log("Before function call:");
  console.log("number:", number); // 5
  console.log("object:", object); // { name: 'Original Object' }
  
  modifyValues(number, object);
  
  console.log("After function call:");
  console.log("number:", number); // 5 (unchanged, pass-by-value)
  console.log("object:", object); // { name: 'Modified Object' } (changed, pass-by-reference)
  