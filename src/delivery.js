function deliveryDate (anOrder, isRush) {
  if (isRush) {
    let deliveryTime = 3;
    if ([
      'MA',
      'CT',
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 1;
    }
    else if ([
      'NY',
      'NH',
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime = 4;
    if ([
      'MA',
      'CT',
      'NY',
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    else if ([
      'ME',
      'NH',
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 3;
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}
module.exports = {
  deliveryDate,
}