import React from "react";

import Titles from "./components/Titles";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/Weather";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <Titles />
              </div>
              <div className="row">
                <Route path="/" component={Weather} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
