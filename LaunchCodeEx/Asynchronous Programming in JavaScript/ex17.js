/*
  Exercise 17: Using Promise.resolve and Promise.reject

  Description: 

  Create functions that return Promise.resolve and Promise.reject immediately.

  Use them to test promise handling without asynchronous operations.
*/
// Function returning an immediately resolved promise
function getResolvedPromise() {
    return Promise.resolve("✅ Success: Promise Resolved!");
}

// Function returning an immediately rejected promise
function getRejectedPromise() {
    return Promise.reject("❌ Error: Promise Rejected!");
}

// Function to test promise handling
function testPromises() {
    const outputDiv = document.getElementById("section-1-output");
    outputDiv.innerHTML = "<p>Testing promises...</p>";

    // Handle resolved promise
    getResolvedPromise()
        .then(result => {
            outputDiv.innerHTML += `<p style="color:green;">${result}</p>`;
        })
        .catch(error => {
            outputDiv.innerHTML += `<p style="color:red;">${error}</p>`;
        });

    // Handle rejected promise
    getRejectedPromise()
        .then(result => {
            outputDiv.innerHTML += `<p style="color:green;">${result}</p>`;
        })
        .catch(error => {
            outputDiv.innerHTML += `<p style="color:red;">${error}</p>`;
        });
}

// Attach event listener to the button
document.getElementById("exercise-17-btn").addEventListener("click", testPromises);
