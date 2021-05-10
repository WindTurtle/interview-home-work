import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import PostPage from "./pages/PostPage";

function NewfeedProduct() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.url} exact component={PostPage} />
    </Switch>
  );
}

export default NewfeedProduct;
