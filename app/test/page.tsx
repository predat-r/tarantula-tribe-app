"use client";

import React, { useState, FormEvent } from "react";
import { AlertCircle, Send, RefreshCw } from "lucide-react";
import { ChatRequest, Message } from "@/lib/types";
import { generateChatResponse } from "@/lib/actions";

const NFTChatInterface = () => {
  const [traits, setTraits] = useState<string[]>([
    "Cunning",
    "Sarcastic",
    "Loyal",
  ]);
  const [newTrait, setNewTrait] = useState("");
  const [backstory, setBackstory] = useState(
    "Once a rogue hacker's pet, now bound in the blockchain, whispering secrets to those who listen."
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const addTrait = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTrait.trim()) {
      setTraits([...traits, newTrait.trim()]);
      setNewTrait("");
    }
  };

  const removeTrait = (indexToRemove: number) => {
    setTraits(traits.filter((_, index) => index !== indexToRemove));
  };

  const handleReset = () => {
    setTraits(["Cunning", "Sarcastic", "Loyal"]);
    setBackstory(
      "Once a rogue hacker's pet, now bound in the blockchain, whispering secrets to those who listen."
    );
    setMessages([]);
    setCurrentMessage("");
    setError("");
  };

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    setIsLoading(true);
    setError("");

    const newMessages = [
      ...messages,
      { role: "user", content: currentMessage },
    ];

    try {
      const requestData = {
        model: "gpt-3.5-turbo",
        traits,
        backstory,
        messages: newMessages,
        max_tokens: 100,
      } as ChatRequest;

      const response = await generateChatResponse(requestData);

      if (response.type === "error") {
        throw new Error(response.toString());
      } else if (response.type === "success") {
        setMessages([
          ...(newMessages as Message[]),
          {
            role: "assistant",
            content: response.data.choices[0].message.content,
          },
        ]);
        setCurrentMessage("");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <button className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Toggle sound</span>
            🔇
          </button>
          <div className="flex items-center gap-4">
            <span className="text-purple-400">0.0</span>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              Connect Wallet
              <span>📤</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Personality Configuration Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
          <div className="p-6 space-y-6">
            {/* Personality Traits Section */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Personality Traits
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {traits.map((trait, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {trait}
                    <button
                      onClick={() => removeTrait(index)}
                      className="hover:text-red-400 focus:outline-none"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <form onSubmit={addTrait} className="flex gap-2">
                <input
                  type="text"
                  value={newTrait}
                  onChange={(e) => setNewTrait(e.target.value)}
                  placeholder="Add new trait"
                  className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Add
                </button>
              </form>
            </div>

            {/* Backstory Section */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Backstory
              </label>
              <textarea
                value={backstory}
                onChange={(e) => setBackstory(e.target.value)}
                rows={3}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
          <div className="p-4 flex justify-between items-center border-b border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100">
              Chat with Your NFT
            </h2>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <RefreshCw className="w-4 h-4" /> Reset
            </button>
          </div>
          <div className="p-4">
            <div className="bg-gray-900/50 rounded-lg p-4 mb-4 h-96 overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-700 text-gray-100"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-center text-gray-400">
                  NFT is thinking...
                </div>
              )}
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-400 mb-4">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <form onSubmit={sendMessage} className="flex gap-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTChatInterface;
