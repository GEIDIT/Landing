import React from "react";
import "./NotFound.styles.css";
import { Data } from "../../Data/Data";
import { Link } from "react-router-dom";

const { ErrorPage } = Data;

export const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="NotFound-Container">
        <div className="NotFound-Content">
          <div className="NotFound-Image">
            <img
              src={ErrorPage.img}
              alt="GEIDIT-Desarollo-de-aplicaciones-web"
            />
          </div>
          <div className="Hero-Text">
            <h1>{ErrorPage.Title}</h1>
            <h2>{ErrorPage.Subtitle}</h2>
            <p>{ErrorPage.Description}</p>
            <Link className="button button-outline" to={ErrorPage.path}>
              {ErrorPage.btn}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
