import React from 'react';
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Just_Me_Again_Down_Here as main_font } from "next/font/google";
import Image from "next/image";

const mainFont = main_font({
  subsets: ["latin"],
  weight: ["400"],
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${mainFont.className} relative min-h-screen overflow-x-hidden`}>
        {/* Background Container */}
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-tarantula-gradient" />
          <div className="absolute inset-0 ">
            <Image
              className="object-cover w-full h-full"
              src="/background_img.png"
              alt="background"
              fill
              priority
              quality={100}
            />
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;