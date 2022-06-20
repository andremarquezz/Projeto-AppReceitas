import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import MainScreenFoods from './Pages/MainScreenFoods';
import MainScreenDrinks from './Pages/MainScreenDrinks';

const TODO = 'A fazer';

function Routes() {
  return (
    <Switch>
      <Route exact path="/explore/foods/nationalities" component={ TODO } />
      <Route exact path="/explore/foods/ingredients" component={ TODO } />
      <Route exact path="/explore/foods" component={ TODO } />
      <Route exact path="/foods/:id/in-progress" component={ TODO } />
      <Route exact path="/foods/:id" component={ TODO } />
      <Route exact path="/foods" component={ MainScreenFoods } />

      <Route exact path="/explore/drinks/ingredients" component={ TODO } />
      <Route exact path="/explore/drinks" component={ TODO } />
      <Route exact path="/drinks/:id/in-progress" component={ TODO } />
      <Route exact path="/drinks/:id" component={ TODO } />
      <Route exact path="/drinks" component={ MainScreenDrinks } />

      <Route exact path="/explore" component={ TODO } />
      <Route exact path="/profile" component={ TODO } />
      <Route exact path="/done-recipes" component={ TODO } />
      <Route exact path="/favorite-recipes" component={ TODO } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default Routes;
