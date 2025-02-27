/**Exercise 15: IIFE and Module Pattern

Problem:

Implement a simple module called `stringModule` using an IIFE. 

The module should expose methods `toUpperCase`, 
`toLowerCase`, and `capitalize`, 
operating on a private 'string' variable. 

Demonstrate that the private 'string' cannot be accessed directly. */

// Create the stringModule using an IIFE
const stringModule = (function() {
    // Private variable
    let str = '';
  
    // Method to set the value of the private string
    function setString(value) {
      str = value;
    }
  
    // Method to get the value of the private string (read-only)
    function getString() {
      return str;
    }
  
    // Method to convert the string to uppercase
    function toUpperCase() {
      return str.toUpperCase();
    }
  
    // Method to convert the string to lowercase
    function toLowerCase() {
      return str.toLowerCase();
    }
  
    // Method to capitalize the first letter of the string
    function capitalize() {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  
    // Expose public methods
    return {
      setString: setString,
      getString: getString,
      toUpperCase: toUpperCase,
      toLowerCase: toLowerCase,
      capitalize: capitalize
    };
  })();
  
  // Demonstrate usage
  stringModule.setString('hello world');
  console.log(stringModule.toUpperCase());    // Output: "HELLO WORLD"
  console.log(stringModule.toLowerCase());    // Output: "hello world"
  console.log(stringModule.capitalize());     // Output: "Hello world"
  
  // Trying to access the private 'str' directly will result in undefined
  console.log(stringModule.str);  // Output: undefined
  