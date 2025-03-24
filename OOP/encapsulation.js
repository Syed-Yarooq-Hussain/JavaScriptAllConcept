class BankAccount {
    #balance; // Private variable
  
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.#balance = balance; // Private data
    }
  
    deposit(amount) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    }
  
    getBalance() {
      return this.#balance; // Only accessible via method
    }
  }
  
  const acc = new BankAccount("12345", 1000);
  acc.deposit(500);
  console.log(acc.getBalance());  // ✅ Output: 1500
  console.log(acc.balance);       // ❌ Undefined (Private only access within the class)
  