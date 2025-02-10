"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row w-screen h-screen justify-between sm:justify-between overflow-auto items-center pt-5 sm:pt-0 sm:pl-14 sm:pr-10 overflow-x-hidden">
        <motion.div 
          className="flex flex-col w-full sm:w-1/2 h-1/2 items-center sm:items-start justify-between sm:gap-y-5 sm:pl-3 sm:pr-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-7xl sm:text-9xl font-light bg-gradient-to-r from-[#230330] to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Tarantula Tribe
          </motion.h1>
          <motion.h1 
            className="text-2xl sm:text-3xl w-2/3 font-light bg-gradient-to-r from-[#230330] to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <span className="text-pink-900">AI-powered</span> NFTs with unique personalities. No duplicates, just real
            interactions. Own it. Converse with it. Redefine NFTs.
          </motion.h1>
          <motion.div 
            className="flex flex-row w-full sm:w-3/4 justify-center sm:justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-row w-full justify-evenly sm:justify-between items-center sm:w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  passHref={true}
                  href="https://opensea.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl bg-blue-600 w-24 sm:w-40 h-10 p-2 flex flex-row items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <Image
                    alt="open sea link"
                    src="/opensea-logo.png"
                    height={50}
                    width={100}
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/wallet"
                  className="rounded-3xl bg-purple-950 text-purple-200 text-xl sm:text-2xl w-24 sm:w-40 h-10 p-2 flex flex-row items-center justify-center hover:bg-purple-900 transition-colors duration-200"
                >
                  have one ?
                </Link>
              </motion.div>
            </div>
            <div className="sm:w-1/3"></div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Image
            src="/nft-cards.png"
            alt="nft-cards-stack"
            height={1000}
            width={450}
            className="object-contain p-5 sm:p-0 mt-5 sm:mt-0"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;