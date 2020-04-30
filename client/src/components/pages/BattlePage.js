import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import Battle from "../battlediv/battle";
class BattlePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="section">

          <div className="container">
            <Battle />
            <div className="row">
              <div className="col s12">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BattlePage;