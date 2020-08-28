import {Employee} from "../src/employee";
const rankTest = require('ava');

rankTest('test validateType throw Exception', t => {
    try {
        const employee = new Employee('Kiki','student');
        t.fail();
    } catch (e) {
        t.is('Employee cannot be of type student',e.message)
    }
});