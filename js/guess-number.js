const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const form = document.querySelector('.game-page__form');
const input = document.querySelector('.game-page__input');
const message = document.querySelector('.game-page__message');
const attemptsEl = document.querySelector('.game-page__attempts');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const guess = Number(input.value);

  if (!input.value || isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Введите целое число от 1 до 100';
    message.className = 'game-page__message game-page__message--error';
    return;
  }

  attempts++;
  attemptsEl.textContent = `Попыток: ${attempts}`;

  if (guess === randomNumber) {
    message.textContent = `Поздравляем! Вы угадали число ${randomNumber} за ${attempts} ${getAttemptsWord(attempts)}!`;
    message.className = 'game-page__message game-page__message--success';
    input.disabled = true;
    form.querySelector('.game-page__button').disabled = true;
    return;
  }

  if (guess > randomNumber) {
    message.textContent = 'Загаданное число меньше';
  } else {
    message.textContent = 'Загаданное число больше';
  }

  message.className = 'game-page__message';
  input.value = '';
  input.focus();
});

function getAttemptsWord(count) {
  const lastTwo = count % 100;
  const lastOne = count % 10;

  if (lastTwo >= 11 && lastTwo <= 14) {
    return 'попыток';
  }

  if (lastOne === 1) {
    return 'попытку';
  }

  if (lastOne >= 2 && lastOne <= 4) {
    return 'попытки';
  }

  return 'попыток';
}
