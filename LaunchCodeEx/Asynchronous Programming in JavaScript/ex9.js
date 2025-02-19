/*
  Exercise 9: Using async and await

  Description: 

  Rewrite the Promise chain from Exercise 7 using async and await. 

  Ensure proper error handling using try-catch.

  Display the returned data in the #section-2-output div when the 
  #exercise-9-btn is clicked.
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

// Async/Await version of the function to fetch and process data
async function handleAsyncData() {
    const outputDiv = document.getElementById("section-2-output");
    outputDiv.textContent = "Fetching data...";

    try {
        const fetchedData = await getDataPromise(); // Await fetching
        outputDiv.textContent = "Step 1: " + fetchedData;

        const processedData = await processData(fetchedData); // Await processing
        outputDiv.textContent = "Step 2: " + processedData;
    } catch (error) {
        outputDiv.textContent = "Error: " + error;
    } finally {
        console.log("Operation completed");
    }
}

// Event listener to trigger the async function
document.getElementById("exercise-9-btn").addEventListener("click", handleAsyncData);
