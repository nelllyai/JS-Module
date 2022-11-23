console.log("%ctask01.js", "color: yellow");

const filter = (arr1, arr2) => {
  const resultArray = [];

  for (student of arr1) {
    if (!arr2.includes(student)) {
      resultArray.push(student);
    }
  }

  return resultArray;
}

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

console.log(filter(allStudents, failedStudents));