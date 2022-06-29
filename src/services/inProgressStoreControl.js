import { getLocalStorage, saveLocalStorage } from './LocalStorage';

// const ingredientsData = () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
//   .then((data) => data.json());

// const findIngredientId = async (array) => {
//   const allIngredients = await ingredientsData();
//   const myIngredients = await allIngredients.filter(({ strIngredient }) => (
//     array.some((item) => item === strIngredient)
//   ));
//   console.log(myIngredients);
// };

export default function inProgressControll(list, type, id) {
  const localType = type === 'meals'
    ? 'meals' : 'cocktails';
  const ingredientList = list.map((ing) => ing.split('-')[0]);

  const progressStorage = getLocalStorage('inProgressRecipes');

  if (!progressStorage) {
    return saveLocalStorage('inProgressRecipes', {
      [localType]: { [id]: ingredientList } });
  }

  // findIngredientId(ingredientList);
  // console.log('esquece esse', ingredientList, id);
}
