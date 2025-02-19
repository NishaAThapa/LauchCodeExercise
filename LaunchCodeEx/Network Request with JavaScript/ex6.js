/*
Exercise 6: Content Negotiation with Accept Header

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/1`
when the button with ID 'exercise-6-btn' is clicked. 

Modify the GET request to set the 
'Accept' header to 'application/json' and log the 
response headers to the console.

Display the response data in the div with ID 'section-1-output'

*/

document.getElementById('exercise-6-btn').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'GET',
        headers: {
            'Accept': 'application/json' // Set the Accept header to request JSON data
        }
    })
    .then(response => {
        console.log('Response Headers:', [...response.headers.entries()]); // Log headers to console
        return response.json(); // Convert response to JSON
    })
    .then(data => {
        document.getElementById('section-1-output').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('section-1-output').innerText = 'Error: ' + error.message;
    });
});
