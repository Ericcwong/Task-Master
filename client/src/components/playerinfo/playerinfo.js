import React, { Component } from "react";
import Statbar from "../statsbar/statsbar"
import { battleActions } from "../../utils/battleActionsDummy";
class Player extends Component {
  render() {
    return (
      <div>
        <h3>USER NAME</h3>
        {battleActions.map(stat =>
          <Statbar
            color={stat.color}
            statValue={stat.statValue}
            statName={stat.statName}
          />

        )}

      </div>
    );
  }
}
export default Player;