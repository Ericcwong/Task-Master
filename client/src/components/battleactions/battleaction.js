import React, { Component } from "react";

class Battleaction extends Component {


  render() {
    return (
      <button className={this.props.classes}>{this.props.action}</button>
    );
  }
}
export default Battleaction;
