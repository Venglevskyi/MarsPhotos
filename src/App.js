import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";
import Layout from "./Components/Layout";
import HomePage from "./Views/Home";
import Photos from "./Views/Photos";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={routes.HOME} component={HomePage}></Route>
        <Route path={routes.PHOTOS} component={Photos}></Route>
      </Switch>
    </Layout>
  );
};

export default App;
