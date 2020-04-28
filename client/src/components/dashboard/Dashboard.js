import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import Navbar from "../layout/Navbar";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col 14 m3 s12">
            <div className="card">
              <div className="card-image">
                <img src=""></img>
                <span className="card-title black-text">{user.name.split(" ")[0]}</span>
                <a className="btn green accent-4 btn-floating halfway-fab pulse activator">+</a>
              </div>
              <div className="card-content blue darken-3">
                <p className="white-text">?stats</p>
              </div>
            </div>
            {/* <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to <span style={{ fontFamily: "monospace" }}>TASK</span>{" "}
                master 👏
              </p>
            </h4> */}
            {/* <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button> */}
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
