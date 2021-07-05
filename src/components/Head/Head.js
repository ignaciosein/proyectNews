import React, { Component } from "react";
import "./Head.scss";
import loginImage from "../../img/login.png";
import unLogged from "../../img/unlogged.png";
import Nav from "../../components/Nav";

 

import { userContext } from "../../../src/context/userContext";
class Head extends Component {
  render() {
    return (
      <div className="Head">
        <Nav />
        <userContext.Consumer>
          {({ user, logoutUser }) =>
            user.name ? (
              <>
                <img className="loginAvatar" src={loginImage}></img>
                <p> {user.name}</p>
                <button id="logout" onClick={logoutUser}>
                  Logout
                </button>
              </>
            ) : (
              <img id="avatar" src={unLogged}></img>
            )
          }
        </userContext.Consumer>
      </div>
    );
  }
}

export default Head;
