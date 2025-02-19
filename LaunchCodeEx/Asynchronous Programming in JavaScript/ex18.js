/*
  Exercise 18: Implementing a Simple Promise-based Timeout

  Description: 

  Create a function `delay` that returns a promise that resolves 
  after a specified number of milliseconds. 

  Use it to delay actions in your code.
*/
// Function that returns a promise resolving after a specified delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to demonstrate the delay
async function runDelayedAction() {
    const outputDiv = document.getElementById("section-1-output");
    outputDiv.innerHTML = "<p>Waiting for 3 seconds...</p>";

    await delay(3000); // Wait for 3 seconds

    outputDiv.innerHTML += "<p style='color:green;'>✅ Action executed after delay!</p>";
}

// Attach event listener to button
document.getElementById("exercise-18-btn").addEventListener("click", runDelayedAction);
