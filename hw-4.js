// Задание 1
function getMin(a, b) {
  return a <= b ? a : b;
}

// Задание 2
function getEvenOdd(n) {
  return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

// Задание 3
function printSquare(n) {
  console.log(n * n);
}

function getSquare(n) {
  return n * n;
}

// Задание 4
function greetByAge() {
  const age = Number(prompt('Сколько вам лет?'));

  if (age < 0) {
    alert('Вы ввели неправильное значение');
  } else if (age <= 12) {
    alert('Привет, друг!');
  } else {
    alert('Добро пожаловать!');
  }
}

// Задание 5
function multiplyNumbers(a, b) {
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return 'Одно или оба значения не являются числом';
  }

  return numA * numB;
}

// Задание 6
function cubeNumber() {
  const n = Number(prompt('Введите число'));

  if (isNaN(n)) {
    return 'Переданный параметр не является числом';
  }

  return `${n} в кубе равняется ${n ** 3}`;
}

// Задание 7
const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};
