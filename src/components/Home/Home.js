import React, { Component } from 'react';
import './Home.css';
 
import { userContext } from "../../context/userContext"
class Home extends Component {
   constructor(props){
     super(props);
      this.state = {

        name: "",
      };
   }

  handleSubmit = async (event) => {
    event.preventDefault();

    let name = event.target.nombre.value;
    
    console.log(name)

    this.setState({ name: name });


     
    
  };
 
  /* componentDidUpdate(prevProps, prevState) {
 
 
  if(this.state !== prevState){


    console.log(("funciona"));


    
  } */
 /*  componentDidUpdate(prevProps, prevState) {

    
      
      return loginUser(this.state);
  

    }
   
    } */
 

  render() {
    
  const value = {
    name: this.state.name  
         };
    return (


      <div>

 
        
        <h3>Este es el componentess home</h3>
         <form onSubmit={this.handleSubmit}>
        <input type="text" name="nombre" placeholder="Introduce nombre"></input>     

       

      <userContext.Consumer>
        {({loginUser}) => 
          <button type="submit" onClick={()=>loginUser(this.state.name)}>Add</button>
        }
        </userContext.Consumer>
        
      </form>

      <p>Usuario introducido: {this.state.name ||"--"}</p>
        
        
        </div>
    );
  }
}

export default Home;