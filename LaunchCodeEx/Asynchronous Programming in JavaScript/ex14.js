/*
  Exercise 14: Using Promise.any

  Description: 

  Implement functionality to fetch data from multiple sources using Promise.any 
  and display the first successful response to #section-1-output when the 
  #exercise-14-btn is clicked.

    - "https://jsonplaceholder.typicode.com/invalid-url1"
    - ""https://jsonplaceholder.typicode.com/invalid-url2"
    - "https://jsonplaceholder.typicode.com/posts/2"
*/

async function fetchFirstSuccessfulPost() {
    const outputDiv = document.getElementById("section-1-output");
    outputDiv.innerHTML = "Fetching post...";

    const urls = [
        "https://jsonplaceholder.typicode.com/invalid-url1",
        "https://jsonplaceholder.typicode.com/invalid-url2",
        "https://jsonplaceholder.typicode.com/posts/2"
    ];

    // Create fetch promises
    const fetchPromises = urls.map(url => fetch(url).then(response => {
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        return response.json();
    }));

    try {
        // Use Promise.any to get the first successful response
        const result = await Promise.any(fetchPromises);
        outputDiv.innerHTML = `<h3>First Successful Post:</h3> 
                               <p><strong>Title:</strong> ${result.title}</p>`;
    } catch (error) {
        // If all fail, display an error
        outputDiv.innerHTML = `<p style="color:red;">❌ All requests failed: ${error}</p>`;
    }
}

// Add event listener to the button
document.getElementById("exercise-14-btn").addEventListener("click", fetchFirstSuccessfulPost);
