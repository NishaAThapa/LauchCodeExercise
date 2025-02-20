/*
	Exercise 9: Advanced Use of Array.reduce

	Problem:

	Given an array of transactions:
*/

/*const transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 80 },
  ]; */
  
  /*
      Use reduce to calculate the final balance, assuming the 
      starting balance is 0. 
      
      Also, categorize the transactions into deposits and withdrawals.
  */

      // Step 1: Define the transactions array
const transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 80 },
  ];
  
  // Step 2: Use reduce to calculate the final balance and categorize transactions
  const result = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.balance += transaction.amount;
        acc.deposits.push(transaction);
      } else if (transaction.type === "withdrawal") {
        acc.balance -= transaction.amount;
        acc.withdrawals.push(transaction);
      }
      return acc;
    },
    { balance: 0, deposits: [], withdrawals: [] } // Initial accumulator state
  );
  
  // Step 3: Display results
  console.log("Final Balance:", result.balance);
  console.log("Deposits:", result.deposits);
  console.log("Withdrawals:", result.withdrawals);
  