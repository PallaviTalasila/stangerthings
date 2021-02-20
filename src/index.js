import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { PostForm, Header, Login, Register, Home, ViewPosts } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {

  
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/posts" component={ViewPosts} />
          <Route path="/" component= {Home}/>          
          
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
