import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import CreateTodo from "../tasks/CreateTodo"
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

export default class UserCard extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, {});
    });
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
        <ul className="collapsible">
          <li>
            <div className="collapsible-header"><h4>{this.props.name}</h4></div>
            <div className="collapsible-body"><span><CreateTodo /></span></div>
          </li>
        </ul>
      </div>
=======
        <Navbar />
        <div className="container">
            <ul className="collapsible">
              <li>
              <div className="collapsible-header"><h4>Character 1</h4></div>
              <div className="collapsible-body"><span><CreateTodo/></span></div>
              </li>
            </ul>
            </div>
          </div>
>>>>>>> 5a86f56cd7cd827dabaa40db9b2038d72f1a0f77
    );
  }
}