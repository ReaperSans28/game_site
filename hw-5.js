// Задание 1
const arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);

  if (arr1[i] === 10) {
    break;
  }
}

// Задание 2
const arr2 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === 4) {
    console.log(i);
    break;
  }
}

// Задание 3
const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

// Задание 4
const matrix = [];

for (let i = 0; i < 3; i++) {
  matrix[i] = [];

  for (let j = 0; j < 3; j++) {
    matrix[i][j] = 1;
  }
}

console.log(matrix);

// Задание 5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

// Задание 6
let arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6 = arr6.filter((item) => item !== 'a');
console.log(arr6);

// Задание 7
const arr7 = [9, 8, 7, 6, 5];
const guess = Number(prompt('Угадайте число из массива'));

if (arr7.includes(guess)) {
  alert('Угадал');
} else {
  alert('Не угадал');
}

// Задание 8
const str8 = 'abcdef';
console.log(str8.split('').reverse().join(''));

// Задание 9
const arr9 = [[1, 2, 3], [4, 5, 6]];
console.log([...arr9[0], ...arr9[1]]);

// Задание 10
const arr10 = [3, 7, 2, 9, 5, 1, 8];

for (let i = 0; i < arr10.length - 1; i++) {
  console.log(arr10[i] + arr10[i + 1]);
}

// Задание 11
function getSquares(numbers) {
  return numbers.map((number) => number ** 2);
}

console.log(getSquares([1, 2, 3, 4, 5]));

// Задание 12
function getWordLengths(words) {
  return words.map((word) => word.length);
}

console.log(getWordLengths(['Привет', 'Мир', 'JavaScript']));

// Задание 13
function getNegativeNumbers(numbers) {
  return numbers.filter((number) => number < 0);
}

console.log(getNegativeNumbers([4, -3, 7, -1, 0, -8, 2]));

// Задание 14
const arr14 = [];

for (let i = 0; i < 10; i++) {
  arr14.push(Math.floor(Math.random() * 11));
}

const evenNumbers = arr14.filter((number) => number % 2 === 0);
console.log(arr14);
console.log(evenNumbers);

// Задание 15
const arr15 = [];

for (let i = 0; i < 6; i++) {
  arr15.push(Math.floor(Math.random() * 10) + 1);
}

const average = arr15.reduce((sum, number) => sum + number, 0) / arr15.length;
console.log(arr15);
console.log(average);
