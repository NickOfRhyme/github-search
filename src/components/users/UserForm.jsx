import React, { useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ usersShowing, clearUsers, searchUsers, displayAlert }) => {
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

UserForm.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  displayAlert: PropTypes.func.isRequired,
  usersShowing: PropTypes.bool.isRequired
};

export default UserForm;
