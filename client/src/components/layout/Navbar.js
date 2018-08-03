import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light logofonte">
        <div className="container">
          <Link to="/" className="navbar-brand">
            HOLYme!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" />
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/HOLYmeBr/"
                >
                  <i className="fab fa-facebook-f" /> Facebook
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/holymebr/"
                >
                  <i className="fab fa-instagram" /> Instagram
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://twitter.com/holymebr">
                  <i className="fab fa-twitter" /> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
