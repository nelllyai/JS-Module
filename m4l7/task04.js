console.log("%ctask04.js", "color: purple");

const getLeapYears = (n, m) => {
  if (n < 0) n = Math.abs(n);
  if (m < 0) m = Math.abs(m);

  if (n > m) {
    [n, m] = [m, n];
  }

  const allYears = new Array(m - n + 1);
  allYears.fill();
  let counter = n - 1;

  return allYears.map(() => counter++).filter(year => {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
  });
}

console.log(getLeapYears(2000, 2110));