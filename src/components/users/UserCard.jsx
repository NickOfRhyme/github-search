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
    const { login, avatar_url, html_url } = this.state;

    return (
      <div className="card">
        <img src={avatar_url} alt={`${login}`} className="avatar"></img>
        <p className="username">{login}</p>
        <a className="btn" href={html_url}>
          more...
        </a>
      </div>
    );
  }
}

export default UserCard;
