import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import CreateTodo from "../tasks/CreateTodo"
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";


export default function UserCard(props) {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  });
  return (
    <div>
      {props.CardData.map((props, index) =>{
        return(
  <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="http://via.placeholder.com/640"/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Character: {props.name}<i className="material-icons right">more_vert</i></span>

    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Character:{props.name}<i className="material-icons right">close</i></span>
      
        <h5>Avatar: {props.avatar}</h5>
        <h5>Class: {props.classes}</h5>
        <h5>Health: {props.healthStat}</h5>
        <h5>Mana: {props.manaStat}</h5>
        <h5>Attack Damage: {props.attackStat}</h5>

    </div>
  </div>
      )
      })}
  </div>
  );
}

