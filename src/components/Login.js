import React from "react";
import { useState } from "react";
import HomePage from './HomePage'
import swal from 'sweetalert';

const Login = ({ setLoginType }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userToken, setUserToken] = useState(false);

    //pass username and password down as props so i can set their value to ('')



  const fetchApi = async (event) => {
      event.preventDefault();
    try {
      const resp = await fetch(
        `https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt
    /users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password,
            },
          }),
        }
      );
      const data = await resp.json();
      
      if(data.success === false) {
        //i installed something called sweet alert. It makes a better alert message. 
        swal(data.error.message);
        setUsername('');
        setPassword('');
      } else {
        const token = data.data.token;
        localStorage.setItem(`${username}Token`, token);
        setUserToken(token);
        swal(`You are logged in as ${username}`);
      }

    } catch (error) {
      console.error(error);
    }
  };


  if(userToken) {
    return (<HomePage username={username} setUsername={setUsername} setPassword={setPassword} setUserToken={setUserToken} />)
  } else {
    return (
      <div className="form-style-8">
      <h2>Login to your account</h2>
      <form onSubmit={fetchApi}>
        <input
          type="text"
          minLength='6'
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <input
          type="password"
          minLength='6'
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
      <button onClick={(event) => setLoginType('register')} >Sign up Here</button>
    </div> 

    )
  }
  
};

export default Login;


 