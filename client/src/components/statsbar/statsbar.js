import React, { Component } from "react";

class Statbar extends Component {
  render() {
    return (
      <div className={this.props.color + " lighten-4 rounded"}>

        <h6>{this.props.statName}</h6>
        <div className={"progress " + this.props.color + " lighten-3"} >
          < div className={"determinate " + this.props.color + " accent-4 "} style={{ width: this.props.statValue + "%" }}></div>
        </ div>
      </div >
    );
  }
}
export default Statbar;