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

function printDetails(invoice, outstanding) {
    return    '***********************\n'
            + '**** Customer Owes ****\n'
            + '***********************\n'
            + `name: ${invoice.customer}\n`
            + `amount: ${outstanding}\n`
            + `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
}

function printOwing (invoice) {
  let outstanding = 0;

  // calculate outstanding
  outstanding = calculate(invoice, outstanding);

  // record due date
  recordDueDate(invoice);

  // print details
  return  printDetails(invoice, outstanding);
}
module.exports = {
  printOwing,
}