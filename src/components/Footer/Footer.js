import React, { Component } from 'react';
import './Footer.scss';
import ReactLogo from "../../img/react-logo.png"

 
class Footer extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="Footer">
        <p>made with React</p>
        <br></br>
        <img src={ReactLogo}></img>
        <br></br>
        <p>By Ignacio G.D</p>

      </div>
    );
  }
}

export default Footer;