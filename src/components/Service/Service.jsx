import React from "react";

import "./Service.styles.css";

export const Service = ({ service }) => {
  const { title, description, img } = service;

  return (
    <div className="Service">
      <div className="Service-Container">
        <div className="Service-Container-Image">
          <img src={img} alt={title} />
        </div>
        <div className="Service-Container-Text">
          <h3>{title}</h3>
          <p>{description}</p>
          <button>Platiquemos de tu idea</button>
        </div>
      </div>
    </div>
  );
};
