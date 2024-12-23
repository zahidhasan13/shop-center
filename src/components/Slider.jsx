import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://img.lazcdn.com/us/domino/9d200450-a8ae-46d2-a4c0-47627b331405_BD-1976-688.jpg",
    "https://img.lazcdn.com/us/domino/597067ff-0007-41b3-a581-f86c3e1aeb3a_BD-1976-688.jpg",
    "https://img.lazcdn.com/us/domino/9b901147-7400-4eda-bc09-dc90d1edbac6_BD-1976-688.jpg",
    "https://img.lazcdn.com/us/domino/23c9ced3-9bc8-4ede-bc1c-2a348d1dd950_BD-1976-688.jpg_2200x2200q80.jpg",
    "https://img.lazcdn.com/us/domino/100c2025-fc48-4c14-972c-7bf8a37341df_BD-1976-688.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative container w-full mx-auto h-40 md:h-48 lg:h-[350px] overflow-hidden">
      <div
        className="flex flex-nowrap w-[500vw] transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="w-[100vw] h-40 md:h-48 lg:h-[350px] object-fill"
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        <FaArrowLeft />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;
