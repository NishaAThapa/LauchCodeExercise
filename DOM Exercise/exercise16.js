/*
Exercise 16: Using classList.add

Description: 

Add a class 'highlight' to all <p> elements inside the 
section with ID 'content'.
*/
// Select the button with ID 'highlight-btn'
let highlightButton = document.getElementById("highlight-btn");

// Add an event listener to the button
highlightButton.addEventListener("click", function() {
    // Select all <p> elements inside the <section> with ID 'content'
    let paragraphs = document.querySelectorAll("#content p");

    // Loop through each paragraph and add the 'highlight' class
    paragraphs.forEach(function(p) {
        p.classList.add("highlight");
    });

    console.log("Highlight class added to paragraphs.");
});
