import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StarryBackground from "./Estrellas";
import { motion } from "framer-motion";
import "./App.css";

const sections = [
  {
    title: "Exploration",
    description: "¡Here you can learn everything about exoplanets!",
    image: "./public/estrellas/Untitled_Artwork 1.PNG",
  },
  {
    title: "QUIZ",
    description: "Here you can test your knowledge on exoplanets",
    image: "./public/estrellas/Untitled_Artwork 2.PNG",
  },
  {
    title: "PAINT",
    description:
      "¡Here you can create your own artwork inspired by an exoplanet!",
    image: "./public/estrellas/Untitled_Artwork 3.PNG",
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSection = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sections.length) % sections.length
    );
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <StarryBackground />

      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          className="text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
        >
          <h1 className="header">Discover the Universe</h1>
        </motion.div>
      </div>

      <div className="relative w-full max-w-5xl flex justify-center items-center h-[70vh] z-10">
        <button
          onClick={prevSection}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20 hover:bg-opacity-75 transition-all"
          aria-label="Sección anterior"
        >
          <ChevronLeft className="w-8 h-8 text-black" />
        </button>

        <div className="flex justify-center items-center w-full h-full overflow-hidden">
          <motion.div
            className="flex"
            style={{ display: "flex", alignItems: "center" }}
            initial={{ x: 0 }}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.5 }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className={`bg-white bg-opacity-80 rounded-3xl p-6 flex flex-col justify-between items-center m-2 transition-all duration-500`}
                style={{
                  transform: `scale(${index === currentIndex ? 1 : 0.8})`,
                  opacity: index === currentIndex ? 1 : 0.5,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-56 md:h-64 object-cover rounded-2xl mb-4"
                />
                <h2 className="text-2xl font-bold text-[#0f028f] mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-700 text-center mb-4">
                  {section.description}
                </p>
                <button className="bg-[#ffa709] hover:bg-[#ff8c00] text-white font-bold py-2 px-4 rounded-full text-lg transition-colors">
                  Go!
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={nextSection}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20 hover:bg-opacity-75 transition-all"
          aria-label="Siguiente sección"
        >
          <ChevronRight className="w-8 h-8 text-black" />
        </button>
      </div>
    </div>
  );
}
