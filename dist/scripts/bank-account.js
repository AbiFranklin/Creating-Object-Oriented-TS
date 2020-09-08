var BankAccount = /** @class */ (function () {
    function BankAccount(accountSettings) {
        this.balance = 0; // field
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        // function
        if (amount !== NaN) {
            this.balance += amount;
        }
        else {
            alert("Value must be a number");
        }
    };
    BankAccount.prototype.withdrawal = function (amount) {
        // function
        if (amount !== NaN) {
            if (amount > this.balance) {
                alert("Insufficient Funds: $35 Overdraft charge applied.");
                amount += 35;
                this.balance -= amount;
            }
            else {
                this.balance -= amount;
            }
        }
        else {
            alert("Value must be a number");
        }
    };
    return BankAccount;
}());
export { BankAccount };
//# sourceMappingURL=bank-account.js.map