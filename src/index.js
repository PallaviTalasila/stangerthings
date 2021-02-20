import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  PostForm,
  Header,
  Login,
  Register,
  Home,
  ViewPosts,
} from "./components";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
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
                setLoggedIn={setLoggedIn}
              />
            )}
          />
          <Route
            path="/profile"
            render={(props) => <Profile {...props} username={username} />}
          />
          <Route path="/posts" component={ViewPosts} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
