import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu.jsx";
import Explore from "./pages/Explore.jsx";
import Quiz from "./pages/Quiz.jsx";
import Paint from "./pages/Draw.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/paint" element={<Paint />} />
      </Routes>
    </Router>
  );
}
