var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BankAccount } from "./bank-account";
import { AccountType } from "./enums";
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        _this.accountType = AccountType.Savings;
        _this._interestRate = accountSettings.interestRate;
        setInterval(function () {
            _this.addInterest();
        }, 6000);
        return _this;
    }
    SavingsAccount.prototype.getAccountInfo = function () {
        return {};
    };
    SavingsAccount.prototype.deposit = function (amount) {
        var newAmount = amount + (amount * (this._interestRate / 100));
        this.balance += newAmount;
    };
    SavingsAccount.prototype.addInterest = function () {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    };
    ;
    return SavingsAccount;
}(BankAccount));
export { SavingsAccount };
//# sourceMappingURL=savings-account.js.map