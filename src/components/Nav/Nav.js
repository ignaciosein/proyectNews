import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__listItem">
          <Link className="Nav__link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/form"> Crear Noticia </Link>
        </li>
        <li>
          <Link to="/list"> Noticias </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
