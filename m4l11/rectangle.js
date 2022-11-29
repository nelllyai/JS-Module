'use strict';

console.log('%crectangle.js', 'color: yellow');

const rectangle = {
  a: 5,
  b: 5,
  get perimeter() {
    return `${2 * (this.a + this.b)} см`;
  },
  get square() {
    return `${this.a * this.b} см2`;
  },
  set width(val) {
    if (typeof val === 'number') {
      this.a = val;
    }
  },
  set height(val) {
    if (typeof val === 'number') {
      this.b = val;
    }
  },
};

rectangle.width = 8;
rectangle.height = '12';

console.log('Периметр прямоугольника = ', rectangle.perimeter);
console.log('Площадь прямоугольника = ', rectangle.square);
