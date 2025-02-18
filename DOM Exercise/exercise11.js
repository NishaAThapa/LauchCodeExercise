/*
Exercise 11: Event Propagation

Description: 

Add click event listeners to the <section> with ID 'interactive' and to 
the <button> with ID 'color-button'.

In each event handler, log a message indicating which element was clicked. 

Observe event bubbling.
*/

// Select the <section> with ID 'interactive'
let section = document.getElementById("interactive");

// Select the <button> with ID 'color-button'
let button = document.getElementById("color-button");

// Add a click event listener to the section
section.addEventListener("click", function() {
    console.log("Section was clicked!");
});

// Add a click event listener to the button
button.addEventListener("click", function(event) {
    console.log("Button was clicked!");
});
