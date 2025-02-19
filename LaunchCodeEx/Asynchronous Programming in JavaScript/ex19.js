/*
  Exercise 19: Sequential Execution with for Loop and await

  Description: 

  Fetch multiple posts sequentially in a loop using async/await. 
  - HINT - `https://jsonplaceholder.typicode.com/posts/${loop_index_number}`

  Display each post inside #section-1-output as it is fetched.
*/
// Function to fetch posts sequentially
async function fetchPostsSequentially() {
    const outputDiv = document.getElementById("section-1-output");
    outputDiv.innerHTML = "<p>Fetching posts sequentially...</p>";

    for (let i = 1; i <= 5; i++) {  // Fetching posts 1 to 5
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`);
            if (!response.ok) throw new Error(`Failed to fetch post ${i}`);
            
            const post = await response.json();
            outputDiv.innerHTML += `<p><strong>Post ${i}:</strong> ${post.title}</p>`;
        } catch (error) {
            outputDiv.innerHTML += `<p style="color:red;">❌ Error fetching post ${i}: ${error.message}</p>`;
        }
    }
}

// Attach event listener to the button
document.getElementById("exercise-19-btn").addEventListener("click", fetchPostsSequentially);
