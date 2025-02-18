/*
Exercise 13: Using console.log for Debugging

Description: 

Inside the event listener for the color-button, 
log the current background color of the button before changing 
it to light green.
*/

// Select the button with ID 'color-button'
let button = document.getElementById("color-button");

// Add a click event listener to log the background color and change it
button.addEventListener("click", function() {
    // Get the current background color
    let currentColor = window.getComputedStyle(button).backgroundColor;

    // Log the current background color before changing it
    console.log(`Current Background Color: ${currentColor}`);

    // Change the background color to light green
    button.style.backgroundColor = "lightgreen";
});
