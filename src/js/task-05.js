// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//  підставляє його поточне значення в span#name - output.
//  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const refs = {
  input: document.querySelector('input#name-input'),
  nameOutput: document.querySelector('span#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  const { value } = event.currentTarget;
  refs.nameOutput.textContent = value ? value : 'Anonymous';
}
// const refs = {
//   input: document.querySelector('#name-input'),
//   output: document.querySelector('#name-output'),
// };
// refs.input.addEventListener('input', changeName);
// function changeName({ target: { value } }) {
//   refs.output.textContent = value.trim() || 'Anonymous';
// }
