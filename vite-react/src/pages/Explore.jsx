import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import StarryBackground from "/src/Estrellas";

// Import textures
import exoplanet1Texture from "../assets/exoplanet1.jpg";
import exoplanet2Texture from "../assets/exoplanet2.jpg";
import exoplanet3Texture from "../assets/exoplanet3.jpg";

const exoplanets = [
  {
    name: "Kepler-452b",
    description:
      "Kepler-452b is an exoplanet located 1,400 light years away. It's about 60% larger than Earth.",
    texture: exoplanet1Texture,
    facts: ["Has a similar size to Earth", "Located in the habitable zone"],
  },
  {
    name: "TRAPPIST-1e",
    description:
      "TRAPPIST-1e is one of the seven rocky planets orbiting the star TRAPPIST-1, located 40 light years away.",
    texture: exoplanet2Texture,
    facts: ["Could have liquid water", "Part of a multi-planet system"],
  },
  {
    name: "Proxima Centauri b",
    description:
      "Proxima Centauri b orbits the closest star to the Sun, and it may have conditions suitable for life.",
    texture: exoplanet3Texture,
    facts: ["The closest exoplanet to Earth", "Potentially habitable zone"],
  },
];
const Types = [
  {
    name: "Gas giant",
    description:
      "Imagine HUGE planets, even bigger than Jupiter! Some, like Hot Jupiters, are so close to their stars they sizzle with heat—like planets inside an oven!",
  },
  {
    name: "Neptunian Planets",
    description:
      "These planets are cousins to Neptune and Uranus, with fluffy gas blankets and rocky insides. Some are Mini-Neptunes, smaller than Neptune but bigger than Earth—like fun-sized versions of giant planets!",
  },
  {
    name: "Super-Earths",
    description:
      "These planets are like Earth's super strong big siblings—rocky and larger, but not quite as huge as Neptune. Some might even have cool atmospheres to explore!",
  },
  {
    name: "Terrestrial Planets",
    description:
      "These are the rocky heroes of space, about the size of Earth or smaller. They might have oceans, air, and who knows—maybe even some space creatures!",
  },
];
const generalInfo = [
  {
    title: "What are Exoplanets?",
    content:
      "Exoplanets are planets that orbit stars outside our solar system. They come in a wide variety of sizes and types, from gas giants to rocky worlds like Earth.",
  },
  {
    title: "How are they discovered?",
    content:
      "There are various methods to discover exoplanets, such as the Transit Method, Radial Velocity, and Direct Imaging. Each one offers a unique way to observe these distant worlds.",
  },
  {
    title: "Why are they important?",
    content:
      "Studying exoplanets helps scientists understand more about our own solar system and the potential for life on other planets. It opens the door to new discoveries.",
  },
];
const mascotFacts = [
  "There are over 5,000 confirmed exoplanets!",
  "The first exoplanet was discovered in 1992.",
  "Some exoplanets orbit two stars, just like in Star Wars!",
  "The hottest known exoplanet is KELT-9b, with temperatures over 4,300°C!",
  "The largest known exoplanet is 20 times bigger than Jupiter!",
];
export default function ExoplanetExplorer() {
  const navigate = useNavigate();
  const [currentPlanet, setCurrentPlanet] = useState(0);
  const [currentSection, setCurrentSection] = useState("general");
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
  const [showMascotDialog, setShowMascotDialog] = useState(true);
  const [currentMascotFact, setCurrentMascotFact] = useState(0);

  const nextPlanet = () => {
    setCurrentPlanet((prev) => (prev + 1) % exoplanets.length);
  };

  const prevPlanet = () => {
    setCurrentPlanet(
      (prev) => (prev - 1 + exoplanets.length) % exoplanets.length
    );
  };

  const nextType = () => {
    setCurrentTypeIndex((prev) => (prev + 1) % Types.length);
  };

  const prevType = () => {
    setCurrentTypeIndex((prev) => (prev - 1 + Types.length) % Types.length);
  };

  const nextInfo = () => {
    setCurrentInfoIndex((prev) => (prev + 1) % generalInfo.length);
  };

  const prevInfo = () => {
    setCurrentInfoIndex(
      (prev) => (prev - 1 + generalInfo.length) % generalInfo.length
    );
  };

  const texture = new THREE.TextureLoader().load(
    exoplanets[currentPlanet].texture
  );

  const handleMascotHover = () => {
    if (!showMascotDialog) {
      setCurrentMascotFact((prev) => (prev + 1) % mascotFacts.length);
      setShowMascotDialog(true);
    }
  };

  return (
    <div className="min-h-screen text-white relative">
      <StarryBackground />

      <div className="p-8 pb-24">
        {" "}
        {/* Added padding at the bottom to account for the fixed menu */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Explore Exoplanets!
        </h1>
        {/* 3D Model Display and Exoplanet Information */}
        <section className="mb-12 relative">
          <div className="rounded-lg p-6 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 max-w-md mb-6 md:mb-0">
              <Canvas style={{ height: "400px", width: "100%" }}>
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={1.5}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Suspense fallback={null}>
                  <Sphere visible args={[1, 32, 32]} scale={2.5}>
                    <meshStandardMaterial map={texture} />
                  </Sphere>
                </Suspense>
              </Canvas>
              <div className="flex justify-center items-center mt-4 space-x-5">
                <button
                  onClick={() => {
                    setCurrentSection("explore"); // Cambia la sección de la mascota
                    prevPlanet(); // Mueve al siguiente tipo de exoplaneta
                  }}
                  className="bg-white-200 hover:bg-grey-600 p-2 rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => {
                    setCurrentSection("explore");
                    nextPlanet();
                  }}
                  className="bg-white-200 hover:bg-grey-600 p-2 rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Exoplanet Information */}
            <div className="md:w-1/2 md:pl-6">
              <h3 className="text-3xl font-bold mb-4">
                {exoplanets[currentPlanet].name}
              </h3>
              <p className="mb-4 text-lg">
                {exoplanets[currentPlanet].description}
              </p>
              <h4 className="text-xl font-semibold mb-2">Fun Facts:</h4>
              <ul className="list-disc list-inside">
                {exoplanets[currentPlanet].facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* Container for General Information and Types */}
        <div className=" bg-opacity-80 flex flex-col md:flex-row mb-12 space-x-4">
          {/* General Information */}
          <section className="flex-1 mb-4 md:mb-0">
            <div className=" bg-opacity-80 bg-indigo-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={prevInfo}
                  className="bg-opacity-80 bg-blue-500 hover:bg-blue-600 p-2 rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <h2 className="text-2xl font-semibold">
                  {generalInfo[currentInfoIndex].title}
                </h2>
                <button
                  onClick={nextInfo}
                  className="bg-opacity-80 bg-blue-500 hover:bg-blue-600 p-2 rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <p className="mb-4">{generalInfo[currentInfoIndex].content}</p>
            </div>
          </section>

          {/* Types of Exoplanets */}
          <section className="flex-1 mb-4 md:mb-0">
            <div className="bg-opacity-80 bg-indigo-800 rounded-lg p-6">
              <div className="mb-4 text-center">
                <h2 className="text-2xl font-semibold">Types of Exoplanets:</h2>
              </div>
              <div className="flex justify-center items-center mb-4 space-x-4">
                <button
                  onClick={() => {
                    setCurrentSection("types"); // Cambia la sección de la mascota
                    prevType(); // Mueve al tipo anterior de exoplaneta
                  }}
                  className=" bg-blue-500 hover:bg-blue-600 p-2 rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <h3 className="text-2xl font-semibold">
                  {Types[currentTypeIndex].name}
                </h3>
                <button
                  onClick={() => {
                    setCurrentSection("types");
                    nextType();
                  }}
                  className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <p>{Types[currentTypeIndex].description}</p>
            </div>
          </section>
        </div>
        {/* Mascot */}
        <div
          className={`fixed bottom-20 right-4 transition-all duration-300 ease-in-out z-50 ${
            showMascotDialog ? "translate-y-0" : "translate-y-[80%]"
          }`}
          onMouseEnter={handleMascotHover} // Hover sobre la mascota
        >
          <img
            src="/mascot.png"
            alt="Exoplanet Explorer Mascot"
            className="w-[150px] h-[150px]"
          />
          {showMascotDialog && (
            <div className="absolute bottom-full right-0 mb-2 p-4 bg-white text-black rounded-lg shadow-lg max-w-xs">
              <button
                onClick={() => setShowMascotDialog(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X size={16} />
              </button>
              <p className="text-sm">{mascotFacts[currentMascotFact]}</p>
            </div>
          )}
        </div>
        {/* Bottom Menu */}
        <div className="bg-indigo-800 p-4 fixed bottom-0 left-0 right-0 flex justify-center items-center z-40">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/")}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full flex items-center"
            >
              Back
            </button>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Fun with Exoplanets</h1>
            </div>
            <button
              onClick={() => navigate("/quiz")}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full flex items-center"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
