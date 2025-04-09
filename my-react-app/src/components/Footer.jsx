import React from "react";
import Logo from "../assets/BlackLogo.png";
import "../SASS-CSS/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="Logo blanc sur un fond noir" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
