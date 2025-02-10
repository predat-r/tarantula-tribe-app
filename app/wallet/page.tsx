import React from "react";
import WalletHeroSection from "@/components/wallet/WalletHeroSection";
import { getData, saveData } from "@/lib/actions";

const CollectionPage = async () => {
  await saveData({ key: "name", value: "haris" });
  const response = await getData("name");
  console.log(response);

  return (
    <div className="min-h-screen text-white  mt-28 sm:pl-14 sm:pr-14 pr-8 pl-8 flex flex-col justify-center items-center">
      <WalletHeroSection></WalletHeroSection>
    </div>
  );
};

export default CollectionPage;
