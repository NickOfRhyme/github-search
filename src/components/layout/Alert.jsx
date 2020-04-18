import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  return alert && <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
}

export default Alert;
