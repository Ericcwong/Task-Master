import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import "materialize-css/dist/css/materialize.min.css";
import Collapsible from "react-collapsible";
import TrelloClient, { Trello } from 'react-trello-client'

export default class SyncCharacter extends Component {
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
      boards: []
    };
  }

getTrelloBoards = () => {
    console.log("Success!")
      //Get the users boards
      Trello.get('/members/me/boards/',
      this.loadedBoards,
      function() { console.log("Failed to load boards"); }
      );
  };
  
loadedBoards = (boards) =>{
    boards.forEach(e => {
      console.log(e.name, e.id, e.shortUrl);
      this.createCharacter(e);
    });
    console.log(boards);

    
  }

createCharacter(board) {
    const newCharacter = {
        name: board.name,
        avatar: board.id,
        classes: board.shortUrl,
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
      // axios.get("/api/user/"+ this.props.userId+"/characters")

    }
  };
  render() {
    return (
          <button
            className="btn blue darken-4"
            onClick={this.getTrelloBoards}
            name="action"
          >
            Sync Character's
            <i className="material-icons right">send</i>
          </button>
        
    );
  }
}
