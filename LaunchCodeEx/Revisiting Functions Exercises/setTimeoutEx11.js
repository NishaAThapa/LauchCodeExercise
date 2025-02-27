/**Exercise 11: setTimeout and Closures

Problem:

Using a for loop, schedule console logs of the numbers from 1 to 5 with a 
delay of 1 second between each using setTimeout. 

Explain the issue with closures in this context if you use `var` to declare
your for loop index variable and how to fix it. */

// Incorrect version
for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
      console.log(i); // Logs the same value (5) for all iterations
    }, 1000);
  }
// corrected version using let
for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
      console.log(i); // Logs the correct value for each iteration
    }, 1000 * i); // Delay increases with each iteration
  }
  