import React from "react";
import { Link } from "react-router-dom";

const Header = ({
  username,
  setUsername,
  setPassword,
  loggedIn,
  setLoggedIn,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    localStorage.removeItem(`${username}Token`);
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <header>
        <div className="logo">Stanger Things</div>
        <Link to="/">HOME</Link>
        {!loggedIn ? null : <Link to="/profile">Profile</Link>}
        <Link to="/posts">POSTS</Link>
        {loggedIn ? null : <Link to="/login">LOGIN</Link>}
        {!loggedIn ? null : (
          <Link to="/login" onClick={handleClick}>
            Logout
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
