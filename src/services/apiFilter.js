const fetchData = (url) => fetch(url).then((d) => d.json());

const mealFilter = (type, search) => {
  switch (type) {
  case 'ingredient':
    return fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`);
  case 'name':
    return fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  case 'letter':
    return fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
  default:
    return '';
  }
};

const drinkFilter = (type, search) => {
  switch (type) {
  case 'ingredient':
    return fetchData(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`,
    );
  case 'name':
    return fetchData(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
    );
  case 'letter':
    return fetchData(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`,
    );
  default:
    return '';
  }
};

export default function apiFilter(filter, type, search) {
  switch (filter) {
  case 'meals':
    return mealFilter(type, search);
  case 'drinks':
    return drinkFilter(type, search);
  default:
    return null;
  }
}

export const fetchIngredients = (type) => {
  switch (type) {
  case 'meals':
    return fetchData('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  case 'drinks':
    return fetchData('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  default:
    return null;
  }
};

export const categoryFilter = (category, type) => {
  switch (type) {
  case 'meals':
    return fetchData(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );
  case 'drinks':
    return fetchData(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`,
    );
  default:
    return '404 categoryFilter';
  }
};

export const filterByIngredients = (ingredient, type) => {
  switch (type) {
  case 'foods':
    return fetchData(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
  case 'drinks':
    return fetchData(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
  default:
    return '';
  }
};

export const getSurpriseMe = (type) => {
  switch (type) {
  case 'meals':
    return fetchData('https://www.themealdb.com/api/json/v1/1/random.php');
  case 'drinks':
    return fetchData('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  default:
    return [];
  }
};
