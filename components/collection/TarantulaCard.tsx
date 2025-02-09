"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface TarantulaProps {
  tarantula: {
    id: number;
    name: string;
    image: string;
  };
}

const TarantulaCard = ({ tarantula }: TarantulaProps) => {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleChatClick = () => {
    router.push(`/chat?tarantula=${tarantula.id}`);
  };

  return (
    <div
      className="relative h-[600px] w-full [perspective:1000px] group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 
          [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-4/6 sm:h-5/6 [backface-visibility:hidden] bg-gradient-to-br from-purple-900 via-black to-purple-800 rounded-xl p-6 shadow-xl border border-purple-500/20">
          <div className="relative w-full h-4/5 mb-4">
            <Image
              src={tarantula.image}
              alt={tarantula.name}
              fill
              className="rounded-xl h-1/2"
            />
          </div>
          <h2 className="text-3xl text-center text-purple-100">
            {tarantula.name}
          </h2>

          {/* Persistent Hover Indicator */}
          <div
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-purple-400 text-lg
              transition-opacity opacity-60 group-hover:opacity-100 flex items-center justify-center gap-2"
          >
            <span className="animate-pulse">Flip me</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 19l-7-7h14l-7 7z"></path>
            </svg>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-5/6 [backface-visibility:hidden] [transform:rotateY(180deg)] 
            bg-gradient-to-bl from-purple-950 via-black to-purple-900 rounded-lg p-8 flex flex-col items-center justify-between"
        >
          <div>
            <h3 className="text-5xl text-purple-400 mb-6">
              Personality Traits
            </h3>
            <ul className="text-purple-100/90 space-y-6 text-center text-2xl">
              <li>Mysterious and enigmatic</li>
              <li>Highly intelligent</li>
              <li>Protective of their territory</li>
              <li>Skilled web weaver</li>
            </ul>
          </div>
          <button
            onClick={handleChatClick}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 
              text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg text-lg"
          >
            Chat with {tarantula.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarantulaCard;
