import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="">
        <div className="nav-wrapper blue darken-4 left-padding">
          <Link to="/" className="brand-logo white-text">
            Task Master
            </Link>
          <ul className="right">
            <li><Link to="/" className="red waves-effect waves-light btn">Logout</Link></li>
          </ul>
        </div>
      </nav>


    );
  }
}
export default Navbar;
