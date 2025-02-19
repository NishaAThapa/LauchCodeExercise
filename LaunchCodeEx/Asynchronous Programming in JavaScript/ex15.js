/*
  Exercise 15: Handling Rejected Promises Globally

  Description: 

  Set up a global handler for unhandled promise rejections using 
  window.addEventListener('unhandledrejection', handler). 

  Test it by creating a rejected promise without a catch block.
*/
// Global handler for unhandled promise rejections
window.addEventListener("unhandledrejection", event => {
    console.error("🚨 Unhandled Promise Rejection:", event.reason);
    document.getElementById("section-1-output").innerHTML = 
        `<p style="color:red;">❌ Unhandled Promise Rejection: ${event.reason}</p>`;
});

// Function to create an unhandled rejected promise
function triggerUnhandledRejection() {
    // This promise is rejected but lacks a .catch() block
    new Promise((_, reject) => reject("This is an unhandled rejection!"));
}

// Attach event listener to the button
document.getElementById("exercise-15-btn").addEventListener("click", triggerUnhandledRejection);
