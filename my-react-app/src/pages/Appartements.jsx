import { useParams } from "react-router-dom";
import logements from "../logements.json";
import ErrorPage from "./ErrorPage";
import MenuDeroulant from "../components/MenuDeroulant";
import Carousel from "../components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-solid-svg-icons";

import "../SASS-CSS/Appartements.scss";

const Appartements = () => {
  const { id } = useParams(); // récupère l'ID de l'URL

  // Cherche le logement qui correspond à cet ID
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) return <ErrorPage />;

  return (
    <div className="page-logement">
      <Carousel />
      <div className="logement">
        <div className="logement-top">
          <h1 className="logement-title">{logement.title}</h1>
          <div className="logement-host desktop-only">
            <p>{logement.host.name}</p>
            <img
              className="logement-host-img"
              src={logement.host.picture}
              alt={logement.title}
            />
          </div>
        </div>

        <div className="logement-bottom">
          <div>
            <h4 className="logement-location">{logement.location}</h4>
            <div className="logement-tags">
              {logement.tags.map((tag, index) => (
                <span className="tag" key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rating-host-wrap">
            <div className="logement-rating">
              {[...Array(5)].map((_, index) => (
                // crée un tableau avec 5 éléments undefined
                <FontAwesomeIcon
                  key={index}
                  icon={index < logement.rating ? fullStar : emptyStar}
                  className={
                    index < logement.rating ? "full-star" : "empty-star"
                  }
                />
              ))}
            </div>
            <div className="logement-host mobile-only">
              <p>{logement.host.name}</p>
              <img
                className="logement-host-img"
                src={logement.host.picture}
                alt={logement.title}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="deroulant">
        <MenuDeroulant
          title="description"
          content={logement.description}
          className="deroulant"
        />
        <MenuDeroulant
          title="Equipments"
          content={logement.equipments.map((tag, index) => (
            <span className="equipments" key={index}>
              {tag}
            </span>
          ))}
          className="deroulant"
        />
      </div>
    </div>
  );
};
export default Appartements;
