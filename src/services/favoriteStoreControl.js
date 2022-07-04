import { getLocalStorage, saveLocalStorage } from './LocalStorage';

const favoriteCreate = (data, key, id, type) => ({
  id,
  type,
  nationality: data.strArea || '',
  category: data.strCategory || '',
  alcoholicOrNot: data.strAlcoholic || '',
  name: data[`str${key}`],
  image: data[`str${key}Thumb`],
});

const favoriteCheck = (storageData, id) => (
  storageData.every((dat) => dat.id !== id)
);

const removeFavorite = (storageData, id) => (
  storageData.filter((dat) => dat.id !== id)
);

//  ====MAIN FUNCTION====//
export default function favoritesControl(data, mainKey, id) {
  const type = mainKey === 'meals' ? 'food' : 'drink';
  const recipeKey = (mainKey === 'meals')
    ? 'Meal' : 'Drink';
  const easyData = data[mainKey][0];

  const checkStorage = getLocalStorage('favoriteRecipes');
  const newStorage = favoriteCreate(easyData, recipeKey, id, type);
  if (!checkStorage) { return saveLocalStorage('favoriteRecipes', [newStorage]); }

  const checkedData = favoriteCheck(checkStorage, id);
  if (checkedData) {
    return saveLocalStorage('favoriteRecipes', [...checkStorage, newStorage]);
  }

  const favoriteRemoved = removeFavorite(checkStorage, id);
  saveLocalStorage('favoriteRecipes', [...favoriteRemoved]);
}

export const deleteFavoriteRecipe = (id) => {
  const checkStorage = getLocalStorage('favoriteRecipes');
  const favoriteRemoved = removeFavorite(checkStorage, id);
  saveLocalStorage('favoriteRecipes', [...favoriteRemoved]);
};
