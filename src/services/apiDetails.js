const fetchData = (url) => fetch(url).then((d) => d.json());

export default function apiDetails(type, id) {
  switch (type) {
  case 'foods':
    return fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  case 'drinks':
    return fetchData(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  default:
    return [];
  }
}
