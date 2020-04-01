import React from "react";
import PropTypes from "prop-types";

function Alert({ alert: { msg, type } }) {
  return <p className={`alert alert-${type}`}>{msg}</p>;
}

Alert.propTypes = {
  alert: PropTypes.object.isRequired
};

export default Alert;
