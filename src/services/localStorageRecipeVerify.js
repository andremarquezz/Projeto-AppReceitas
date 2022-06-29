import { getLocalStorage } from './LocalStorage';

export default function localStorageProductVerify(productId) {
  const recipeDoneStorage = getLocalStorage('doneRecipes');
  const recipeDone = (recipeDoneStorage)
    ? recipeDoneStorage.some((recipe) => recipe.id === productId) : false;

  const recipeInProgressStorage = getLocalStorage('inProgressRecipes');
  const recipeInProgressCheck = recipeInProgressStorage
    ?.some((recipe) => recipe.id === productId);

  const recipeInProgress = (recipeInProgressCheck)
    ? 'Continue Recipe' : 'Start Recipe';

  const recipefavoriteStorage = getLocalStorage('favoriteRecipes');
  const recipefavorite = (recipefavoriteStorage)
    ? recipefavoriteStorage.some((recipe) => recipe.id === productId) : false;

  return {
    recipeDone,
    recipeInProgress,
    recipefavorite,
  };
}
