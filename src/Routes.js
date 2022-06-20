import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import MainScreenFoods from './Pages/MainScreenFoods';
import MainScreenDrinks from './Pages/MainScreenDrinks';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ MainScreenFoods } />
      <Route exact path="/drinks" component={ MainScreenDrinks } />
    </Switch>
  );
}

export default Routes;
