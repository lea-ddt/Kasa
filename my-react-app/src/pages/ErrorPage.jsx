import React from "react";
import "../SASS-CSS/ErrorPage.scss";
import { Link } from "react-router-dom";

function ErrorPages() {
  return (
    <div className="error">
      <span>404</span>
      <p className="oups-error">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">
        <p className="accueil-error">Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
}

export default ErrorPages;
