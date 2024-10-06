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
          {/* Exploration Card */}
          <motion.div
            className="bg-white bg-opacity-80 rounded-3xl p-6 flex flex-col justify-between items-center m-2 transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0.5 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            onClick={() => goToSection("/explore")}
          >
            <img
              src="./public/estrellas/Untitled_Artwork 1.PNG"
              alt="Exploration"
              className="w-full h-56 md:h-64 object-cover rounded-2xl mb-4"
            />
            <h2 className="text-2xl font-bold text-[#0f028f] mb-2">
              EXPLORATION
            </h2>
            <p className="text-gray-700 text-center mb-4">
              Here you can learn everything about exoplanets!
            </p>
          </motion.div>

          {/* Quiz Card */}
          <motion.div
            className="bg-white bg-opacity-80 rounded-3xl p-6 flex flex-col justify-between items-center m-2 transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0.5 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            onClick={() => goToSection("/quiz")}
          >
            <img
              src="./public/estrellas/Untitled_Artwork 2.PNG"
              alt="QUIZ"
              className="w-full h-56 md:h-64 object-cover rounded-2xl mb-4"
            />
            <h2 className="text-2xl font-bold text-[#0f028f] mb-2">QUIZ</h2>
            <p className="text-gray-700 text-center mb-4">
              Here you can test your knowledge on exoplanets!
            </p>
          </motion.div>

          {/* Paint Card */}
          <motion.div
            className="bg-white bg-opacity-80 rounded-3xl p-6 flex flex-col justify-between items-center m-2 transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0.5 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            onClick={() => goToSection("/paint")}
          >
            <img
              src="./public/estrellas/Untitled_Artwork 3.PNG"
              alt="PAINT"
              className="w-full h-56 md:h-64 object-cover rounded-2xl mb-4"
            />
            <h2 className="text-2xl font-bold text-[#0f028f] mb-2">PAINT</h2>
            <p className="text-gray-700 text-center mb-4">
              Here you can create your own artwork inspired by an exoplanet!
            </p>
          </motion.div>
        </div>{" "}
      </div>
      <motion.img
        src="./public/estrellas/Untitled_Artwork 9.PNG"
        alt="Mascot"
        className="absolute bottom-0 right-0 w-40 h-40 object-contain" // Cambié a w-20 y h-20 para 80px
        style={{ right: "20px" }} // Ajusta este valor para mover más a la derecha
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </div>
  );
}
