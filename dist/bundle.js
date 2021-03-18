/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/checking-account */ "./src/scripts/checking-account.ts");
/* harmony import */ var _scripts_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/renderer */ "./src/scripts/renderer.ts");
/* harmony import */ var _scripts_savings_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/savings-account */ "./src/scripts/savings-account.ts");
/* harmony import */ var _scripts_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/enums */ "./src/scripts/enums.ts");
/* harmony import */ var _scripts_account_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/account-list */ "./src/scripts/account-list.ts");





class Main {
    constructor(renderer) {
        this.renderer = renderer;
        // Create CheckingAccount instance
        this.checkingAccount = new _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__["CheckingAccount"]({
            id: 1,
            title: 'Abi Franklin Checking',
            balance: 5000
        });
        this.savingsAccount = new _scripts_savings_account__WEBPACK_IMPORTED_MODULE_2__["SavingsAccount"]({
            id: 100,
            title: 'Abi Franklin Savings',
            balance: 10000,
            interestRate: 2.5
        });
        let html = this.renderAccounts();
        let savingsButton = '<button onclick="main.changeView(true)">Savings</button>';
        this.renderer.render('<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />' + html + '<br />' + savingsButton);
    }
    renderAccounts() {
        let acctsHtml = '';
        const accList = new _scripts_account_list__WEBPACK_IMPORTED_MODULE_4__["AccountList"]();
        accList.add(this.checkingAccount);
        accList.add(this.savingsAccount);
        accList.getAccounts().forEach((acct, index) => {
            acctsHtml += acct.title + ': $' + acct.balance + '<br />';
        });
        return acctsHtml;
    }
    changeView(view) {
        alert('Click');
        switch (view) {
            case false:
                this.currentAccount = this.checkingAccount;
                break;
            case true:
                this.currentAccount = this.savingsAccount;
                break;
        }
        this.renderAccount(this.currentAccount);
    }
    renderAccount(account) {
        const accountType = _scripts_enums__WEBPACK_IMPORTED_MODULE_3__["AccountType"][account.accountType];
        const html = `
                <h3>${accountType} Account</h3>
                <br />
                <span class="label">Owner:</span> ${account.title}
                <br />
                <span class="label">Balance:</span> $${account.balance.toFixed(2)}
                <br /><br />
                $<input type="text" id="depositWithdrawalAmount">&nbsp;&nbsp;
                <button onclick="main.depositWithDrawal(true)">Deposit</button>&nbsp;
                <button onclick="main.depositWithDrawal(false)">Withdrawal</button>&nbsp;
            `;
        this.renderer.render(html);
    }
    depositWithDrawal(deposit) {
        let amountInput = document.querySelector('#depositWithdrawalAmount');
        let amount = +amountInput.value;
        let error;
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
    }
}
// Create main object and add handlers for it
const renderer = new _scripts_renderer__WEBPACK_IMPORTED_MODULE_1__["Renderer"](document.querySelector('#viewTemplate'));
const main = new Main(renderer);
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
window.main = main;


/***/ }),

/***/ "./src/scripts/account-list.ts":
/*!*************************************!*\
  !*** ./src/scripts/account-list.ts ***!
  \*************************************/
/*! exports provided: AccountList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountList", function() { return AccountList; });
class AccountList {
    constructor() {
        this._accountList = [];
    }
    add(account) {
        this._accountList.push(account);
    }
    getAccounts() {
        return this._accountList;
    }
}


/***/ }),

/***/ "./src/scripts/bank-account.ts":
/*!*************************************!*\
  !*** ./src/scripts/bank-account.ts ***!
  \*************************************/
/*! exports provided: BankAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccount", function() { return BankAccount; });
class BankAccount {
    constructor(accountSettings) {
        this._balance = 0;
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(val) {
        this._balance = val;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            alert('Deposits may not be negative.');
        }
    }
    withdrawal(amount) {
        if (amount < this.balance) {
            if (amount > 0) {
                this.balance -= amount;
            }
            else {
                alert('Withdrawl amount may not be negative.');
            }
        }
        else {
            alert('Insufficiant Funds');
        }
    }
}


/***/ }),

/***/ "./src/scripts/checking-account.ts":
/*!*****************************************!*\
  !*** ./src/scripts/checking-account.ts ***!
  \*****************************************/
/*! exports provided: CheckingAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckingAccount", function() { return CheckingAccount; });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");


class CheckingAccount extends _bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"] {
    constructor() {
        super(...arguments);
        this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__["AccountType"].Checking;
    }
    getAccountInfo() {
        return {};
    }
}


/***/ }),

/***/ "./src/scripts/enums.ts":
/*!******************************!*\
  !*** ./src/scripts/enums.ts ***!
  \******************************/
/*! exports provided: AccountType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
var AccountType;
(function (AccountType) {
    AccountType[AccountType["Checking"] = 0] = "Checking";
    AccountType[AccountType["Savings"] = 1] = "Savings";
})(AccountType || (AccountType = {}));


/***/ }),

/***/ "./src/scripts/renderer.ts":
/*!*********************************!*\
  !*** ./src/scripts/renderer.ts ***!
  \*********************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
class Renderer {
    constructor(viewTemplate) {
        this.viewTemplate = viewTemplate;
        this.viewTemplate.innerHTML = '<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />';
    }
    render(html) {
        this.viewTemplate.innerHTML = html;
    }
    renderError(message) {
        this.viewTemplate.innerHTML += `<br /><br /><div class="alert alert-danger">${message}</div>`;
    }
}


/***/ }),

/***/ "./src/scripts/savings-account.ts":
/*!****************************************!*\
  !*** ./src/scripts/savings-account.ts ***!
  \****************************************/
/*! exports provided: SavingsAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsAccount", function() { return SavingsAccount; });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");


class SavingsAccount extends _bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"] {
    constructor(accountSettings) {
        super(accountSettings);
        this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__["AccountType"].Savings;
        this._interestRate = accountSettings.interestRate;
        // Simulate interest over time
        setInterval(() => {
            this.addInterest();
        }, 60000);
    }
    getAccountInfo() {
        return {};
    }
    deposit(amount) {
        let newAmount = amount + (amount * (this._interestRate / 100));
        this.balance += newAmount;
    }
    addInterest() {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWNjb3VudC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JhbmstYWNjb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jaGVja2luZy1hY2NvdW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VudW1zLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NhdmluZ3MtYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RDtBQUNmO0FBRWE7QUFD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O1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxJQUFJLCtDQUErQyxPQUFPLFFBQVEsQ0FBQztJQUNsRyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUFBO0FBQUE7QUFBQTtBQUE2QztBQUNQO0FBRS9CLE1BQU0sY0FBZSxTQUFRLHlEQUFXO0lBSTNDLFlBQVksZUFBb0I7UUFDNUIsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBSDNCLGdCQUFXLEdBQUcsa0RBQVcsQ0FBQyxPQUFPLENBQUM7UUFJOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDO1FBRWxELDhCQUE4QjtRQUM5QixXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRCxjQUFjO1FBQ1YsT0FBTyxFQUVOLENBQUM7SUFDTixDQUFDO0lBRUQsT0FBTyxDQUFDLE1BQWM7UUFDbEIsSUFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFFTyxXQUFXO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0NBQ0oiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IENoZWNraW5nQWNjb3VudCB9IGZyb20gJy4vc2NyaXB0cy9jaGVja2luZy1hY2NvdW50JztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3NjcmlwdHMvcmVuZGVyZXInO1xyXG5pbXBvcnQgeyBCYW5rQWNjb3VudCB9IGZyb20gJy4vc2NyaXB0cy9iYW5rLWFjY291bnQnO1xyXG5pbXBvcnQgeyBTYXZpbmdzQWNjb3VudCB9IGZyb20gJy4vc2NyaXB0cy9zYXZpbmdzLWFjY291bnQnO1xyXG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gJy4vc2NyaXB0cy9lbnVtcyc7XHJcbmltcG9ydCB7IEFjY291bnRMaXN0IH0gZnJvbSAnLi9zY3JpcHRzL2FjY291bnQtbGlzdCc7XHJcblxyXG5jbGFzcyBNYWluIHtcclxuICAgIGNoZWNraW5nQWNjb3VudDogQ2hlY2tpbmdBY2NvdW50O1xyXG4gICAgc2F2aW5nc0FjY291bnQ6IFNhdmluZ3NBY2NvdW50O1xyXG4gICAgY3VycmVudEFjY291bnQ6IEJhbmtBY2NvdW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIENoZWNraW5nQWNjb3VudCBpbnN0YW5jZVxyXG4gICAgICAgIHRoaXMuY2hlY2tpbmdBY2NvdW50ID0gbmV3IENoZWNraW5nQWNjb3VudCh7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0FiaSBGcmFua2xpbiBDaGVja2luZycsXHJcbiAgICAgICAgICAgIGJhbGFuY2U6IDUwMDBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNhdmluZ3NBY2NvdW50ID0gbmV3IFNhdmluZ3NBY2NvdW50KHtcclxuICAgICAgICAgICAgaWQ6IDEwMCxcclxuICAgICAgICAgICAgdGl0bGU6ICdBYmkgRnJhbmtsaW4gU2F2aW5ncycsXHJcbiAgICAgICAgICAgIGJhbGFuY2U6IDEwMDAwLFxyXG4gICAgICAgICAgICBpbnRlcmVzdFJhdGU6IDIuNVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBodG1sID0gdGhpcy5yZW5kZXJBY2NvdW50cygpO1xyXG4gICAgICAgIGxldCBzYXZpbmdzQnV0dG9uID0gJzxidXR0b24gb25jbGljaz1cIm1haW4uY2hhbmdlVmlldyh0cnVlKVwiPlNhdmluZ3M8L2J1dHRvbj4nXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoJzxoMj5XZWxjb21lIHRvIEFjbWUgQmFuayE8L2gyPjxiciAvPjxoNT5Zb3VyIEFjY291bnRzOjwvaDU+PGJyIC8+JyArIGh0bWwgKyAnPGJyIC8+JyArIHNhdmluZ3NCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckFjY291bnRzKCkge1xyXG4gICAgICAgIGxldCBhY2N0c0h0bWw6IHN0cmluZyA9ICcnOyAgICAgICBcclxuICAgICAgICBjb25zdCBhY2NMaXN0ID0gbmV3IEFjY291bnRMaXN0KCk7XHJcbiAgICAgICAgYWNjTGlzdC5hZGQodGhpcy5jaGVja2luZ0FjY291bnQpO1xyXG4gICAgICAgIGFjY0xpc3QuYWRkKHRoaXMuc2F2aW5nc0FjY291bnQpO1xyXG5cclxuICAgICAgICBhY2NMaXN0LmdldEFjY291bnRzKCkuZm9yRWFjaCgoYWNjdCwgaW5kZXgpID0+IHsgIFxyXG4gICAgICAgICAgICBhY2N0c0h0bWwgKz0gYWNjdC50aXRsZSArICc6ICQnICsgYWNjdC5iYWxhbmNlICsgJzxiciAvPic7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFjY3RzSHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWaWV3KHZpZXc/OiBCb29sZWFuKSB7XHJcbiAgICAgICAgYWxlcnQoJ0NsaWNrJylcclxuICAgICAgICBzd2l0Y2ggKHZpZXcpIHtcclxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSB0aGlzLmNoZWNraW5nQWNjb3VudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5zYXZpbmdzQWNjb3VudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQWNjb3VudChhY2NvdW50OiBCYW5rQWNjb3VudCkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRUeXBlID0gQWNjb3VudFR5cGVbYWNjb3VudC5hY2NvdW50VHlwZV07XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGBcclxuICAgICAgICAgICAgICAgIDxoMz4ke2FjY291bnRUeXBlfSBBY2NvdW50PC9oMz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPk93bmVyOjwvc3Bhbj4gJHthY2NvdW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+QmFsYW5jZTo8L3NwYW4+ICQke2FjY291bnQuYmFsYW5jZS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAkPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXBvc2l0V2l0aGRyYXdhbEFtb3VudFwiPiZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5kZXBvc2l0V2l0aERyYXdhbCh0cnVlKVwiPkRlcG9zaXQ8L2J1dHRvbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uZGVwb3NpdFdpdGhEcmF3YWwoZmFsc2UpXCI+V2l0aGRyYXdhbDwvYnV0dG9uPiZuYnNwO1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlcG9zaXRXaXRoRHJhd2FsKGRlcG9zaXQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYW1vdW50SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVwb3NpdFdpdGhkcmF3YWxBbW91bnQnKTtcclxuICAgICAgICBsZXQgYW1vdW50ID0gK2Ftb3VudElucHV0LnZhbHVlO1xyXG4gICAgICAgIGxldCBlcnJvcjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZGVwb3NpdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudC5kZXBvc2l0KGFtb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50LndpdGhkcmF3YWwoYW1vdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBlcnJvciA9IGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudCk7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDcmVhdGUgbWFpbiBvYmplY3QgYW5kIGFkZCBoYW5kbGVycyBmb3IgaXRcclxuY29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdUZW1wbGF0ZScpKTtcclxuY29uc3QgbWFpbiA9IG5ldyBNYWluKHJlbmRlcmVyKTtcclxuXHJcbi8vIFF1aWNrIGFuZCBlYXN5IHdheSB0byBleHBvc2UgYSBnbG9iYWwgQVBJIHRoYXQgY2FuIGhvb2sgdG8gdGhlIE1haW4gb2JqZWN0XHJcbi8vIHNvIHRoYXQgd2UgY2FuIGdldCB0byBpdCBmcm9tIGNsaWNrIGFuZCBldmVudHMgYW5kIG90aGVycy5cclxuLy8gWWVzLCB0aGVyZSBhcmUgb3RoZXIgd2F5cyBidXQgdGhhdCdzIG5vdCB0aGUgZm9jdXMgb2YgdGhpcyBkZW1vXHJcbig8YW55PndpbmRvdykubWFpbiA9IG1haW47IiwiaW1wb3J0IHsgQmFua0FjY291bnQgfSBmcm9tICcuL2JhbmstYWNjb3VudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWNjb3VudExpc3QgeyBcclxuICAgIF9hY2NvdW50TGlzdDogQmFua0FjY291bnRbXSA9IFtdO1xyXG5cclxuICAgIGFkZChhY2NvdW50OiBCYW5rQWNjb3VudCkge1xyXG4gICAgICAgIHRoaXMuX2FjY291bnRMaXN0LnB1c2goYWNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWNjb3VudHMoKTogQmFua0FjY291bnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjY291bnRMaXN0O1xyXG4gICAgfVxyXG59ICIsImltcG9ydCB7IEFjY291bnRUeXBlIH0gZnJvbSBcIi4vZW51bXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYW5rQWNjb3VudCB7XHJcbiAgICBwcml2YXRlIF9iYWxhbmNlID0gMDtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgYWNjb3VudFR5cGU6IEFjY291bnRUeXBlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRTZXR0aW5nczogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGFjY291bnRTZXR0aW5ncy5pZDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gYWNjb3VudFNldHRpbmdzLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZSA9IGFjY291bnRTZXR0aW5ncy5iYWxhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJhbGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhbGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGJhbGFuY2UodmFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9iYWxhbmNlID0gdmFsXHJcbiAgICB9XHJcblxyXG4gICAgZGVwb3NpdChhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhbW91bnQgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlICs9IGFtb3VudFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdEZXBvc2l0cyBtYXkgbm90IGJlIG5lZ2F0aXZlLicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpdGhkcmF3YWwoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYW1vdW50IDwgdGhpcy5iYWxhbmNlKSB7XHJcbiAgICAgICAgICAgIGlmIChhbW91bnQgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlIC09IGFtb3VudFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1dpdGhkcmF3bCBhbW91bnQgbWF5IG5vdCBiZSBuZWdhdGl2ZS4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0luc3VmZmljaWFudCBGdW5kcycpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFua0FjY291bnQgfSBmcm9tIFwiLi9iYW5rLWFjY291bnRcIjtcclxuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNraW5nQWNjb3VudCBleHRlbmRzIEJhbmtBY2NvdW50IHtcclxuICAgIGFjY291bnRUeXBlID0gQWNjb3VudFR5cGUuQ2hlY2tpbmc7ICBcclxuXHJcbiAgICBnZXRBY2NvdW50SW5mbygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gQWNjb3VudFR5cGUge1xyXG4gICAgQ2hlY2tpbmcsXHJcbiAgICBTYXZpbmdzXHJcbn0iLCJleHBvcnQgY2xhc3MgUmVuZGVyZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3VGVtcGxhdGU6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gJzxoMj5XZWxjb21lIHRvIEFjbWUgQmFuayE8L2gyPjxiciAvPjxoNT5Zb3VyIEFjY291bnRzOjwvaDU+PGJyIC8+JztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoaHRtbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgKz0gYDxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhbmtBY2NvdW50IH0gZnJvbSAnLi9iYW5rLWFjY291bnQnO1xyXG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gJy4vZW51bXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhdmluZ3NBY2NvdW50IGV4dGVuZHMgQmFua0FjY291bnQge1xyXG4gICAgcHJpdmF0ZSBfaW50ZXJlc3RSYXRlOiBudW1iZXI7XHJcbiAgICBhY2NvdW50VHlwZSA9IEFjY291bnRUeXBlLlNhdmluZ3M7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBhbnkpIHtcclxuICAgICAgICBzdXBlcihhY2NvdW50U2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuX2ludGVyZXN0UmF0ZSA9IGFjY291bnRTZXR0aW5ncy5pbnRlcmVzdFJhdGU7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIGludGVyZXN0IG92ZXIgdGltZVxyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRJbnRlcmVzdCgpO1xyXG4gICAgICAgIH0sIDYwMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2NvdW50SW5mbygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGRlcG9zaXQoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbmV3QW1vdW50ID0gYW1vdW50ICsgKGFtb3VudCAqICh0aGlzLl9pbnRlcmVzdFJhdGUgLyAxMDApKTtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgKz0gbmV3QW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkSW50ZXJlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gdGhpcy5iYWxhbmNlICsgKHRoaXMuYmFsYW5jZSAqICh0aGlzLl9pbnRlcmVzdFJhdGUgLyAxMDApKTtcclxuICAgIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9