import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../layout/Navbar";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import axios from "axios";
import UserCard from "../cards/UserCard"
// import { character } from "../../utils/battleDummyCharacter";

class Dashboard extends Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
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
