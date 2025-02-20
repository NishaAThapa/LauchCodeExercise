/*Exercise 10: Protecting Objects with Object.freeze and Object.seal

Problem:

Demonstrate the difference between Object.freeze and Object.seal. 

Create an object `config` and:

1. Use Object.seal on it, then try to add, modify, and delete properties.
2. Use Object.freeze on another object `settings`, and 
	 attempt the same operations.

Explain the outcomes. */

// Step 1: Create a `config` object and seal it
const config = { appName: "MyApp", version: "1.0" };
Object.seal(config);

// Attempt operations on the sealed object
config.version = "2.0"; // Allowed: Can modify existing properties
config.newFeature = true; //  Not Allowed: Cannot add new properties
delete config.appName; //  Not Allowed: Cannot delete properties

console.log("Sealed Config:", config); // { appName: "MyApp", version: "2.0" }

// Step 2: Create a `settings` object and freeze it
const settings = { theme: "dark", notifications: true };
Object.freeze(settings);

// Attempt operations on the frozen object
settings.theme = "light"; //  Not Allowed: Cannot modify existing properties
settings.newOption = false; //  Not Allowed: Cannot add new properties
delete settings.notifications; //  Not Allowed: Cannot delete properties

console.log("Frozen Settings:", settings); // { theme: "dark", notifications: true }
