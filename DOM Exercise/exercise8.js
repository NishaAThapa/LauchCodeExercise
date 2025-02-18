/*Exercise 8: Adding an Event Listener

Description: 

Add an event listener to the button with ID 'alert-button' that 
shows an alert with the message "Button Clicked!" when clicked.*/
// Select the button with ID 'alert-button'
let button = document.getElementById("alert-button");

// Add an event listener for the 'click' event
button.addEventListener("click", function() {
    alert("Button Clicked!");
});
