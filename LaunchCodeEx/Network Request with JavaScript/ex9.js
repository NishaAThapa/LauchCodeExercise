const controller = new AbortController();
const signal = controller.signal;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('exercise-9-fetch-btn').addEventListener('click', async () => {
    try {
        const responsePromise = fetch('https://jsonplaceholder.typicode.com/posts/1', { signal });

        await sleep(2000); // Simulated delay

        const response = await responsePromise;

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById('section-1-output').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        if (error.name === 'AbortError') {
            document.getElementById('section-1-output').innerText = 'Request was aborted!';
        } else {
            document.getElementById('section-1-output').innerText = 'Error: ' + error.message;
        }
    }
});

document.getElementById('exercise-9-abort-btn').addEventListener('click', () => {
    controller.abort(); // Abort the fetch request
    document.getElementById('section-1-output').innerText = 'Fetch request aborted!';
});
