import React, { Component } from "react";
import Statbar from "../statsbar/statsbar"
class Player extends Component {
  render() {
    return (
      <div>
        <img src={this.props.character.avatar} className="responsive-img max-100px" alt={character.name + " sprite"} />
        <h3>{this.props.character.name}</h3>
        {
          this.props.character.actions.map(stat =>
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