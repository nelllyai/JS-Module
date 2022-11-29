'use strict';

const startGame = num => {
  let userNum = prompt('Введите свой вариант отгадки: ');
  if (userNum === null) {
    return;
  }

  userNum = +userNum;

  if (isNaN(userNum)) {
    alert('Введите число!');
  } else if (userNum > num) {
    alert('Меньше!');
  } else if (userNum < num) {
    alert('Больше!');
  } else {
    alert('Правильно!');
    return;
  }

  startGame(num);
};

const num = Math.round(Math.random() * 100);

startGame(num);
