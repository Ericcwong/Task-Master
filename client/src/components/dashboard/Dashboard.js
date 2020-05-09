import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../layout/Navbar";
import "materialize-css/dist/css/materialize.min.css";

// import M from "materialize-css";
import axios from "axios";
import AddCharacter from "../cards/AddCharacter"
import UserCard from "../cards/UserCard"
import BossCard from "../cards/BossCard";
import { Link } from "react-router-dom";
// import AddCharacter from "../cards/AddCharacter";
import { trelloAuth } from "../../actions/trelloActions";

class Dashboard extends Component {
  state = {
    loading: true,
    character: [],
  };
  componentDidMount() {
    //Pulls user's id and gets the url from the backend
    const { user } = this.props.auth;
    let userID = user.id;
    axios.get("http://localhost:3001/api/user/" + userID + "/characters")
      .then(res => {
        console.log(res);
        this.setState({ character: res.data, loading: false })
      })
    trelloAuth();
    let characters = user.id
    const url = "/api/user/" + characters + "/characters";
    const response = fetch(url);
    const data = response.json()
    this.setState({ character: data, loading: false })
    console.log(data);
  }
  // characters(id){

  // Gets characters from backend
  // const response = await fetch(getURL);
  // const data = await response.json();
  // this.setState({ character: data, loading: false });
  // console.log(data);
  // }
  // componentDidUpdate(){
  //   const { user } = this.props.auth;
  //   let userID = user.id;
  //   axios.get("/api/user/" + userID + "/characters")
  //     .then(res => {
  //       console.log(res);
  //       this.setState({character: res.data,  loading: false})
  //     })
  // }
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
        <Navbar />
        <div className="container">
          <AddCharacter userId={user.id} />
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
                      CardData={this.state.character} />
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
