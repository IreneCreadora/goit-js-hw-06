// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories,
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
//  і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categoryEl = document.querySelector('ul#categories');
const listOfCategories = categoryEl.children;
const categoriesList = document.querySelectorAll('.item');

console.log(`Number of categories: ${listOfCategories.length}`);

categoriesList.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const categoriesList = item.querySelectorAll('li');
  console.log(`Elements: ${categoriesList.length}`);
});
