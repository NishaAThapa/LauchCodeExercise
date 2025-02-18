/*
Exercise 17: Using classList.toggle

Description: 

Add a click event listener to the button with ID 'color-button' that 
toggles the class 'active' on itself.
*/

// Select the button with ID 'color-button'
let colorButton = document.getElementById("color-button");

// Add a click event listener to the button
colorButton.addEventListener("click", function() {
    // Toggle the 'active' class on the button
    colorButton.classList.toggle("active");

    console.log("Button class toggled. Current classes:", colorButton.className);
});
