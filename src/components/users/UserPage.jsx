import React, { useEffect, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import LoadingSpinner from "../layout/LoadingSpinner";

const UserPage = ({ match }) => {
  const { getUser, user, isLoading } = useContext(GithubContext);

  useEffect(() => {
    getUser(match.params.login);
  }, []);

  const { name, avatar_url, location, bio, blog, login, html_url } = user;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="user-page">
      <div className="user-overview">
        <img className="avatar" src={avatar_url} alt="avatar" />
        <p className="username">{login}</p>
        <p className="location">{location}</p>
        <p>
          <a href={blog}>website</a>
        </p>
        <p>
          <a href={html_url}>github</a>
        </p>
      </div>
      <div className="user-details">
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default UserPage;
