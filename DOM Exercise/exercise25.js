/*
Exercise 25: Using Event Delegation

Description: 

Instead of adding event listeners to each <li> in 'item-list', 
add a single event listener to 'item-list' that logs the 
text of the clicked list item.
*/
// Select the 'item-list' <ul> element
let itemList = document.getElementById("item-list");

// Add event listener to the parent <ul>, not individual <li> elements
itemList.addEventListener("click", function(event) {
    // Check if the clicked element is an <li>
    if (event.target.tagName === "LI") {
        console.log(`You clicked: ${event.target.textContent}`);
    }
});
