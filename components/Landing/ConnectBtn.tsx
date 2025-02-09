import React from "react";
import { Wallet } from "lucide-react";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const ConnectBtn = () => {
  return (
    <button
      className={` flex flex-row w-24 sm:w-44 text-gray-300 ${inter.className} opacity-100 backdrop-blur-none rounded-3xl bg-[#6D107B] p-2 items-center justify-around `}
    >
      <h1 className="text-[10px] sm:text-sm ">Connect Wallet</h1>
      <Wallet className="size-5"></Wallet>
    </button>
  );
};

export default ConnectBtn;
