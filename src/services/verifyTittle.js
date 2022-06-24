const verifyTittle = (pathname) => {
  switch (pathname) {
  case '/explore/foods/ingredients':
    return 'Explore Ingredients';
  case '/explore/drinks/ingredients':
    return 'Explore Ingredients';
  case '/explore/foods/nationalities':
    return 'Explore Nationalities';
  case '/explore/drinks':
    return 'Explore Drinks';
  case '/explore/foods':
    return 'Explore Foods';
  case '/foods':
    return 'Foods';
  case '/drinks':
    return 'Drinks';
  case '/explore':
    return 'Explore';
  case '/favorite-recipes':
    return 'Favorite Recipes';
  case '/done-recipes':
    return 'Done Recipes';
  case '/profile':
    return 'Profile';
  default:
    return 'Sem titulo';
  }
};

export default verifyTittle;
