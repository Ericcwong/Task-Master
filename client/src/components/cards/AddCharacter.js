import React, { Component } from 'react'
import axios from "axios";
import "./style.css"
import "materialize-css/dist/css/materialize.min.css";
import Collapsible from 'react-collapsible';
export default class AddCharacter extends Component {
    // Setting the component's initial state
    constructor(props){
        super(props)
        this.state = {
            name: "",
            avatar: "",
            classes: "",
            healthStat: 200,
            manaStat: 50,
            attackStat: 25 
          };
    }
    // componentDidMount(){
    //     document.addEventListener('DOMContentLoaded', function() {
    //         var elems = document.querySelectorAll('.collapsible');
    //         M.Collapsible.init(elems, {});
    //       });
    // }
    onChange = event => {
        this.setState({ [event.target.id]: event.target.value });
      };
    handleFormSubmit = (event, props) =>{
        event.preventDefault()
        const newCharacter = {
            name: this.state.name,
            avatar: this.state.avatar,
            classes: this.state.classes,
            healthStat: this.state.healthStat,
            manaStat: this.state.manaStat,
            attackStat: this.state.attackStat

          };
        console.log(newCharacter);
        axios
            .post("http://localhost:3001/api/user/"+this.props.userId+"/characters", newCharacter)
    }
    render(){
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
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
                </Collapsible>
        );
    }
};

