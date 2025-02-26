/*Exercise 8: Object Equality and Memory References

Problem:

Write a function `areObjectsEqual` that takes two objects and returns 
true if they are equal by value, meaning they have the same properties and 
values (deep equality), and false otherwise. 

The function should handle nested objects and arrays. */
function areObjectsEqual(obj1, obj2) {
    // If both are strictly equal, return true (same reference or primitive value)
    if (obj1 === obj2) return true;
  
    // If either is null or not an object, return false
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
      return false;
    }
  
    // Get keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // If number of properties differ, objects are not equal
    if (keys1.length !== keys2.length) return false;
  
    // Recursively check each key-value pair
    for (let key of keys1) {
      if (!keys2.includes(key) || !areObjectsEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    return true;
  }
  
  // Test Cases
  const objA = { a: 1, b: { c: 2, d: [3, 4] } };
  const objB = { a: 1, b: { c: 2, d: [3, 4] } };
  const objC = { a: 1, b: { c: 2, d: [3, 5] } };
  
  console.log(areObjectsEqual(objA, objB)); // true
  console.log(areObjectsEqual(objA, objC)); // false
  console.log(areObjectsEqual({ x: 10 }, { x: 10 })); // true
  console.log(areObjectsEqual({ x: 10 }, { y: 10 })); // false
  console.log(areObjectsEqual(null, null)); // true
  console.log(areObjectsEqual(null, {})); // false
  console.log(areObjectsEqual([1, 2, 3], [1, 2, 3])); // true
  console.log(areObjectsEqual([1, 2], [1, 2, 3])); // false
  
