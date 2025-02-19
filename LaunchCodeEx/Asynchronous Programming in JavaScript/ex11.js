/*
  Exercise 11: Parallel API Requests with Promise.all

  Description: 

  When the #exercise-11-btn is clicked, fetch two posts in parallel 
  from https://jsonplaceholder.typicode.com/posts/10 and 
  https://jsonplaceholder.typicode.com/posts/15 using Promise.all and 
  display the results.
*/

async function fetchParallelPosts() {
    const outputDiv = document.getElementById("section-1-output");
    outputDiv.innerHTML = "Fetching posts...";

    const urls = [
        "https://jsonplaceholder.typicode.com/posts/10",
        "https://jsonplaceholder.typicode.com/posts/15"
    ];

    try {
        // Fetch both posts in parallel using Promise.all
        const responses = await Promise.all(urls.map(url => fetch(url)));
        
        // Check if any request failed
        if (responses.some(response => !response.ok)) {
            throw new Error("One or more requests failed");
        }

        // Parse JSON data
        const posts = await Promise.all(responses.map(response => response.json()));

        // Display the results
        outputDiv.innerHTML = posts.map(post => `
            <h3>Post ${post.id}</h3>
            <p>${post.title}</p>
            <hr>
        `).join('');

    } catch (error) {
        outputDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}

// Add event listener to the button
document.getElementById("exercise-11-btn").addEventListener("click", fetchParallelPosts);
