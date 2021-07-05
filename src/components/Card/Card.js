import React from "react";
import "./Card.scss";

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
      <section className="Card">
        <h1> {this.props.titulos} </h1>
        <p>Autor: {this.props.autor} </p>
        <p>{this.props.contenido} </p>
       <img src={this.props.cover} ></img>  
       <br></br>
  
        <button onClick={this.props.remove}>Borrar</button>
      </section>
    );
  }
}
