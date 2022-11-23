console.log("%ctask04.js", "color: orange");

const getAveragePriceGoods = arr => {
  let sumPrice = 0;
  let sumQuantity = 0;

  for (elem of arr) {
    const [quantity, price] = elem;
    sumPrice += price;
    sumQuantity += quantity;
  }

  return sumPrice / sumQuantity;
}

const allCashboxes = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];

console.log(`Средняя стоимость одного товара - ${getAveragePriceGoods(allCashboxes)}`);