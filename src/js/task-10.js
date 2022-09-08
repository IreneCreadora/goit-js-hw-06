// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість
// елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const refs = {
  inputValue: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

const onCreateBoxesClick = event => {
  createBoxes(refs.inputValue.value);
};

function createBoxes(amount) {
  let size = 20;
  const boxArr = [];
  for (let index = 0; index < amount; index += 1) {
    const box = document.createElement('div');
    size += 10;
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxArr.push(box);
  }
  boxes.append(...boxArr);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

refs.createBtn.addEventListener('click', onCreateBoxesClick);
refs.destroyBtn.addEventListener('click', destroyBoxes);
