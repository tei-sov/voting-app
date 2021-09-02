import React, { Component } from "react";
import "./homepage.css";

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
              <h5 className="htext">Create Poll</h5>
            </div>
            <div className="second">
              <h5 className="htext">Join Poll</h5>
            </div>
            <div className="third">
              <h5 className="htext">Check Poll</h5>
            </div>
          </div>
          <br />
          <div className="second_container">
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
          </div>
        </div>
      </div>
      // <div className="homepage_container">
      //   <div
      //     style={{
      //       display: "flex",
      //       alignItems: "center",
      //       flexDirection: "column",
      //       height: "30vh",
      //       backgroundColor: "red",
      //     }}
      //   >
      //     <h1>Welcome,User</h1>
      //     <div
      //       style={{
      //         display: "flex",
      //         flexDirection: "row",
      //         width: "100%",
      //         alignItems: "center",
      //         justifyContent: "center",
      //       }}
      //     >
      //       <div className="first"></div>
      //       <div className="second"></div>
      //       <div className="third"></div>
      //     </div>
      //   </div>
      //   {/* <button className="poll_btn">Setup Poll</button>
      //   <button className="poll_btn">View Poll</button>
      //   <button className="poll_btn">Design Voter</button> */}
      // </div>
    );
  }
}

export default homepage;
