'use strict';

console.log('%ccustromizer.js', 'color: red');

const customizeArray = arr => {
  const clone = [...arr];

  if (clone.reduce((sum, elem) => sum += elem, 0) > 50) {
    return clone;
  }

  const rand = Math.round(Math.random() * 10);
  clone.push(rand);

  return customizeArray(clone);
};

const oldArray = [3, 6, 9];
const newArray = customizeArray(oldArray);

console.log('Старый массив:', oldArray);
console.log('Новый массив:', newArray);
