import React, {Component} from "react";
import Navbar from "../layout/Navbar";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

export default class  UserCard extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                <div className="container">
                  <div className="row">
                    <div className="col s6">
                      <ul className="collection with-header avatar center"><h4>User Information Header</h4>
                      </ul>
                    </div>
                    <div className="col s6">
                      <ul className="collection with-header center"><h4>Boss Header</h4></ul>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}