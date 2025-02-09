import UserInput from "@/components/chat/UserInput";
import React from "react";
import Image from "next/image";
import ChatContainer from "@/components/chat/ChatContainer";

const Page = () => {
  return (
    <div className="flex mt-28 flex-col h-screen pr-4 pl-4">
      <ChatContainer />
      <div className="bottom-0 left-0 right-0 pb-8 pt-4 h-1/3">
        <div className="w-full flex flex-row justify-evenly sm:gap-x-5 items-center sm:px-5">
          <div className="rounded-full overflow-hidden flex-shrink-0 w-1/5 flex flex-row items-center justify-center">
            <Image
              alt="ai nft avatar"
              src="/transparent-tarantula.png"
              width={300}
              height={300}
              priority
              loading="eager"
            />
          </div>
          <UserInput />
        </div>
      </div>
    </div>
  );
};

export default Page;