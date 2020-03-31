import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import UserCard from "./components/users/UserCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserCard />
      </div>
    );
  }
}

export default App;
