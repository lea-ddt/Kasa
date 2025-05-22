import React, { useState } from "react";
import "../SASS-CSS/MenuDeroulant.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ title, content }) => {
  const [open, setOpen] = useState(false); // détermine si le menu est ouvert ou fermé
  const [animationClass, setAnimationClass] = useState(""); // détermine la classe CSS utilisée
  const [rotated, setRotated] = useState(false); // détermine si l'icône du chevron doit être tournée

  const toggleDropdown = () => {
    if (open) {
      setAnimationClass("close");
      setRotated(false); // animation de fermeture du chevron
      setTimeout(() => {
        setOpen(false);
      }, 300); // laisse le temps à l'animation
    } else {
      setOpen(true);
      setAnimationClass("open");
      setRotated(true); // animation d’ouverture du chevron
    }
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`chevron-icon ${rotated ? "rotated" : ""}`}
        />
      </div>
      <div className={`dropdown-content ${animationClass}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Dropdown;
