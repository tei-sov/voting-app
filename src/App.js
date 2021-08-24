// import React, { Component } from "react";
// import Navbar from "./navbar";
// import "./styles.css";
// import homepage from "./homepage";
// import Signing from "./Signing";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Homepage />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import Homepage from "./homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
