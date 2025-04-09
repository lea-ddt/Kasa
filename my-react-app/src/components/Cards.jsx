import React from "react";
import { Link } from "react-router-dom";
import logements from "../logements.json";
import "../SASS-CSS/Cards.css";

const Cards = () => {
  return (
    <div className="logements">
      {/* liste la base de données */}
      {logements.map((logements) => {
        const { id, cover, title } = logements;

        // affiche la fiche logement sur la page d'accueil
        return (
          <div className="fiche-logement" key={id}>
            <Link to={{ pathname: "/Appartements", search: "?_id=" + id }}>
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
