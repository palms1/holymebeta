import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import "./App.css";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import Success from "./components/layout/Success";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/register/success" component={Success} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
