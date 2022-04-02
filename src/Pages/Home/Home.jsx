import React from "react";
import { Banner } from "../../components/Banner";
import { Form } from "../../components/Form";
import { Hero } from "../../components/Hero/Hero";
import { Services } from "../../components/Services/Services";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Banner />
      <Form />
    </div>
  );
};
