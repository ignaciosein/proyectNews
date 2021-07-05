
import React, { Component } from "react";
 
import "./Nav.scss";
import menuBurgerOpen from "../../img/menuBurger.png"
import menuBurgerClose from "../../img/menuBurgerClose.png"


class Nav extends Component {
 
render() {
  return (
    <nav className="Nav">
      <div>
      <img id="open" className="menuBurger" onClick={this.props.mostrar} src={menuBurgerOpen}></img>
      <img id="close" className="menuBurger2"  onClick={this.props.ocultar} src={menuBurgerClose}></img>

      </div>

      <div className="List">
        
      





      </div>
  
   
    
    </nav>
   
    
  );
}

}
export default Nav;
