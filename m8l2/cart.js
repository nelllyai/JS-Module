'use strict';
console.log('%ccart.js', 'color: green');

const Cart = function(items = []) {
  this.items = items;
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.calculateGoodsPrice = function() {
  this.totalPrice = 0;
  for (const item of this.items) {
    this.totalPrice += item.price - item.price * item.discount / 100;
  }
};

Cart.prototype.addGoods = function(item) {
  this.items.push(item);
  this.increaseCount();
  this.calculateGoodsPrice();
};

Cart.prototype.getTotalPrice = function() {
  return this.totalPrice;
};

Cart.prototype.increaseCount = function() {
  this.count++;
};

Cart.prototype.clear = function() {
  this.items.length = 0;
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.print = function() {
  console.log(JSON.stringify(this.items));
  console.log('Общая стоимость: ' + this.totalPrice + ' руб');
};

const goods = [cookies, shirt];
const cart = new Cart(goods);
cart.addGoods(coffeeMaker);
cart.print();
