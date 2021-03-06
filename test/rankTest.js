import {captainHistoryRisk, rating, voyageProfitFactor, voyageRisk} from "../src/rank";

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

function generateHistoryAndLengthEquals5() {
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
    },{
      zone: 'east-indies1',
      profit: 5,
    },
  ];
}

function generateHistoryAndLengthEquals6() {
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
    },{
      zone: 'east-indies1',
      profit: 5,
    },{
      zone: 'west-indies1',
      profit: 15,
    },
  ];
}

function generateHistoryAndLengthEquals8() {
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
    }, {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies1',
      profit: 5,
    },{
      zone: 'west-indies1',
      profit: 15,
    },{
      zone: 'chinese',
      profit: -2,
    },
    {
      zone: 'west-africa1',
      profit: 7,
    },
  ];
}

function generateHistoryAndLengthEquals9() {
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
    },{
      zone: 'east-indies1',
      profit: 5,
    },{
      zone: 'west-indies1',
      profit: 15,
    },{
      zone: 'chinese',
      profit: -2,
    },
    {
      zone: 'west-africa1',
      profit: 7,
    }, {
      zone: 'west-africa2',
      profit: 7,
    },
  ];
}

function generateHistoryAndLengthEquals10() {
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
    },{
      zone: 'east-indies1',
      profit: 5,
    },{
      zone: 'west-indies1',
      profit: 15,
    },{
      zone: 'chinese',
      profit: -2,
    },
    {
      zone: 'west-africa1',
      profit: 7,
    }, {
      zone: 'west-africa2',
      profit: 7,
    },
     {
      zone: 'west-africa3',
      profit: 7,
    }
  ];
}

function generateHistoryAndLengthEquals11() {
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
    },{
      zone: 'east-indies1',
      profit: 5,
    },{
      zone: 'west-indies1',
      profit: 15,
    },{
      zone: 'chinese',
      profit: -2,
    },
    {
      zone: 'west-africa1',
      profit: 7,
    }, {
      zone: 'west-africa2',
      profit: 7,
    },
    {
      zone: 'west-africa3',
      profit: 7,
    }, {
      zone: 'west-africa3',
      profit: 7,
    },
  ];
}

function generateHistoryWithoutChinaAndLengthEquals4() {
  return  [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'c',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
}

function generateHistoryWithoutChinaAndLengthEquals5() {
  return  [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'c',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'east-indies1',
      profit: 5,
    },
  ];
}

function generateHistoryWithoutChinaAndLengthEquals6() {
  return  [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'c',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'east-indies1',
      profit: 5,
    },{
      zone: 'west-indies1',
      profit: 15,
    },
  ];
}

function generateHistoryWithoutChinaAndLengthEquals8() {
  return  [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'c',
      profit: -2,
    }, {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies1',
      profit: 5,
    },{
      zone: 'west-indies1',
      profit: 15,
    },{
      zone: 'chinese',
      profit: -2,
    },
    {
      zone: 'west-africa1',
      profit: 7,
    },
  ];
}

function generateHistoryWithoutChinaAndLengthEquals9() {
  return  [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'c',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'east-indies1',
      profit: 5,
    },{
      zone: 'west-indies1',
      profit: 15,
    },{
      zone: 'chinese',
      profit: -2,
    },
    {
      zone: 'west-africa1',
      profit: 7,
    }, {
      zone: 'west-africa2',
      profit: 7,
    },
  ];
}



rankTest('return B when test rating west-indies 10 and history include china and length 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const expectedResult = rating(voyage, generateHistoryAndLengthEquals4());
  t.is('B',expectedResult);
});

rankTest('return A when test rating china 14 and history include china and length 4', t => {
  const voyage = {
    zone: 'china',
    length: 2,
  };
  const expectedResult = rating(voyage, generateHistoryAndLengthEquals4());
  t.is('A',expectedResult);
});

rankTest('test voyageProfitFactor west-indies 15 and history include china and length 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 15,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals4());
  t.is(1, expectedResult);
});

rankTest('test voyageProfitFactor west-indies 14 and history include china and length 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 14,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals4());
  t.is(2, expectedResult);
});

rankTest('test voyageProfitFactor west-indies 10 and history include china and length 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals4());
  t.is(2, expectedResult);
});

rankTest('test voyageProfitFactor west-indies 15 and history include china and length 8', t => {
  const voyage = {
    zone: 'west-indies',
    length: 15,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals8());
  t.is(1, expectedResult);
});

rankTest('test voyageProfitFactor west-indies 14 and history include china and length 9', t => {
  const voyage = {
    zone: 'west-indies',
    length: 14,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals9());
  t.is(3, expectedResult);
});

rankTest('test voyageProfitFactor west-indies 10 and history include china and length 6', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals6());
  t.is(2, expectedResult);
});

rankTest('test voyageProfitFactor east-indies 15 and history include china and length 4', t => {
  const voyage = {
    zone: 'east-indies',
    length: 15,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals4());
  t.is(2, expectedResult);
});

rankTest('test voyageProfitFactor east-indies 14 and history include china and length 4', t => {
  const voyage = {
    zone: 'east-indies',
    length: 14,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals4());
  t.is(3, expectedResult);
});

rankTest('test voyageProfitFactor east-indies 13 and history include china and length 4', t => {
  const voyage = {
    zone: 'east-indies',
    length: 13,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals4());
  t.is(3, expectedResult);
});

rankTest('test voyageProfitFactor east-indies 15 and history include china and length 6', t => {
  const voyage = {
    zone: 'east-indies',
    length: 15,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals6());
  t.is(2, expectedResult);
});

rankTest('test voyageProfitFactor east-indies 14 and history include china and length 8', t => {
  const voyage = {
    zone: 'east-indies',
    length: 14,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals8());
  t.is(3, expectedResult);
});

rankTest('test voyageProfitFactor east-indies 13 and history include china and length 9', t => {
  const voyage = {
    zone: 'east-indies',
    length: 13,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals9());
  t.is(4, expectedResult);
});

rankTest('test voyageProfitFactor China without China 15 and history include china and length 4', t => {
  const voyage = {
    zone: 'china',
    length: 15,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryWithoutChinaAndLengthEquals4());
  t.is(2, expectedResult);
});

rankTest('test voyageProfitFactor China without China 14 and history include china and length 4', t => {
  const voyage = {
    zone: 'china',
    length: 14,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryWithoutChinaAndLengthEquals4());
  t.is(3, expectedResult);
});

rankTest('test voyageProfitFactor China without China 13 and history include china and length 4', t => {
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryWithoutChinaAndLengthEquals4());
  t.is(3, expectedResult);
});

rankTest('test voyageProfitFactor China without China 15 and history include china and length 6', t => {
  const voyage = {
    zone: 'china',
    length: 15,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryWithoutChinaAndLengthEquals6());
  t.is(2, expectedResult);
});

rankTest('test voyageProfitFactor China without China 14 and history include china and length 8', t => {
  const voyage = {
    zone: 'china',
    length: 14,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryWithoutChinaAndLengthEquals8());
  t.is(3, expectedResult);
});

rankTest('test voyageProfitFactor China without China 13 and history include china and length 9', t => {
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryWithoutChinaAndLengthEquals9());
  t.is(4, expectedResult);
});

rankTest('test voyageProfitFactor China 10 and history include china and length 9', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals9());
  t.is(6, expectedResult);
});

rankTest('test voyageProfitFactor China 10 and history include china and length 10', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals10());
  t.is(6, expectedResult);
});

rankTest('test voyageProfitFactor China 10 and history include china and length 11', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals11());
  t.is(7, expectedResult);
});

rankTest('test voyageProfitFactor China 12 and history include china and length 9', t => {
  const voyage = {
    zone: 'china',
    length: 12,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals9());
  t.is(6, expectedResult);
});

rankTest('test voyageProfitFactor China 12 and history include china and length 10', t => {
  const voyage = {
    zone: 'china',
    length: 12,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals10());
  t.is(6, expectedResult);
});

rankTest('test voyageProfitFactor China 12 and history include china and length 11', t => {
  const voyage = {
    zone: 'china',
    length: 12,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals11());
  t.is(7, expectedResult);
});

rankTest('test voyageProfitFactor China 13 and history include china and length 9', t => {
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals9());
  t.is(7, expectedResult);
});

rankTest('test voyageProfitFactor China 13 and history include china and length 10', t => {
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals10());
  t.is(7, expectedResult);
});

rankTest('test voyageProfitFactor China 13 and history include china and length 11', t => {
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals11());
  t.is(8, expectedResult);
});

rankTest('test voyageProfitFactor China 18 and history include china and length 9', t => {
  const voyage = {
    zone: 'china',
    length: 18,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals9());
  t.is(7, expectedResult);
});

rankTest('test voyageProfitFactor China 18 and history include china and length 10', t => {
  const voyage = {
    zone: 'china',
    length: 18,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals10());
  t.is(7, expectedResult);
});

rankTest('test voyageProfitFactor China 18 and history include china and length 11', t => {
  const voyage = {
    zone: 'china',
    length: 18,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals11());
  t.is(8, expectedResult);
});

rankTest('test voyageProfitFactor China 19 and history include china and length 9', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals9());
  t.is(6, expectedResult);
});

rankTest('test voyageProfitFactor China 19 and history include china and length 10', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals10());
  t.is(6, expectedResult);
});

rankTest('test voyageProfitFactor China 19 and history include china and length 11', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const expectedResult = voyageProfitFactor(voyage, generateHistoryAndLengthEquals11());
  t.is(7, expectedResult);
});

rankTest('test voyageRisk west-indies 2', t => {
  const voyage = {
    zone: 'west-indies',
    length: 2,
  };
  const expectedResult = voyageRisk(voyage);
  t.is(1, expectedResult);
});

rankTest('test voyageRisk west-indies 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };
  const expectedResult = voyageRisk(voyage);
  t.is(1, expectedResult);
});

rankTest('test voyageRisk west-indies 6', t => {
  const voyage = {
    zone: 'west-indies',
    length: 6,
  };
  const expectedResult = voyageRisk(voyage);
  t.is(3, expectedResult);
});

rankTest('test voyageRisk west-indies 8', t => {
  const voyage = {
    zone: 'west-indies',
    length: 8,
  };
  const expectedResult = voyageRisk(voyage);
  t.is(3, expectedResult);
});

rankTest('test voyageRisk west-indies 10', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const expectedResult = voyageRisk(voyage);
  t.is(5, expectedResult);
});

rankTest('test voyageRisk china 2', t => {
  const voyage = {
    zone: 'china',
    length: 2,
  };
  const expectedResult = voyageRisk(voyage);
  t.is(5, expectedResult);
});

rankTest('test voyageRisk china 4', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const expectedResult = voyageRisk(voyage);
  t.is(5, expectedResult);
});

rankTest('test voyageRisk china 6', t => {
  const voyage = {
    zone: 'china',
    length: 6,
  };
  const expectedResult = voyageRisk(voyage);
  t.is(7, expectedResult);
});

rankTest('test voyageRisk china 8', t => {
  const voyage = {
    zone: 'china',
    length: 8,
  };
  const expectedResult = voyageRisk(voyage);
  t.is(7, expectedResult);
});

rankTest('test voyageRisk china 10', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const expectedResult = voyageRisk(voyage);
  t.is(9, expectedResult);
});

rankTest('test captainHistoryRisk china 4 and history without China and history length is 4', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const expectedResult = captainHistoryRisk(voyage,generateHistoryWithoutChinaAndLengthEquals4());
  t.is(6, expectedResult);
});

rankTest('test captainHistoryRisk china 4 and history without China and history length is 5', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const expectedResult = captainHistoryRisk(voyage,generateHistoryWithoutChinaAndLengthEquals5());
  t.is(2, expectedResult);
});

rankTest('test captainHistoryRisk china 4 and history without China and history length is 6', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const expectedResult = captainHistoryRisk(voyage,generateHistoryWithoutChinaAndLengthEquals6());
  t.is(2, expectedResult);
});

rankTest('test captainHistoryRisk china 4 and history has China and history length is 4', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const expectedResult = captainHistoryRisk(voyage,generateHistoryAndLengthEquals4());
  t.is(4, expectedResult);
});

rankTest('test captainHistoryRisk china 4 and history has China and history length is 5', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const expectedResult = captainHistoryRisk(voyage,generateHistoryAndLengthEquals5());
  t.is(0, expectedResult);
});

rankTest('test captainHistoryRisk china 4 and history has China and history length is 6', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const expectedResult = captainHistoryRisk(voyage,generateHistoryAndLengthEquals6());
  t.is(0, expectedResult);
});