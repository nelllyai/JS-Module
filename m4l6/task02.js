console.log("%ctask02.js", "color: pink");

const getAverageValue = arr => {
  let sum = 0;

  for (elem of arr) {
    sum += elem;
  }

  return sum / arr.length;
}

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log(`Средний чек за день - ${getAverageValue(allCashbox)}`);