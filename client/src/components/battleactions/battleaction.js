import React, { Component } from "react";

class Battleaction extends Component {
  constructor(props) {
    super(props);
    // this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.performAction = this.performAction.bind(this);
  }
  performAction = e => {
    const action = this.props.action
    const url = "/api/battle/" + action;
    alert(`the ${action} button was clicked`)
    fetch(url)
  }

  render() {
    return (
      <button className={this.props.classes} onClick={this.performAction()} data-action={this.props.action}>{this.props.action}</button>
    );
  }
}
export default Battleaction;
