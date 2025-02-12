"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Volume2, VolumeX } from "lucide-react";
import { Just_Another_Hand } from "next/font/google";
import ConnectBtn from "../Landing/ConnectBtn";

const nav_font = Just_Another_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [activeLink, setActiveLink] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

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

  const handleScroll = (
      event: React.MouseEvent<HTMLAnchorElement>,
      id: string
    ) => {
      event.preventDefault();
      setActiveLink(id);
      if (id === "chat") {
        router.push("/chat");
        return;
      }
      if (pathname === "/") {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        router.push(`/#${id}`);
      }
    };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const target = document.getElementById(hash);
        if (target) {
          setTimeout(
            () => target.scrollIntoView({ behavior: "smooth", block: "start" }),
            100
          );
        }
      }
    }
  }, [pathname]);

  return (
    <nav className={`${nav_font.className} fixed top-0 z-50 w-full px-4 py-4`}>
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

          <div className="absolute left-36 sm:left-1/2 transform -translate-x-1/2 flex items-center gap-4 sm:gap-12">
            {["collection", "about", "chat"].map((link) => (
              <Link
                key={link}
                href={link === "chat" ? "/chat" : pathname === "/" ? `#${link}` : `/#${link}`}
                className={`relative text-md sm:text-2xl capitalize cursor-pointer
        ${
          activeLink === link
            ? "text-white font-medium"
            : "text-gray-400 hover:text-white transition-colors duration-200"
        }       ${
                  link === "chat"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-[0_0_10px_rgba(128,0,128,0.7)]"
                    : ""
                }`}
                onClick={(e) => handleScroll(e, link)}
              >
                {link}
                {activeLink === link && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                )}
              </Link>
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
