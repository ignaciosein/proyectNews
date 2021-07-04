import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';

import './App.css';
import Header from "./components/Head/Head";
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import {userContext} from './context/userContext';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: {
        name:"Alex"
      }
    }
  }
  



 
  login = (name) => {
   



    if(this.state.user.name !== name)
  {

   console.log("el nombre es distinto")
   this.setState({user: name});  

  }
  else{
  console.log("el nombre coincide")
}
  

 

  }
  

  render() {


 
  
    const value = {
      user: this.state.user,
  
      loginUser: this.login
    }

    return (
      <div className="App">
        <BrowserRouter>
          <userContext.Provider value={value}>
            <Header/>
            <Main/>
          </userContext.Provider>
        </BrowserRouter>
        <Footer/>
      </div>
    )
  }
}

export default App