import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
class BattlePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container valign-wrapper">
          <div className="row">
            <div className="col s12 battle">

            </div>
          </div>
          <div className="row">
            <div className="col s12">

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BattlePage;