import React, { Component } from "react";

class Navbar extends Component {
  static defaultProps = {
    title: "GitHub Search",
    icon: "fab fa-github"
  };

  render() {
    return (
      <nav className="navbar">
        <h2>{this.props.title}</h2>
        <i className={this.props.icon}></i>
      </nav>
    );
  }
}

export default Navbar;
