/*
  Exercise 20: Converting Callback-based Functions to Promises

  Description: 

  Given a callback-based function `readFileCallback`, wrap it in a 
  function `readFilePromise` that returns a Promise.
*/
// Simulated callback-based function (e.g., reading a file)
function readFileCallback(fileName, callback) {
    setTimeout(() => {
        if (!fileName) {
            callback("❌ Error: No file name provided", null);
        } else {
            callback(null, `📄 File content of ${fileName}`);
        }
    }, 1000);
}

// Converting readFileCallback into a Promise-based function
function readFilePromise(fileName) {
    return new Promise((resolve, reject) => {
        readFileCallback(fileName, (error, data) => {
            if (error) {
                reject(error); // Reject the promise on error
            } else {
                resolve(data); // Resolve the promise with file content
            }
        });
    });
}

// Function to test promise-based file reading
function testReadFile() {
    const outputDiv = document.getElementById("section-1-output");
    outputDiv.innerHTML = "<p>Reading file...</p>";

    readFilePromise("example.txt")
        .then(content => {
            outputDiv.innerHTML += `<p style="color:green;">✅ ${content}</p>`;
        })
        .catch(error => {
            outputDiv.innerHTML += `<p style="color:red;">${error}</p>`;
        });
}

// Attach event listener to the button
document.getElementById("exercise-20-btn").addEventListener("click", testReadFile);
