import React from "react";
import TarantulaCard from "@/components/collection/TarantulaCard";

const CollectionPage = () => {
  const mockTarantulas = [
    { id: 1, name: "Tarantula #1", image: "/nft-tarantula2.jpeg" },
    { id: 2, name: "Tarantula #2", image: "/nft-tarantula.jpeg" },
    { id: 3, name: "Tarantula #3", image: "/nft-tarantula2.jpeg" },
    { id: 4, name: "Tarantula #4", image: "/nft-tarantula.jpeg" },
  ];

  return (
    <div className="min-h-screen text-white  mt-28 pl-14 pr-14 flex flex-col justify-center items-center">
      <h1 className="text-4xl bg-gradient-to-r from-[#230330] to-white bg-clip-text text-transparent  sm:text-6xl mb-8">
        Your Tarantula Wallet
      </h1>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
        {mockTarantulas.map((tarantula) => (
          <TarantulaCard key={tarantula.id} tarantula={tarantula} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
