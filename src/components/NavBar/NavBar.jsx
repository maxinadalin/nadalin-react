import React from "react";
import "./navbar.css";
import logo from "../../mockAPI/imagenes/logo.png"

import { Link } from "react-router-dom";
//importo component font awesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//y aca importo el icono que deseo usar
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

// 4. Todas las etiquetas <a> las reemplazamos por <Link> o <NavLink>
function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
      <Link to="/" className="a"><img className="logo" src={logo}/> </Link>
        <Link to="/" className="a">Productos </Link>
        <Link to="/SobreNosotros" className="a">Sobre Nosotros</Link>
        <Link to="/Locales" className="a">Nuestros Locales</Link>
        <Link to="/Contacto" className="a">Contacto</Link>
        <button className="carrito"><FontAwesomeIcon icon= {faCartShopping}/></button>
      </ul>
    </div>
  );
}

export default NavBar;
