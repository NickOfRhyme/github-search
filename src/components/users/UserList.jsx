import React, { Component } from "react";
import UserCard from "./UserCard";

class UserList extends Component {
  state = {
    users: [
      {
        id: 1,
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
      },
      {
        id: 2,
        login: "defunkt",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt"
      },
      {
        id: 3,
        login: "pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett"
      }
    ]
  };

  render() {
    const { users } = this.state;
    return (
      <ul className="grid-container">
        {users.map(user => (
          <UserCard user={user} />
        ))}
      </ul>
    );
  }
}

export default UserList;
