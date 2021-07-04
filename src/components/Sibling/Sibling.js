import React, { Component } from 'react';
import './Sibling.css';
import Form from "../Form/Form"
import List from "../ListNews/ListNews"

class Sibling extends Component {
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

  saveData = (obj) => {
    /* this.setState(obj); */
    console.log("//////OBJETO RECIBIDO//////////");
    console.log(obj);
  };

  render() {
    return (
      <div>


      <Form save={this.saveData} />  
      <List /* datos={this.state}  *//> 






      </div>



    );
  }
}

export default Sibling;