import React, { useState } from "react";
import "../SASS-CSS/MenuDeroulant.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [rotated, setRotated] = useState(false);

  const toggleDropdown = () => {
    if (open) {
      setAnimationClass("close");
      setRotated(false); // ⬅️ animation de fermeture du chevron
      setTimeout(() => {
        setOpen(false);
      }, 300);
    } else {
      setOpen(true);
      setAnimationClass("open");
      setRotated(true); // ⬅️ animation d’ouverture du chevron
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
