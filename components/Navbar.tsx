"use client";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Just_Another_Hand } from "next/font/google";
import ConnectBtn from "./ConnectBtn";


const nav_font = Just_Another_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [activeLink, setActiveLink] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/bg-music.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;

    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    if (newMutedState) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Playback failed:", error);
          setIsMuted(true);
        });
      }
    }
  };

  return (
    <nav className={`${nav_font.className}  fixed top-0 z-50 w-full px-4 py-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between bg-gray-900/40 backdrop-blur-md rounded-2xl px-4 sm:px-8 py-3 sm:py-4 shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
          <button
            onClick={toggleMute}
            className="relative p-2 rounded-xl hover:bg-white/10 transition-colors duration-200 group"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
            ) : (
              <Volume2 className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
            )}
          </button>

          <div className="flex items-center gap-8 sm:gap-12">
            {["collection", "about"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`relative text-md sm:text-2xl capitalize
                  ${
                    activeLink === link
                      ? "text-white font-medium"
                      : "text-gray-400 hover:text-white transition-colors duration-200"
                  }`}
                onClick={() => setActiveLink(link)}
              >
                {link}
                {activeLink === link && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          <div className="relative">
            <ConnectBtn />
          </div>

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-50 pointer-events-none" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
