function calculate(invoice, outstanding) {
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printOwing (invoice) {
  let outstanding = 0;
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  // calculate outstanding
  outstanding = calculate(invoice, outstanding);

  // record due date
  recordDueDate(invoice);

  // print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}
module.exports = {
  printOwing,
}