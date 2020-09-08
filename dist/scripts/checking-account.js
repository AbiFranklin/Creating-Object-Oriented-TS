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
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accountType = AccountType.Checking;
        return _this;
    }
    CheckingAccount.prototype.getAccountInfo = function () {
        return {};
    };
    return CheckingAccount;
}(BankAccount));
export { CheckingAccount };
//# sourceMappingURL=checking-account.js.map