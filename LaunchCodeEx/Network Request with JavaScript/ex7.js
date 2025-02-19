/*
Exercise 7: 

Using Try-Catch for Error Handling

Description: 

Use the Fetch API to make a GET request to 
`https://jsonplaceholder.typicode.com/posts/5`
when the button with ID 'exercise-7-btn' is clicked. 

During the fetch response chain, convert the response to text.

Using async/await syntax to make this fetch call.

Wrap the Fetch call inside a try-catch block to handle any exceptions 
that may be thrown.

Display the result in the #section-1-output div.

*/
document.getElementById('exercise-7-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/5');
        
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`); // Handle non-200 responses
        }

        const data = await response.text(); // Convert response to text
        document.getElementById('section-1-output').innerText = data;
    } catch (error) {
        document.getElementById('section-1-output').innerText = 'Error: ' + error.message;
    }
});
