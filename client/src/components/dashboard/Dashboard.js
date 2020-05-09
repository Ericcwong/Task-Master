import React, { Component } from "react";
import TrelloClient, { Trello } from 'react-trello-client'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../layout/Navbar";
import "materialize-css/dist/css/materialize.min.css";

// import M from "materialize-css";
import axios from "axios";
import AddCharacter from "../cards/AddCharacter"
import SyncCharacter from "../cards/SyncCharacter"
import UserCard from "../cards/UserCard"
import BossCard from "../cards/BossCard";
import { Link } from "react-router-dom";
import {trelloUpdate} from "../../actions/trelloActions"
// import AddCharacter from "../cards/AddCharacter";

class Dashboard extends Component {
  state = {
    loading: true,
    character: [],
  };
  componentDidMount() {
    //Pulls user's id and gets the url from the backend
    const { user } = this.props.auth;
    let userID = user.id;
    axios.get("/api/user/" + userID + "/characters")
      .then(res => {
        console.log(res);
        this.setState({ character: res.data, loading: false })
      })
  }

  handler = (character) => {
    this.setState({
      someVar: character
    })
  }
  
  deleteCharacter(id) {
    axios.delete("/api/character/" + id)
      .then(res => this.getCharacter())
      .catch(err => console.log(err));
    // this.getCharacter();
  }
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <TrelloClient
            apiKey="e28dcbb9996d22a03ea712a470dd0d3e" // Get the API key from https://trello.com/app-key/
            clientVersion={1} // number: {1}, {2}, {3}
            apiEndpoint="https://api.trello.com" // string: "https://api.trello.com"
            authEndpoint="https://trello.com" // string: "https://trello.com"
            intentEndpoint="https://trello.com" // string: "https://trello.com"
            authorizeName="React Trello Client" // string: "React Trello Client"
            authorizeType="popup" // string: popup | redirect
            authorizePersist={true}
            authorizeInteractive={true}
            authorizeScopeRead={false} // boolean: {true} | {false}
            authorizeScopeWrite={false} // boolean: {true} | {false}
            authorizeScopeAccount={true} // boolean: {true} | {false}
            authorizeExpiration="30days" // string: "1hour", "1day", "30days" | "never"
            authorizeOnSuccess={trelloUpdate} // function: {() => console.log('Login successful!')}
            authorizeOnError={() => console.log('Login error!')} // function: {() => console.log('Login error!')}
            autoAuthorize={false} // boolean: {true} | {false}
            authorizeButton={true} // boolean: {true} | {false}
            buttonStyle="metamorph" // string: "metamorph" | "flat"
            buttonColor="green" // string: "green" | "grayish-blue" | "light"
            buttonText="Sync with Trello" // string: "Login with Trello" 
            >
          </TrelloClient>
        <Navbar />
        <div className="container">
          <AddCharacter userId={user.id} handler = {this.handler} characters={this.state.character} />
          <SyncCharacter userId={user.id} handler = {this.handler} characters={this.state.character} />
          <div className="row">
            <div className="col s6">
              <div className="collection with-header center blue darken-4">
                <h3 className="white-text">
                  {user.name.split(" ")[0]}'s Characters
                </h3>
              </div>
              {/* If no character is able to be pulled in, says loading till character is able to be pulled */}
              {this.state.loading || !this.state.character ? (
                <div>Loading... Please Wait</div>
              ) : (
                  <div>
                    <UserCard
                      CardData={this.state.character} handler = {this.handler} />
                  </div>
                )}
            </div>
            <div className="col s6">
              <BossCard />
              <button className="btn large waves-effect waves-light purple darken-3 white-text "><Link to="/battle">BATTLE!!!</Link></button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
