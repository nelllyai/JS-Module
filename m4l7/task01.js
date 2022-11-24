console.log("%ctask01.js", "color: yellow");

{
  const randomGenerate = count => {
    return new Array(count).fill().map(() => Math.round(Math.random() * 100));
  }

  console.log(randomGenerate(10));
}