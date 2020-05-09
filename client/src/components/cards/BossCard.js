import React, {Component} from "react";
import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css";
import Boss from "../battlediv/boss-image.png"

export default class BossCard extends Component {
    render() {
        return (
        <div className="card s12 m6">
            <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator responive-img" src={Boss}></img>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">BOSS</span>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Boss Information<i className="material-icons right">close</i></span>
                        <p>Boss Information</p>
                    </div>
                </div>

        )
    }
}