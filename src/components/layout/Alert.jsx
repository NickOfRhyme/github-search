import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import PropTypes from "prop-types";

function Alert() {
  const { alert } = useContext(AlertContext);
  return alert && <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
}

Alert.propTypes = {
  alert: PropTypes.object.isRequired
};

export default Alert;
