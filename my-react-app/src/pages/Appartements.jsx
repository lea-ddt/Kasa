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
  const { id } = useParams(); // ← récupère l'ID de l'URL

  // Cherche le logement avec cet ID
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) return <ErrorPage />;

  return (
    <div className="page-logement">
      <Carousel />
      <div className="logement">
        <h1 className="logement-title">{logement.title}</h1>
        <h4 className="logement-location">{logement.location}</h4>
        <h4 className="logement-host">{logement.host.name}</h4>
        <img
          className="logement-host-img"
          src={logement.host.picture}
          alt={logement.title}
        />
        <div className="position">
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
          <div className="logement-rating">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={index < logement.rating ? fullStar : emptyStar}
                className={index < logement.rating ? "full-star" : "empty-star"}
              />
            ))}
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
