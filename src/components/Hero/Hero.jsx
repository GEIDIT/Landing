import React from "react";

import "./Hero.styles.css";

import heroImage from "../../Assets/images/heroImage.png";
import { Button } from "../Button/Button";

import { Data } from "../../Data/Data";
const { HeroInfo } = Data;
export const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-Container">
        <div className="Hero-Image">
          <img src={heroImage} alt="GEIDIT-Desarollo-de-aplicaciones-web" />
        </div>
        <div className="Hero-Text">
          <h1> {HeroInfo.Title} </h1>
          <p>{HeroInfo.Subtitle}</p>

          <Button
            Color="solid"
            Text={HeroInfo.CTA}
            Message={HeroInfo.Message}
          />
        </div>
      </div>
    </div>
  );
};
