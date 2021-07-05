import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Head.scss";
import loginImage from "../../img/login.png";
import unLogged from "../../img/unlogged.png";
import Nav from "../../components/Nav";

import { userContext } from "../../../src/context/userContext";
class Head extends Component {


  showDiv = () =>{

  let listado =  document.getElementById("listado")
  let open =  document.getElementById("open")
  let close =  document.getElementById("close")
  
  if( listado.style.display="none" ) { 
    listado.style.display="block"
    open.style.display="none"
    close.style.display="block"
  }
   
  
  }

  hiddenDiv = () =>{

    let listado =  document.getElementById("listado")
    let open =  document.getElementById("open")
    let close =  document.getElementById("close")
    
    if( listado.style.display="block" ) { 
      listado.style.display="none"
      open.style.display="block"
      close.style.display="none"
    }
     



    
    }

  render() {
    return (
      <div className="Head">
                  <div className="container">
                            <div className="divLogin">
                              <userContext.Consumer>
                                {({ user, logoutUser }) =>
                                  user.name ? (
                                    <>
                                      <button className="logout" onClick={logoutUser}>
                                        Logout
                                      </button>
                                      <p className="userName"> {user.name}</p>
                                      <img className="loginAvatar" src={loginImage}></img>
                                    </>
                                  ) : (
                                    <p className="unlogged">
                                      <Link to={"/"}>Login?</Link>
                                    </p>
                                  )
                                }
                              </userContext.Consumer>
                            </div>
                            <div className="divMenu">
          <Nav mostrar={() => this.showDiv()} ocultar={() => this.hiddenDiv()}/>
        </div>
                  </div>

                  <div  id="listado"  >
                              
                  <ul className="Nav__list">
        <li className="Nav__listItem">
          <Link className="Nav__link" to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/form"> Crear Noticia </Link>
        </li>
        <li>
          <Link to="/list"> Noticias </Link>
        </li>

 
      </ul>




                    
                  </div>
        


      </div>
    );
  }
}

export default Head;
