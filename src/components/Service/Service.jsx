import React from "react";
import { Button } from "../Button";

import "./Service.styles.css";

export const Service = ({ service, index }) => {
  const { title, description, img, Message, Text } = service;

  return (
    <div className="Service">
      <div className="Service-Container">
        <div
          className={
            (index + 1) % 2 === 0
              ? "Service-Container-Image "
              : "Service-Container-Image Odd"
          }
        >
          <img src={img} alt={title} />
        </div>
        <div className="Service-Container-Text">
          <h3>{title}</h3>
          <div className="Service-Container-Description">
            {description.map((parrafo, index) => {
              return <p key={index}>{parrafo}</p>;
            })}
          </div>
          <Button Color="outline" Text={Text} Message={Message} />
        </div>
      </div>
    </div>
  );
};
