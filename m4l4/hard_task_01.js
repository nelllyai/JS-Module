console.log("%chard_task_01.js", "color: orange");

const calculateGCD = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return calculateGCD(b, a % b);
  }
}

let a = 18, b = 42;

console.log(`НОД(${a}, ${b}) = ${calculateGCD(a, b)}`);