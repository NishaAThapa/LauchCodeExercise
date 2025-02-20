/*
	Exercise 7: Combining Arrays with Spread Operator
	
	Problem:

	Given two arrays:
*/

//const array1 = [1, 2, 3];
//const array2 = [4, 5, 6];

/*
	Combine them into a single array `combined` using the spread operator. 
	Then, create a deep clone of `combined` and verify that modifying the 
	clone does not affect the original.
*/

// Step 1: Define the two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Step 2: Combine both arrays using the spread operator
const combined = [...array1, ...array2];
console.log("Combined Array:", combined); // Expected Output: [1, 2, 3, 4, 5, 6]

// Step 3: Create a deep clone of `combined`
const clonedArray = [...combined]; // Using spread operator for shallow copy

// Step 4: Modify the cloned array
clonedArray[0] = 100;

// Step 5: Show that modifying `clonedArray` does NOT affect `combined`
console.log("Modified Cloned Array:", clonedArray); // Expected Output: [100, 2, 3, 4, 5, 6]
console.log("Original Combined Array:", combined); // Expected Output: [1, 2, 3, 4, 5, 6]
