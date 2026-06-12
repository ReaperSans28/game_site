const options = ['камень', 'ножницы', 'бумага'];

const startBtn = document.querySelector('.game-page__button--start');
const message = document.querySelector('.game-page__message');

function getComputerChoice() {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'ничья';
  }

  if (
    (userChoice === 'камень' && computerChoice === 'ножницы') ||
    (userChoice === 'ножницы' && computerChoice === 'бумага') ||
    (userChoice === 'бумага' && computerChoice === 'камень')
  ) {
    return 'победа';
  }

  return 'поражение';
}

function getResultText(result) {
  if (result === 'победа') {
    return 'Вы победили!';
  }

  if (result === 'поражение') {
    return 'Вы проиграли!';
  }

  return 'Ничья!';
}

function startGame() {
  const userChoice = prompt('Выберите: камень, ножницы или бумага');

  if (userChoice === null) {
    message.textContent = 'Игра отменена';
    message.className = 'game-page__message game-page__message--error';
    return;
  }

  const normalizedChoice = userChoice.trim().toLowerCase();

  if (!options.includes(normalizedChoice)) {
    message.textContent = 'Неверный выбор. Введите: камень, ножницы или бумага';
    message.className = 'game-page__message game-page__message--error';
    return;
  }

  const computerChoice = getComputerChoice();
  const result = getResult(normalizedChoice, computerChoice);

  message.textContent = `Ваш выбор: ${normalizedChoice}. Выбор компьютера: ${computerChoice}. ${getResultText(result)}`;
  message.className = `game-page__message game-page__message--${result === 'поражение' ? 'error' : 'success'}`;
}

startBtn.addEventListener('click', startGame);
