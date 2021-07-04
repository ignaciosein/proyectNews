import React, { Component } from 'react';
import './List.css';
import data from "../../data.json"
import ListNews from "../../components/ListNews/ListNews"

class List extends Component {
  constructor(props){
    super(props);
   this.state = {

    datos : {}
   };
   }

  

   componentDidMount() {

    alert("se monta")

    const {data} =this.props.location;

    this.setState({datos: data})

 
    


   }


  render() {
    
    const {data} =this.props.location;

        return (

        <div>
      <h1>PAGINA LIST</h1> 

       


{/* <h4>Esta es la página LIST</h4>
        <p>TITULO: { this.state.datos.title} </p>
         <p>AUTOR: { this.state.datos.autor} </p>
         <p>CONTENT: { this.state.datos.content} </p>  
         <p>COVER:  {this.state.datos.cover} </p>   */}  


<ListNews   titulo={data} />







        </div>
  
    );
  }
}

export default List;