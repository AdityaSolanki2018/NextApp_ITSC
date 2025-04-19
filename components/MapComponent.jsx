"use client";

import React from "react";
import { motion } from "framer-motion";

const MapComponent = () => {
  const handleClick = () => {
    window.open(
      "https://maps.app.goo.gl/Y7unNi8ttxhrPgTy7",
      "_blank"
    );
  };

  return (
    <motion.div
      className="text-center mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <button
        onClick={handleClick}
        className="bg-solarYellow text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
      >
        Get Directions on Google Maps
      </button>
    </motion.div>
  );
};

export default MapComponent;
