import { CheckingAccount } from "./scripts/checking-account";
import { Renderer } from "./scripts/renderer";
import { SavingsAccount } from "./scripts/savings-account";
import { AccountType } from "./scripts/enums";
import { AccountList } from "./scripts/account-list";
var Main = /** @class */ (function () {
    function Main(renderer) {
        this.renderer = renderer;
        // Create CheckingAccount instance
        this.checkingAccount = new CheckingAccount({
            id: 1,
            title: "Abi Franklin Checking",
            balance: 5000,
        });
        this.savingsAccount = new SavingsAccount({
            id: 100,
            title: "Abi Franklin Savings",
            balance: 10000,
            interestRate: 2.5,
        });
        var html = this.renderAccounts();
        this.renderer.render("<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />" + html);
    }
    Main.prototype.renderAccounts = function () {
        var acctsHtml = "";
        var accList = new AccountList();
        accList.add(this.checkingAccount);
        accList.add(this.savingsAccount);
        accList.getAccounts().forEach(function (acct, index) {
            acctsHtml += acct.title + "<br />";
        });
        return acctsHtml;
    };
    Main.prototype.changeView = function (view) {
        console.log("VIEW", view);
        switch (view) {
            case "checking":
                this.currentAccount = this.checkingAccount;
                break;
            case "savings":
                this.currentAccount = this.savingsAccount;
                break;
        }
        this.renderAccount(this.currentAccount);
    };
    Main.prototype.renderAccount = function (account) {
        var accountType = AccountType[account.accountType];
        var html = "\n                <h3>" + accountType + " Account</h3>\n                <br />\n                <span class=\"label\">Owner:</span> " + account.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + account.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit) {
        var amountInput = document.querySelector("#depositWithdrawalAmount");
        var amount = +amountInput.value;
        var error;
        try {
            if (deposit) {
                this.currentAccount.deposit(amount);
            }
            else {
                this.currentAccount.withdrawal(amount);
            }
        }
        catch (e) {
            error = e;
        }
        this.renderAccount(this.currentAccount);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    return Main;
}());
// Create main object and add handlers for it
var renderer = new Renderer(document.querySelector("#viewTemplate"));
var main = new Main(renderer);
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
window.main = main;
//# sourceMappingURL=main.js.map