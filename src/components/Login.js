import React from "react";
import { useState } from "react";
import HomePage from "./Home";
import swal from "sweetalert";
import { login } from "../api";
import { Link } from "react-router-dom";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  userToken,
  setUserToken,
  setLoggedIn,
}) => {
  const fetchApi = async (event) => {
    event.preventDefault();
    try {
      const data = await login(username, password);
      if (data.success === false) {
        swal(data.error.message);
        setUsername("");
        setPassword("");
      } else {
        const token = data.data.token;
        localStorage.setItem(`${username}Token`, token);
        setUserToken(token);
        setLoggedIn(true);
        swal(`You are logged in as ${username}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (userToken) {
    return (
      <HomePage
        username={username}
        setUsername={setUsername}
        setPassword={setPassword}
        setUserToken={setUserToken}
      />
    );
  } else {
    return (
      <div className="form-style-8">
        <h2>Login to your account</h2>
        <form onSubmit={fetchApi}>
          <input
            type="text"
            minLength="6"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <input
            type="password"
            minLength="6"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        <label>Don't have an account? </label>
        <Link to="/register">Sign up Here</Link>
      </div>
    );
  }
};

export default Login;
