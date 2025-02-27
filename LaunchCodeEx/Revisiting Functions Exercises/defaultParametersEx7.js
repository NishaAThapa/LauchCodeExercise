/**Exercise 7: Default Parameters

Problem:

Create a function `createUser` that accepts two parameters: name and role, 
with role defaulting to the string 'guest' if not provided or if explicitly 
passed as undefined. 

Demonstrate how default parameters work with various argument values, 
including null and undefined. */

function createUser(name, role = 'guest') {
    return {
      name: name,
      role: role
    };
  }
  
  // Demonstrating default parameters with different argument values
  
  // Case 1: Both name and role provided
  const user1 = createUser('Alice', 'admin');
  console.log(user1); // { name: 'Alice', role: 'admin' }
  
  // Case 2: Role is not provided, defaults to 'guest'
  const user2 = createUser('Bob');
  console.log(user2); // { name: 'Bob', role: 'guest' }
  
  // Case 3: Role is explicitly passed as undefined, defaults to 'guest'
  const user3 = createUser('Charlie', undefined);
  console.log(user3); // { name: 'Charlie', role: 'guest' }
  
  // Case 4: Role is explicitly passed as null, does not use default value
  const user4 = createUser('David', null);
  console.log(user4); // { name: 'David', role: null }
  
  