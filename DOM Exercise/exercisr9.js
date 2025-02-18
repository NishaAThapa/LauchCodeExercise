/*Exercise 9: Removing an Event Listener

Description: 

Remove the code from Exercise 8.

In this file, add an event listener to the button with ID 'alert-button' that 
shows an alert when clicked. 

Then, remove the event listener so that clicking the button no longer 
shows the alert after 5 seconds. */

// Select the button with ID 'alert-button'
let button = document.getElementById("alert-button");

// Define the event listener function
function showAlert() {
    alert("Button Clicked!");
}

// Add the event listener to show the alert when clicked
button.addEventListener("click", showAlert);

console.log("Event listener added. The alert will be removed in 5 seconds...");

// Set a timeout to remove the event listener after 5 seconds
setTimeout(() => {
    button.removeEventListener("click", showAlert);
    console.log("Event listener removed. Button will no longer show an alert.");
}, 5000);
