/*
Exercise 24: Optimizing DOM Manipulations

Description: 

Add 100 new list items to ID 'item-list' efficiently by 
using a DocumentFragment. You can create one by using:

`document.createDocumentFragment()`
*/
// Select the 'item-list' <ul> element
let itemList = document.getElementById("item-list");

// Create a DocumentFragment to hold the new list items
let fragment = document.createDocumentFragment();

// Create and append 100 new <li> items to the DocumentFragment
for (let i = 1; i <= 100; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `Item ${i}`;
    fragment.appendChild(listItem);
}

// Append the DocumentFragment to the 'item-list' <ul> element
itemList.appendChild(fragment);

console.log("100 list items added efficiently!");
