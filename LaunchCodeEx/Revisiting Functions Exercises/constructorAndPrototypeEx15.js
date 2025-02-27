/**Exercise 16: Function Constructors and Prototypes

Problem:

Create a constructor function `Person` that accepts 'name' and 'age'. 

Add a method `introduce` to its prototype that returns a string 
introducing the person. 

Demonstrate how instances share methods through the prototype. */
// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add the 'introduce' method to the prototype of Person
  Person.prototype.introduce = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };
  
  // Create instances of Person
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  // Demonstrate that both instances share the same 'introduce' method from the prototype
  console.log(person1.introduce());  // Output: "Hello, my name is Alice and I am 30 years old."
  console.log(person2.introduce());  // Output: "Hello, my name is Bob and I am 25 years old."
  
  // Demonstrating that both instances share the 'introduce' method via the prototype
  console.log(person1.introduce === person2.introduce);  // Output: true (they share the same method)
  