import React, { Component } from "react";

class Navbar extends Component {
  static defaultProps = {
    title: "GitHub Search"
  };

  render() {
    return (
      <nav>
        <h1>{this.props.title}</h1>
      </nav>
    );
  }
}

export default Navbar;
