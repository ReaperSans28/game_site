const quiz = [
  {
    question: 'Какой цвет небо?',
    options: ['1. Красный', '2. Синий', '3. Зеленый'],
    correctAnswer: 2
  },
  {
    question: 'Сколько дней в неделе?',
    options: ['1. Шесть', '2. Семь', '3. Восемь'],
    correctAnswer: 2
  },
  {
    question: 'Сколько у человека пальцев на одной руке?',
    options: ['1. Четыре', '2. Пять', '3. Шесть'],
    correctAnswer: 2
  }
];

const startBtn = document.querySelector('.game-page__button--start');
const message = document.querySelector('.game-page__message');

function startQuiz() {
  let correctCount = 0;

  for (const item of quiz) {
    const optionsText = item.options.join('\n');
    const userAnswer = prompt(`${item.question}\n${optionsText}`);

    if (userAnswer === null) {
      message.textContent = 'Викторина прервана';
      message.className = 'game-page__message game-page__message--error';
      return;
    }

    if (Number(userAnswer) === item.correctAnswer) {
      correctCount++;
    }
  }

  alert(`Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов`);
  message.textContent = `Результат: ${correctCount} из ${quiz.length} правильных ответов`;
  message.className = 'game-page__message game-page__message--success';
}

startBtn.addEventListener('click', startQuiz);
