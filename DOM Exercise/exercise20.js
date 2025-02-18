/*
Exercise 20: Using dataTransfer in Drag and Drop

Description: 

Use event.dataTransfer to pass custom data during the drag and drop operation 
in the previous exercise. 

For example, pass a message and log it when the drop occurs.
*/

// Select the draggable element
let dragSource = document.getElementById("drag-source");

// Select the drop target
let dropTarget = document.getElementById("drop-target");

// Add dragstart event listener to the draggable element
dragSource.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", "Custom Message: Element has been dragged!");
    event.dataTransfer.setData("element-id", event.target.id); // Pass element ID
    console.log("Drag started and data set");
});

// Add dragover event listener to allow dropping
dropTarget.addEventListener("dragover", function(event) {
    event.preventDefault();  // Necessary to allow dropping
});

// Add drop event listener to handle the drop action
dropTarget.addEventListener("drop", function(event) {
    event.preventDefault();  // Prevent default behavior

    // Retrieve custom data from the drag event
    let customMessage = event.dataTransfer.getData("text/plain");
    let draggedElementId = event.dataTransfer.getData("element-id");
    let draggedElement = document.getElementById(draggedElementId);

    // Append the dragged element to the drop target
    dropTarget.appendChild(draggedElement);

    // Log the custom message
    console.log(customMessage);
    console.log("Element with ID:", draggedElementId, "was dropped successfully!");
});
