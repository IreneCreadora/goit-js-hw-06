// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const refs = {
  number: document.querySelector('#value'),
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  refs.number.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  refs.number.textContent = counterValue;
};

refs.btnDecrement.addEventListener('click', decrement);
refs.btnIncrement.addEventListener('click', increment);
