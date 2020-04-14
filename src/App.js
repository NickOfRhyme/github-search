import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserList from "./components/users/UserList";
import UserForm from "./components/users/UserForm";
import Alert from "./components/layout/Alert";
import AboutPage from "./components/about/AboutPage";
import UserPage from "./components/users/UserPage";

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const searchUsers = async (text) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(response.data.items);
    setLoading(false);
  };

  const getUser = async (login) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(response.data);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const displayAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <UserForm
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  displayAlert={displayAlert}
                  usersShowing={users.length > 0}
                />
                {alert && <Alert alert={alert} />}
                <UserList users={users} isLoading={isLoading} />
              </>
            )}
          />
          <Route
            exact
            path="/users/:login"
            render={(props) => (
              <UserPage
                {...props}
                getUser={getUser}
                user={user}
                isLoading={isLoading}
              />
            )}
          />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
