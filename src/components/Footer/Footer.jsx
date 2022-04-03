import React from "react";

import "./Footer.styles.css";

import { Data } from "../../Data/Data";
import { Link } from "react-router-dom";
const { FooterInfo } = Data;

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Container">
        <div className="Footer-Content">
          <div className="Footer-Header">
            <div className="Footer-logo">
              <img src={FooterInfo.Logo.url} alt="geidit" />
            </div>
            <div className="Footer-links">
              <ul>
                {FooterInfo.Links.map((link, index) => {
                  return (
                    <li key={index} className="Footer-li">
                      <Link className="Footer-link" to={link.path}>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="Footer-Social">
              <ul>
                {FooterInfo.Social.map((social, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class={social.icon}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="Footer-Footer">
            <p>Hecho con el 💚 por GEIDIT</p>
            <p>Copyright 2022 - Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
