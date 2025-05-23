import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil V1</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink>
        <NavLink
          to="/page"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Ma page</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
