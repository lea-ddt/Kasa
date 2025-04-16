import React from "react";
import "../SASS-CSS/Banner.scss";

const Banner = ({ image, alt, text, variant }) => {
  return (
    <div className={`banner ${variant}`}>
      <img src={image} alt={alt} />
      {text && <p>{text}</p>}
    </div>
  );
};

export default Banner;
