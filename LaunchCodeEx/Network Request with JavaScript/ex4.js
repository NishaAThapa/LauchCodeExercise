/*
Exercise 4: Understanding HTTP Status Codes

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/1`
when the button with ID 'exercise-4-btn' is clicked. 

Modify the GET request to log the HTTP status code to the console. 

Handle the cases for status codes 200 (OK) and 
404 (Not Found) by displaying appropriate messages.

Display the response in the #section-1-output div.
*/

document.getElementById('exercise-4-btn').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    /*fetch('https://jsonplaceholder.typicode.com/posts/99999') // A non-existing post and trying to get error 404:*/

        .then(response => {
            console.log('HTTP Status Code:', response.status); // Log the status code

            if (response.status === 200) {
                return response.json(); // Convert response to JSON if status is OK
            } else if (response.status === 404) {
                throw new Error('Error 404: Resource not found');
            } else {
                throw new Error('Unexpected error: ' + response.status);
            }
        })
        .then(data => {
            document.getElementById('section-1-output').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('section-1-output').innerText = error.message;
        });
});
