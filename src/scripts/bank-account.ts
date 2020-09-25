import {AccountType} from './enums'

export abstract class BankAccount {
    private _balance = 0; //field, setting to a number sets type inference to number
    id: number;
    title: string;
    abstract accountType: AccountType; //ensures child classes define accountType

    constructor(accountSettings: any){
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance
    }

    abstract getAccountInfo(): any; 

    get balance() {
        return this._balance // get block
    }

    set balance(value: number) { //set block
        if (value > 0) {
            this._balance = value;
        }
    }
    
    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount
        } else {
            alert('Cannot deposit negative amount.')
        }
    }

    withdrawal(amount: number) {
        if (amount < this.balance) {
            this.balance -= amount;
        } else {
            alert('Insufficient funds.')
        }
    }
}