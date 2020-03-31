import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <ul className="grid-container">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
