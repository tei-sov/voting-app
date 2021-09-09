import React, { Component } from "react";
import "./login.css";

class login extends Component {
  render() {
    return (
      <div className="form_container">
        <h3>Login</h3>
        <form className="user_form">
          <label htmlFor="email" className="mail">
            Email
          </label>
          <input type="text" className="mail" />
          <label htmlFor="password" className="password">
            Password
          </label>
          <input type="text" className="password" />

          <button type="submit" className="submit_btn">
            <h6 className="log">Log In</h6>
          </button>
        </form>
      </div>
    );
  }
}

export default login;
