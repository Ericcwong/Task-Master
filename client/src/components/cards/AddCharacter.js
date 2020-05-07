import React, {Component} from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

export default class AddCharacter extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems, {});
          });
    }
    render() {
        return (
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header center blue darken-4"><h5 className="white-text">Add a New Character</h5></div>
                    <div className="collapsible-body">
                        <span>Hello</span>
                    </div>
                </li>
            </ul>
        )
    }
}