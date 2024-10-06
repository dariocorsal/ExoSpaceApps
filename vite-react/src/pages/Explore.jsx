import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const infoSections = [
  {
    title: "What are Exoplanets?",
    description:
      "Exoplanets are planets that orbit stars outside our solar system.",
    color: "bg-blue-200",
  },
  {
    title: "How do we discover them?",
    description:
      "We discover exoplanets using various methods, including the transit method and radial velocity.",
    color: "bg-green-200",
  },
  {
    title: "How many Exoplanets do we know?",
    description:
      "As of now, we have discovered thousands of exoplanets, and the number keeps growing!",
    color: "bg-yellow-200",
  },
  {
    title: "Are there Earth-like Exoplanets?",
    description:
      "Yes, scientists are searching for exoplanets that could potentially support life.",
    color: "bg-purple-200",
  },
  {
    title: "Size and Temperature of Exoplanets",
    description:
      "Exoplanets come in different sizes and temperatures, affecting their potential to host life.",
    color: "bg-red-200",
  },
  {
    title: "Famous Exoplanets",
    description:
      "Some well-known exoplanets include Proxima Centauri b and Kepler-186f.",
    color: "bg-orange-200",
  },
  {
    title: "Could we live on an Exoplanet?",
    description:
      "It's a big question! Scientists are exploring possibilities, but it requires a lot of research.",
    color: "bg-pink-200",
  },
];

export default function Information() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1: right, -1: left

  const nextSection = () => {
    setDirection(1); // Move to the right
    setCurrentIndex((prevIndex) => (prevIndex + 1) % infoSections.length);
  };

  const prevSection = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + infoSections.length) % infoSections.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#d7e1ff] to-[#ffecb3] p-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center mb-8 text-[#3c3c3c]">
        Explore Exoplanets Information!
      </h1>

      <div className="relative w-full max-w-2xl">
        {/* Flecha anterior */}
        <button
          onClick={prevSection}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10 hover:bg-opacity-75 transition-all"
          aria-label="Previous Section"
        >
          <ChevronLeft className="w-8 h-8 text-black" />
        </button>

        {/* Cuadro de info.*/}
        <div
          className={`flex justify-center items-center transition-all duration-500`}
        >
          <div
            className={`rounded-lg p-6 shadow-lg transition-all duration-300 ${infoSections[currentIndex].color} w-full h-64`}
          >
            <h2 className="text-2xl font-bold text-[#0f028f] mb-2">
              {infoSections[currentIndex].title}
            </h2>
            <p className="text-gray-700 text-center">
              {infoSections[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Flecha siguiente*/}
        <button
          onClick={nextSection}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10 hover:bg-opacity-75 transition-all"
          aria-label="Next Section"
        >
          <ChevronRight className="w-8 h-8 text-black" />
        </button>
      </div>
    </div>
  );
}
