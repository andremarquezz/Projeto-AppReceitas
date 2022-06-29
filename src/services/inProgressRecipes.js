const createRecipe = (id, type) => {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  inProgressRecipes[type][id] = [];
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
};

export const getRecipe = ({ id, type }) => {
  const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (recipes && !recipes[type][id]) {
    createRecipe(id, type);
    return [];
  }
  if (!recipes) {
    const inProgressRecipes = {
      cocktails: {},
      meals: {},
    };
    inProgressRecipes[type][id] = [];
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    return [];
  }
  if (recipes[type][id]) return recipes[type][id];
};

export const addIngredient = ({ id, type, ingredient }) => {
  const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  recipes[type][id].push(ingredient);
  localStorage.setItem('inProgressRecipes', JSON.stringify(recipes));
};

export const removeIngredient = ({ id, type, ingredient }) => {
  const recipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  let recipe = recipes[type][id];
  recipe = recipe.filter((item) => item !== ingredient);
  recipes[type][id] = recipe;
  localStorage.setItem('inProgressRecipes', JSON.stringify(recipes));
};
