import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import StarryBackground from "./Estrellas";
import "./App.css";

const questions = [
  {
    question: "What is an exoplanet?",
    options: [
      "A planet that orbits around Earth",
      "A planet that orbits a star outside our solar system",
      "A satellite that orbits the Moon",
      "A planet that is inside the solar system",
    ],
    correctAnswer: 1,
  },
  {
    question: "Where are exoplanets found?",
    options: [
      "In the core of the Sun",
      "On the surface of Mars",
      "Inside Earth's atmosphere",
      "Outside our solar system, orbiting other stars",
    ],
    correctAnswer: 3,
  },
  {
    question: "Why are scientists interested in exoplanets?",
    options: [
      "Because they want to know if there is life elsewhere in space",
      "Because they are the same as Earth",
      "Because they like counting stars",
      "Because they want to travel to them",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does it mean for a planet to be in the 'habitable zone'?",
    options: [
      "It is very far from its star",
      "It is very hot and cannot have life",
      "It has no atmosphere",
      "It has conditions suitable for liquid water",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which exoplanet has water in its atmosphere?",
    options: ["Kepler-186f", "K2-18b", "HD 209458 b", "TRAPPIST-1e"],
    correctAnswer: 1,
  },
  {
    question: "How many planets are in the TRAPPIST-1 system?",
    options: ["Ten planets", "Three planets", "Seven planets", "Five planets"],
    correctAnswer: 2,
  },
];

export default function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
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
          <h1 className="Quiz">QUIZ</h1>
        </motion.div>
      </div>

      <motion.div
        className="bg-white bg-opacity-80 rounded-3xl p-8 max-w-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {showScore ? (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#0f028f] mb-4">
              Quiz Completed!
            </h2>
            <p className="text-xl mb-4">
              You scored {score} out of {questions.length}
            </p>
            <button
              onClick={resetQuiz}
              className="bg-[#ffa709] hover:bg-[#ff8c00] text-white font-bold py-2 px-4 rounded-full text-lg transition-colors"
            >
              Retry Quiz
            </button>
          </motion.div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-[#0f028f] mb-4">
              Question {currentQuestion + 1}/{questions.length}
            </h2>
            <p className="text-xl mb-6">
              {questions[currentQuestion].question}
            </p>
            <div className="space-y-4">
              <AnimatePresence>
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedAnswer === index
                        ? "bg-[#ffa709] text-white" // Texto blanco para la opción seleccionada
                        : "bg-white hover:bg-gray-100 text-black" // Texto negro para las demás opciones
                    }`}
                    onClick={() => handleAnswerClick(index)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {option}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
            <motion.button
              className="mt-8 bg-[#ffa709] hover:bg-[#ff8c00] text-white font-bold py-2 px-4 rounded-full text-lg transition-colors flex items-center justify-center w-full"
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.button>
          </>
        )}
      </motion.div>
    </div>
  );
}
