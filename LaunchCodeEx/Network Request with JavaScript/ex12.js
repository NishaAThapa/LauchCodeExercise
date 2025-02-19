/*
Exercise 12: Handling Preflight Requests

Description: 

Make a Fetch request with the method DELETE to the api endpoint:
`https://jsonplaceholder.typicode.com/posts/1` 
and observe the preflight OPTIONS request in the Network tab of your 
browser's developer tools.

Fire this fetch request when the #exercise-12-btn is clicked.
*/

document.getElementById('exercise-12-btn').addEventListener('click', async () => {
    const outputElement = document.getElementById('section-2-output');
    outputElement.innerText = 'Attempting to send DELETE request...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        outputElement.innerText = 'DELETE request successful!';
        console.log('Response:', await response.json());

    } catch (error) {
        console.error('Error:', error);
        outputElement.innerText = 'Error occurred while making the DELETE request.';
    }
});
