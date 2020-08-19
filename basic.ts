const objLiteral = {
  balance: 500
}

class ClassObject {
  balance = 1000;
}

const classObject = new ClassObject();

function FunctionObject() {
  this.balance = 9000;
}

const functionObj = new FunctionObject();

const objCreate = Object.create(objLiteral);

const render = function() {
  const total = objLiteral.balance + classObject.balance + functionObj.balance + objCreate.balance
  document.querySelector('#viewTemplate')!.innerHTML = `
  <h2>Welcome to ACME Bacnk</h2>
  <br />
  <h5>Your Account Balances:</h5>
  <br />
  Object Literal Object Balance: $${objLiteral.balance}
  <br />
  Class Object Balance: $${classObject.balance}
  <br />
  Function Constructor Object Balance: $${functionObj.balance}
  <br />
  Object.create() Object Balance: $${objCreate.balance}
  <br /><br />
  <strong>Total:</strong> $${total}`;
}();