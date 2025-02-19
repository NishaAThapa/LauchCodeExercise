/* Exercise 1: Making a Simple GET Request with Fetch

	Description: 

	Use the Fetch API to make a GET request to 
	https://jsonplaceholder.typicode.com/posts/1
	when the button with ID 'exercise-1-btn' is clicked. 

	Display the response data in the div with ID 'section-1-output'*/ 

    document.getElementById('exercise-1-btn').addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json()) // Convert the response to JSON
            .then(data => {
                document.getElementById('section-1-output').innerText = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                document.getElementById('section-1-output').innerText = 'Error: ' + error.message;
            });
    });
    