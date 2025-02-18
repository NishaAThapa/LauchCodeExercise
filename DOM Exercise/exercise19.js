/*
Exercise 19: Simple Drag and Drop

Description: 

Make the element with ID 'drag-source' draggable and implement 
drag and drop functionality to move it to the element with ID 'drop-target'.
*/
// Select the draggable element
let dragSource = document.getElementById("drag-source");

// Select the drop target
let dropTarget = document.getElementById("drop-target");

// Add dragstart event listener to the draggable element
dragSource.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    console.log("Drag started");
});

// Add dragover event listener to allow dropping
dropTarget.addEventListener("dragover", function(event) {
    event.preventDefault();  // Necessary to allow dropping
    console.log("Dragging over drop zone");
});

// Add drop event listener to handle the drop action
dropTarget.addEventListener("drop", function(event) {
    event.preventDefault();  // Prevent default behavior

    let draggedElementId = event.dataTransfer.getData("text/plain");
    let draggedElement = document.getElementById(draggedElementId);

    // Append the dragged element to the drop target
    dropTarget.appendChild(draggedElement);
    console.log("Element dropped successfully");
});
