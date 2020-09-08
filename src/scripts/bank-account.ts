import { AccountType } from "./enums";

export abstract class BankAccount {
  balance = 0; // field
  id: number;
  title: string;
  accountType: AccountType

  constructor(accountSettings: any) {
      this.id = accountSettings.id;
      this.title = accountSettings.title;
      this.balance = accountSettings.balance;
  }

  deposit(amount: number) {
    // function
    if (amount !== NaN) {
      this.balance += amount;
    } else {
      alert("Value must be a number");
    }
  }

  withdrawal(amount: number) {
    // function
    if (amount !== NaN) {
      if (amount > this.balance) {
        alert("Insufficient Funds: $35 Overdraft charge applied.");
        amount += 35;
        this.balance -= amount;
      } else {
        this.balance -= amount;
      }
    } else {
      alert("Value must be a number");
    }
  }
}
