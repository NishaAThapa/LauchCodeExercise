/*
Exercise 8: Handling Network Errors

Description: 

Simulate a network error by making a request to an invalid URL and 
handle the error gracefully by displaying a message in the 
#section-1-output div.

Have the request fire when the 'exercise-8-btn' btn is clicked.
*/



const exercise8btn = document.getElementById("exercise-8-btn");
exercise8btn.addEventListener("click", () => {
  fetch("https://invalid-url")
    .then((response) => response.json())
    .then((data) => {
      section1OutputDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      section1OutputDiv.textContent = "Network error occurred";
      console.error("Network error:", error);
    });
});
