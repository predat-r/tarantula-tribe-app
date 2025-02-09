"use client";
import React from "react";
import { motion } from "framer-motion";
import TarantulaCard from "../collection/TarantulaCard";
const mockTarantulas = [
  { id: 1, name: "Tarantula #1", image: "/nft-tarantula2.jpeg" },
  { id: 2, name: "Tarantula #2", image: "/nft-tarantula.jpeg" },
  { id: 3, name: "Tarantula #3", image: "/nft-tarantula2.jpeg" },
  { id: 4, name: "Tarantula #4", image: "/nft-tarantula.jpeg" },
];
const WalletHeroSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center mt-5">
      <motion.h1
        className="text-4xl bg-gradient-to-r from-[#230330] to-white bg-clip-text text-transparent  sm:text-6xl mb-8"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        Your Tarantula Wallet
      </motion.h1>
      <motion.div
        className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-y-0 lg:grid-cols-3 gap-x-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {mockTarantulas.map((tarantula) => (
          <TarantulaCard key={tarantula.id} tarantula={tarantula} />
        ))}
      </motion.div>
    </div>
  );
};

export default WalletHeroSection;
