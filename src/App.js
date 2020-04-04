import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserList from "./components/users/UserList";
import UserForm from "./components/users/UserForm";
import Alert from "./components/layout/Alert";
import AboutPage from "./components/about/AboutPage";
import UserPage from "./components/users/UserPage";

class App extends Component {
  state = {
    isLoading: false,
    alert: null,
    users: [],
    user: {},
  };

  searchUsers = async (text) => {
    this.setState({ isLoading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: response.data.items, isLoading: false });
  };

  getUser = async (login) => {
    this.setState({ isLoading: true });
    const response = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ isLoading: false, user: response.data });
  };

  clearUsers = () => this.setState({ users: [], isLoading: false });

  displayAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, isLoading, alert } = this.state;
    const { searchUsers, clearUsers, displayAlert } = this;
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
                  getUser={this.getUser}
                  user={this.state.user}
                  isLoading={isLoading}
                />
              )}
            />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
