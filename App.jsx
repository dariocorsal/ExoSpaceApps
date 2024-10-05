import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const sections = [
  { title: "Explora el Espacio", description: "¡Descubre planetas y estrellas!", image: "https://rlzxwxlbmxvqhvmecagy.supabase.co/storage/v1/object/public/images/space.jpg" },
  { title: "Animales Asombrosos", description: "Conoce criaturas increíbles", image: "https://rlzxwxlbmxvqhvmecagy.supabase.co/storage/v1/object/public/images/animals.jpg" },
  { title: "Experimentos Divertidos", description: "¡Ciencia en acción!", image: "https://rlzxwxlbmxvqhvmecagy.supabase.co/storage/v1/object/public/images/experiments.jpg" },
  { title: "Mundo de los Dinosaurios", description: "Viaja al pasado prehistórico", image: "https://rlzxwxlbmxvqhvmecagy.supabase.co/storage/v1/object/public/images/dinosaurs.jpg" },
  { title: "Arte y Creatividad", description: "Expresa tu imaginación", image: "https://rlzxwxlbmxvqhvmecagy.supabase.co/storage/v1/object/public/images/art.jpg" }
]

const decorations = ['⭐', '🚀', '🌍', '🌙', '👽']

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSection = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length)
  }

  const prevSection = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0f028f] to-[#ffa709] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 animate-bounce">
        ¡Aprende y Diviértete!
      </h1>
      
      <div className="relative w-full max-w-4xl">
        <button 
          onClick={prevSection} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10 hover:bg-opacity-75 transition-all"
          aria-label="Sección anterior"
        >
          <ChevronLeft className="w-8 h-8 text-black" />
        </button>
        
        <div className="flex justify-center items-center">
          {[-1, 0, 1].map((offset) => {
            const index = (currentIndex + offset + sections.length) % sections.length
            const section = sections[index]
            return (
              <div 
                key={section.title}
                className={`bg-white bg-opacity-80 rounded-3xl p-6 shadow-lg transition-all duration-300 ${
                  offset === 0 ? 'w-80 h-96 z-20 scale-100 opacity-100' : 'w-64 h-80 scale-75 opacity-50'
                } ${offset === -1 ? '-mr-16' : offset === 1 ? '-ml-16' : ''}`}
              >
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h2 className="text-2xl font-bold text-[#0f028f] mb-2">{section.title}</h2>
                <p className="text-gray-700 text-center mb-4">{section.description}</p>
                <button className="bg-[#ffa709] hover:bg-[#ff8c00] text-white font-bold py-2 px-4 rounded-full text-lg transition-colors">
                  ¡Explorar!
                </button>
              </div>
            )
          })}
        </div>
        
        <button 
          onClick={nextSection} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10 hover:bg-opacity-75 transition-all"
          aria-label="Siguiente sección"
        >
          <ChevronRight className="w-8 h-8 text-black" />
        </button>
      </div>
      
      {decorations.map((emoji, index) => (
        <div
          key={index}
          className="absolute animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            animation: `${emoji === '🌍' ? 'spin' : 'twinkle'} ${5 + Math.random() * 5}s infinite`
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  )
}