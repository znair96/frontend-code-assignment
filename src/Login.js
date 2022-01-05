import React from "react";
export default function Login() {
  return (
    <div class="container">
      <h1>Login</h1>
      <form action="/login" method="post" className="login-form">
        <div className="input-box-1">
          <label for="username" className="username">
            Username
          </label>
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Type your username"
          />
        </div>
        <div className="input-box-2">
          <label for="password" class="password">
            Password
          </label>
          <i className="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Type your password"
          />
        </div>
        <div className="login-button">
          <button type="submit" className="login">
            LOGIN
          </button>
        </div>
      </form>
      <div className="login-methods">
        <p>Or Sign Up Using</p>
        <div className="social-media-auth">
          <img
            src="https://img.icons8.com/color/48/000000/facebook-circled--v5.png"
            alt="facebook"
          />
          <img
            src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"
            alt="twitter"
          />
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="gmail"
          />
        </div>
      </div>
      <div className="signup-redirect">
        <p>Have not account yet?</p>
        <a href="/signup">SIGN UP</a>
      </div>
    </div>
  );
}
