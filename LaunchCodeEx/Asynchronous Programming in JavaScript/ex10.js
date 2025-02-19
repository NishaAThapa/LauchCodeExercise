/*
  Exercise 10: Sequential API Requests with async/await

  Description: 

  When the #exercise-10-btn is clicked, fetch two posts 
  sequentially from https://jsonplaceholder.typicode.com/posts/5 and 
  https://jsonplaceholder.typicode.com/posts/6 using async/await. 

  Display both posts in the #section-1-output div.
*/



async function fetchSequentialPosts() {
    const outputDiv = document.getElementById("section-1-output");
    outputDiv.innerHTML = "Fetching posts...";

    try {
        // Fetch first post
        const response1 = await fetch("https://jsonplaceholder.typicode.com/posts/5");
        if (!response1.ok) throw new Error("Failed to fetch Post 5");
        const post1 = await response1.json();

        // Display first post
        outputDiv.innerHTML = `<h3>Post 5</h3><p>${post1.title}</p><hr>`;

        // Fetch second post (only after the first one completes)
        const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/6");
        if (!response2.ok) throw new Error("Failed to fetch Post 6");
        const post2 = await response2.json();

        // Display second post
        outputDiv.innerHTML += `<h3>Post 6</h3><p>${post2.title}</p>`;
    } catch (error) {
        outputDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}

// Add event listener to the button
document.getElementById("exercise-10-btn").addEventListener("click", fetchSequentialPosts);
