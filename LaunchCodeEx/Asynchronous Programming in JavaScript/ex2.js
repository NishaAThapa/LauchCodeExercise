/*
  Exercise 2: Callback Function Example

  Description: 

  Create a function `getDataCallback` that accepts a callback function. 

  Use setTimeout to simulate fetching data asynchronously and then execute the 
  callback with the data. 

  Display the returned data in the #section-2-output div when the 
  #exercise-2-btn is clicked.
*/


// Function that simulates fetching data asynchronously using setTimeout
function getDataCallback(callback) {
    setTimeout(() => {
        const data = "Async Data Retrieved!";
        callback(data); // Execute the callback function with the data
    }, 2000); // Simulating a 2-second delay
}

// Function to handle the button click and call getDataCallback
function handleExercise2Click() {
    getDataCallback((data) => {
        document.getElementById("section-2-output").innerText = `Callback Output: ${data}`;
    });
}

// Attach event listener to the button
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("exercise-2-btn").addEventListener("click", handleExercise2Click);
});
