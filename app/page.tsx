import About from "@/components/Landing/About";
import Collection from "@/components/Collection";
import HeroSection from "@/components/Landing/HeroSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="overflow-x-hidden sm:pt-0 pt-24 ">
        <HeroSection></HeroSection>
        <About></About>
        <Collection></Collection>
      </div>
    </>
  );
};

export default page;
