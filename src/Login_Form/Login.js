import React from 'react';
import photo from './undraw_Modern_design_re_dlp8.png';
import './Login.css'

const LoginForm = () => {
  return (
    <div className="container">
      <div className="photo">
        <div className="content">
          <img src={photo} alt="photo" />
        </div>
      </div>
      <div className="form">
        <div className="content">
          <div className="login-form">
            <div className="title">
              <h3>Admin Sign in</h3>
            </div>
            <div className="email">
              <label htmlFor="email">Email : </label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="password">
              <label htmlFor="password">Password : </label>
              <input type="text" id="password" name="password" />
            </div>
            <div className="rememberMe">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
              <br />
              <div className="btn">
                <button id="SignIn-btn">Sign in</button>
              </div>
            </div>
            <div className="forgotPass">
              <a href="">Forget Password</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
