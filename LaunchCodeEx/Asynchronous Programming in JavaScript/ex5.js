/*
  Exercise 5: Promise States

  Description: 

  Explain the three states of a Promise: 
    - pending
    - fulfilled
    - rejected
    
  Create a Promise that intentionally rejects to 
  demonstrate the rejected state.
*/

function rejectedPromiseDemo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("This promise was intentionally rejected!");
        }, 2000);
    });
}

// Handling the rejected promise
document.getElementById("exercise-5-btn").addEventListener("click", () => {
    const outputDiv = document.getElementById("section-2-output");

    rejectedPromiseDemo()
        .then((data) => {
            outputDiv.textContent = "Success: " + data;
        })
        .catch((error) => {
            outputDiv.textContent = "Error: " + error; // Display rejection message
        });
});
