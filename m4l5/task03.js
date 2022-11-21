console.log("%ctask03.js", "color: brown");

const inverse = string => {
  let resultString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    resultString += string[i];
  }

  return resultString;
}

const testString = "Привет мир";
console.log(`"${testString}" => "${inverse(testString)}"`)