import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../layout/Navbar";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import axios from "axios";
import UserCard from "../cards/UserCard"
import BossCard from "../cards/BossCard";
import AddCharacter from "../cards/AddCharacter";

class Dashboard extends Component {
  
  state = {
    loading: true,
    character: null
  };
  async componentDidMount() {
    const { user } = this.props.auth;
      let characters = user.id
      const url = "/api/user/"+characters+"/characters";
      const response = await fetch(url);
      const data = await response.json()
      this.setState({character: data, loading: false})
      console.log(data);
  }
  
  // characters(id){

  // }
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
          <AddCharacter />
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
              

            </div>
            <div className="col s6">
              <BossCard />
            </div>
          </div>
        </div>​
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