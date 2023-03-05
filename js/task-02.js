const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add("item");
    
    return ingredientEl;
  });
};

const ingredientsList = createIngredientsList(ingredients);
document.querySelector('ul#ingredients').append(...ingredientsList);
  