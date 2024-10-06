import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  return (
    <div className="bg-indigo-800 p-4 flex justify-between items-center">
      <button
        onClick={() => navigate("/explore")} // Cambia a la página de Explore
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full flex items-center"
      >
        <ChevronLeft size={24} className="mr-2" />
        Back
      </button>
      <div className="flex items-center">
        <img
          src="./public/amongus.png"
          alt="Exoplanet Explorer Logo"
          className="h-8 w-8 mr-2"
        />
        <h1 className="text-2xl font-bold">Fun with Exoplanets</h1>
      </div>
      <button
        onClick={() => navigate("/exoplanets")} // Cambia a la página de Draw
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full flex items-center"
      >
        Next
        <ChevronRight size={24} className="ml-2" />
      </button>
    </div>
  );
}
