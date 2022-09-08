// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
// по кліку на button.change - color і виводить значення кольору в span.color.
const refs = {
  body: document.querySelector('body'),
  colorName: document.querySelector('.color'),
  btnRandomColor: document.querySelector('.change-color'),
};

refs.btnRandomColor.addEventListener('click', changeBodyColor);

function changeBodyColor(event) {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorName.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
