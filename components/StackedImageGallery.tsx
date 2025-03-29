"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// Import images
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";

// Image & Text Data
const imageData = [
  { src: img1, title: "Bubbles", subtitle: "Mobile App • Live ↗", position: "top-10 left-10" },
  { src: img2, title: "Still Grinding", subtitle: "Web App • Coming Soon", position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" },
  { src: img3, title: "Next Big Thing", subtitle: "Blockchain • Beta Testing", position: "bottom-10 right-10" },
];

export default function StackedImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center">
      
      {/* Image Container - 80% Height, Centered */}
      <div className="relative w-full max-w-screen-lg h-[80vh] mx-auto flex justify-center items-center">
        
        {/* Stacked Backgrounds for Depth Effect */}
        <div className="absolute inset-0 bg-gray-900 rounded-lg transform scale-95 rotate-3"></div>
        <div className="absolute inset-0 bg-gray-800 rounded-lg transform scale-90 rotate-6"></div>

        {/* Main Image with Motion Effects */}
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={imageData[selectedIndex].src}
            alt={imageData[selectedIndex].title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>

        {/* Dynamic Text Overlay - Changes position per image */}
        <div className={`absolute ${imageData[selectedIndex].position}`}>
          <h2 className="text-3xl font-bold">{imageData[selectedIndex].title}</h2>
          <p className="text-lg text-gray-400">{imageData[selectedIndex].subtitle}</p>
        </div>
      </div>

      {/* Toggle Numbers - Adjusted for Responsive Design */}
      <div className="mt-4 flex space-x-4 md:absolute md:left-5 md:top-1/3 md:flex-col md:space-y-2 md:space-x-0">
        {imageData.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`text-xl font-bold transition-all duration-300 ${
              selectedIndex === index ? "text-green-500 scale-110" : "text-gray-500"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </div>
  );
}
