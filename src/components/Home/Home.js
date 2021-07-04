import React, { Component } from "react";
import "./Home.css";

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
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          introduzca nombre de usuario:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <userContext.Consumer>
          {({ loginUser }) => (
            <button type="submit" onClick={() => loginUser(this.state.name)}>
              Add
            </button>
          )}
        </userContext.Consumer>
      </form>

      
      </div>
    );
  }
}

export default Home;