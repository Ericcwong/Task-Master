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
            <ul className="collapsible">
              <li>
              <div className="collapsible-header"><h4>Character 1</h4></div>
              <div className="collapsible-body"><span>Stats</span></div>
              </li>
            </ul>
            </div>  
          </div>
        </div>
      </div>
    );
  }
}