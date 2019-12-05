import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <Switch>
      <Route component={HomePage} path="/" exact />
      <Route component={ShopPage} path="/shop" exact />
    </Switch>
  );
}

export default App;
