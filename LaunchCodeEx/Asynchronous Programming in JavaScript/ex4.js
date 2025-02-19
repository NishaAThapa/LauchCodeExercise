/*
  Exercise 4: Creating a Promise

  Description: 

  In the space below, rewrite the `getDataCallback` function from Exercise 2 to 
  return a Promise instead of using a callback. 

  Name it `getDataPromise`.  

  Display the returned data in the #section-2-output div when the 
  #exercise-4-btn is clicked.
*/
function getDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = "Fetched Data using Promise!";
            resolve(data);
        }, 2000);
    });
}

document.getElementById("exercise-4-btn").addEventListener("click", () => {
    const outputDiv = document.getElementById("section-2-output");
    
    getDataPromise().then((data) => {
        outputDiv.textContent = data; // Display data in the div
    }).catch((error) => {
        outputDiv.textContent = "Error: " + error; // Handle errors
    });
});
