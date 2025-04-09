import React from "react";
import "../SASS-CSS/Banner.css";
import paysage from "../assets/paysage.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={paysage} alt="paysage rocheux avec la mer" />
      <p>Chez vous partout et ailleurs</p>
    </div>
  );
};

export default Banner;
