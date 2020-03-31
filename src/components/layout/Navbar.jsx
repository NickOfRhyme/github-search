import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar">
      <i className={this.props.icon}></i>
      <h2>{this.props.title}</h2>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GitHub Search",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
