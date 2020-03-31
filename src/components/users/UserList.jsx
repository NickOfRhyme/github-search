import React from "react";
import PropTypes from "prop-types";
import UserCard from "./UserCard";
import LoadingSpinner from "../layout/LoadingSpinner";

const UserList = ({ users, isLoading }) => {
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <ul className="grid-container">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default UserList;
