import React from "react";
import "materialize-css/dist/css/materialize.min.css";
export default function UserCard(props) {
  return (
    <div>
      {props.CardData.map((props, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src="http://via.placeholder.com/640"
                alt="test"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Character: {props.name}
                <i className="material-icons right">more_vert</i>
              </span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Character:{props.name}
                <i className="material-icons right">close</i>
              </span>
              <h5>Avatar: {props.avatar}</h5>
              <h5>Class: {props.classes}</h5>
              <h5>Health: {props.healthStat}</h5>
              <h5>Mana: {props.manaStat}</h5>
              <h5>Attack Damage: {props.attackStat}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
