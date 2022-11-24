console.log("%ctask03.js", "color: orange");

{
  const randomGenerate = (count, n, m, optional) => {
    if (n > m) {
      [n, m] = [m, n];
    }

    if (optional === 'even') {
      if (m % 2 != 0) m--;
      if (n % 2 != 0) n++;
    } else if (optional === 'odd') {
      if (m % 2 == 0) m--;
      if (n % 2 == 0) n++;
    }

    return new Array(count).fill().map(() => {
      let rand = Math.round(Math.random() * (m - n) + n);
      if (optional ==='even' && rand % 2 != 0) rand++;
      else if (optional === 'odd' && rand % 2 == 0) rand++;
      return rand;
    });
  }

  console.log(randomGenerate(10, -1, 7, 'odd'));
}