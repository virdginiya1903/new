import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages";

import "./app.scss";

const App = () => {
  return (
    <section className="base">
      <div className="base-container">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </div>
    </section>
  );
};

export default App;
