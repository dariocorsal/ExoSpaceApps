import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import exoplanet1Texture from "../assets/exoplanet1.jpg";
import exoplanet2Texture from "../assets/exoplanet2.jpg";
import exoplanet3Texture from "../assets/exoplanet3.jpg";

const exoplanets = [
  {
    name: "Kepler-452b",
    description:
      "Kepler-452b is an exoplanet located 1,400 light years away. It’s about 60% larger than Earth.",
    texture: exoplanet1Texture,
  },
  {
    name: "TRAPPIST-1e",
    description:
      "TRAPPIST-1e is one of the seven rocky planets orbiting the star TRAPPIST-1, located 40 light years away.",
    texture: exoplanet2Texture,
  },
  {
    name: "Proxima Centauri b",
    description:
      "Proxima Centauri b orbits the closest star to the Sun, and it may have conditions suitable for life.",
    texture: exoplanet3Texture,
  },
];

export default function Exoplanet() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Siguiente exoplaneta
  const nextExoplanet = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % exoplanets.length);
  };

  // Anterior exoplaneta
  const prevExoplanet = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + exoplanets.length) % exoplanets.length
    );
  };

  // Cargar textura
  const texture = new THREE.TextureLoader().load(
    exoplanets[currentIndex].texture
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f028f] to-[#ffa709] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Nombre exoplaneta */}
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
        Explore {exoplanets[currentIndex].name}
      </h1>

      {/* Planeta 3D */}
      <div className="w-full max-w-4xl">
        <Canvas style={{ height: "500px", width: "100%" }}>
          {/* Control para rotar la cámara */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />

          {/* Luz */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* Modelo y textura */}
          <Sphere visible args={[1, 32, 32]} scale={2}>
            <meshStandardMaterial map={texture} />
          </Sphere>
        </Canvas>
      </div>

      {/* Descripción */}
      <p className="text-white text-center mt-8 text-lg max-w-2xl">
        {exoplanets[currentIndex].description}
      </p>

      {/* Flechas para cambiar */}
      <div className="flex justify-between mt-4 w-full max-w-md">
        <button
          onClick={prevExoplanet}
          className="bg-[#ffa709] hover:bg-[#ff8c00] text-white font-bold py-2 px-4 rounded-full text-lg transition-colors"
        >
          Previous
        </button>
        <button
          onClick={nextExoplanet}
          className="bg-[#ffa709] hover:bg-[#ff8c00] text-white font-bold py-2 px-4 rounded-full text-lg transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
