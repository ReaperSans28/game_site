const form = document.querySelector('.game-page__form');
const input = document.querySelector('.game-page__textarea');
const output = document.querySelector('.game-page__output');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value.trim();

  if (!text) {
    output.textContent = 'Введите текст для переворота';
    return;
  }

  output.textContent = text.split('').reverse().join('');
});
