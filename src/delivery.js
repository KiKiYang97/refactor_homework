const deliveryMAandCT = [
  'MA',
  'CT',
];

const deliveryNYandNH = [
  'NY',
  'NH',
];

const deliveryMAandCTandNY = [
  'MA',
  'CT',
  'NY',
];

const deliveryNEandNH = [
  'ME',
  'NH',
];

function deliveryDate (anOrder, isRush) {
  if (isRush) {
    let deliveryTime = 3;
    if (deliveryMAandCT.includes(anOrder.deliveryState)) {
      deliveryTime = 1;
    }
    else if (deliveryNYandNH.includes(anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime = 4;
    if (deliveryMAandCTandNY.includes(anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    else if (deliveryNEandNH.includes(anOrder.deliveryState)) {
      deliveryTime = 3;
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}
module.exports = {
  deliveryDate,
}