/*Exercise 4: Advanced Comparison Operators and Type Coercion

Problem:

Write a function areValuesEqual that compares two values and 
returns true if they are equal in value AND type, and false otherwise. 

Handle cases where values are objects, arrays, or functions by 
comparing their references. */

function areValuesEqual(value1, value2) {
    // Use strict equality for direct comparison
    if (value1 === value2) {
      return true;
    }
  
    // If either value is not an object (null is an object in JS), return false
    if (typeof value1 !== "object" || typeof value2 !== "object" || value1 === null || value2 === null) {
      return false;
    }
  
    // Compare references (objects, arrays, functions)
    return value1 === value2;
  }
  
  // Test cases
  console.log(areValuesEqual(5, 5));               // true (same value & type)
  console.log(areValuesEqual(5, "5"));            // false (different types)
  console.log(areValuesEqual(null, null));        // true (both null)
  console.log(areValuesEqual({}, {}));            // false (different object references)
  console.log(areValuesEqual([], []));            // false (different array references)
  console.log(areValuesEqual(function() {}, function() {})); // false (different function references)
  
  const obj = { key: "value" };
  console.log(areValuesEqual(obj, obj));          // true (same reference)
  
  const arr = [1, 2, 3];
  console.log(areValuesEqual(arr, arr));          // true (same reference)

  