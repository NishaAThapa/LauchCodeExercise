/*Exercise 2: Handling Text Responses

	Description: 


  Use the Fetch API to make a GET request to 
	`https://jsonplaceholder.typicode.com/posts/5`
	when the button with ID 'exercise-2-btn' is clicked. 

  During the fetch response chain, convert the response to text,
	and display the result in the #section-1-output div.
	
	
*/
document.getElementById('exercise-2-btn').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/5')
        .then(response => response.text()) // Convert response to plain text
        .then(data => {
            document.getElementById('section-1-output').innerText = data;
        })
        .catch(error => {
            document.getElementById('section-1-output').innerText = 'Error: ' + error.message;
        });
});

