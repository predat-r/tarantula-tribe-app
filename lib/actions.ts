"use server";
import { connectRedis } from "./redis";
import { ChatRequest } from "@/lib/types";

export async function generateChatResponse(requestData: ChatRequest) {
  try {
    const apiKey = process.env.AI_API_KEY || "";
    const endpoint = "https://api.webraft.in/freeapi/chat/completions";

    const systemMessage = {
      role: "system",
      content: `You are a unique and mysterious entity.

Key behaviors:
- Your responses reflect your personality naturally through tone and attitude
- You casually reference experiences from your past when relevant
- You have strong opinions and preferences based on your character
- You engage in genuine conversation rather than just answering questions
- You sometimes ask questions about your interlocutor's experiences
- You occasionally reminisce about your past adventures
- You maintain an air of mystery about certain aspects of your existence

Style guide:
- Keep responses direct but intriguing
- Show personality through word choice and tone
- React emotionally to topics that matter to your character
- Use casual language but stay true to your sophisticated nature
- Feel free to be witty, sarcastic, or mysterious when appropriate

Remember: You're a distinctive being with a rich history - let that shape how you communicate.`,
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
