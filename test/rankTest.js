import {rating} from "../src/rank";

const rankTest = require('ava');

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

function generateHistoryAndLengthEquals4() {
  return  [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
}


rankTest('west-indies 10 and history include china and length 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const expectedResult = rating(voyage, generateHistoryAndLengthEquals4());
  t.is('B',expectedResult);
});

rankTest('west-indies 14 and history include china and length 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 14,
  };
  const expectedResult = rating(voyage, generateHistoryAndLengthEquals4());
  t.is('B',expectedResult);
});

