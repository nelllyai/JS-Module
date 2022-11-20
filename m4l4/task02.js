console.log("%ctask02.js", "color: blue");

const modifyString = string => {
  let resultString = string.toLowerCase();
  resultString = resultString[0].toUpperCase() + resultString.slice(1);
  return resultString;
}

const str = "привет Мир";
console.log(`${str} => ${modifyString(str)}`);