/*
  Exercise 6: Consuming Promises with then, catch, and finally

  Description: 

  Modify the `getDataPromise` method from exercise 4 to include a 
  `finally` block that logs "Operation completed" regardless of 
  success or failure.

  - getDataPromise().then().catch().finally()
*/

// Function that returns a Promise (Simulating data fetching)
function getDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5; // Random success/failure
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error: Unable to fetch data.");
            }
        }, 2000);
    });
}

// Handling the Promise with then, catch, and finally
document.getElementById("exercise-6-btn").addEventListener("click", () => {
    const outputDiv = document.getElementById("section-2-output");
    
    getDataPromise()
        .then((data) => {
            outputDiv.textContent = "Success: " + data;
        })
        .catch((error) => {
            outputDiv.textContent = "Error: " + error;
        })
        .finally(() => {
            console.log("Operation completed"); // Always executes
        });
});
