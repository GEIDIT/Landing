import React from "react";

import "./Hero.styles.css";

import heroImage from "../../Assets/images/heroImage.png";
import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-Container">
        <div className="Hero-Image">
          <img src={heroImage} alt="GEIDIT-Desarollo-de-aplicaciones-web" />
        </div>
        <div className="Hero-Text">
          <h1> Desarrollo de software a la medida y ciencia de datos. </h1>
          <p>
            Impulsamos y transformamos negocios basados en tecnología y ciencia
            de datos.
          </p>

          <Button
            Color="solid"
            Text="¡Platiquemos de tu idea!"
            Message="¡Hey  *GEIDIT*  tengo un proyecto increíble! Quiero saber cuáles de sus servicios le dara más valor a mi proyecto !"
          />
        </div>
      </div>
    </div>
  );
};
