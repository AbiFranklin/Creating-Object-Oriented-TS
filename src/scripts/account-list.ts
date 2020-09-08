import { BankAccount } from "./bank-account";

export class AccountList {
    _accountList: BankAccount[] = [];

    add(account: BankAccount) {
        this._accountList.push(account);
    }

    getAccount(): BankAccount[] {
        return this._accountList;
    }
}