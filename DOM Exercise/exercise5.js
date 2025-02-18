/*Exercise 5: Accessing Child Nodes

Description: 

Select the <ul> with ID 'item-list' and log the number of 
its child elements to the console. */

// Select the <ul> element with ID 'item-list'
let itemList = document.getElementById("item-list");

// Get all child elements (list items)
let childElements = itemList.children; 

// Log the number of child elements to the console
console.log("Number of child elements:", childElements.length);
