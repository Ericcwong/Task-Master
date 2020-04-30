import React, {Component} from "react";
import Navbar from "../layout/Navbar";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

export default class  UserCard extends Component {
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});
      });
    }
  render() {
    return(
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s6">
            <div className="collection with-header center blue darken-4">
              <h3 className="white-text">User Information Header</h3>
            </div>

            <ul className="collapsible">
              <div className="collapsible-header"><h4>Character 1</h4></div>
              <li className="collapsible-body"><span>Stats</span></li>
            </ul>
            <ul className="collapsible">
              <div className="collapsible-header"><h4>Character 2</h4></div>
              <li className="collapsible-body"><span>Stats</span></li>
            </ul>
            <ul className="collapsible">
              <div className="collapsible-header"><h4>Character 3</h4></div>
              <li className="collapsible-body"><span>Stats</span></li>
            </ul>
            </div>
            <div className="col s6">
            <div className="collection with-header center blue darken-4   ">
              <h3 className="white-text">Boss Header</h3>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}