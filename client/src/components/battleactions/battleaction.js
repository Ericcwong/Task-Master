import React, { Component } from "react";

class Battleaction extends Component {
  render() {
    return (
      <div className="btn center-align rounded">

        <p>{this.props.action}</p>
      </div>
    );
  }
}
export default Battleaction;
