/*
Exercise 15: Removing Elements from the DOM

Description: 

Remove the first <li> element from the <ul> with ID 'item-list'.
*/
// Select the <ul> element with ID 'item-list'
let itemList = document.getElementById("item-list");

// Select the button with ID 'remove-item'
let removeButton = document.getElementById("remove-item");

// Add a click event listener to the button
removeButton.addEventListener("click", function() {
    // Select the first <li> element inside the <ul>
    let firstItem = itemList.querySelector("li");

    // Check if there is an item to remove
    if (firstItem) {
        // Remove the first <li> element
        itemList.removeChild(firstItem);
        console.log("First item removed.");
    } else {
        console.log("No items left to remove.");
    }
});
