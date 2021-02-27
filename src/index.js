import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Header, Login, Register, Home, ViewPosts } from "./components";
import Profile from "./components/Profile";
import Message from "./components/Posts/Message";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./auth";

const App = () => {
  const loginKey = localStorage.getItem(`Token`);
  const userNameKey = localStorage.getItem(`Username`);
  const [username, setUsername] = useState(userNameKey ? userNameKey : '');
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState(loginKey ? loginKey : false);
  const [loggedIn, setLoggedIn] = useState(loginKey ? true : false);
  const [message, setMessage] = useState("");
  const [postId, setPostId] = useState("");
  const [myMessages, setMyMessages] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [posts, setPosts] = useState([]);

  const [state, setState] = useState({});

  return (
    <Auth.Provider value={[state, setState]}>
      <div className="app">
        <Router>
          <Header
            username={username}
            setUsername={setUsername}
            setPassword={setPassword}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
          <Switch>
            <Route
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  userToken={userToken}
                  setUserToken={setUserToken}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              )}
            />
            <Route
              path="/register"
              render={(props) => (
                <Register
                  {...props}
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  userToken={userToken}
                  setUserToken={setUserToken}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              )}
            />
            <Route
              path="/profile"
              render={(props) => (
                <Profile
                  {...props}
                  username={username}
                  userToken={userToken}
                  message={message}
                  setMessage={setMessage}
                  myMessages={myMessages}
                  setMyMessages={setMyMessages}
                  myPosts={myPosts}
                  setMyPosts={setMyPosts}
                />
              )}
            />
            <Route
              path="/posts"
              render={(props) => (
                <ViewPosts
                  {...props}
                  loggedIn={loggedIn}
                  userToken={userToken}
                  //posts={posts}
                  username={username}
                  message={message}
                  setMessage={setMessage}
                />
              )}
            />

            <Route path="/"  
            render={(props) => (
                <Home
                  {...props}
                  username={username}
                  loggedIn={loggedIn}
                />
              )} />
          </Switch>
        </Router>
      </div>
    </Auth.Provider>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
