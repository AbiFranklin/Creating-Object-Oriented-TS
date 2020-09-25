import { BankAccount } from "./bank-account";
import { AccountType } from "./enums";

export class SavingsAccount extends BankAccount {
    private _interestRate: number;
    accountType = AccountType.Savings;

    constructor(accountSettings: any){
        super(accountSettings);
        this._interestRate = accountSettings.interestRate;

        setInterval(() => {
            this.addInterest();
        }, 60000)
    }

    private addInterest() {
        this.balance =  this.balance + (this.balance * (this._interestRate / 100));
    }

    getAccountInfo() {
        return{};
    }

    deposit(amount: number) { //overrides base class deposit function
        let newAmount = amount + (amount * (this._interestRate / 100));
        this.balance += newAmount;
    }
}