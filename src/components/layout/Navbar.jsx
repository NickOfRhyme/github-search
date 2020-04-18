import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar">
      <span className="left-side">
        <i className={icon}></i>
        <h2>{title}</h2>
      </span>
      <span className="right-side">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </span>
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
