import { Renderer } from "./scripts/renderer";
import { CheckingAccount } from "./scripts/checking-account";
import { SavingsAccount } from "./scripts/savings-account";
import { BankAccount } from "./scripts/bank-account";

class Main {
  checkingAccount: CheckingAccount;
  savingAccount: SavingsAccount;
  currentAccount: BankAccount;

  constructor(/* private renderer: Renderer */) {
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

  renderAccount() {
    const html = `
                <h3>Checking Account</h3>
                <br />
                <span class="label">Owner:</span> ${this.checkingAccount.title}
                <br />
                <span class="label">Balance:</span> $${this.checkingAccount.balance.toFixed(
                  2
                )}
                <br /><br />
                $<input type="text" id="depositWithdrawalAmount">&nbsp;&nbsp;
                <button onclick="main.depositWithDrawal(true)">Deposit</button>&nbsp;
                <button onclick="main.depositWithDrawal(false)">Withdrawal</button>&nbsp;
            `;
    Renderer.render(html);
  }

  depositWithDrawal(deposit: boolean) {
    let amountInput: HTMLInputElement = document.querySelector(
      "#depositWithdrawalAmount"
    );
    let amount = +amountInput.value;
    if (deposit) {
      this.checkingAccount.deposit(amount);
    } else {
      this.checkingAccount.withdrawal(amount);
    }
    this.renderAccount();
  }
}

// Create main object and add handlers for it
// const renderer = new Renderer(document.querySelector('#viewTemplate'));
Renderer.viewTemplate = document.querySelector("#viewTemplate");
const main = new Main(/* renderer*/);

// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
(<any>window).main = main;
