import React from "react";
import Logo from "../assets/LOGO.png";
import "../CSS/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo Kasa rouge clair" />
      <ul className="lien-header">
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="Propos">
          <li>À Propos</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
