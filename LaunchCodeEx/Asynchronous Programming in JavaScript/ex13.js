/*
  Exercise 13: Using Promise.allSettled

  Description: 

  When the #exercise-13-btn is clicked, make multiple fetch requests 
  where some may fail:
    - "https://jsonplaceholder.typicode.com/posts/23"
    - "https://jsonplaceholder.typicode.com/invalid-url"
    - "https://jsonplaceholder.typicode.com/posts/25"

  Use Promise.allSettled to handle all outcomes and display the statuses
  in #section-1-output.
*/
async function fetchAllSettledPosts() {
    const outputDiv = document.getElementById("section-1-output");
    outputDiv.innerHTML = "Fetching posts...";

    const urls = [
        "https://jsonplaceholder.typicode.com/posts/23",
        "https://jsonplaceholder.typicode.com/invalid-url",
        "https://jsonplaceholder.typicode.com/posts/25"
    ];

    // Create fetch promises
    const fetchPromises = urls.map(url => fetch(url).then(
        response => response.ok ? response.json() : Promise.reject(`HTTP Error: ${response.status}`)
    ));

    // Use Promise.allSettled to handle all outcomes
    const results = await Promise.allSettled(fetchPromises);

    // Display results
    outputDiv.innerHTML = "<h3>Fetch Results:</h3>";
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            outputDiv.innerHTML += `<p style="color:green;">✅ Post ${urls[index]} - Success: ${result.value.title}</p>`;
        } else {
            outputDiv.innerHTML += `<p style="color:red;">❌ Post ${urls[index]} - Failed: ${result.reason}</p>`;
        }
    });
}

// Add event listener to the button
document.getElementById("exercise-13-btn").addEventListener("click", fetchAllSettledPosts);
