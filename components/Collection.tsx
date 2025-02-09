import React from "react";
import Image from "next/image";

const NFTCard = ({ src, number }: { src: string; number: string }) => {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white">
        <Image
          src={src}
          alt={`nft-tarantula-${number}`}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
      </div>
      <h1 className="text-purple-900 text-4xl mt-4">#{number}</h1>
    </div>
  );
};

const Collection = () => {
  const nfts = [
    { src: "/nft-tarantula.jpeg", number: "1" },
    { src: "/nft-tarantula2.jpeg", number: "2" },
    { src: "/nft-tarantula.jpeg", number: "1" },
    { src: "/nft-tarantula2.jpeg", number: "2" },
    { src: "/nft-tarantula.jpeg", number: "1" },
    { src: "/nft-tarantula2.jpeg", number: "2" },
  ];

  return (
    <div id="collection" className="relative z-0 w-full min-h-screen px-5 sm:px-10 pb-10 mt-24 ">
      <h1 className="text-6xl sm:ml-3 sm:text-9xl font-light bg-gradient-to-r from-[#230330] to-white bg-clip-text text-transparent mb-10">
        Current Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {nfts.map((nft, index) => (
          <NFTCard key={index} src={nft.src} number={nft.number} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
