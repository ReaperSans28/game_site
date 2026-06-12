// Задание 1
for (let i = 0; i < 2; i++) {
  console.log('Привет');
}

// Задание 2
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Задание 3
for (let i = 7; i <= 22; i++) {
  console.log(i);
}

// Задание 4
let obj = {
  Коля: '200',
  Вася: '300',
  Петя: '400'
};

for (let name in obj) {
  console.log(name + ' — зарплата ' + obj[name] + ' долларов');
}

// Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log('Получившееся число: ' + n);
console.log('Количество итераций: ' + num);

// Задание 6
let firstFriday = 5;

for (let date = firstFriday; date <= 31; date += 7) {
  console.log('Сегодня пятница, ' + date + '-е число. Необходимо подготовить отчет.');
}
