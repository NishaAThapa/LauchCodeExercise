
/*
Exercise 10: Understanding CORS Errors

Description: 

Make a Fetch request to an API that does not allow cross-origin requests 
when the #exercise-10-btn is clicked. Observe and log the CORS error out to 
#section-2-output.

*/

document.getElementById('exercise-10-btn').addEventListener('click', async () => {
    const outputElement = document.getElementById('section-2-output');
    outputElement.innerText = 'Attempting to fetch data...';

    try {
        // API that typically blocks cross-origin requests
        const response = await fetch('https://api.example.com/protected-data');

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        outputElement.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('CORS Error:', error);
        outputElement.innerText = 'CORS Error: Unable to fetch data due to cross-origin restrictions.';
    }
});
