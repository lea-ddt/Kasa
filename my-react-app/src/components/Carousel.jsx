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
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        showThumbs={false}
        showStatus={false}
        dynamicHeight={true}
        selectedItem={currentIndex}
        showIndicators={false}
        onChange={(index) => setCurrentIndex(index)}
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
