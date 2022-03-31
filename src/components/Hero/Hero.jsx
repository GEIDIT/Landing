import React from "react";

import "./Hero.styles.css";

import heroImage from "../../Assets/images/heroImage.png";

export const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-Container">
        <div className="Hero-Image">
          <img src={heroImage} alt="GEIDIT-Desarollo-de-aplicaciones-web" />
        </div>
        <div className="Hero-Text">
          <h1> Welcome to the React App! </h1>
          <p>
            Impulsamos y transformamos negocios basados en tecnología y ciencia
            de datos.
          </p>

          <button>Platiquemos de tu idea</button>
        </div>
      </div>
    </div>
  );
};
