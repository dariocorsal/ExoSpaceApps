import React from "react";
import StarryBackground from "/src/Estrellas";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "/src/App.css";

export default function App() {
  const navigate = useNavigate();

  const goToSection = (route) => {
    navigate(route);
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
        <div className="flex justify-center items-center w-full h-full">
          <motion.div
            className="bg-white bg-opacity-80 rounded-3xl p-6 flex flex-col justify-between items-center m-2 transition-all duration-500"
            initial={{ opacity: 0.5 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
          >
            <img
              src="./public/estrellas/Untitled_Artwork 1.PNG"
              alt="Exploration"
              className="w-full h-56 md:h-64 object-cover rounded-2xl mb-4"
            />
            <h2 className="text-2xl font-bold text-[#0f028f] mb-2">
              Exploration
            </h2>
            <p className="text-gray-700 text-center mb-4">
              ¡Here you can learn everything about exoplanets!
            </p>
            <button
              className="bg-[#ffa709] hover:bg-[#ff8c00] text-white font-bold py-2 px-4 rounded-full text-lg transition-colors"
              onClick={() => goToSection("/explore")}
            >
              Go!
            </button>
          </motion.div>

          <motion.div
            className="bg-white bg-opacity-80 rounded-3xl p-6 flex flex-col justify-between items-center m-2 transition-all duration-500"
            initial={{ opacity: 0.5 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
          >
            <img
              src="./public/estrellas/Untitled_Artwork 2.PNG"
              alt="QUIZ"
              className="w-full h-56 md:h-64 object-cover rounded-2xl mb-4"
            />
            <h2 className="text-2xl font-bold text-[#0f028f] mb-2">QUIZ</h2>
            <p className="text-gray-700 text-center mb-4">
              Here you can test your knowledge on exoplanets
            </p>
            <button
              className="bg-[#ffa709] hover:bg-[#ff8c00] text-white font-bold py-2 px-4 rounded-full text-lg transition-colors"
              onClick={() => goToSection("/quiz")}
            >
              Go!
            </button>
          </motion.div>

          <motion.div
            className="bg-white bg-opacity-80 rounded-3xl p-6 flex flex-col justify-between items-center m-2 transition-all duration-500"
            initial={{ opacity: 0.5 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
          >
            <img
              src="./public/estrellas/Untitled_Artwork 3.PNG"
              alt="PAINT"
              className="w-full h-56 md:h-64 object-cover rounded-2xl mb-4"
            />
            <h2 className="text-2xl font-bold text-[#0f028f] mb-2">PAINT</h2>
            <p className="text-gray-700 text-center mb-4">
              ¡Here you can create your own artwork inspired by an exoplanet!
            </p>
            <button
              className="bg-[#ffa709] hover:bg-[#ff8c00] text-white font-bold py-2 px-4 rounded-full text-lg transition-colors"
              onClick={() => goToSection("/paint")}
            >
              Go!
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
