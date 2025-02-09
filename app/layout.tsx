import React from "react";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Just_Me_Again_Down_Here as main_font } from "next/font/google";
import Image from "next/image";
import { CSPostHogProvider } from "@/providers/posthog-provider";

const mainFont = main_font({
  subsets: ["latin"],
  weight: ["400"],
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body
          className={`${mainFont.className} relative min-h-screen overflow-x-hidden`}
        >
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
            <main className="min-h-screen ">{children}</main>
          </div>
        </body>
      </CSPostHogProvider>
    </html>
  );
};

export default RootLayout;
