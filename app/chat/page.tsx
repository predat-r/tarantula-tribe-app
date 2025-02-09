import UserInput from "@/components/chat/UserInput";
import React from "react";
import Image from "next/image";
import ChatContainer from "@/components/chat/ChatContainer";

const Page = () => {
  return (
    <div className="flex mt-28 flex-col h-screen">
      <ChatContainer />
      <div className="bottom-0 left-0 right-0 pb-8 pt-4 h-1/3">
        <div className="w-full flex flex-row justify-evenly gap-x-5 items-center px-5">
          <div className="rounded-full overflow-hidden flex-shrink-0">
            <Image
              alt="ai nft avatar"
              src="/transparent-tarantula.png"
              height={300}
              width={300}
              className="object-cover"
            />
          </div>
          <UserInput />
        </div>
      </div>
    </div>
  );
};

export default Page;
