var objLiteral = {
    balance: 500
};
var ClassObject = /** @class */ (function () {
    function ClassObject() {
        this.balance = 1000;
    }
    return ClassObject;
}());
var classObject = new ClassObject();
function FunctionObject() {
    this.balance = 9000;
}
var functionObj = new FunctionObject();
var objCreate = Object.create(objLiteral);
var render = function () {
    var total = objLiteral.balance + classObject.balance + functionObj.balance + objCreate.balance;
    document.querySelector('#viewTemplate').innerHTML = "\n  <h2>Welcome to ACME Bacnk</h2>\n  <br />\n  <h5>Your Account Balances:</h5>\n  <br />\n  Object Literal Object Balance: $" + objLiteral.balance + "\n  <br />\n  Class Object Balance: $" + classObject.balance + "\n  <br />\n  Function Constructor Object Balance: $" + functionObj.balance + "\n  <br />\n  Object.create() Object Balance: $" + objCreate.balance + "\n  <br /><br />\n  <strong>Total:</strong> $" + total;
}();
