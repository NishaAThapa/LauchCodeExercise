/*
  Exercise 8: Handling Errors in Promise Chains

  Description: 

  Modify the chain from Exercise 7 to handle errors that may occur in `processData`. 

  Simulate an error and ensure it is caught and logged.

  Display the returned data in the #section-2-output div when the 
  #exercise-8-btn is clicked.
*/

// Function that simulates fetching data (returns a Promise)
function getDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.3; // 70% chance of success
            if (success) {
                resolve("Raw Data: User Info");
            } else {
                reject("Error: Unable to fetch data.");
            }
        }, 2000);
    });
}

// Function to process the fetched data (returns a Promise)
function processData(fetchedData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5; // 50% chance of success
            if (success) {
                resolve(fetchedData + " → Processed Data");
            } else {
                reject("Error: Processing failed.");
            }
        }, 1000);
    });
}

// Handling the Promise with chaining and error handling
document.getElementById("exercise-8-btn").addEventListener("click", () => {
    const outputDiv = document.getElementById("section-2-output");
    outputDiv.textContent = "Fetching data...";

    getDataPromise()
        .then((data) => {
            outputDiv.textContent = "Step 1: " + data;
            return processData(data); // Process fetched data
        })
        .then((processedData) => {
            outputDiv.textContent = "Step 2: " + processedData;
        })
        .catch((error) => {
            outputDiv.textContent = "Error: " + error;
        })
        .finally(() => {
            console.log("Operation completed");
        });
});
