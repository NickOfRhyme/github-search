import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  static defaultProps = {
    title: "GitHub Search",
    icon: "fab fa-github"
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
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
