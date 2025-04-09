import React from "react";
import Logo from "../assets/LOGO.png";
import "../SASS-CSS/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo Kasa rouge clair" />
      <ul className="lien-header">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="Propos">
          <li>À Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
