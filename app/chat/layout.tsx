"use client";
import React, { useEffect, useRef } from "react";

const InternalLayout = ({ children }: { children: React.ReactNode }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
        chatContainerRef.current?.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [children]);

  return (
    <div className="min-h-screen  flex flex-col">
      <div ref={chatContainerRef} className="h-2/3  overflow-y-scroll ">
        {children}
      </div>
      
    </div>
  );
};

export default InternalLayout;
