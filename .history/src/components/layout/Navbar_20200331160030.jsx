import React, { Component } from "react";

class Navbar extends Component {
  static defaultProps = {
    title: "GitHub Search",
    icon: "fab fa-github"
  };

  render() {
    return (
      <nav className="navbar">
        <i className={this.props.icon}></i>
        <h2>{this.props.title}</h2>
      </nav>
    );
  }
}

export default Navbar;
