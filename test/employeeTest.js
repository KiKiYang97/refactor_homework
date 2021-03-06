import {Employee,ENGINEER} from "../src/employee";
const rankTest = require('ava');

rankTest('test validateType throw Exception', t => {
    try {
        const employee = new Employee('Kiki','student');
        t.fail();
    } catch (e) {
        t.is('Employee cannot be of type student',e.message)
    }
});

rankTest('test validateType not throw Exception', t => {
    try {
        const employee = new Employee('Kiki',ENGINEER);
        t.pass();
    } catch (e) {
    }
});

rankTest('test toString', t => {
        const employee = new Employee('Kiki',ENGINEER);
        const expectedResult = employee.toString();
        t.is('Kiki (engineer)',expectedResult);
});