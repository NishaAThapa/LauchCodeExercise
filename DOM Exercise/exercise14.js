/*
Exercise 14: Creating and Appending New Elements

Description: 

Create a new <li> element with the text "Item 4" and append it to 
the <ul> with ID 'item-list'.
*/

// Select the <ul> element with ID 'item-list'
let itemList = document.getElementById("item-list");

// Select the button with ID 'add-item'
let addButton = document.getElementById("add-item");

// Add a click event listener to the button
addButton.addEventListener("click", function() {
    // Create a new <li> element
    let newItem = document.createElement("li");

    // Set the text content of the new list item
    newItem.textContent = "Item 4";

    // Append the new <li> element to the <ul>
    itemList.appendChild(newItem);

    console.log("New item added: Item 4");
});
