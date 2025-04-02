import React from "react";

const Card = ({ country }) => {
  return (
    <div
      style={{
        padding: "1em",
        margin: "1em",
        background: "black",
        borderRadius: "10%",
      }}
    >
      <li className="card">
        <img
          src={country.flags.svg}
          alt={"drapeau" + country.translations.fra.common}
        />
        <div className="infos">
          <h2>{country.translations.fra.common}</h2>
          <h4>{country.capital}</h4>
          <p>Pop. {country.population.toLocaleString()}</p>
        </div>
      </li>
    </div>
  );
};

export default Card;
