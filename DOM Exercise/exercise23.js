/*
Exercise 23: Debouncing Function Calls

Description: 

Implement a debounced resize event handler that logs the 
new window size after the user stops resizing the browser window for 
500 milliseconds.
*/

// Variable to hold the timeout ID
let resizeTimeout;

// Debounced resize event handler
function handleResize() {
    // Clear the previous timeout if it's still running
    clearTimeout(resizeTimeout);

    // Set a new timeout for 500ms after the user stops resizing
    resizeTimeout = setTimeout(() => {
        // Log the new window size (width and height)
        console.log(`New window size: ${window.innerWidth}x${window.innerHeight}`);
    }, 500);  // 500 milliseconds delay
}

// Add the resize event listener to the window
window.addEventListener("resize", handleResize);
