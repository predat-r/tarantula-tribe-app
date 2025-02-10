"use server";
import { connectRedis } from "./redis";
import { ChatRequest } from "@/lib/types";

export async function generateChatResponse(requestData: ChatRequest) {
  try {
    const apiKey = process.env.AI_API_KEY || "";
    const endpoint = "https://api.webraft.in/freeapi/chat/completions";

    const systemMessage = {
      role: "system",
      content: `You have a distinct personality shaped by the following traits: ${requestData.traits.join(
        ", "
      )}.  
      Your backstory: ${requestData.backstory}.  
      You must always respond in accordance with these traits. Never deny having a personality.`,
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [systemMessage, ...requestData.messages],
        max_tokens: requestData.max_tokens,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        type: "error",
        error: errorData.error || "Failed to generate response",
      };
    }

    const data = await response.json();
    console.log(data)
    return {
      type: "success",
      data: data,
    };
  } catch (error) {
    console.error("API Error:", error);
    return {
      type: "error",
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}

export async function saveData(data: { key: string; value: string | object }) {
  const redis = await connectRedis();
  await redis.set(data.key, JSON.stringify(data.value));
}

export async function getData(key: string) {
  const redis = await connectRedis();
  const data = await redis.get(key);
  if (!data) return null;
  return JSON.parse(data);
}
