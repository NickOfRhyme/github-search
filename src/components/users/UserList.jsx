import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import UserCard from "./UserCard";
import LoadingSpinner from "../layout/LoadingSpinner";

const UserList = () => {
  const { users, isLoading } = useContext(GithubContext);
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <ul className="grid-container">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
