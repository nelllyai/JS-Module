console.log("%ctask01.js", "color: yellow");

const printInRubles = euro => {
  const rubles = euro * 1.2 * 73;
  console.log(`${euro} евро — это ${rubles} рублей`);
}

printInRubles(213);