console.log("%ctask02.js", "color: pink");

{
  const randomGenerate = (count, n, m) => {
    if (n > m) {
      [n, m] = [m, n];
    }
    return new Array(count).fill().map(() => Math.round(Math.random() * (m - n) + n));
  }

  console.log(randomGenerate(12, 10, -10));
}