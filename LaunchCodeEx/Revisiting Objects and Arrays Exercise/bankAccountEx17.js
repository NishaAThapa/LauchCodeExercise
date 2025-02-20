/*Exercise 17: Protecting Object Properties with Closures

Problem:

Create a constructor function `BankAccount` that takes an initial balance. 

Provide methods 'deposit' and 'withdraw' to interact with this balance. 

Use closures to protect the balance from being accessed or modified directly. */

// Step 1: Create the BankAccount constructor function
function BankAccount(initialBalance) {
    // Private variable (protected by closure)
    let balance = initialBalance;
  
    // Step 2: Public method to deposit money
    this.deposit = function (amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    };
  
    // Step 3: Public method to withdraw money
    this.withdraw = function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: $${amount}`);
      } else {
        console.log("Insufficient funds or invalid amount.");
      }
    };
  
    // Step 4: Public method to check balance
    this.getBalance = function () {
      return balance;
    };
  }
  
  // Step 5: Create a new BankAccount instance
  const myAccount = new BankAccount(1000);
  
  // Step 6: Interact with the account
  console.log("Initial Balance:", myAccount.getBalance()); // 1000
  
  myAccount.deposit(500);
  console.log("Balance after deposit:", myAccount.getBalance()); // 1500
  
  myAccount.withdraw(200);
  console.log("Balance after withdrawal:", myAccount.getBalance()); // 1300
  
  // Step 7: Attempt to access the private balance directly (will fail)
  console.log("Direct balance access:", myAccount.balance); // undefined
  