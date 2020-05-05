import React, {Component} from "react";
import Navbar from "../layout/Navbar";
import CreateTodo from "../tasks/CreateTodo"
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

export default class BossCard extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div className="card medium">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img class="activator" src=""></img>
                    </div>
                    <div className="card-content">
                        <span className="card-titlea activator grey-text text-darken-4">BOSS</span>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Boss Information</span>
                        <p>Boss Information</p>
                    </div>
                </div>
                </div>

            </div>
        )
    }
}