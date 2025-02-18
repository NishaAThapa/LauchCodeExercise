/*
Exercise 18: Preventing Default Behavior

Description: 

Add a submit event listener to the form with ID 'input-form' that 
prevents the form from submitting and logs the input value to the console.
*/
// Select the form with ID 'input-form'
let inputForm = document.getElementById("input-form");

// Add a submit event listener to the form
inputForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input field value
    let userInput = document.getElementById("user-input").value;

    // Log the input value to the console
    console.log("Form submitted with input:", userInput);
});
