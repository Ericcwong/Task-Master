import React, {Component} from "react";
import "materialize-css/dist/css/materialize.min.css";
import API from "../../utils/API"
import "./style.css";
import Axios from "axios";
export default class UserCard extends Component { 
     state = {
      character:[]
    } 
  constructor(props){
    super(props);
    this.getCharacter();
  }
  getCharacter = async () =>{
   let data = await Axios.get("http://localhost:3001/api/user/"+this.props.CardData.user+"/character")
    .then(({data}) => data);
    // this.setState({character: data})
  }
  deleteCharacter(id){
    API.deleteCharacter(id)
    .then(res => console.log(res))
    .then(alert("deleted Character"))
    .catch(err => console.log(err));
    // this.getCharacter();
  }
  componentDidMount(){
    this.setState({character: this.props.CardData})
    console.log(this.props.CardData)
  }
  render(){
  return (
    <div>
      {this.state.character.map((character, index) => {
        return (
          <div className="card" key={character._id}>
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src="http://via.placeholder.com/640"
                alt="test"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Character: {character.name}
                <i className="material-icons right">more_vert</i>
              </span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Character:{character.name}
                <i className="material-icons right">close</i>
              </span>
              <h5>Avatar: {character.avatar}</h5>
              <h5>Class: {character.classes}</h5>
              <h5>Health: {character.healthStat}</h5>
              <h5>Mana: {character.manaStat}</h5>
              <h5>Attack Damage: {character.attackStat}</h5>
              <div className="card-action">
                <button className="btn blue darken-4" name="action">
                  Update
                  <i className="material-icons">update</i>
                </button>
                <button className="btn blue darken-4" name="action" onClick={() =>this.deleteCharacter(character._id)}>
                  Delete
                  <i className="material-icons">delete</i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
    }
}
