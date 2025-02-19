/*
Exercise 11: Configuring a CORS Request

Description: 

Make a Fetch request to an API that does not allow cross-origin requests 
when the #exercise-11-btn is clicked. 

Modify the request to include the mode: 'no-cors' option and observe the 
changes in the response.
*/
document.getElementById('exercise-11-btn').addEventListener('click', async () => {
    const outputElement = document.getElementById('section-2-output');
    outputElement.innerText = 'Attempting to fetch data with no-cors mode...';

    try {
        const response = await fetch('https://api.example.com/protected-data', {
            mode: 'no-cors' // Bypass CORS errors but limits access to the response
        });

        console.log(response); // Logging response to observe behavior

        outputElement.innerText = 'Fetch request made with no-cors mode. Check console for details.';

    } catch (error) {
        console.error('Error:', error);
        outputElement.innerText = 'Error occurred while making the request.';
    }
});
