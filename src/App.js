import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Browse, Signin, Signup, Watch } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
import store from "./redux/store";

export default function App() {
  const { user } = useAuthListener();

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
            <Signin />
          </IsUserRedirect>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
            <Signup />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <ProtectedRoute user={user} path={ROUTES.WATCH}>
            <Watch />
          </ProtectedRoute>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
            <Home />
          </IsUserRedirect>
        </Switch>
      </Router>
    </Provider>
  );
}
