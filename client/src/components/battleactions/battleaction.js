import React, { Component } from "react";

class Battleaction extends Component {
  render() {
    return (
      <p className={this.props.classes}>{this.props.action}</p>
    );
  }
}
export default Battleaction;
