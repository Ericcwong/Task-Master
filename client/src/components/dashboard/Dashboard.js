import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../layout/Navbar";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

class Dashboard extends Component {
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});
      });
    }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (  
    <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s6">
            <div className="collection with-header center blue darken-4">
              <h3 className="white-text">{user.name.split(" ")[0]}'s Characters</h3>
            </div>

            <ul className="collapsible">
              <li>
              <div className="collapsible-header"><h4>Character 1</h4></div>
              <div className="collapsible-body"><span>Stats</span></div>
              </li>
            </ul>
            <ul className="collapsible">
            <li>
              <div className="collapsible-header"><h4>Character 2</h4></div>
              <div className="collapsible-body"><span>Stats</span></div>
              </li>
            </ul>
            <ul className="collapsible">
            <li>
              <div className="collapsible-header"><h4>Character 3</h4></div>
              <div className="collapsible-body"><span>Stats</span></div>
              </li>
            </ul>
            <ul className="collapsible">
            <li>
              <div className="collapsible-header"><h4>Character 4</h4></div>
              <div className="collapsible-body"><span>Stats</span></div>
              </li>
            </ul>
            <ul className="collapsible">
            <li>
              <div className="collapsible-header"><h4>Character 5</h4></div>
              <div className="collapsible-body"><span>Stats</span></div>
              </li>
            </ul>
            </div>
            <div className="col s6">
            <div className="collection with-header center blue darken-4   ">
              <h3 className="white-text">Boss Header</h3>
            </div>
            </div>
          </div>
        </div>
      </div>
              
      
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
