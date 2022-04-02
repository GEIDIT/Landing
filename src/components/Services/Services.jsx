import React from "react";
import { Service } from "../Service/Service";

import "./Services.styles.css";

import { Data } from "../../Data/Data";
const { ServiceList } = Data;

export const Services = () => {
  return (
    <div className="Services">
      <div className="Services-Container">
        <div className="Services-container-Text">
          <h2>Servicios</h2>
          <p>
            Somos es una Agencia de Consultoría, Marketing Digital, Desarrollo
            de Software y Extracción de Datos
          </p>
        </div>
        <div className="Services-Containt">
          {ServiceList.map((service, index) => {
            return (
              <Service key={service.title} service={service} index={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
