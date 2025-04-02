import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

const Page = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1 style={{ color: "green", padding: "1em" }}>Accueil V2</h1>
      <Countries />
    </div>
  );
};

export default Page;
