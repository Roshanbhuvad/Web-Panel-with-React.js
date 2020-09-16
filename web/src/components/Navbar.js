import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../navbar.css";
import Dropdown from "./Dropdown";
import Information from "./Information";


class NavBar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="#3" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
        <li className="nav-item">
          <Link to="/task" className="nav-link">
            Tasks
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
      </ul>
    );

    return (
     <div className="navbar" >
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10">
          {localStorage.usertoken ? userLink : loginRegLink}
          </div>
          </nav>
          <div>
            <Dropdown />
          </div>
          <div>
          <Information />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
