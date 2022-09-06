const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const listIngredientsRef = document.querySelector('ul#ingredients');

const makeListIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const itemOfIngredients = document.createElement('li');
    itemOfIngredients.classList.add('item');
    itemOfIngredients.textContent = ingredient;

    return itemOfIngredients;
  });
};

// const elements = makeListIngredients(ingredients);
// listIngredientsRef.append(...elements);
listIngredientsRef.append(...makeListIngredients(ingredients));
