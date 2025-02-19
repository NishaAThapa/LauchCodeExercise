/*
  Exercise 12: Using Promise.race

  Description: 

  Implement a function that uses Promise.race to fetch data from these two URLs:
  - https://jsonplaceholder.typicode.com/posts/16
  - https://jsonplaceholder.typicode.com/posts/20

  Display the result of the first one that resolves to #section-1-output 
  when the #exercise-12-btn is clicked.
*/

async function fetchFastestPost() {
    const outputDiv = document.getElementById("section-1-output");
    outputDiv.innerHTML = "Fetching fastest post...";

    const urls = [
        "https://jsonplaceholder.typicode.com/posts/16",
        "https://jsonplaceholder.typicode.com/posts/20"
    ];

    try {
        // Use Promise.race to return the first resolved fetch
        const response = await Promise.race(urls.map(url => fetch(url)));

        // Check if the response is valid
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        // Parse JSON data
        const post = await response.json();

        // Display the result
        outputDiv.innerHTML = `
            <h3>Fastest Post ${post.id}</h3>
            <p>${post.title}</p>
            <hr>
        `;

    } catch (error) {
        outputDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}

// Add event listener to the button
document.getElementById("exercise-12-btn").addEventListener("click", fetchFastestPost);
