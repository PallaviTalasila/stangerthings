import React from "react";
import { Link } from "react-router-dom";

const Header = ({username, setUsername, setPassword, loggedIn , setLoggedIn}) => {

  console.log(loggedIn);

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
        <Link to="/profile">Profile</Link>
        <Link to="/posts">POSTS</Link>
        <Link to="/login">LOGIN</Link>
        {!loggedIn ? null : <Link to='/' onClick={handleClick} >Logout</Link>}
      </header>
    </div>
  );
};

export default Header;
