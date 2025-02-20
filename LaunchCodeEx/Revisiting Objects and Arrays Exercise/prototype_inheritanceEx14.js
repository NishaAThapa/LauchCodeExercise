/*Exercise 14: Implementing Inheritance with Prototypes

Problem:

Implement a simple class hierarchy without using ES6 classes. 

Create a `Shape` constructor function with a method 'area' that returns 0. 

Then, create a `Rectangle` constructor that inherits from `Shape` and 
overrides the 'area' method to compute the area of a rectangle. */

// Step 1: Define the Shape constructor function
function Shape() {}

// Step 2: Define a generic 'area' method on Shape's prototype
Shape.prototype.area = function () {
  return 0; // Default behavior for a generic shape
};

// Step 3: Define the Rectangle constructor function
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// Step 4: Inherit from Shape using Object.create()
Rectangle.prototype = Object.create(Shape.prototype);

// Step 5: Restore the constructor reference for Rectangle
Rectangle.prototype.constructor = Rectangle;

// Step 6: Override the 'area' method for Rectangle
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

// Step 7: Testing the Inheritance and Method Overriding
const genericShape = new Shape();
console.log("Generic Shape Area:", genericShape.area()); // Expected: 0

const myRectangle = new Rectangle(5, 10);
console.log("Rectangle Area:", myRectangle.area()); // Expected: 50

// Step 8: Verify that Rectangle is inheriting from Shape
console.log(myRectangle instanceof Rectangle); // true
console.log(myRectangle instanceof Shape); // true
console.log(Rectangle.prototype.constructor === Rectangle); // true
