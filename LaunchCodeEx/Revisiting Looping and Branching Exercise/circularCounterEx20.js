/**Exercise 20: Advanced Use of Increment and Decrement Operators

Problem:

Create a class `CircularCounter` that counts from 0 up to 
a maximum value 'max' and then wraps around to 0 when incremented. 

Implement 'increment' and 'decrement' methods using prefix and postfix forms of 
the increment/decrement operators. 

Ensure that the counter behaves correctly at the boundaries. */

class CircularCounter {
    constructor(max) {
      this.max = max;
      this.value = 0; // Starting value
    }
  
    // Prefix increment
    increment() {
      // If the current value is at max, reset to 0, else increment
      if (this.value === this.max) {
        this.value = 0;
      } else {
        ++this.value;
      }
      return this.value;
    }
  
    // Postfix increment
    incrementPost() {
      const currentValue = this.value;
      if (this.value === this.max) {
        this.value = 0;
      } else {
        this.value++;
      }
      return currentValue;
    }
  
    // Prefix decrement
    decrement() {
      if (this.value === 0) {
        this.value = this.max;
      } else {
        --this.value;
      }
      return this.value;
    }
  
    // Postfix decrement
    decrementPost() {
      const currentValue = this.value;
      if (this.value === 0) {
        this.value = this.max;
      } else {
        this.value--;
      }
      return currentValue;
    }
  
    // To get the current value
    getValue() {
      return this.value;
    }
  }
  
  // Testing the CircularCounter class
  const counter = new CircularCounter(5); // Counter with a maximum value of 5
  
  console.log(counter.increment());      // 1 (Prefix increment)
  console.log(counter.incrementPost());  // 1 (Postfix increment, returns current value before incrementing)
  console.log(counter.increment());      // 2
  console.log(counter.decrement());      // 1 (Prefix decrement)
  console.log(counter.decrementPost());  // 1 (Postfix decrement, returns current value before decrementing)
  console.log(counter.increment());      // 2
  console.log(counter.increment());      // 3
  console.log(counter.increment());      // 4
  console.log(counter.increment());      // 5
  console.log(counter.increment());      // 0 (Wraps around)
  
  console.log(counter.getValue());       // 0 (Final value after wrap-around)
  