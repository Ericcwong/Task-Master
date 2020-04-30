
import React, { Component } from "react";
import "./battle.css";
import Boss from "./boss-image.png";

import Battleaction from "../battleactions/battleaction";
class Battle extends Component {
  render() {
    return (
      <div className="row battle rounded">
        <div className="col s12 center-align">
          <img src={Boss} className="img-fluid" alt="boss sprite" />
        </div>
        <div className="row center-align">
          <Battleaction />
        </div>


      </div>
    );
  }
}
export default Battle;

