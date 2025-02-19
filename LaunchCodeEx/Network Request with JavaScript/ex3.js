/*
Exercise 3: Making a POST Request with Fetch

Description: 

Use the Fetch API to make a POST request to 
`https://jsonplaceholder.typicode.com/posts`
with JSON data when the 'exercise-3-btn' is clicked.  

Display the response of this POST call in the #section-1-output div.
*/

document.getElementById('exercise-3-btn').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // Specify the request method
        headers: {
            'Content-Type': 'application/json' // Set request headers
        },
        body: JSON.stringify({
            title: 'My New Post',
            body: 'This is the content of my post.',
            userId: 1
        }) // Convert the data to JSON
    })
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
        document.getElementById('section-1-output').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('section-1-output').innerText = 'Error: ' + error.message;
    });
});
