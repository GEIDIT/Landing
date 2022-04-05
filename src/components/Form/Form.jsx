import React from "react";
import { Data } from "../../Data/Data";
import "./Form.styles.css";
import { useForm } from "@formspree/react";

const { FormInfo } = Data;

export const Form = () => {
  const [state, handleSubmit] = useForm("xjvlezan");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="Form">
      <div className="Form-Container">
        <form
          id="contact"
          className="form"
          name="contactos"
          onSubmit={handleSubmit}
        >
          <div className="form-content">
            <h2 className="title">{FormInfo.Title}</h2>
            <p className="form-text">{FormInfo.Description}.</p>
            <label forHtml="form-name">
              Nombre Completo
              <input
                required
                name="name"
                id="form-name"
                type="text"
                placeholder="Escribe tu nombre"
              />
            </label>
            <label forHtml="form-company">
              Empresa
              <input
                name="company"
                id="form-company"
                type="text"
                placeholder="Escribe el nombre de empresa (opcional)"
              />
            </label>
            <label forHtml="form-email">
              Correo electrónico
              <input
                required
                name="email"
                id="form-email"
                type="email"
                placeholder="Escribe tu correo electronico"
              />
            </label>
            <label forHtml="form-phone">
              Teléfono
              <input
                required
                name="phone"
                id="form-phone"
                type="phone"
                placeholder="Escribe tu número de teléfono"
              />
            </label>
            <label forHtml="form-service">
              Servicio en que está interesado
              <select name="service" id="service">
                <option value="Web">Desarrollo Web</option>
                <option value="Datos">Ciencia de Datos</option>
                <option value="Sofware">Soluciones a medida</option>
              </select>
            </label>
            <label forHtml="form-message">
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

            <button
              className="button button-outline"
              type="submit"
              disabled={state.submitting}
            >
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
