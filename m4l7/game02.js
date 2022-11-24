alert("Второй бот");

{
  const a = +prompt("Введите начало диапазона: ");
  const b = +prompt("Введите конец диапазона: ");

  if (a > b) {
    [a, b] = [b, a];
  }

  const attempts = Math.round((b - a) * 0.3);
  const num = Math.round(Math.random() * (b - a) + a);
  let userNum, usedAttempts = 0;
  const numbers = [];

  do {
    userNum = prompt("Введите свой вариант отгадки: ");
    if (userNum === null) {
      break;
    }

    userNum = +userNum;

    if (isNaN(userNum)) {
      alert("Введите число!");
    } else if (numbers.some(elem => elem === userNum)) {
      alert("Вы уже вводили это число!");
    } else {
      usedAttempts++;

      if (usedAttempts == attempts) {
        alert("Вы проиграли!");
      } else {
        numbers.push(userNum);

        if (userNum > num) {
          alert("Меньше!");
        } else if (userNum < num) {
          alert("Больше!");
        } else {
          alert("Правильно!");
        }
      }
    }
  } while (userNum != num && usedAttempts != attempts);
}