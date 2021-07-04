import React, { Component } from 'react';
import './Head.css';
import Nav from "../../components/Nav"
import { userContext } from "../../../src/context/userContext"
class Head extends Component {
 

  render() {
 
    return (
      <div><h1>Este es el Header probando</h1>
        <Nav/>

        <userContext.Consumer>
            {({user}) => {
    return console.log(user),
                <>
                  <p>Usuario: {  }</p>
         
                </>
            }
          }
            </userContext.Consumer>

      </div>
    );
  }
}

export default Head;