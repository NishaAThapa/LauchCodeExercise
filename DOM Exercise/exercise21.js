/*
Exercise 21: Cloning Nodes

Description: 

Clone the element with ID 'main-title' and 
append the clone to the <footer> element.
*/

// Select the element with ID 'main-title'
let mainTitle = document.getElementById("main-title");

// Clone the 'main-title' element
let clonedTitle = mainTitle.cloneNode(true); // 'true' for deep clone (clones child nodes as well)

// Select the footer element
let footer = document.querySelector("footer");

// Append the cloned title to the footer
footer.appendChild(clonedTitle);

console.log("Cloned node appended to footer.");
