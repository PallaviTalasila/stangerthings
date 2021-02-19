import React from "react";

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
        <a href="#default" className="logo">
          Stanger Things
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#posts">Posts</a>
          <a href="#profile">Profile</a>
          <button className="logout" onClick={handleClick}>
            Logout
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
