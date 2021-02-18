import React, {useState} from "react";
import ReactDOM from "react-dom";
import Register from './components/Register'
import Login from './components/Login'


const App = () => {

  //I am using this to show the login page and the register page. 
  const [loginType, setLoginType] = useState('login');

    //the Ternary operator in the return portion has a default set to the login page since useState is set to login above. If it changes we get the register page instead. 
   return (<div className="app">
    {loginType === 'login' ? <Login setLoginType={setLoginType} /> : <Register setLoginType={setLoginType}/>}
    </div>);
};

ReactDOM.render(<App />, document.getElementById("app"));
