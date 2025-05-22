import { useParams } from "react-router-dom";
import logements from "../logements.json";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import "../SASS-CSS/Carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Appartements = () => {
  const { id } = useParams(); // récupères l’id depuis l’URL
  const logement = logements.find((logement) => logement.id === id); // find renvoie le premier élément qui correspond
  const [currentIndex, setCurrentIndex] = useState(0); //suit l’image affichée dans le carousel

  return (
    <div className="carousel-container">
      <Carousel
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              className="custom-arrow left"
              onClick={onClickHandler}
              title={label}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              className="custom-arrow right"
              onClick={onClickHandler}
              title={label}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )
        }
        infiniteLoop
        showThumbs={false} // Cache les miniatures
        showStatus={false} // Cache le statut ("1 sur 5")
        selectedItem={currentIndex} // Image à afficher (selon currentIndex)
        showIndicators={false} // Cache les petits points
        onChange={(index) => setCurrentIndex(index)} // Met à jour currentIndex quand on change d’image
      >
        {logement.pictures.map((picture, index) => (
          <div className="custom-slide" key={index}>
            <img src={picture} alt={`logement ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className="number">
        {currentIndex + 1} / {logement.pictures.length}
      </div>
    </div>
  );
};

export default Appartements;
