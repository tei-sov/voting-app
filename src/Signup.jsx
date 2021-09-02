import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./signup.css";

class Signup extends Component {
  render() {
    return (
      <div className="signup_container">
        <h2 className="">VOTECOM</h2>
        <form className="signup_form">
          <label htmlFor="name" className="name">
            Name
          </label>
          <input type="text" className="name" />
          <label htmlFor="age" className="age">
            Age
          </label>
          <input type="text" className="age" />
          <label htmlFor="email" className="signupmail">
            Email
          </label>
          <input type="text" className="signupmail" />
          <label htmlFor="password" className="signuppassword">
            Password
          </label>
          <input type="text" className="signuppassword" />

          <Route>
            <p className="account">
              Already Have An Account?
              <Link to="/Signup">Log In</Link>
            </p>
          </Route>

          <button type="submit" className="signupbut">
            <h6 className="signup">Sign Up</h6>
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
