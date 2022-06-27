const fetchData = (url) => fetch(url).then((d) => d.json());

const fetchCategories = (pathname) => {
  switch (pathname) {
  case '/foods':
    return fetchData('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  case '/drinks':
    return fetchData('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  default:
    return [];
  }
};

export default fetchCategories;
