import React from "react";
import { Link } from "react-router-dom";

const Header = ({ username, setUsername, setPassword, setUserToken }) => {
  const handleClick = (event) => {
    localStorage.removeItem(`${username}Token`);
    setUserToken(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <header>
        <div className="logo">Stanger Things</div>
        <Link to="/">HOME</Link>
        <Link to="/posts">POSTS</Link>
        <Link to="/login">LOGIN</Link>
      </header>
    </div>
  );
};

export default Header;
