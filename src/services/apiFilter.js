const fetchData = (url) => fetch(url).then((d) => d.json());

const mealFilter = ({ type, search }) => {
  switch (type) {
  case 'ingredient':
    return (fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`));
  case 'name':
    return (fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`));
  case 'letter':
    return (fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`));
  default:
    return [];
  }
};

const drinkFilter = ({ type, search }) => {
  switch (type) {
  case 'ingredient':
    return (fetchData(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`));
  case 'name':
    return (fetchData(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`));
  case 'letter':
    return (fetchData(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`));
  default:
    return [];
  }
};

export default function apiFilter(filter, data) {
  switch (filter) {
  case 'meal':
    return mealFilter(data);
  case 'drink':
    return drinkFilter(data);
  default:
    return [];
  }
}
