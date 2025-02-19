/*
  Exercise 3: The Callback Pyramid of Doom

  Description: 

  Simulate multiple asynchronous operations using nested callbacks 
  (at least 3 levels deep). 

  Discuss how this leads to the "Callback Pyramid of Doom".
*/

function asyncOperation1(callback) {
    setTimeout(() => {
        console.log("Step 1: Data fetched");
        callback();
    }, 1000);
}

function asyncOperation2(callback) {
    setTimeout(() => {
        console.log("Step 2: Processed data");
        callback();
    }, 1000);
}

function asyncOperation3(callback) {
    setTimeout(() => {
        console.log("Step 3: Saved data");
        callback();
    }, 1000);
}

// Callback Pyramid (Nested Callbacks)
function executeOperations() {
    asyncOperation1(() => {
        asyncOperation2(() => {
            asyncOperation3(() => {
                console.log("All operations completed.");
            });
        });
    });
}

executeOperations();
