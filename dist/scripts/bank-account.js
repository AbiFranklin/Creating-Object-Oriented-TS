var BankAccount = /** @class */ (function () {
    function BankAccount(accountSettings) {
        this._balance = 0;
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdrawal = function (amount) {
        this.balance -= amount;
    };
    Object.defineProperty(BankAccount.prototype, "balace", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "balance", {
        set: function (val) {
            if (val >= 0) {
                this._balance = val;
            }
            else {
                throw Error('Balance cannot be negative!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
export { BankAccount };
//# sourceMappingURL=bank-account.js.map