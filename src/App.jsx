import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserList from "./components/users/UserList";
import UserForm from "./components/users/UserForm";
import Alert from "./components/layout/Alert";
import AboutPage from "./components/about/AboutPage";
import UserPage from "./components/users/UserPage";

const App = () => {
  return (
    <AlertState>
      <GithubState>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <>
                    <UserForm />
                    <Alert />
                    <UserList />
                  </>
                )}
              />
              <Route
                exact
                path="/users/:login"
                render={(props) => <UserPage {...props} />}
              />
              <Route exact path="/about" component={AboutPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </GithubState>
    </AlertState>
  );
};

export default App;
