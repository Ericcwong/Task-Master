
import React, { Component } from "react";
import "./battle.css";
import Boss from "./boss-image.png";
import { battleActions } from "../../utils/battleActionsDummy";
import Battleaction from "../battleactions/battleaction";
class Battle extends Component {
  render() {
    return (
      <div className="row battle rounded">
        <div className="col s12 center-align">
          <img src={Boss} className="responsive-img" alt="boss sprite" />
        </div>
        <div className="row center-align">
          {
            battleActions.map(action =>
              <Battleaction
                classes={action.classes}
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

