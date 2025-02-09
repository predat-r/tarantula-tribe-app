import Image from "next/image";
const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row w-screen h-screen justify-betweeen sm:justify-between overflow-auto items-center pt-5 sm:pt-0 sm:pl-10  sm:pr-10 overflow-x-hidden">
        <div className=" flex flex-col w-full sm:w-1/2 h-1/2 items-center sm:items-start  justify-between  sm:pl-3 sm:pr-3">
          <h1 className="text-7xl sm:text-9xl font-light bg-gradient-to-r from-[#230330] to-white bg-clip-text text-transparent ">
            Tarantula Tribe
          </h1>
          <h1 className="text-2xl sm:text-3xl w-2/3 font-light bg-gradient-to-r from-[#230330] to-white bg-clip-text text-transparent">

            AI-powered NFTs with unique personalities. No duplicates, just real
            interactions. Own it. Converse with it. Redefine NFTs.
          </h1>
          <div className="flex flex-row w-full sm:w-3/4 justify-center  sm:justify-between items-center">
            <div className="flex flex-row justify-evenly sm:justify-between items-center  w-full sm:w-2/3">
              <button className="rounded-3xl bg-blue-600 w-24 sm:w-40 h-10 p-2 flex flex-row items-center justify-center">
                <Image
                  alt="open sea link"
                  src={"/opensea-logo.png"}
                  height={50}
                  width={100}
                ></Image>
              </button>
              <button className="rounded-3xl bg-purple-950 text-purple-200 text-xl sm:text-2xl w-24 sm:w-40 h-10 p-2 flex flex-row items-center justify-center">
                have one ?
              </button>
            </div>
            <div className="sm:w-1/3"></div>
          </div>
        </div>
        <Image
          src="/nft-cards.png"
          alt="nft-cards-stack"
          height={1000}
          width={400}
          className="object-contain p-5 sm:p-0 mt-5 sm:mt-0 "
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
