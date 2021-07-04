import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      empresa: "Empresa guay SA",
      price: "N/A",
    };
  }

  render() {
 
 
    return (
      <section>
        <p>Titulo: {this.props.titulos} €</p>
        <p>Autor: {this.props.autor} </p>
        <p>{this.props.contenido} </p>
       <img src={this.props.cover} alt="image"></img>  
  
        <button onClick={this.props.remove}>Borrar</button>
      </section>
    );
  }
}
