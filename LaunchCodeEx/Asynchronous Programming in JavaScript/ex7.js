/*
  Exercise 7: Chaining Promises

  Description: 

  Create a function `processData` that returns a Promise. 

  Chain it after getDataPromise to process the fetched data. 

  Display the returned data in the #section-2-output div when the 
  #exercise-7-btn is clicked.
*/

// Function that simulates fetching data (returns a Promise)
function getDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5; // Random success/failure
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
            resolve(fetchedData + " → Processed Data");
        }, 1000);
    });
}

// Handling the Promise with chaining
document.getElementById("exercise-7-btn").addEventListener("click", () => {
    const outputDiv = document.getElementById("section-2-output");

    getDataPromise()
        .then((data) => {
            outputDiv.textContent = "Step 1: " + data;
            return processData(data); // Pass the data to next step
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
