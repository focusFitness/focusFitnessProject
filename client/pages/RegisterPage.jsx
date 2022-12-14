import React, { Component } from 'react';
import {Link, Redirect, useNavigate} from 'react-router-dom';
import axios from 'axios';

const RegisterPage = (props) => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const signUpInfo = {
      username: document.getElementById('signup-username').value,
      email: document.getElementById('email').value,
      password: document.getElementById('signup-password').value
    };

    axios.post('http://localhost:3000/register', signUpInfo)
      .then(function (response) {
        console.log(response);
        navigate('/');
      })
      .catch(function(error){
        console.log(error);
      });
  }

  return (
    <div id="signup-page"> 
      <div id="signup-page-container">
        <h1>Sign Up</h1>
        <div>
          <form id="signup-input">
            <input id="signup-username" placeholder="Username"></input>
            <input id="email" placeholder="E-mail" ></input>
            <input id="signup-password" placeholder="Password" ></input>
            <div className="signup-botton-container">
              <button className="signup-button" id="signup-submit" onClick={submitHandler}>Sign Up</button>
              <div id="back-to-login"><Link to="/">Back to Login</Link></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;