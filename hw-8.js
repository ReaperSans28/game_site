// Задание 1
const heading = document.querySelector('#task-1 .hw-task__heading');
const toggleButton = document.querySelector('#task-1 .hw-task__button');
let isHeadingVisible = true;

toggleButton.addEventListener('click', () => {
  isHeadingVisible = !isHeadingVisible;
  heading.style.display = isHeadingVisible ? '' : 'none';
  toggleButton.textContent = isHeadingVisible ? 'Скрыть' : 'Показать';
});

// Задание 2
const paragraph = document.querySelector('#task-2 .hw-task__paragraph');
const colorButton = document.querySelector('#task-2 .hw-task__color-button');

colorButton.addEventListener('click', () => {
  paragraph.style.color = 'blue';
});

// Задание 3
const changeHeading = document.querySelector('#task-3 .hw-task__change-heading');
const textButton = document.querySelector('#task-3 .hw-task__text-button');

textButton.addEventListener('click', () => {
  changeHeading.textContent = 'Привет, мир!';
});

// Задание 4
const descriptionsTask4 = document.querySelectorAll('#task-4 .description');

descriptionsTask4.forEach((element) => {
  element.textContent = 'Измененный текст';
});

// Задание 5
const descriptionsTask5 = document.querySelectorAll('#task-5 .description');

descriptionsTask5.forEach((element) => {
  element.textContent = 'Новый текст';
});

// Задание 6
const addButton = document.querySelector('#task-6 .hw-task__add-button');
const appendTarget = document.querySelector('#task-6 .hw-task__append-target');

addButton.addEventListener('click', () => {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'Новый абзац';
  appendTarget.appendChild(newParagraph);
});

// Задание 7
const removeButton = document.querySelector('#task-7 .hw-task__remove-button');

removeButton.addEventListener('click', () => {
  const firstDescription = document.querySelector('#task-7 .description');

  if (firstDescription) {
    firstDescription.remove();
  }
});
