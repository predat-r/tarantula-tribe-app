'use client';
import React, { useEffect, useRef } from "react";

const ScrollHandler = ({ children }: { children: React.ReactNode }) => {
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
    <div 
      ref={chatContainerRef} 
      className="h-2/3 overflow-y-scroll"
      suppressHydrationWarning
    >
      {children}
    </div>
  );
};

export default ScrollHandler