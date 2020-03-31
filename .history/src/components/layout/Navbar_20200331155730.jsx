import React, { Component } from "react";

class Navbar extends Component {
  static defaultProps = {
    title: "GitHub Search",
    icon: "fab fa-github"
  };

  render() {
    return (
      <nav>
        <i className={this.props.icon}></i>
        <h1>{this.props.title}</h1>
      </nav>
    );
  }
}

export default Navbar;
