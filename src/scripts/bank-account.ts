import { AccountType } from "./enums";

export class BankAccount {
    private _balance = 0;
    id: number;
    title: string;
    accountType: AccountType;

    constructor(accountSettings: any) {
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance
    }

    get balance() {
        return this._balance;
    }

    set balance(val: number) {
        this._balance = val
    }

    deposit(amount: number) {
        if (amount > 0) {
        this.balance += amount
        } else {
            alert('Deposits may not be negative.')
        }
    }

    withdrawal(amount: number) {
        if (amount < this.balance) {
            if (amount > 0) {
        this.balance -= amount
            } else {
                alert('Withdrawl amount may not be negative.')
            }
        } else {
            alert('Insufficiant Funds')
        }
    }
}