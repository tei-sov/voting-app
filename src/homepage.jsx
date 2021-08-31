import React, { Component } from "react";
import "./homepage.css";

class homepage extends Component {
  render() {
    return (
      <div className="homepage_container">
        <h1>Welcome,User</h1>
        <button className="poll_btn">Setup Poll</button>
        <button className="poll_btn">View Poll</button>
        <button className="poll_btn">Design Voter</button>
      </div>
    );
  }
}

export default homepage;
