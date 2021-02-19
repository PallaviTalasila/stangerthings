import React from "react";

const Header = () => {
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
          <a href="#logout">Logout</a>
        </div>
      </header>
    </div>
  );
};

export default Header;
