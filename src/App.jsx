import React from "react";
import { Router } from "@reach/router";
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
        <div className="App">
          <Navbar />
          <Router>
            <Home path="/" />
            <UserPage path="/users/:login" />
            <AboutPage path="/about" />
          </Router>
        </div>
      </GithubState>
    </AlertState>
  );
};

const Home = () => (
  <>
    <UserForm />
    <Alert />
    <UserList />
  </>
);

export default App;
