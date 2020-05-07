import React, { Component } from "react";
import axios from "axios";
import Statbar from "../statsbar/statsbar"

class Player extends Component {
  constructor(){
    super();
    this.state= {
      character: []
    }
  }
  componentDidMount(){
    fetch("/api/user/5e9b3687abbfda0ed043cc58/characters")
      .then(res => res.json())
      .then(character => this.setState({character}, () => console.log("Character being pulled: ", character)))
  }
  render() {
    return (
      <div>
        <img src={this.props.character.avatar} className="responsive-img" alt={this.props.character.name + " sprite"} />
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