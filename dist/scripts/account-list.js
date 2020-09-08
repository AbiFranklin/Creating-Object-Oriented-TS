var AccountList = /** @class */ (function () {
    function AccountList() {
        this._accountList = [];
    }
    AccountList.prototype.add = function (account) {
        this._accountList.push(account);
    };
    AccountList.prototype.getAccount = function () {
        return this._accountList;
    };
    return AccountList;
}());
export { AccountList };
//# sourceMappingURL=account-list.js.map