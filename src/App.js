import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Promotions from "./Components/Promotions";
import Anniversary from "./Components/Anniversary";
import Goat from "./Components/Goat";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Promotions />} />
          <Route path="/Anniversary" element={<Anniversary />} />
          <Route path="/Goat" element={<Goat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;