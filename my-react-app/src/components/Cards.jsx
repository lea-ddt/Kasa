import React from "react";
import { Link } from "react-router-dom";
import logements from "../logements.json";
import "../SASS-CSS/Cards.scss";

const Cards = () => {
  return (
    <div className="logements">
      {logements.map((logement) => {
        const { id, cover, title } = logement;

        return (
          // key obligatoire pour les listes React
          <div className="fiche-logement" key={id}>
            <Link to={`/Appartements/${id}`}>
              <img src={cover} alt={title} />
              <h3>{title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
