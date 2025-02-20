/*Exercise 15: Customizing Property Descriptors

Problem:

Create an object `data` with a property 'items' that is an array. 

Use Object.defineProperty to make 'items' read-only and prevent it from 
being deleted, but allow the array's content to be modified.*/ 

// Step 1: Create the object with an 'items' property
const data = {
    items: [1, 2, 3, 4, 5],
  };
  
  // Step 2: Define property attributes using Object.defineProperty
  Object.defineProperty(data, "items", {
    writable: false,       // Prevents reassignment of the property itself
    configurable: false,   // Prevents deletion or redefinition
    enumerable: true,      // Keeps it visible in Object.keys and loops
  });
  
  // Step 3: Verify that reassignment is prevented
  try {
    data.items = [10, 20, 30]; //  This should fail
  } catch (error) {
    console.log("Error: Cannot reassign 'items' property");
  }
  
  // Step 4: Verify that the property cannot be deleted
  delete data.items;
  console.log("After delete attempt:", data.items); // Should still be [1, 2, 3, 4, 5]
  
  // Step 5: Verify that modifying the array contents is allowed
  data.items.push(6);
  console.log("After modifying array:", data.items); //  Expected: [1, 2, 3, 4, 5, 6]
  
  // Step 6: Check property descriptor
  console.log("Property Descriptor:", Object.getOwnPropertyDescriptor(data, "items"));
  