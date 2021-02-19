import React from "react";
import { useState } from "react";
import HomePage from './HomePage'
import swal from 'sweetalert';

const Register = ({setLoginType}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [userToken, setUserToken] = useState(false);


  const confirmPasswords = (event) => {
    event.preventDefault();
    if(password !== passwordConfirmation) {
      //i installed something called sweet alert. It makes a better alert message. 
      swal('Passwords do not match');
    } else {
      fetchApi(event);
    }
  }

  const fetchApi = async (event) => {
      event.preventDefault();
    try {
      const resp = await fetch(
        `https://strangers-things.herokuapp.com/api/2010-unf-rm-web-pt
    /users/register`,
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
        setPasswordConfirmation('');
      } else {
        const token = data.data.token;
        localStorage.setItem(`${username}Token`, token);
        setUserToken(token);
        swal(`You are logged in as ${username}`);
        setPasswordConfirmation('');
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
      <h2>Register your account</h2>
      <form onSubmit={confirmPasswords}>
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
        <input
          type="password"
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <label>Already have an account? </label>
      <button onClick={(event) => setLoginType('login')} >Sign in here.</button>
    </div> 

    )
  }
  
};

export default Register;


 
