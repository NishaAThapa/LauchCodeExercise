/*Exercise 5: Custom Increment/Decrement Operators

Problem:

Create an object `counter` with a property 'value' initialized to 0. 

Add methods 'increment' and 'decrement' that mimic the behavior of the 
increment (++) and decrement (--) operators. 

Ensure that the methods can be used in both prefix and postfix forms, and that 
they return the correct values.*/

const counter = {
    value: 0,
  
    // Mimic Postfix Increment (returns old value, then increments)
    incrementPostfix() {
      return this.value++;
    },
  
    // Mimic Prefix Increment (increments first, then returns new value)
    incrementPrefix() {
      return ++this.value;
    },
  
    // Mimic Postfix Decrement (returns old value, then decrements)
    decrementPostfix() {
      return this.value--;
    },
  
    // Mimic Prefix Decrement (decrements first, then returns new value)
    decrementPrefix() {
      return --this.value;
    }
  };
  
  // Test cases
  console.log(counter.incrementPostfix()); // 0 (returns old value, then increases)
  console.log(counter.value);              // 1 (new value after increment)
  
  console.log(counter.incrementPrefix());  // 2 (increases first, then returns new value)
  console.log(counter.value);              // 2
  
  console.log(counter.decrementPostfix()); // 2 (returns old value, then decreases)
  console.log(counter.value);              // 1
  
  console.log(counter.decrementPrefix());  // 0 (decreases first, then returns new value)
  console.log(counter.value);              // 0
  