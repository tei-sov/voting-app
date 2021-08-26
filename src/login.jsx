import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
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
          <Route>
            <button type="submit" className="submit_btn">
              <Link to="/homepage">Log In</Link>
            </button>
          </Route>
        </form>
      </div>
    );
  }
}

export default login;
