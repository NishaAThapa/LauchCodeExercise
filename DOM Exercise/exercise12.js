/*
Exercise 12: Stopping Event Propagation

Description: 

Modify the previous exercise to prevent the click event on 
the button from bubbling up to the section.
*/

// Select the <section> with ID 'interactive'
let section = document.getElementById("interactive");

// Select the <button> with ID 'color-button'
let button = document.getElementById("color-button");

// Add a click event listener to the section
section.addEventListener("click", function() {
    console.log("Section was clicked!");
});

// Add a click event listener to the button and stop event propagation
button.addEventListener("click", function(event) {
    console.log("Button was clicked!");
    event.stopPropagation();  // Prevents event from bubbling up to the section
});


