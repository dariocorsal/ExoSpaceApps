import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu.jsx";
import Exploration from "./pages/Explore.jsx"; // Importa las otras páginas
import Quiz from "./pages/Quiz.jsx";
import Paint from "./pages/Draw.jsx";
// import Test from "./pages/Test.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/exploration" element={<Exploration />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/paint" element={<Paint />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </Router>
  );
}
