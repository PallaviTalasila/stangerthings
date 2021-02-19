import React from "react";
import ReactDOM from "react-dom";
import { PostForm, Header } from "./components";

const App = () => {
  return (
    <div className="app">
      <Header />
      <PostForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
