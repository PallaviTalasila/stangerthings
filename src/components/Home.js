import React from "react";


const Home = ({username, loggedIn}) => {
  return (
    <div>
      <div className="content">
        <h1>Welcome to Stanger's things</h1>
        {loggedIn ? <h2>You are logged in as {username}</h2> : null}
      </div>
    </div>
  );
};

export default Home;
