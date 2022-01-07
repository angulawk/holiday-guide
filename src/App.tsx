import React from "react";

import { Routes, Route } from "react-router-dom";

import { HomePage } from "pages/Home/HomePage";
import { NoMatchPage } from "pages/NoMatch/NoMatchPage";
import { HolidaysPage } from "pages/Holidays/HolidaysPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/holidays/:alpha3Code" element={<HolidaysPage />} />
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  );
}

export default App;
