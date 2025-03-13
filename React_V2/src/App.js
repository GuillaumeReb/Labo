import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Page from "./pages/Page"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/page" element={<Page />} />
        {/* Path"*" fonctionne si jamais l'url ne correspond à rien */}
        <Route path="*" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
