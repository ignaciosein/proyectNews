import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
 
 
import Form from "../../pages/Form/Form"
 
import List from "../../pages/List/List"
 
import Home from "../Home/Home"
import './Main.scss';

class Main extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }




  render() {
    return (
      <main className='Main'>
  
      <div className="wrapper">
          <Switch>
             <Route exact path="/" component={Home}   />
             <Route path="/form" component={Form} />
              <Route path="/list" component={List} />  
        {/*       <Route path="/axio" component={Axios} />   */}
         {/*      <Route path="/sibling" component={Sibling} />  */} 
           
          </Switch>
          <div           >
     
        

        </div> 
      </div>
  </main>
    );
  }
}

export default Main;