import { Send } from "lucide-react";
import React from "react";

const UserInput = () => {
  return (
    <div className="sm:w-full w-full h-20 sm:h-24 rounded-xl bg-[#E8CFFD] text-black flex flex-row justify-between items-center sm:pl-3 pl-2 pr-3 sm:pr-10 pt-1 pb-1">
      <input
        className="bg-transparent text-xl w-full h-full outline-none active:outline-none focus:outline-none overflow-x-auto whitespace-nowrap"
        type="text"
        placeholder="Start Typing Here"
      />
      <Send />
    </div>
  );
};

export default UserInput;