export default (recipeDetails, detailsType, array) => {
  let day = new Date().getDate().toString();
  day = day.length === 1 ? 0 + day : day;
  let month = new Date().getMonth().toString();
  month = month.length === 1 ? 0 + month : month;
  const year = new Date().getFullYear().toString();
  const doneRecipe = {
    id: array[2],
    type: detailsType === 'meals' ? 'food' : 'drink',
    nationality: recipeDetails[detailsType][0].strArea || '',
    category: recipeDetails[detailsType][0].strCategory || '',
    alcoholicOrNot: detailsType === 'meals'
      ? ''
      : recipeDetails[detailsType][0].strAlcoholic,
    name: recipeDetails[detailsType][0].strDrink || recipeDetails[detailsType][0].strMeal,
    image: detailsType === 'meals'
      ? recipeDetails[detailsType][0].strMealThumb
      : recipeDetails[detailsType][0].strDrinkThumb,
    doneDate: `${day}/${month}/${year}`,
    tags: recipeDetails[detailsType][0].strTags?.split(', ') || [],
  };
  return doneRecipe;
};
