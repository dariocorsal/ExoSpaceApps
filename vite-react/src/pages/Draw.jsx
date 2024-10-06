import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Palette, Eraser, RotateCcw } from "lucide-react";
import StarryBackground from "/src/Estrellas";
import "/src/App.css";

export default function PaintComponent() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState("brush");

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = color;
    context.lineWidth = brushSize;
  }, [color, brushSize]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    context.beginPath();
    context.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (tool === "brush") {
      context.lineTo(x, y);
      context.stroke();
    } else if (tool === "eraser") {
      context.clearRect(
        x - brushSize / 2,
        y - brushSize / 2,
        brushSize,
        brushSize
      );
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
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
          <h1 className="Paint">Create Your Exoplanet!</h1>
        </motion.div>
      </div>
      <motion.div
        className="bg-white bg-opacity-80 rounded-3xl p-8 max-w-4xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center space-x-4 mb-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full ${
              tool === "brush" ? "bg-[#ffa709]" : "bg-gray-200"
            }`}
            onClick={() => setTool("brush")}
          >
            <Palette className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full ${
              tool === "eraser" ? "bg-[#ffa709]" : "bg-gray-200"
            }`}
            onClick={() => setTool("eraser")}
          >
            <Eraser className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-200"
            onClick={clearCanvas}
          >
            <RotateCcw className="w-6 h-6" />
          </motion.button>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-10 h-10 rounded-full"
          />
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(e) => setBrushSize(parseInt(e.target.value))}
            className="w-32"
          />
        </div>
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          className="w-full h-[60vh] bg-black bg-opacity-50 rounded-2xl cursor-crosshair"
        />
      </motion.div>
    </div>
  );
}
