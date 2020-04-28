import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";

class UserCard extends Component {
    render(){
        const { user } = this.props.auth;
        return(
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-image">
                            <img src=""></img>
                            <span className="card-title black-text">{user.name.split(" ")[0]}</span>
                            <a className="btn green accent-4 btn-floating halfway-fav pulse activator">+</a>
                        </div>
                        <div className="card-content blue darken-4">
                            <p className="white-text">?stats</p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title">Tasks<i class="material-icons right">x</i></span>
                            <p>?tasks</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;