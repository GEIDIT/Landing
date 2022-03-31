import React from "react";
import { Service } from "../Service/Service";

import "./Services.styles.css";

import ServicioImg from "../../Assets/images/feature1.png";

const ServiceList = [
  {
    title: "Tecnología a la medida",
    description:
      "Toda nuestra experiencia desarrollando productos digitales puesta para construir basado en necesidades del negocio y sus clientes.",
    img: ServicioImg,
  },
  {
    title: "Servicio 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: ServicioImg,
  },
  {
    title: "Servicio 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: ServicioImg,
  },
];

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
          {ServiceList.map((service) => {
            return <Service service={service} />;
          })}
        </div>
      </div>
    </div>
  );
};
