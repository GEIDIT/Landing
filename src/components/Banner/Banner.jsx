import React from "react";
import { Button } from "../Button";
import "./Banner.styles.css";

import { Data } from "../../Data/Data";
const { CTABlock } = Data;

export const Banner = () => {
  const { title, description, Message, Text } = CTABlock;
  return (
    <div className="Banner">
      <div className="Banner-Container">
        <div className="Banner-Content">
          <div className="Banner-Text">
            <h3> {title} </h3>
            <p>{description}</p>
          </div>
          <div id="ContactBtn">
            <Button Color="solid" Text={Text} Message={Message} />
          </div>
        </div>
      </div>
    </div>
  );
};
