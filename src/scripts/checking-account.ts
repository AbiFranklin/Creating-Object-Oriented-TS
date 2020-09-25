export class CheckingAccount {
    private _balance = 0; //field, setting to a number sets type inference to number

    constructor(public title: string) { }//no need to create title above if you use public or private 

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
