/*
  Exercise 16: Combining Promises and Async/Await

  Description: 

  Use both promises and async/await to fetch data and process it. 
    - https://jsonplaceholder.typicode.com/posts/10

  Fetch data using fetch (which returns a promise), then process it in 
  an async function using await.
*/

// Async function to fetch and process data
async function fetchAndProcessData() {
    try {
        // Fetch data (returns a promise)
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/10");

        // Handle non-OK responses
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        // Parse response as JSON (returns a promise)
        let data = await response.json();

        // Display data in section-1-output
        document.getElementById("section-1-output").innerHTML = `
            <h3>Fetched Post:</h3>
            <p><strong>Title:</strong> ${data.title}</p>
            <p>${data.body}</p>
        `;

    } catch (error) {
        console.error("🚨 Error fetching data:", error);
        document.getElementById("section-1-output").innerHTML = 
            `<p style="color:red;">❌ Error: ${error.message}</p>`;
    }
}

// Attach event listener to the button
document.getElementById("exercise-16-btn").addEventListener("click", fetchAndProcessData);
