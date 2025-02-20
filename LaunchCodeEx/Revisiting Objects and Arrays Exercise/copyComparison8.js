/*
	Exercise 8: Shallow vs. Deep Copying of Arrays
	
	Problem:

	Demonstrate the difference between shallow and deep copying of 
	arrays containing objects. 
	
	Given the array:
*/

//const originalArray = [{ a: 1 }, { b: 2 }, { c: 3 }];

/*
	Create a shallow copy and a deep copy. 
	
	Modify a property in one of the objects in both copies and 
	show how it affects the original array.
*/
// Step 1: Define the original array
const originalArray = [{ a: 1 }, { b: 2 }, { c: 3 }];

console.log("Original Array:", JSON.stringify(originalArray));

// Step 2: Create a shallow copy using the spread operator
const shallowCopy = [...originalArray];

// Step 3: Create a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(originalArray));

// Step 4: Modify a property inside the shallow copy
shallowCopy[0].a = 100;

// Step 5: Modify a property inside the deep copy
deepCopy[1].b = 200;

// Step 6: Show how modifications affect the original array
console.log("After modifying shallow copy:");
console.log("Shallow Copy:", JSON.stringify(shallowCopy));
console.log("Original Array:", JSON.stringify(originalArray));

console.log("After modifying deep copy:");
console.log("Deep Copy:", JSON.stringify(deepCopy));
console.log("Original Array (remains unchanged):", JSON.stringify(originalArray));
