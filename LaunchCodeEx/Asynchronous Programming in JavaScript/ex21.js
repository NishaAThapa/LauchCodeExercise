/*
  Exercise 21: Handling Multiple Async Operations with Different Timing

  Description: 

  Create multiple promises that resolve after different delays. 

  Use Promise.all to wait for all to complete and display the results.
*/

// Function to create a promise that resolves after a given delay
function delayResolve(value, time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`✅ Resolved: ${value} after ${time}ms`), time);
    });
}

// Function to test multiple async operations with different delays
function testMultipleAsyncOperations() {
    const outputDiv = document.getElementById("section-1-output");
    outputDiv.innerHTML = "<p>Waiting for all promises to resolve...</p>";

    // Create multiple promises with different delays
    const promise1 = delayResolve("Task 1", 1000);
    const promise2 = delayResolve("Task 2", 2000);
    const promise3 = delayResolve("Task 3", 3000);

    // Wait for all promises to complete using Promise.all
    Promise.all([promise1, promise2, promise3])
        .then(results => {
            outputDiv.innerHTML = "<p style='color:green;'>✅ All promises resolved:</p>";
            results.forEach(result => {
                outputDiv.innerHTML += `<p>${result}</p>`;
            });
        })
        .catch(error => {
            outputDiv.innerHTML += `<p style="color:red;">❌ Error: ${error}</p>`;
        });
}

// Attach event listener to the button
document.getElementById("exercise-21-btn").addEventListener("click", testMultipleAsyncOperations);
