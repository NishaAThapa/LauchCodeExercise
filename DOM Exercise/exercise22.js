/*
Exercise 22: Modifying Styles with JavaScript

Description: 

Change the background color of the <body> when the 
user moves the mouse over the <header> element.
*/

// Select the header element
let header = document.querySelector("header");

// Add event listener for mouseover event on the header
header.addEventListener("mouseover", function() {
    // Change the background color of the body
    document.body.style.backgroundColor = "lightblue";
});

// Optionally, you can also change it back when mouse leaves
header.addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "";  // Reset to original
});
