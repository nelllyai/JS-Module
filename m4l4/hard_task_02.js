console.log("%chard_task_02.js", "color: red");

const findMinimum = (a, b) => {
  return (a < b) * a + (a > b) * b;
}

a = 3, b = 7;
console.log(`Минимальное число из a = ${a} и b = ${b} — это ${findMinimum(a, b)}`);