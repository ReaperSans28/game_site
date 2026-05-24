let currentTask = null;

const taskEl = document.querySelector('.game-page__task');
const message = document.querySelector('.game-page__message');
const newTaskBtn = document.querySelector('.game-page__button--new');
const answerBtn = document.querySelector('.game-page__button--answer');

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTask() {
  const operations = ['+', '-', '*', '/'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let a;
  let b;
  let answer;

  switch (operation) {
    case '+':
      a = randomInt(1, 20);
      b = randomInt(1, 20);
      answer = a + b;
      break;
    case '-':
      a = randomInt(5, 30);
      b = randomInt(1, a);
      answer = a - b;
      break;
    case '*':
      a = randomInt(1, 10);
      b = randomInt(1, 10);
      answer = a * b;
      break;
    case '/':
      b = randomInt(1, 10);
      answer = randomInt(1, 10);
      a = b * answer;
      break;
  }

  return {
    question: `${a} ${operation} ${b}`,
    answer
  };
}

function showTask() {
  currentTask = generateTask();
  taskEl.textContent = `${currentTask.question} = ?`;
  message.textContent = '';
  message.className = 'game-page__message';
  answerBtn.disabled = false;
}

function checkAnswer() {
  if (!currentTask) {
    return;
  }

  const userAnswer = prompt(`Решите пример: ${currentTask.question}`);

  if (userAnswer === null) {
    return;
  }

  const answer = Number(userAnswer);

  if (isNaN(answer)) {
    message.textContent = 'Ошибка: введите число';
    message.className = 'game-page__message game-page__message--error';
    return;
  }

  if (answer === currentTask.answer) {
    message.textContent = 'Верный ответ!';
    message.className = 'game-page__message game-page__message--success';
  } else {
    message.textContent = `Ошибка. Правильный ответ: ${currentTask.answer}`;
    message.className = 'game-page__message game-page__message--error';
  }
}

newTaskBtn.addEventListener('click', showTask);
answerBtn.addEventListener('click', checkAnswer);

showTask();
