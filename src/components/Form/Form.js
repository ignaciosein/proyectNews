import React, { Component } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
 

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      content: "",
      cover: "",
    /*   email: "",
      avatar: "",
      age: "", */
    };
  }
  /* handleSubmit = async (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let avatar = event.target.avatar.value;
    let age = event.target.age.value;

    this.setState({ name: name, email: email, avatar: avatar, age: age });

    console.log(this.state);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.props.save(this.state);
    }

     
    console.log("//////PROPS//////////");
    console.log(prevProps);
    console.log(this.props);
    console.log("//////STATE//////////");
    console.log(prevState);
    console.log(this.state);

    console.log("componentDidUpdate()");
  } */

  titleNews = (event) => { this.setState({ title: event.target.value }); };
  authorNews = (event) => { this.setState({ author: event.target.value }); };
  contentNews = (event) => { this.setState({ content: event.target.value }); };
  coverNews = (event) => { this.setState({ cover: event.target.value }); };

  render() {
    return (
      <div>
        <p> Esta es la pagina FORM </p>
        <form>
        <label>Titulo</label>
        <br></br>
        <input type="text" name="nombre" required onChange={this.titleNews} />
        <br></br>
        <label>Autor</label>
        <br></br>
        <input type="text" name="nombre" required onChange={this.authorNews} />
        <br></br>
        <label>Contenido</label>
        <br></br>
        <input type="text" name="nombre" required onChange={this.contentNews} />
        <br></br>
        <label>Imagen</label>
        <br></br>
        <input type="text" name="nombre" required onChange={this.coverNews} />
        <br></br>
        <button>
         
          <Link
            to={{
              pathname: "list",
              data: this.state,
            }}
          >
            Continuar
          </Link>
        </button>
        <br></br>
        </form>
      </div>
    );
  }
}

export default Form;

{
  /* 
        <form onSubmit={this.handleSubmit}>
          <label>Nombre</label>
          <br></br>
          <input
            type="text"
            name="name"   onChange={this.handleChange} 
          ></input>
          <br></br>
          <label>Email</label>
          <br></br>
          <input
            type="text"
            name="email"   onChange={this.handleChange}  
          ></input>
          <br></br>
          <label>Avatar</label>
          <br></br>
          <input type="text" name="avatar"></input>
          <br></br>
          <label>Edad</label>
          <br></br>
          <input type="text" name="age"></input>
          <br></br>
          <button type="submit">ENVIAR</button>
        </form> */
}






