/*
Exercise 13: Updating the UI Based on HTTP Responses

Description: 


Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/`
when the button with ID 'exercise-13-btn' is clicked. 

Update the UI by creating a list of titles from the fetched posts and display
them in #section-2-output

*/

document.getElementById('exercise-13-btn').addEventListener('click', async () => {
    const outputElement = document.getElementById('section-2-output');
    outputElement.innerHTML = 'Loading posts...'; // Show loading message

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const posts = await response.json();
        
        // Create a list of titles
        const list = document.createElement('ul');
        posts.slice(0, 10).forEach(post => {  // Limiting to 10 titles for better UI
            const listItem = document.createElement('li');
            listItem.textContent = post.title;
            list.appendChild(listItem);
        });

        // Update the UI
        outputElement.innerHTML = ''; // Clear previous content
        outputElement.appendChild(list);

    } catch (error) {
        console.error('Error:', error);
        outputElement.innerHTML = 'Error loading posts.';
    }
});
