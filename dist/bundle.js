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


var Main = /** @class */ (function () {
    function Main( /* private renderer: Renderer */) {
        // Create CheckingAccount instance
        this.checkingAccount = new _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__["CheckingAccount"]('John Doe Checking');
        this.renderAccount();
    }
    Main.prototype.renderAccount = function () {
        var html = "\n                <h3>Checking Account</h3>\n                <br />\n                <span class=\"label\">Owner:</span> " + this.checkingAccount.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + this.checkingAccount.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        _scripts_renderer__WEBPACK_IMPORTED_MODULE_1__["Renderer"].render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
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
_scripts_renderer__WEBPACK_IMPORTED_MODULE_1__["Renderer"].viewTemplate = document.querySelector('#viewTemplate');
var main = new Main();
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but that's not the focus of this demo
window.main = main;


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
var CheckingAccount = /** @class */ (function () {
    function CheckingAccount(title) {
        this.title = title;
        this._balance = 0; //field, setting to a number sets type inference to number
    } //no need to create title above if you use public or private 
    Object.defineProperty(CheckingAccount.prototype, "balance", {
        get: function () {
            return this._balance; // get block
        },
        set: function (value) {
            if (value > 0) {
                this._balance = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    CheckingAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            alert('Cannot deposit negative amount.');
        }
    };
    CheckingAccount.prototype.withdrawal = function (amount) {
        if (amount < this.balance) {
            this.balance -= amount;
        }
        else {
            alert('Insufficient funds.');
        }
    };
    return CheckingAccount;
}());



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
var Renderer = /** @class */ (function () {
    function Renderer() {
    }
    Renderer.render = function (html) {
        Renderer.viewTemplate.innerHTML = html;
    };
    return Renderer;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUE2RDtBQUNmO0FBRTlDO0lBR0ksZUFBWSxnQ0FBZ0M7UUFDeEMsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSx5RUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw0QkFBYSxHQUFiO1FBQ0ksSUFBTSxJQUFJLEdBQUcsOEhBRytCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyx5RkFFdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQywwVEFLakYsQ0FBQztRQUNOLDBEQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsZ0NBQWlCLEdBQWpCLFVBQWtCLE9BQWdCO1FBQzlCLElBQUksV0FBVyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdkYsSUFBSSxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEM7YUFDSTtZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRXpCLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQztBQUVELDZDQUE2QztBQUM3QywwRUFBMEU7QUFDMUUsMERBQVEsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNoRSxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBRXhCLDZFQUE2RTtBQUM3RSw2REFBNkQ7QUFDN0Qsa0VBQWtFO0FBQzVELE1BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakQxQjtBQUFBO0FBQUE7SUFHSSx5QkFBbUIsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFGeEIsYUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLDBEQUEwRDtJQUU1QyxDQUFDLDhEQUE2RDtJQUVsRyxzQkFBSSxvQ0FBTzthQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFDLFlBQVk7UUFDckMsQ0FBQzthQUVELFVBQVksS0FBYTtZQUNyQixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDekI7UUFDTCxDQUFDOzs7T0FOQTtJQVFELGlDQUFPLEdBQVAsVUFBUSxNQUFjO1FBQ2xCLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLElBQUksTUFBTTtTQUN6QjthQUFNO1lBQ0gsS0FBSyxDQUFDLGlDQUFpQyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxNQUFjO1FBQ3JCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUM7U0FDMUI7YUFBTTtZQUNILEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDN0JEO0FBQUE7QUFBQTtJQUFBO0lBa0JBLENBQUM7SUFIVSxlQUFNLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IENoZWNraW5nQWNjb3VudCB9IGZyb20gJy4vc2NyaXB0cy9jaGVja2luZy1hY2NvdW50JztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3NjcmlwdHMvcmVuZGVyZXInO1xyXG5cclxuY2xhc3MgTWFpbiB7XHJcbiAgICBjaGVja2luZ0FjY291bnQ6IENoZWNraW5nQWNjb3VudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigvKiBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciAqLykge1xyXG4gICAgICAgIC8vIENyZWF0ZSBDaGVja2luZ0FjY291bnQgaW5zdGFuY2VcclxuICAgICAgICB0aGlzLmNoZWNraW5nQWNjb3VudCA9IG5ldyBDaGVja2luZ0FjY291bnQoJ0pvaG4gRG9lIENoZWNraW5nJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJBY2NvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQWNjb3VudCgpIHtcclxuICAgICAgICBjb25zdCBodG1sID0gYFxyXG4gICAgICAgICAgICAgICAgPGgzPkNoZWNraW5nIEFjY291bnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+T3duZXI6PC9zcGFuPiAke3RoaXMuY2hlY2tpbmdBY2NvdW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+QmFsYW5jZTo8L3NwYW4+ICQke3RoaXMuY2hlY2tpbmdBY2NvdW50LmJhbGFuY2UudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgJDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVwb3NpdFdpdGhkcmF3YWxBbW91bnRcIj4mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uZGVwb3NpdFdpdGhEcmF3YWwodHJ1ZSlcIj5EZXBvc2l0PC9idXR0b24+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmRlcG9zaXRXaXRoRHJhd2FsKGZhbHNlKVwiPldpdGhkcmF3YWw8L2J1dHRvbj4mbmJzcDtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICBSZW5kZXJlci5yZW5kZXIoaHRtbClcclxuICAgIH1cclxuXHJcbiAgICBkZXBvc2l0V2l0aERyYXdhbChkZXBvc2l0OiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGFtb3VudElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlcG9zaXRXaXRoZHJhd2FsQW1vdW50Jyk7XHJcbiAgICAgICAgbGV0IGFtb3VudCA9ICthbW91bnRJbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAoZGVwb3NpdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNraW5nQWNjb3VudC5kZXBvc2l0KGFtb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNraW5nQWNjb3VudC53aXRoZHJhd2FsKGFtb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyQWNjb3VudCgpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLy8gQ3JlYXRlIG1haW4gb2JqZWN0IGFuZCBhZGQgaGFuZGxlcnMgZm9yIGl0XHJcbi8vIGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3VGVtcGxhdGUnKSk7XHJcblJlbmRlcmVyLnZpZXdUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3VGVtcGxhdGUnKTtcclxuY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XHJcblxyXG4vLyBRdWljayBhbmQgZWFzeSB3YXkgdG8gZXhwb3NlIGEgZ2xvYmFsIEFQSSB0aGF0IGNhbiBob29rIHRvIHRoZSBNYWluIG9iamVjdFxyXG4vLyBzbyB0aGF0IHdlIGNhbiBnZXQgdG8gaXQgZnJvbSBjbGljayBhbmQgZXZlbnRzIGFuZCBvdGhlcnMuXHJcbi8vIFllcywgdGhlcmUgYXJlIG90aGVyIHdheXMgYnV0IHRoYXQncyBub3QgdGhlIGZvY3VzIG9mIHRoaXMgZGVtb1xyXG4oPGFueT53aW5kb3cpLm1haW4gPSBtYWluOyIsImV4cG9ydCBjbGFzcyBDaGVja2luZ0FjY291bnQge1xyXG4gICAgcHJpdmF0ZSBfYmFsYW5jZSA9IDA7IC8vZmllbGQsIHNldHRpbmcgdG8gYSBudW1iZXIgc2V0cyB0eXBlIGluZmVyZW5jZSB0byBudW1iZXJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGl0bGU6IHN0cmluZykgeyB9Ly9ubyBuZWVkIHRvIGNyZWF0ZSB0aXRsZSBhYm92ZSBpZiB5b3UgdXNlIHB1YmxpYyBvciBwcml2YXRlIFxyXG5cclxuICAgIGdldCBiYWxhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYWxhbmNlIC8vIGdldCBibG9ja1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBiYWxhbmNlKHZhbHVlOiBudW1iZXIpIHsgLy9zZXQgYmxvY2tcclxuICAgICAgICBpZiAodmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhbGFuY2UgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVwb3NpdChhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChhbW91bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsYW5jZSArPSBhbW91bnRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnQ2Fubm90IGRlcG9zaXQgbmVnYXRpdmUgYW1vdW50LicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpdGhkcmF3YWwoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYW1vdW50IDwgdGhpcy5iYWxhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ0luc3VmZmljaWVudCBmdW5kcy4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIgIFxyXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xyXG4gICAgLy8gaW5zdGFuY2Ugd2F5XHJcbiAgICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIC8vICAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSAnPGgyPldlbGNvbWUgdG8gQWNtZSBCYW5rITwvaDI+PGJyIC8+PGg1PllvdXIgQWNjb3VudHM6PC9oNT48YnIgLz4nO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAvLyBzdGF0aWMgd2F5XHJcbiAgICBzdGF0aWMgdmlld1RlbXBsYXRlOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBzdGF0aWMgcmVuZGVyKGh0bWw6IHN0cmluZykge1xyXG4gICAgICAgIFJlbmRlcmVyLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sOyBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=