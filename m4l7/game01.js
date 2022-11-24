alert("Первый бот");

{
  const num = Math.round(Math.random() * 100);
  let userNum;

  do {
    userNum = prompt("Введите свой вариант отгадки: ");
    if (userNum === null) {
      break;
    }

    userNum = +userNum;

    if (isNaN(userNum)) {
      alert("Введите число!");
    } else if (userNum > num) {
      alert("Меньше!");
    } else if (userNum < num) {
      alert("Больше!");
    } else {
      alert("Правильно!");
    }
  } while (userNum != num);
}