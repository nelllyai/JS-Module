console.log("%ctask03.js", "color: pink");

const calculate = (cost, quantity, promo) => {
  let resultCost = cost;

  if (quantity > 10) {
    resultCost -= resultCost * 0.03;
  }

  if (resultCost > 30000) {
    const excess = resultCost - 30000;
    resultCost = 30000 + (excess - excess * 0.15);
  }

  if (promo === "METHED") {
    resultCost -= resultCost *= 0.1;
  } else if (promo === "G3H2Z1" && resultCost > 2000) {
    resultCost -= 500;
  }

  return resultCost;
}

let costTest = 15000, quantityTest = 13, promoTest = "";
console.log(`Общая сумма корзины — ${costTest},
            количество товаров в корзине — ${quantityTest},
            промокод — "${promoTest}", тогда
            стоимость корзины после применения всех акций и скидок
            — ${calculate(costTest, quantityTest, promoTest)}`);

costTest = 36000, quantityTest = 9, promoTest = "METHED";
console.log(`Общая сумма корзины — ${costTest},
            количество товаров в корзине — ${quantityTest},
            промокод — "${promoTest}", тогда
            стоимость корзины после применения всех акций и скидок
            — ${calculate(costTest, quantityTest, promoTest)}`);

costTest = 45000, quantityTest = 16, promoTest = "G3H2Z1";
console.log(`Общая сумма корзины — ${costTest},
            количество товаров в корзине — ${quantityTest},
            промокод — "${promoTest}", тогда
            стоимость корзины после применения всех акций и скидок
            — ${calculate(costTest, quantityTest, promoTest)}`);