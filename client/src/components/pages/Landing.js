import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.css";
class Landing extends Component {
  render() {
    return (
      <div className="container valign-wrapper bg1">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Track</b> your <span style={{ fontFamily: "monospace" }}>Tasks</span>
            </h4>
            <p className="flow-text black-text text-darken-4">
              Keep yourself on task with interactive games based on your
              progress.
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable green"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
