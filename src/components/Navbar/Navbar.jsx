import React from "react";
import "./Navbar.styles.css";

import menu from "../../Assets/icons/menu.png";
import { Button } from "../Button";
//exportar este objeto

const NavbarItems = {
  Logo: {
    name: "Logo",
    url: "https://i.postimg.cc/44MYBSNS/Geidit-Logo-desarollo-de-web-apps.png",
  },
  Links: [
    {
      name: "Nosotros",
      path: "/about",
    },
    {
      name: "Servicios",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Vacantes",
      path: "/vacancies",
    },
  ],
  textButon: "Contactanos",
};
//exportar este objeto

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-Container">
        <div className="Navbar-Logo">
          <img src={NavbarItems.Logo.url} alt={NavbarItems.Logo.name} />
        </div>
        <div className="Navbar-Links">
          <div className="Navbar-list">
            {NavbarItems.Links.map((item, index) => {
              return (
                <a key={index} href={item.path}>
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="Navbar-Button">
            <Button
              Color="Nav"
              Text={NavbarItems.textButon}
              Message="¡Hey  *GEIDIT*  tengo un proyecto increíble! Quiero saber cuáles de sus servicios le dara más valor a mi proyecto !"
            />
          </div>
        </div>
        <div
          className="Navbar-Hamburger"
          onClick={() => {
            alert("Hola");
          }}
        >
          <img src={menu} alt="menu" />
        </div>
      </div>
    </nav>
  );
};
