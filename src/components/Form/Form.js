import React, { Component } from "react";
import "./Form.scss";

import {   withRouter } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      content: "",
      cover: "",
 
    };
  }
  

  titleNews = (event) => {
    this.setState({ title: event.target.value });
  };
  authorNews = (event) => {
    this.setState({ author: event.target.value });
  };
  contentNews = (event) => {
    this.setState({ content: event.target.value });
  };
  coverNews = (event) => {
    this.setState({ cover: event.target.value });
  };
  checkInputs = () => {
    let title = this.state.title;
    let author = this.state.author;
    let content = this.state.content;
    let cover = this.state.cover;

    if (title && author && content && cover) {
  

      this.props.history.push({ pathname: "list", data: this.state });
    } 
    else if(!title){

      alert("No añadiste título")
    }
    else if(!author){

      alert("No añadiste el Autor")
    }
    else if(!content){

      alert("No añadiste contenido")
    }
    else if(!cover){

      alert("No añadiste imagen")
    }
    
    

  };

  render() {
    return (
      <div className="Form">
        <form>
          <label>Titulo</label>
          <br></br>
          <input type="text" name="nombre" onChange={this.titleNews} />
          <br></br>
          <label>Autor</label>
          <br></br>
          <input type="text" name="nombre" onChange={this.authorNews} />
          <br></br>
          <label>Contenido</label>
          <br></br>
          <input type="text" name="nombre" onChange={this.contentNews} />
          <br></br>
          <label>Imagen</label>
          <br></br>
          <input type="text" name="nombre" onChange={this.coverNews} />
          <br></br>
          <button onClick={this.checkInputs}>Crear Noticia</button>
          <br></br>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
