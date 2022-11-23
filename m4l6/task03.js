console.log("%ctask03.js", "color: blue");

const addPrefix = ([...arr], prefix) => {
  for (key in arr) {
    arr[key] = prefix + ' ' + arr[key];
  }

  return arr;
}

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
console.log(addPrefix(names, 'Mr'));