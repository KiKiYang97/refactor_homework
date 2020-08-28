import {printOwing} from "../src/print";
const rankTest = require('ava');

const invoice = {
    borderSpacing : [
        {
            amount : 1,
        },
        {
            amount : 10,
        },
    ],
    dueDate : {},
    customer : 'Kiki'
}

rankTest('print Customer Owes', t => {
    const expectedResult = printOwing(invoice);
    const result = '***********************\n'
                    + '**** Customer Owes ****\n'
                    + '***********************\n'
                    + 'name: Kiki\n'
                    + 'amount: 11\n'
                    + 'amount: 2020-9-27\n';
    t.is(result,expectedResult);
});