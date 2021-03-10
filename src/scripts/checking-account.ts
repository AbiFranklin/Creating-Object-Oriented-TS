export class CheckingAccount {
    private _balance = 0;

    constructor(public title: string) { }

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

    withdrawl(amount: number) {
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