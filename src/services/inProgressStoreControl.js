import { getLocalStorage, saveLocalStorage } from './LocalStorage';

const filterDataFood = (array, fetchData) => fetchData.filter(({ strIngredient }) => (
  array.some((item) => item === strIngredient)
));

// const filterDataDrink = (array, fetchData) => fetchData.filter(({ strIngredient1 }) => (
//   array.some((item) => item === strIngredient1)
// ));

const ingredientsFoodsData = async (array, type) => (
  fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((data) => data.json())
    .then((result) => filterDataFood(array, result[type]))
);

// const ingredientsDrinkData = async (array, type) => (
//   fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
//     .then((data) => data.json())
//     .then((result) => filterDataDrink(array, result[type]))
// );

const ingredientsData = async (array, type) => {
  switch (type) {
  case 'meals':
    return ingredientsFoodsData(array, type);

  // case 'drinks':
  //   return ingredientsDrinkData(array, type);
  default:
    return [];
  }
};

const findIngredientId = async (array, type) => {
  if (type === 'drinks') { return array; }
  const allIngredients = await ingredientsData(array, type);
  return allIngredients.map((ingredient) => Number(ingredient.idIngredient));
};

const newIngredientList = (recipe) => {
  const detailsObj = recipe[0];
  const objKays = Object.keys(detailsObj);
  const ingredients = objKays.filter((objKey) => objKey.includes('Ingredient'));

  const newIngredients = ingredients
    .map((ingredient) => (detailsObj[ingredient]
      ? detailsObj[ingredient]
      : false));

  const ingredientsItem = newIngredients.filter((item) => item !== false);
  return ingredientsItem;
};

//  //====//====MAIN FUNCTION====//====//
export default async function inProgressControll(recipe, type, id) {
  const localType = type === 'meals'
    ? 'meals' : 'cocktails';
  const notUsedKey = type === 'meals'
    ? 'cocktails' : 'meals';

  const ingredientList = newIngredientList(recipe[type]);

  const progressStorage = getLocalStorage('inProgressRecipes');
  const ingredientIds = await findIngredientId(ingredientList, type);

  if (!progressStorage) {
    return saveLocalStorage('inProgressRecipes', {
      [localType]: { [id]: ingredientIds } });
  }

  saveLocalStorage('inProgressRecipes', {
    [notUsedKey]: progressStorage[notUsedKey],
    [localType]: { ...progressStorage[localType], [id]: ingredientIds } });
}
