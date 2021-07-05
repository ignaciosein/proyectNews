import React, { Component } from "react";
import "./Home.scss";

import { userContext } from "../../context/userContext";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Cambio hecho!");
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };
  }

  render() {
    const value = {
      name: this.state.name,
    };
    return (
      <div className="Home">
      <form onSubmit={this.handleSubmit}>
        <label>Inicie sesión:
          <br></br>
          <input type="text" onfocus="this.value=''" name="login" onChange={this.handleChange} />
        </label>
        <br></br>
        <userContext.Consumer>
          {({ loginUser }) => (
            <button type="submit" onClick={() => loginUser(this.state.name)}>
              Login
            </button>
          )}
        </userContext.Consumer>
      </form>

      
      </div>
    );
  }
}

export default Home;