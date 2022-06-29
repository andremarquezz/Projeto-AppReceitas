export const getDoneRecipes = () => {
  const recipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return recipes;
};

export const addDoneRecipe = (recipe) => {
  const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  recipes.push(recipe);
  localStorage.setItem('doneRecipes', JSON.stringify(recipes));
};
