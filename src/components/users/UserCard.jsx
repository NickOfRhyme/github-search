import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

const UserCard = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className="card">
      <img src={avatar_url} alt={`${login}`} className="avatar"></img>
      <p className="username">{login}</p>
      <Link className="btn" to={`/users/${login}`}>
        more...
      </Link>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserCard;
