import React from "react";

export default function Registration() {
  return (
    <div class="container">
      <h1>Login</h1>
      <form action="/register" method="post" class="login-form">
        <div class="input-box-1">
          <label for="username" class="username">
            Name
          </label>
          <i class="fas fa-user"></i>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Type your name"
          />
        </div>
        <div class="input-box-2">
          <label for="password" class="password">
            Username
          </label>
          <i class="fas fa-user"></i>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Type your username"
          />
        </div>
        <div class="input-box-1" style={{ marginTop: "30px" }}>
          <label for="username" class="username">
            Password
          </label>
          <i class="fas fa-lock"></i>
          <input
            type="password"
            name="username"
            id="username"
            placeholder="Type your password"
          />
        </div>
        <div class="input-box-2">
          <label for="password" class="password">
            Confirm Password
          </label>
          <i class="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Type your password again"
          />
        </div>
        <div class="login-button">
          <button type="submit" class="login">
            REGISTER
          </button>
        </div>
      </form>
      <div class="signup-redirect">
        <p>Already Registered...</p>
        <a href="/">SIGN IN</a>
      </div>
    </div>
  );
}
