'use strict';
console.log('%cgoods.js', 'color: yellow');

const Goods = function(title, price, discount) {
  this.title = title;
  this.price = price;
  this.discount = discount;
};

Goods.prototype.getInfo = function() {
  console.log(`
    Наименование: ${this.title}
    Цена: ${this.price} руб
    Скидка: ${this.discount}%`);
};

const FoodGoods = function(title, price, discount, calories) {
  Goods.call(this, title, price, discount);
  this.calories = calories;
};

Object.setPrototypeOf(FoodGoods.prototype, Goods.prototype);

const ClothingGoods = function(title, price, discount, material) {
  Goods.call(this, title, price, discount);
  this.material = material;
};

Object.setPrototypeOf(ClothingGoods.prototype, Goods.prototype);

const TechnicsGoods = function(title, price, discount, type) {
  Goods.call(this, title, price, discount);
  this.type = type;
};

Object.setPrototypeOf(TechnicsGoods.prototype, Goods.prototype);

const cookies = new FoodGoods('печенье', 60, 5, 400);
const shirt = new ClothingGoods('рубашка', 1200, 10, 'хлопок');
const coffeeMaker = new TechnicsGoods('кофеварка', 1600, 0, 'кухонная техника');

cookies.getInfo();
shirt.getInfo();
coffeeMaker.getInfo();
