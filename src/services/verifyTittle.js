const verifyTittle = (pathname) => {
  switch (pathname) {
  case '/foods':
    return 'Foods';
  case '/drinks':
    return 'Drinks';
  case '/explore':
    return 'Explore';
  case '/explore/drinks':
    return 'Drinks';
  case '/explore/foods/ingredients':
    return 'Foods';
  case '/explore/drinks/ingredients':
    return 'Drinks';
  case '/explore/foods/nationalities':
    return 'Nationalities';
  case '/done-recipes':
    return 'Done Recipes';
  case '/profile':
    return 'Profile';
  default:
    return null;
  }
};

export default verifyTittle;
