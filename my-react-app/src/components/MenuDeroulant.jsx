// import { useParams } from "react-router-dom";
// import logements from "../logements.json";

// const Appartements = () => {
//   const { id } = useParams(); // ← récupère l'ID de l'URL

//   // Cherche le logement avec cet ID
//   const logement = logements.find((logement) => logement.id === id);

//   return (
//     <div className="page-logement">
//       <h1>{logement.description}</h1>
//       <h1>{logement.equipments}</h1>
//     </div>
//   );
// };
// export default Appartements;

import React, { useState } from "react";
import "../SASS-CSS/MenuDeroulant.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setOpen(!open)}>
        <h2>{title}</h2>
        <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
      </div>
      {open && (
        <div className={"dropdown-content"}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
