console.log("%ctask02.js", "color: pink");

const isPrime = a => {
  for (let i = 2; i < a; i++) {
    if (!(a % i)) return false;
  }
  return true;
}

if (isPrime(5)) {
  console.log("5 — простое число");
} else {
  console.log("5 — не простое число");
}

if (isPrime(12)) {
  console.log("12 — простое число");
} else {
  console.log("12 — не простое число");
}