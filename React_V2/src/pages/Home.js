import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Accueil V1</h1>
      <Countries />
    </div>
  );
};

export default Home;
