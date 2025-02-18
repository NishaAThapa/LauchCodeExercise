/*Exercise 4: Navigating the DOM Tree

Description: 

Select the element with ID 'introduction' and access its parent node. 
Log the parent node's tag name to the console.
*/
// Select the element with ID 'introduction'
let introElement = document.getElementById("introduction");

// Access its parent node
let parentElement = introElement.parentNode;

// Log the parent's tag name to the console
console.log("The parent element's tag name is:", parentElement.tagName);
