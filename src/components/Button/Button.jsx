import React from "react";

import "./Button.styles.css";

import { Data } from "../../Data/Data";
const { WhatsApp } = Data;

export const Button = ({ Color = "outline", Text, Message }) => {
  return (
    <>
      <a
        className={`button button-${Color}`}
        href={`https://wa.me/${WhatsApp}?text=${Message}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {Text}
      </a>
    </>
  );
};
