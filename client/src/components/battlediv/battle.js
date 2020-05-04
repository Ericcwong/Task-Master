
import React, { Component } from "react";
import "./battle.css";
import Boss from "./boss-image.png";
import { battleActions } from "../../utils/battleActionsDummy";
import Battleaction from "../battleactions/battleaction";
import Player from "../playerinfo/playerinfo";
class Battle extends Component {
  render() {
    return (
      <div className="row battle rounded">
        <div className="col s12 center-align">
          <img src={Boss} className="responsive-img" alt="boss sprite" />
        </div>
        <div className="row center-align">
          <div className="col s10 offset-s1">
            <Player />
          </div>
        </div>
        <div className="row center-align">
          {
            battleActions.map(action =>
              <Battleaction
                classes={"btn margin1 " + action.color + " black-text"}
                action={action.action}
              />
            )
          }

        </div>


      </div>
    );
  }
}
export default Battle;

