/*Exercise 6: Updating Inner HTML

Description: 

Change the inner HTML of the element with ID 'introduction' to 
include a new paragraph saying "This content has been updated!". */

// Select the element with ID 'introduction'
let introElement = document.getElementById("introduction");

// Update its inner HTML with new content
introElement.innerHTML = "This content has been updated! <br> <strong>New paragraph added.</strong>";
