import React from "react";
import UserMessage from "./UserMessage";
import TarantulaMessage from "./TarantulaMessage";

const ChatContainer = () => {
  return (
    <div className="w-full max-w-7xl z-20 mx-auto flex flex-col gap-y-6">
      <UserMessage />
      <TarantulaMessage />
      <UserMessage />
      <TarantulaMessage />
      <UserMessage />
      <TarantulaMessage />
      <UserMessage />
      <TarantulaMessage />
      <UserMessage />
      <TarantulaMessage />
      <UserMessage />
      <TarantulaMessage />
    </div>
  );
};

export default ChatContainer;
