import React from "react";
import "./Navbar.styles.css";

import menu from "../../Assets/icons/menu.png";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { Data } from "../../Data/Data";

const { NavbarItems } = Data;

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-Container">
        <Link to="/">
          <div className="Navbar-Logo">
            <img src={NavbarItems.Logo.url} alt={NavbarItems.Logo.name} />
          </div>
        </Link>

        <div className="Navbar-Links">
          <div className="Navbar-list">
            {NavbarItems.Links.map((item, index) => {
              return (
                <Link key={index} to={item.path}>
                  {item.name}
                </Link>
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
