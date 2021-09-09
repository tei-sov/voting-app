import React, { Component } from "react";
import "./homepage.css";
import Navbar from "./navbar";

class homepage extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className="homepage_container">
          <h1 className="welcome">Welcome,User</h1>
          <div className="second_container">
            <div className="first">
              {/* <h5 className="htext">Create Poll</h5> */}
            </div>
            <div className="second">
              {/* <h5 className="htext">Join Poll</h5> */}
            </div>
            <div className="third">
              {/* <h5 className="htext">Check Poll</h5> */}
            </div>
          </div>
          <br />
          {/* <div className="second_container">
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
          </div> */}
        </div>
        <Navbar />
      </div>
    );
  }
}

export default homepage;
