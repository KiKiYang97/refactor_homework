import {deliveryDate} from "../src/delivery";
import {Employee, ENGINEER} from "../src/employee";
const rankTest = require('ava');


rankTest('test deliveryDate isRush is true', t => {
    const  anOrder = {
        deliveryState : 'MA',
        placedOn : {
            plusDays(time) {
                return time;
            }
        }
    }
    const expectedResult = deliveryDate(anOrder,true);
    t.is(2,expectedResult);
});

rankTest('test deliveryDate isRush is true', t => {
    const  anOrder = {
        deliveryState : 'NY',
        placedOn : {
            plusDays(time) {
                return time;
            }
        }
    }
    const expectedResult = deliveryDate(anOrder,true);
    t.is(3,expectedResult);
});

rankTest('test deliveryDate isRush is true', t => {
    const  anOrder = {
        deliveryState : 'A',
        placedOn : {
            plusDays(time) {
                return time;
            }
        }
    }
    const expectedResult = deliveryDate(anOrder,true);
    t.is(4,expectedResult);
});