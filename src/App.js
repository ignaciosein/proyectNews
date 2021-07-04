import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/Head/Head";
import Home from "./components/Home";

import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { userContext } from "./context/userContext";

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: {
        name:""
      }
    }
  }
  
  logout = () => { this.setState({user: {}}) };
  login = (name) => { 
    
 
    console.log(this.state.user.name)
    
    
    this.setState({user:{name}})
  
  
  
  
  };

  render() {
    const value = {
      user: this.state.user,
      logoutUser: this.logout,
      loginUser: this.login
    }

    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={value}>
            <Header />
            <Main />
          </userContext.Provider>
       
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;