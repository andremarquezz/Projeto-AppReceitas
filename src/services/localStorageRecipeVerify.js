import { getLocalStorage } from './LocalStorage';

const verifyRecipeinProgress = (storageData, type, id) => {
  const localType = type === 'foods' ? 'meals' : 'cocktails';

  if (!storageData[localType]) {
    return false;
  }
  const myRecipes = Object.keys(storageData[localType]);

  return myRecipes.some((ids) => ids === id);
};

//  ===MAIN FUNCTION===//
export default function localStorageRecipeVerify(type, id) {
  const recipeDoneStorage = getLocalStorage('doneRecipes');
  const recipeDone = recipeDoneStorage
    ? recipeDoneStorage.some((recipe) => recipe.id === id)
    : false;

  const inProgressStorage = getLocalStorage('inProgressRecipes');
  let recipeInProgressCheck = false;
  if (inProgressStorage) {
    recipeInProgressCheck = verifyRecipeinProgress(inProgressStorage, type, id);
  }

  const recipeInProgress = recipeInProgressCheck ? 'Continue Recipe' : 'Start Recipe';

  const recipefavoriteStorage = getLocalStorage('favoriteRecipes');
  const recipefavorite = recipefavoriteStorage
    ? recipefavoriteStorage.some((recipe) => recipe.id === id)
    : false;

  return {
    recipeDone,
    recipeInProgress,
    recipefavorite,
  };
}
