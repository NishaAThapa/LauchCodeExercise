/*

  Exercise 1: Understanding Synchronous vs. Asynchronous Code

  Description: 

  Write a function `syncFunction` that logs the numbers 1 to 3 synchronously. 

  Then, write an `asyncFunction` that logs the numbers 1 to 3 asynchronously 
  using setTimeout with a delay of 0. 

  Observe the order of execution.
*/



function syncFunction() {
    console.log(1);
    console.log(2);
    console.log(3);
    document.getElementById("section-1-output").innerText = "Sync Function Output: \n1\n2\n3";
}

function asyncFunction() {
    setTimeout(() => console.log(1), 0);
    setTimeout(() => console.log(2), 0);
    setTimeout(() => console.log(3), 0);

    setTimeout(() => {
        document.getElementById("section-1-output").innerText = "Async Function Output: \n1\n2\n3";
    }, 0);
}

// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sync-btn").addEventListener("click", syncFunction);
    document.getElementById("async-btn").addEventListener("click", asyncFunction);
});
