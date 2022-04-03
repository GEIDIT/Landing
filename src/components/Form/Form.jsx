import React from "react";
import { Data } from "../../Data/Data";
import "./Form.styles.css";

const { FormInfo } = Data;

export const Form = () => {
  return (
    <div className="Form">
      <div className="Form-Container">
        <form id="contact" class="form" name="contact" netlify>
          <div class="form-content">
            <h2 class="title">{FormInfo.Title}</h2>
            <p class="form-text">{FormInfo.Description}.</p>
            <label for="form-name">
              Nombre Completo
              <input
                required
                name="name"
                id="form-name"
                type="text"
                placeholder="Escribe tu nombre"
              />
            </label>
            <label for="form-company">
              Empresa
              <input
                name="company"
                id="form-company"
                type="text"
                placeholder="Escribe el nombre de empresa (opcional)"
              />
            </label>
            <label for="form-email">
              Correo electrónico
              <input
                required
                name="email"
                id="form-email"
                type="email"
                placeholder="Escribe tu correo electronico"
              />
            </label>
            <label for="form-phone">
              Teléfono
              <input
                required
                name="phone"
                id="form-phone"
                type="phone"
                placeholder="Escribe tu número de teléfono"
              />
            </label>
            <label for="form-message">
              Mensaje
              <textarea
                required
                name="message"
                placeholder=" ¿En qué te podemos ayudar?"
                id="form-message"
                cols="30"
                rows="7"
              ></textarea>
            </label>

            <button class="button button-outline" type="submit">
              Enviar mensaje
            </button>
          </div>
          <div className="Privacidad">
            Este sitio está protegido por reCAPTCHA y se aplica la{" "}
            <a
              href="https://policies.google.com/privacy?hl=es"
              rel="noopener noreferrer"
              target="_blank"
            >
              Política de privacidad
            </a>{" "}
            y las{" "}
            <a
              href="https://policies.google.com/terms?hl=es"
              rel="noopener noreferrer"
              target="_blank"
            >
              Condiciones de servicio
            </a>{" "}
            de Google.
          </div>
        </form>
      </div>
    </div>
  );
};
