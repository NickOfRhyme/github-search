import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserList from "./components/users/UserList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserList />
      </div>
    );
  }
}

export default App;
