import React, { Component } from "react";
import PropTypes from "prop-types";

class UserCard extends Component {
  state = {
    id: 1,
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo"
  };

  render() {
    const { user } = this.props;

    return (
      <div className="card">
        <img
          src={user.avatar_url}
          alt={`${user.login}`}
          className="avatar"
        ></img>
        <p className="username">{user.login}</p>
        <a className="btn" href={user.html_url}>
          more...
        </a>
      </div>
    );
  }
}

export default UserCard;
