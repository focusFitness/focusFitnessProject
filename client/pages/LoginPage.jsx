import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.scss';

const LoginPage = (props) => {
  const {setState, state} = props;
  const navigate = useNavigate();
 
  const handleLogin = (e) => {
    e.preventDefault();
    const loginInfo = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }

    axios.post('http://localhost:3000/login', loginInfo)
      .then(data => {
        console.log(data);
        
        navigate("/dashboard");
      })
      .catch(error => {
        console.log(error);
      });
    }
  return (
    <div id="login-page">
      <div id="login-page-container">
        <div className="login-container">
          <form id="login-inputs">
            <input id="username" type="text" placeholder="Username" required></input>
            <input id="password" type="password" placeholder="Password" required></input>
            <button className="login-button" id="login-sumbit" onClick={handleLogin}>Log In</button>
          </form>
        </div>
        <div id="sign-up-message">
          <p>Don't have an account yet?</p>
          <Link to="/register">SignUp</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;