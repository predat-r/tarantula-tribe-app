import React from "react";

const About = () => {
  return (
    <div id="about" className="w-screen h-screen flex flex-col items-center justify-evenly pl-2 pr-2 sm:pl-10 sm:pr-10">
      <h1 className="text-center text-6xl sm:text-9xl bg-gradient-to-r from-[#230330] to-white bg-clip-text text-transparent">
        Inside The Tarantula Tribe
      </h1>
      <h1 className="text-3xl text-center sm:text-5xl bg-gradient-to-r from-[#230330] to-white bg-clip-text text-transparent space-y-4">
        <p>
          The Tarantula Tribe redefines digital ownership—each NFT is not just
          unique in design but in mind. Your Tarantula has a distinct
          personality, an AI-powered presence that only you can interact with.
          As long as you own it, it’s yours to converse with, learn from, and
          engage in ways no other NFT allows.
        </p>
        <p>
          This isn’t just a collectible; it’s a personal companion in the
          digital realm. No one else can access your Tarantula’s thoughts or
          responses—its personality is exclusive to you. Trade it, keep it,
          shape its future—the choice is entirely yours.
        </p>
        <p>
          The Tribe is just beginning. This is the dawn of a new era in
          AI-powered NFTs, where digital beings come to life. More Tarantulas
          will join soon, each uniquely crafted, waiting for their true owners.
          Stay ready—the next drop is closer than you think.
        </p>
      </h1>
    </div>
  );
};

export default About;
