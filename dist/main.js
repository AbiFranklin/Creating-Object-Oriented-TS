import { Renderer } from "./scripts/renderer";
import { CheckingAccount } from "./scripts/checking-account";
import { SavingsAccount } from "./scripts/savings-account";
var Main = /** @class */ (function () {
    function Main( /* private renderer: Renderer */) {
        // Create CheckingAccount instance
        this.checkingAccount = new CheckingAccount({
            id: 1,
            title: "Abigayle Franklin - Checking",
            balance: 5000,
        });
        this.savingAccount = new SavingsAccount({
            id: 2,
            title: "Abi Franklin - Savings",
            balance: 10000,
        });
        this.renderAccount();
    }
    Main.prototype.renderAccount = function () {
        var html = "\n                <h3>Checking Account</h3>\n                <br />\n                <span class=\"label\">Owner:</span> " + this.checkingAccount.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + this.checkingAccount.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        Renderer.render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit) {
        var amountInput = document.querySelector("#depositWithdrawalAmount");
        var amount = +amountInput.value;
        if (deposit) {
            this.checkingAccount.deposit(amount);
        }
        else {
            this.checkingAccount.withdrawal(amount);
        }
        this.renderAccount();
    };
    return Main;
}());
// Create main object and add handlers for it
// const renderer = new Renderer(document.querySelector('#viewTemplate'));
Renderer.viewTemplate = document.querySelector("#viewTemplate");
var main = new Main( /* renderer*/);
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
window.main = main;
//# sourceMappingURL=main.js.map