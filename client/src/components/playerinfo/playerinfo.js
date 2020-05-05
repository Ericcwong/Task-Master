import React, { Component } from "react";
import Statbar from "../statsbar/statsbar"
import { character } from "../../utils/battleDummyCharacter";
class Player extends Component {
  render() {
    return (
      <div>
        <img src={character.avatar} className="responsive-img max-100px" alt={character.name + " sprite"} />
        <h3>{character.name}</h3>
        {
          character.actions.map(stat =>
            <Statbar
              color={stat.color}
              statValue={stat.statValue}
              statName={stat.statName}
            />

          )
        }

      </div >
    );
  }
}
export default Player;