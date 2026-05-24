// Задание 1
console.log('js'.toUpperCase());

// Задание 2
function filterByStart(words, prefix) {
  const lowerPrefix = prefix.toLowerCase();

  return words.filter((word) => word.toLowerCase().startsWith(lowerPrefix));
}

// Задание 3
const number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5
function printRandomNumber() {
  console.log(Math.floor(Math.random() * 10) + 1);
}

// Задание 6
function getRandomArray(n) {
  const result = [];
  const length = n / 2;

  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (n + 1)));
  }

  return result;
}

// Задание 7
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Задание 8
console.log(new Date());

// Задание 9
const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log(futureDate);

// Задание 10
function formatDate(date) {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  const weekdays = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = weekdays[date.getDay()];
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${weekday}. Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));
