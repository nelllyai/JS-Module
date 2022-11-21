console.log("%ctask01.js", "color: yellow");

for (let i = 1; i <= 10; i++) {
  console.log("--------------");
  for (let k = 1; k <= 10; k++) {
    console.log(`${k} ^ ${i} = ${k ** i}`);
  }
}