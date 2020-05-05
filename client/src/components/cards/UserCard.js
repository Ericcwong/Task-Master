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
        <ul className="collapsible">
          <li>
            <div className="collapsible-header"><h4>{this.props.name}</h4></div>
            <div className="collapsible-body"><span><CreateTodo /></span></div>
          </li>
        </ul>
      </div>
    );
  }
}