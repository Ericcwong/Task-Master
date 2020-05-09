import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import "materialize-css/dist/css/materialize.min.css";
import Collapsible from "react-collapsible";

export default class AddCharacter extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      avatar: "",
      classes: "",
      healthStat: 200,
      manaStat: 50,
      attackStat: 25,
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.name === "") {
      alert("Please enter a name.");
      return;
    } else if (this.state.avatar === "") {
      alert("Please choose an avatar.");
      return;
    } else if (this.state.classes === "") {
      alert("Please choose a class.");
      return;
    } else {
      alert("Character added!");
      const newCharacter = {
        name: this.state.name,
        avatar: this.state.avatar,
        classes: this.state.classes,
        healthStat: this.state.healthStat,
        manaStat: this.state.manaStat,
        attackStat: this.state.attackStat,
      };
      console.log(newCharacter);
      axios
      .post(
        "http://localhost:3001/api/user/" + this.props.userId + "/characters",
        newCharacter
      ).then(this.props.characters.push(newCharacter))
      this.props.handler(this.props.characters)
      // axios.get("/api/user/"+ this.props.userId+"/characters")

    }
  };
  render() {
    return (
      <Collapsible
        trigger="Add Chararacter"
        triggerClassName="collection with-header center blue darken-4"
        openedClassName="white"
      >
        <form className="form">
          <input
            value={this.state.name}
            id="name"
            onChange={this.onChange}
            type="text"
            placeholder="Character Name"
          />
          <input
            value={this.state.avatar}
            id="avatar"
            onChange={this.onChange}
            type="text"
            placeholder="Avatar"
          />
          <input
            value={this.state.classes}
            id="classes"
            onChange={this.onChange}
            type="text"
            placeholder="Class"
          />
          {/* <button onClick={this.handleFormSubmit}>Submit</button> */}
          <button
            className="btn blue darken-4"
            onClick={this.handleFormSubmit}
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </Collapsible>
    );
  }
}
