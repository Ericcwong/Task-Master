import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../layout/Navbar";
import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css";
// import axios from "axios";
import AddCharacter from "../cards/AddCharacter"
import UserCard from "../cards/UserCard"

class Dashboard extends Component {

  state = {
    loading: true,
    character: null
  };
  async componentDidMount() {
    //Pulls user's id and gets the url from the backend
    const { user } = this.props.auth;
    let userID = user.id
    const getURL = "/api/user/"+userID+"/characters";
    //Gets characters from backend
    const response = await fetch(getURL);
    const data = await response.json()
    this.setState({character: data, loading: false})
    console.log(data);
    //Adds character to user
    // export const 


  }
  // export const addCharacter =() => 
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
            <AddCharacter
              userId={user.id}
            />
          <div className="row">
          
            <div className="col s6">
              <div className="collection with-header center blue darken-4">
                <h3 className="white-text">{user.name.split(" ")[0]}'s Characters</h3>
              </div>
              {/* If no character is able to be pulled in, says loading till character is able to be pulled */}
              {this.state.loading || !this.state.character ? <div>Loading... Please Wait</div> :
                <div>
                  <UserCard
                    CardData={this.state.character}
                  />

              </div>}
                </div>}
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