
import React, { Component } from "react";
import "./battle.css";
import { character } from "../../utils/battleDummyCharacter";
import Battleaction from "../battleactions/battleaction";
import Player from "../playerinfo/playerinfo";
import { boss } from "../../utils/battleDummyBoss"

let battleActions = character.actions
let playerChar = character;
let bossChar = boss;
class Battle extends Component {
  render() {
    return (
      <div className="row battle rounded">
        <div className="col s12 center-align">
          <Player
            character={bossChar}
          />
        </div>
        <div className="row center-align">
          <div className="col s10 offset-s1">
            <Player
              character={playerChar}
            />
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

