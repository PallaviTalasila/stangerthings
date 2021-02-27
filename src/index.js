import React, { useState } from "react";
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
import Message from "./components/Posts/Message";
import EditPost from "./components/Posts/EditPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [postId, setPostId] = useState("");
  const [myMessages, setMyMessages] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formPrice, setFormPrice] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [formWillDeliver, setFormWillDeliver] = useState(false);

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
                postId={postId}
                setPostId={setPostId}
                posts={posts}
                setPosts={setPosts}
                username={username}
                message={message}
                setMessage={setMessage}
              />
            )}
          />
          <Route
            path="/postForm"
            render={(props) => (
              <PostForm
                {...props}
                userToken={userToken}
                formTitle={formTitle}
                setFormTitle={setFormTitle}
                formDescription={formDescription}
                setFormDescription={setFormDescription}
                formPrice={formPrice}
                setFormPrice={setFormPrice}
                formLocation={formLocation}
                setFormLocation={setFormLocation}
                formWillDeliver={formWillDeliver}
                setFormWillDeliver={setFormWillDeliver}
              />
            )}
          />
          <Route
            path="/editpost"
            render={(props) => (
              <EditPost
                {...props}
                userToken={userToken}
                formTitle={formTitle}
                setFormTitle={setFormTitle}
                formDescription={formDescription}
                setFormDescription={setFormDescription}
                formPrice={formPrice}
                setFormPrice={setFormPrice}
                formLocation={formLocation}
                setFormLocation={setFormLocation}
                formWillDeliver={formWillDeliver}
                setFormWillDeliver={setFormWillDeliver}
                postId={postId}
                setPosts={setPosts}
                posts={posts}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} loggedIn={loggedIn} username={username} />
            )}
          />
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
