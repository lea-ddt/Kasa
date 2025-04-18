import React from "react";
import Card from "../components/Cards";
import Banner from "../components/Banner";
import paysage from "../assets/paysage.png";
import "../SASS-CSS/Banner.scss";

const Home = () => {
  return (
    <div>
      <Banner
        image={paysage}
        alt="paysage rocheux avec la mer"
        text="Chez vous, partout et ailleurs"
      />
      <Card />
    </div>
  );
};

export default Home;
