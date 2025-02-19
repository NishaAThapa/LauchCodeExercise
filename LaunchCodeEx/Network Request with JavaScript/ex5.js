/*
Exercise 5: Setting Custom HTTP Headers

Description: 

Use the Fetch API to make a POST request to 
`https://jsonplaceholder.typicode.com/posts`
with JSON data when the 'exercise-5-btn' is clicked.  

Add a custom header X-Custom-Header: MyHeaderValue to the request.

Display the response in the #section-1-output div.

*/

document.getElementById('exercise-5-btn').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // Define request method
        headers: {
            'Content-Type': 'application/json', // Specify JSON content
            'X-Custom-Header': 'MyHeaderValue' // Custom header
        },
        body: JSON.stringify({
            title: 'Custom Header Post',
            body: 'This request contains a custom header.',
            userId: 1
        }) // Convert data to JSON
    })
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
        document.getElementById('section-1-output').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('section-1-output').innerText = 'Error: ' + error.message;
    });
});
