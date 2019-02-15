import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages";

import "./app.scss";

const App = () => {
  return (
    <main className="base">
      <div className="container">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </div>
    </main>
  );
};

export default App;
