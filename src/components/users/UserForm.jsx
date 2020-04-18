import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const UserForm = () => {
  const { displayAlert } = useContext(AlertContext);
  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const usersShowing = users.length > 0;
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      searchUsers(text);
      setText("");
    } else {
      displayAlert("Please enter a search term", "warning");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        name="text"
        className="search-textbox"
        value={text}
        onChange={handleChange}
      />
      <button className="btn" type="submit">
        Search
      </button>
      {usersShowing && (
        <button className="btn btn-light" type="button" onClick={clearUsers}>
          Clear
        </button>
      )}
    </form>
  );
};

export default UserForm;
